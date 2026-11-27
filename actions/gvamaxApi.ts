'use server'

// Server actions de propiedades, conectadas a GVAmax.
// Reemplazan a actions/tokkoApi.ts (la versión Tokko quedó comentada en
// legacy/tokko/actions/tokkoApi.ts) y exponen las mismas funciones, así que los
// componentes solo cambiaron el import.
//
// Las respuestas se cachean 5 minutos: un cambio en GVAmax tarda como máximo
// eso en verse en el sitio. Para forzar la actualización usar las funciones de
// actions/cacheUtils.ts (tags 'properties', 'sales', 'rent', 'featured', ...).

import { unstable_cache } from 'next/cache';
import {
    fetchAllInmuebles,
    fetchEmprendimientoById,
    fetchEmprendimientos,
    fetchInmuebleById,
} from '@/lib/gvamax/client';
import { isPublished, isRent, mapEmprendimiento, mapInmueble } from '@/lib/gvamax/mappers';
import type { Development, Property } from '@/lib/properties/types';

const REVALIDATE_SECONDS = 300;

const byIdDesc = (a: Property, b: Property) => b.id - a.id;

async function loadListing(operation: 'sale' | 'rent'): Promise<Property[]> {
    const raw = await fetchAllInmuebles({
        opera: operation === 'sale' ? 1 : 2,
        disponible: 1,
        order: 'fec_ing',
    });
    return raw
        .filter(isPublished)
        // Doble chequeo por si la API ignorara el filtro "opera"
        .filter((p) => isRent(p) === (operation === 'rent'))
        .map(mapInmueble)
        .sort(byIdDesc);
}

const getCachedSales = unstable_cache(
    () => loadListing('sale'),
    ['gvamax-listing-sale'],
    { revalidate: REVALIDATE_SECONDS, tags: ['properties', 'sales'] }
);

const getCachedRent = unstable_cache(
    () => loadListing('rent'),
    ['gvamax-listing-rent'],
    { revalidate: REVALIDATE_SECONDS, tags: ['properties', 'rent'] }
);

const getCachedFeatured = unstable_cache(
    async (): Promise<Property[]> => {
        const raw = await fetchAllInmuebles({ destacado: 1, disponible: 1, order: 'fec_mod' });
        return raw
            .filter(isPublished)
            .map(mapInmueble)
            .filter((p) => p.featured);
    },
    ['gvamax-featured'],
    { revalidate: REVALIDATE_SECONDS, tags: ['properties', 'featured'] }
);

const getCachedDevelopments = unstable_cache(
    async (): Promise<Development[]> => (await fetchEmprendimientos()).map(mapEmprendimiento),
    ['gvamax-developments'],
    { revalidate: REVALIDATE_SECONDS, tags: ['projects'] }
);

export const getSalesProperties = async (): Promise<Property[]> => {
    try {
        return await getCachedSales();
    } catch (error) {
        console.error('Error al obtener propiedades en venta (GVAmax):', error);
        return [];
    }
};

export const getRentProperties = async (): Promise<Property[]> => {
    try {
        return await getCachedRent();
    } catch (error) {
        console.error('Error al obtener propiedades en alquiler (GVAmax):', error);
        return [];
    }
};

export const getFeaturedProperties = async (): Promise<Property[]> => {
    try {
        return await getCachedFeatured();
    } catch (error) {
        console.error('Error al obtener propiedades destacadas (GVAmax):', error);
        return [];
    }
};

export const getPropertyById = async (id: number): Promise<Property | null> => {
    if (!Number.isInteger(id) || id <= 0) return null;
    try {
        const cached = unstable_cache(
            async () => {
                const raw = await fetchInmuebleById(id);
                return raw && isPublished(raw) ? mapInmueble(raw) : null;
            },
            ['gvamax-property', String(id)],
            { revalidate: REVALIDATE_SECONDS, tags: ['properties', `property-${id}`] }
        );
        return await cached();
    } catch (error) {
        console.error(`Error al obtener la propiedad con ID ${id} (GVAmax):`, error);
        return null;
    }
};

/** Tipos de propiedad presentes en el listado (para el filtro de venta/alquiler). */
export const getPropertyTypesForOperation = async (operationType: 'sale' | 'rent'): Promise<string[]> => {
    const properties = operationType === 'sale' ? await getSalesProperties() : await getRentProperties();
    const types = new Set(properties.map((p) => p.type).filter(Boolean));
    return Array.from(types).sort((a, b) => a.localeCompare(b, 'es'));
};

// ---------------------------------------------------------------------------
// Emprendimientos (desarrollos / proyectos)
// ---------------------------------------------------------------------------

export const getDevelopments = async (): Promise<Development[]> => {
    try {
        return await getCachedDevelopments();
    } catch (error) {
        console.error('Error al obtener emprendimientos (GVAmax):', error);
        return [];
    }
};

export const getDevelopmentById = async (id: number): Promise<Development | null> => {
    if (!Number.isInteger(id) || id <= 0) return null;
    try {
        const raw = await fetchEmprendimientoById(id);
        return raw ? mapEmprendimiento(raw) : null;
    } catch (error) {
        console.error(`Error al obtener el emprendimiento con ID ${id} (GVAmax):`, error);
        return null;
    }
};

/**
 * Convierte el nombre a slug (minúsculas, sin acentos, espacios → "_").
 */
function generateSlugFromName(name: string): string {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '_')
        .replace(/_+/g, '_');
}

/**
 * Mapeo de IDs de emprendimientos de GVAmax a las páginas de proyectos existentes
 * (app/propiedades/proyectos/<slug>). Completar cuando se conozcan los IDs.
 */
const DEVELOPMENT_ID_TO_SLUG_MAP: Record<number, string> = {
    // Ejemplo: 123: 'corrientes_65',
};

export const getDevelopmentSlug = async (developmentId: number): Promise<string | null> => {
    if (DEVELOPMENT_ID_TO_SLUG_MAP[developmentId]) {
        return DEVELOPMENT_ID_TO_SLUG_MAP[developmentId];
    }
    const development = await getDevelopmentById(developmentId);
    return development ? generateSlugFromName(development.name) : null;
};
