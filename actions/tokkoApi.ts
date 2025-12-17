'use server'

import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const LANG = 'es_ar';

// Interfaces for data types
export interface PropertyImage {
    image: string;
    thumb?: string;
    original?: string;
    description?: string | null;
    is_front_cover?: boolean;
    order?: number;
    is_blueprint?: boolean;
}

export interface PropertyVideo {
    description?: string;
    id: number;
    order: number;
    player_url: string;
    provider: string;
    provider_id: number;
    title: string;
    url: string;
    video_id: string;
}

export interface PropertyOperation {
    operation_id: number;
    operation_type: string;
    price: number;
    currency: string;
    period?: number;
}

export interface PropertyLocation {
    short_location?: string;
}

export interface Property {
    id: number;
    title: string;
    description_only?: string;
    address: string;
    short_location?: string;
    full_location?: string;
    price: string;
    currency?: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    images: PropertyImage[];
    type: string;
    operation_type: string;
    featured?: boolean;
    age?: number;
    age_display?: string; // Nuevo campo para mostrar "En construcción"
    parking_lot_amount?: number;
    operations?: PropertyOperation[];
    rooms?: number;
    toilets?: number;
    disposition?: string;
    property_condition?: string;
    situation?: string;
    expenses?: number;
    total_surface?: number;
    covered_surface?: number;
    land_surface?: number;
    floors?: number;
    floor?: number;
    units_per_floor?: number;
    antiquity?: number;
    construction_year?: number;
    half_bathrooms?: number;
    garages?: number;
    balconies?: number;
    terraces?: number;
    laundry?: boolean;
    storage?: boolean;
    pool?: boolean;
    gym?: boolean;
    sum?: boolean;
    grill?: boolean;
    garden?: boolean;
    elevator?: boolean;
    doorman?: boolean;
    security?: boolean;
    geo_lat?: string;
    geo_long?: string;
    videos?: PropertyVideo[];
}

export interface Project {
    id: number;
    title: string;
    location: string;
    full_location?: string;
    status: string;
    completion: string;
    units: number;
    images: PropertyImage[];
    type: string;
}

// Aux Functions
function formatPrice(price: number, currency: string): string {
    if (currency === 'USD') {
        return `USD $${price.toLocaleString('es-AR')}`;
    } else {
        return `ARS $${price.toLocaleString('es-AR')}`;
    }
}

function formatImageUrl(imageUrl: string | undefined): string {
    if (!imageUrl) return '/placeholder.svg';

    if (imageUrl.startsWith('http')) {
        return imageUrl;
    } else {
        return `https://static.tokkobroker.com${imageUrl}`;
    }
}

function getPropertyType(typeId: number, lang: string = 'es_ar'): string {
    const types: Record<string, Record<number, string>> = {
        'es_ar': {
            1: 'Casa',
            2: 'Departamento',
            3: 'Terreno',
            4: 'Oficina',
            5: 'Local Comercial',
            6: 'Condominio',
            7: 'Campo',
            8: 'Galpón',
            9: 'Estudio',
            10: 'Edificio'
        },
        'en': {
            1: 'House',
            2: 'Apartment',
            3: 'Land',
            4: 'Office',
            5: 'Commercial Space',
            6: 'Condominium',
            7: 'Farm',
            8: 'Warehouse',
            9: 'Studio',
            10: 'Building'
        }
    };

    const langTypes = types[lang] || types['es_ar'];
    return langTypes[typeId] || (lang === 'en' ? 'Property' : 'Propiedad');
}

function getProjectType(typeId: number, lang: string = 'es_ar'): string {
    const types: Record<string, Record<number, string>> = {
        'es_ar': {
            1: 'Apartamentos',
            2: 'Condominios',
            3: 'Villas',
            4: 'Casas',
            5: 'Oficinas',
            6: 'Locales Comerciales'
        },
        'en': {
            1: 'Apartments',
            2: 'Condominiums',
            3: 'Villas',
            4: 'Houses',
            5: 'Offices',
            6: 'Commercial Spaces'
        }
    };

    const langTypes = types[lang] || types['es_ar'];
    return langTypes[typeId] || (lang === 'en' ? 'Development' : 'Desarrollo');
}

