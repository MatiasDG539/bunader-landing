// Endpoint conectado a GVAmax. Versión Tokko original: legacy/tokko/api-properties/projects.route.ts
import { NextResponse } from 'next/server';
import { getDevelopments } from '@/actions/gvamaxApi';

// Emprendimientos de GVAmax con la misma forma que devolvía la versión Tokko.
export async function GET() {
    const developments = await getDevelopments();
    return NextResponse.json(developments.map((development) => ({
        id: development.id,
        slug: development.slug,
        url: `/propiedades/proyectos/${development.slug}`,
        title: development.name,
        location: development.address || '',
        full_location: development.full_location || '',
        status: development.status || 'En Desarrollo',
        completion: development.completion_date || 'A confirmar',
        units: development.units || 0,
        images: development.images?.length ? development.images : [{ image: '/placeholder.svg' }],
        type: development.type || 'Desarrollo',
    })));
}