function getProjectStatus(statusId: number, lang: string = 'es_ar'): string {
    const statuses: Record<string, Record<number, string>> = {
        'es_ar': {
            1: 'Planeamiento',
            2: 'Pre-venta',
            3: 'En Construcción',
            4: 'Terminado'
        },
        'en': {
            1: 'Planning',
            2: 'Pre-sale',
            3: 'Under Construction',
            4: 'Completed'
        }
    };

    const langStatuses = statuses[lang] || statuses['es_ar'];
    return langStatuses[statusId] || (lang === 'en' ? 'In Development' : 'En Desarrollo');
}

function getCompletionDate(dateString: string | undefined, lang: string = 'es_ar'): string {
    if (!dateString) {
        return lang === 'en' ? 'To be defined' : 'A definir';
    }

    try {
        const date = new Date(dateString);
        if (lang === 'en') {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
        } else {
            return date.toLocaleDateString('es-AR', { year: 'numeric', month: 'long' });
        }
    } catch (error) {
        return lang === 'en' ? 'To be defined' : 'A definir';
    }
}

function getAgeDisplay(age: number, lang: string = 'es_ar'): string {
    if (age < 0) {
        return lang === 'en' ? 'Under Construction' : 'En construcción';
    } else if (age === 0) {
        return lang === 'en' ? 'New' : 'A estrenar';
    } else {
        const yearText = lang === 'en' ? (age === 1 ? 'year' : 'years') : (age === 1 ? 'año' : 'años');
        return `${age} ${yearText}`;
    }
}

export const getSalesProperties = async (): Promise<Property[]> => {
    try {

        const url = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&operation_type=1&limit=50`;
        const response = await axios.get(url);

        const salesProperties = response.data.objects.filter((property: any) => {
            const operations = property.operations || [];
            return operations.some((op: any) => op.operation_id === 1);
        });

        const formattedProperties = salesProperties.map((property: any) => {
            const operations = property.operations || [];
            const saleOperation = operations.find((op: any) => op.operation_id === 1) || {};
            const priceInfo = saleOperation.prices?.[0] || {};

            const formattedProperty: Property = {
                id: property.id || 0,
                title: property.title || property.address || 'Propiedad en Venta',
                description_only: property.description || '',
                address: property.address || '',
                full_location: property.location?.full_location || '',
                short_location: property.location?.short_location || '',
                price: formatPrice(priceInfo.price || property.price || 0, priceInfo.currency || property.currency || 'USD'),
                currency: priceInfo.currency || property.currency || 'USD',
                bedrooms: property.suite_amount || 0,
                bathrooms: property.bathroom_amount || 0,
                sqft: property.total_surface || 0,
                images: property.photos?.map((photo: any) => ({
                    image: formatImageUrl(photo?.image),
                    thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                    original: photo?.original ? formatImageUrl(photo.original) : undefined,
                    description: photo?.description,
                    is_front_cover: photo?.is_front_cover,
                    order: photo?.order,
                    is_blueprint: photo?.is_blueprint
                })) || [{ image: '/placeholder.svg' }],
                type: property.type?.name || getPropertyType(property.type_id || 0, LANG),
                operation_type: 'venta',
                featured: property.starred || false,
                age: property.age || 0,
                age_display: getAgeDisplay(property.age || 0, LANG),
                parking_lot_amount: property.parking_lot_amount || 0,
                disposition: property.disposition,
                operations: operations.map((op: any) => ({
                    operation_id: op.operation_id,
                    operation_type: op.operation_type,
                    price: op.prices?.[0]?.price || 0,
                    currency: op.prices?.[0]?.currency || 'USD',
                    period: op.prices?.[0]?.period
                }))
            };

            if (formattedProperty.images && formattedProperty.images.length > 0) {
                const hasFrontCover = formattedProperty.images.some(img => img.is_front_cover);
                if (!hasFrontCover) {
                    formattedProperty.images[0].is_front_cover = true;
                }
                
                formattedProperty.images.sort((a, b) => {
                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }
                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;
                    return 0;
                });
            }

            return formattedProperty;
        });

        return formattedProperties;
    } catch (error) {
        console.error('Error al obtener propiedades en venta:', error);
        return [];
    }
};

export const getRentProperties = async (): Promise<Property[]> => {
    try {
        const url = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&operation_type=2&limit=50`;
        const response = await axios.get(url);

        const rentProperties = response.data.objects.filter((property: any) => {
            const operations = property.operations || [];
            return operations.some((op: any) => op.operation_id === 2);
        });

        const formattedProperties = rentProperties.map((property: any) => {
            const operations = property.operations || [];
            const rentOperation = operations.find((op: any) => op.operation_id === 2) || {};
            const priceInfo = rentOperation.prices?.[0] || {};

            const formattedProperty: Property = {
                id: property.id || 0,
                title: property.title || property.address || 'Propiedad en Alquiler',
                description_only: property.description || '',
                address: property.address || '',
                full_location: property.location?.full_location || '',
                short_location: property.location?.short_location || '',
                price: `${formatPrice(priceInfo.price || property.price || 0, priceInfo.currency || property.currency || 'ARS')}/mes`,
                currency: priceInfo.currency || property.currency || 'ARS',
                bedrooms: property.suite_amount || 0,
                bathrooms: property.bathroom_amount || 0,
                sqft: property.total_surface || 0,
                images: property.photos?.map((photo: any) => ({
                    image: formatImageUrl(photo?.image),
                    thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                    original: photo?.original ? formatImageUrl(photo.original) : undefined,
                    description: photo?.description,
                    is_front_cover: photo?.is_front_cover,
                    order: photo?.order,
                    is_blueprint: photo?.is_blueprint
                })) || [{ image: '/placeholder.svg' }],
                type: property.type?.name || getPropertyType(property.type_id || 0, LANG),
                operation_type: 'rent',
                featured: property.starred || false,
                age: property.age || 0,
                age_display: getAgeDisplay(property.age || 0, LANG),
                parking_lot_amount: property.parking_lot_amount || 0,
                disposition: property.disposition,
                operations: operations.map((op: any) => ({
                    operation_id: op.operation_id,
                    operation_type: op.operation_type,
                    price: op.prices?.[0]?.price || 0,
                    currency: op.prices?.[0]?.currency || 'ARS',
                    period: op.prices?.[0]?.period
                }))
            };

            if (formattedProperty.images && formattedProperty.images.length > 0) {
                const hasFrontCover = formattedProperty.images.some(img => img.is_front_cover);
                if (!hasFrontCover) {
                    formattedProperty.images[0].is_front_cover = true;
                }
                
                formattedProperty.images.sort((a, b) => {
                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }
                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;
                    return 0;
                });
            }

            return formattedProperty;
        });

        return formattedProperties;
    } catch (error) {
        console.error('Error al obtener propiedades en alquiler:', error);
        return [];
    }
};

const _getPropertyById = async (id: number): Promise<Property | null> => {
    try {
        const url = `${BASE_URL}property/${id}/?lang=${LANG}&key=${API_KEY}`;
        const response = await axios.get(url);
        const property = response.data;

        if (!property) {
            return null;
        }

        const operations = property.operations || [];
        const saleOperation = operations.find((op: any) => op.operation_id === 1);
        const rentOperation = operations.find((op: any) => op.operation_id === 2);

        let operationType = 'venta';
        let priceInfo = {};

        if (saleOperation) {
            operationType = 'venta';
            priceInfo = saleOperation.prices?.[0] || {};
        } else if (rentOperation) {
            operationType = 'alquiler';
            priceInfo = rentOperation.prices?.[0] || {};
        }

        const formattedProperty: Property = {
            id: property.id || 0,
            title: property.title || property.address || 'Propiedad',
            description_only: property.description || '',
            address: property.address || '',
            full_location: property.location?.full_location || '',
            price: formatPrice((priceInfo as any).price || property.price || 0, (priceInfo as any).currency || property.currency || 'USD'),
            currency: (priceInfo as any).currency || property.currency || 'USD',
            bedrooms: property.suite_amount || 0,
            bathrooms: property.bathroom_amount || 0,
            sqft: property.total_surface || 0,
            images: property.photos?.map((photo: any) => ({
                image: formatImageUrl(photo?.image),
                thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                original: photo?.original ? formatImageUrl(photo.original) : undefined,
                description: photo?.description,
                is_front_cover: photo?.is_front_cover,
                order: photo?.order,
                is_blueprint: photo?.is_blueprint
            })) || [{ image: '/placeholder.svg' }],
            type: property.type?.name || getPropertyType(property.type_id || 0, LANG),
            operation_type: operationType,
            featured: property.starred || false,
            age: property.age || 0,
            age_display: getAgeDisplay(property.age || 0, LANG),
            parking_lot_amount: property.parking_lot_amount || 0,
            disposition: property.disposition,
            property_condition: property.property_condition,
            situation: property.situation,
            expenses: property.expenses,
            total_surface: property.total_surface,
            geo_lat: property.geo_lat || '',
            geo_long: property.geo_long || '',
            videos: property.videos?.map((video: any) => ({
                description: video.description || '',
                id: video.id || 0,
                order: video.order || 0,
                player_url: video.player_url || '',
                provider: video.provider || '',
                provider_id: video.provider_id || 0,
                title: video.title || '',
                url: video.url || '',
                video_id: video.video_id || ''
            })) || [],
            operations: operations.map((op: any) => ({
                operation_id: op.operation_id,
                operation_type: op.operation_type,
                price: op.prices?.[0]?.price || 0,
                currency: op.prices?.[0]?.currency || 'USD',
                period: op.prices?.[0]?.period
            }))
        };

        if (formattedProperty.images && formattedProperty.images.length > 0) {
            const hasFrontCover = formattedProperty.images.some(img => img.is_front_cover);
            if (!hasFrontCover) {
                formattedProperty.images[0].is_front_cover = true;
            }
            
            formattedProperty.images.sort((a, b) => {
                if (a.order !== undefined && b.order !== undefined) {
                    return a.order - b.order;
                }
                if (a.order !== undefined) return -1;
                if (b.order !== undefined) return 1;
                return 0;
            });
        }

        return formattedProperty;
    } catch (error) {
        console.error(`Error al obtener la propiedad con ID ${id}:`, error);
        return null;
    }
};

export const getPropertyById = async (id: number): Promise<Property | null> => {
    return _getPropertyById(id);
};

export const getFeaturedProperties = async (): Promise<Property[]> => {
    try {
        
        const url = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&limit=200`;
        const response = await axios.get(url);

        const featuredProperties = response.data.objects.filter((property: any) =>
            property.is_starred_on_web === true
        );

        if (featuredProperties.length === 0) {
            console.log('No hay propiedades con is_starred_on_web: true');
            return [];
        }

        const formattedProperties = featuredProperties.map((property: any) => {
            const operations = property.operations || [];
            const primaryOperation = operations[0] || {};
            const priceInfo = primaryOperation.prices?.[0] || {};

            const formattedProperty: Property = {
                id: property.id || 0,
                title: property.title || property.address || 'Propiedad',
                description_only: property.description || '',
                address: property.address || '',
                full_location: property.location?.full_location || '',
                short_location: property.location?.short_location || '',
                price: primaryOperation.operation_id === 2 
                    ? `${formatPrice(priceInfo.price || property.price || 0, priceInfo.currency || property.currency || 'ARS')}/mes`
                    : formatPrice(priceInfo.price || property.price || 0, priceInfo.currency || property.currency || 'ARS'),
                currency: priceInfo.currency || property.currency || 'ARS',
                bedrooms: property.suite_amount || 0,
                bathrooms: property.bathroom_amount || 0,
                sqft: property.total_surface || 0,
                images: property.photos?.map((photo: any) => ({
                    image: formatImageUrl(photo?.image),
                    thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                    original: photo?.original ? formatImageUrl(photo.original) : undefined,
                    description: photo?.description,
                    is_front_cover: photo?.is_front_cover,
                    order: photo?.order,
                    is_blueprint: photo?.is_blueprint
                })) || [{ image: '/placeholder.svg' }],
                type: property.type?.name || getPropertyType(property.type_id || 0, LANG),
                operation_type: primaryOperation.operation_id === 2 ? 'rent' : 'sale',
                featured: true,
                age: property.age || 0,
                age_display: getAgeDisplay(property.age || 0, LANG),
                parking_lot_amount: property.parking_lot_amount || 0,
                disposition: property.disposition,
                operations: operations.map((op: any) => ({
                    operation_id: op.operation_id,
                    operation_type: op.operation_type,
                    price: op.prices?.[0]?.price || 0,
                    currency: op.prices?.[0]?.currency || 'ARS',
                    period: op.prices?.[0]?.period
                }))
            };

            if (formattedProperty.images && formattedProperty.images.length > 0) {
                const hasFrontCover = formattedProperty.images.some(img => img.is_front_cover);
                if (!hasFrontCover) {
                    formattedProperty.images[0].is_front_cover = true;
                }
                
                formattedProperty.images.sort((a, b) => {
                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }
                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;
                    return 0;
                });
            }

            return formattedProperty;
        });

        return formattedProperties;
    } catch (error) {
        console.error('Error al obtener propiedades destacadas:', error);
        return [];
    }
};

export const getPropertyTypesForOperation = async (operationType: 'sale' | 'rent'): Promise<string[]> => {
    try {
        const operationId = operationType === 'sale' ? 1 : 2;
        const url = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&operation_type=${operationId}&limit=200`;
        const response = await axios.get(url);

        const properties = response.data.objects.filter((property: any) => {
            const operations = property.operations || [];
            return operations.some((op: any) => op.operation_id === operationId);
        });

        const uniqueTypes = new Set<string>();
        properties.forEach((property: any) => {
            const typeName = property.type?.name || getPropertyType(property.type_id || 0, LANG);
            if (typeName) {
                uniqueTypes.add(typeName);
            }
        });

        return Array.from(uniqueTypes).sort();
    } catch (error) {
        console.error(`Error al obtener tipos de propiedades para ${operationType}:`, error);
        return [];
    }
};

export interface Development {
    id: number;
    name: string;
    address?: string;
    full_location?: string;
    status?: number;
    completion_date?: string;
    units?: number;
    images?: PropertyImage[];
    type?: string;
}

/**
 * Obtiene un desarrollo/proyecto por ID desde Tokko
 */
export const getDevelopmentById = async (id: number): Promise<Development | null> => {
    try {
        const url = `${BASE_URL}development/${id}/?lang=${LANG}&key=${API_KEY}`;
        const response = await axios.get(url);
        const development = response.data;

        if (!development) {
            return null;
        }

        const formattedDevelopment: Development = {
            id: development.id || 0,
            name: development.name || development.address || 'Proyecto Inmobiliario',
            address: development.address || '',
            full_location: development.location?.full_location || '',
            status: development.status || 0,
            completion_date: development.completion_date,
            units: development.units || 0,
            images: development.photos?.map((photo: any) => ({
                image: formatImageUrl(photo?.image),
                thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                original: photo?.original ? formatImageUrl(photo.original) : undefined,
                description: photo?.description,
                is_front_cover: photo?.is_front_cover,
                order: photo?.order,
                is_blueprint: photo?.is_blueprint
            })) || [],
            type: development.type?.name || getProjectType(typeof development.type === 'number' ? development.type : 0, LANG)
        };

        return formattedDevelopment;
    } catch (error) {
        console.error(`Error al obtener el desarrollo con ID ${id}:`, error);
        return null;
    }
};

/**
 * Genera un slug desde el nombre del desarrollo
 * Convierte el nombre a formato slug (lowercase, reemplaza espacios y caracteres especiales)
 */
function generateSlugFromName(name: string): string {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
        .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres especiales
        .trim()
        .replace(/\s+/g, '_') // Reemplaza espacios con guiones bajos
        .replace(/_+/g, '_'); // Reemplaza múltiples guiones bajos con uno solo
}

/**
 * Mapeo de IDs de Tokko a slugs de proyectos conocidos
 * Esto permite mapear desarrollos de Tokko a las páginas existentes
 */
const DEVELOPMENT_ID_TO_SLUG_MAP: Record<number, string> = {
    // Agregar aquí los mapeos conocidos
    // Ejemplo: 123: 'corrientes_65'
};

/**
 * Obtiene el slug del proyecto basándose en el ID de Tokko
 * Primero intenta usar el mapeo, luego genera un slug desde el nombre
 */
export const getDevelopmentSlug = async (tokkoId: number): Promise<string | null> => {
    // Si hay un mapeo directo, usarlo
    if (DEVELOPMENT_ID_TO_SLUG_MAP[tokkoId]) {
        return DEVELOPMENT_ID_TO_SLUG_MAP[tokkoId];
    }

    // Si no, obtener el desarrollo y generar el slug desde el nombre
    const development = await getDevelopmentById(tokkoId);
    if (!development) {
        return null;
    }

    return generateSlugFromName(development.name);
};