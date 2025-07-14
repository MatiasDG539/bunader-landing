'use server'

import axios from 'axios';
import { unstable_cache } from 'next/cache';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const LANG = 'es_ar';

const CACHE_TTL = 60 * 15;

// Interfaces para los tipos de datos
export interface PropertyImage {
    image: string;
    thumb?: string;
    original?: string;
    description?: string | null;
    is_front_cover?: boolean;
    order?: number;
    is_blueprint?: boolean;
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

// Funciones auxiliares
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

// Función para obtener propiedades en venta
const _getSalesProperties = async (): Promise<Property[]> => {
    try {
        const url = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&operation_type=1&limit=20`;
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
                bedrooms: property.room_amount || 0,
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

export const getSalesProperties = unstable_cache(
    _getSalesProperties,
    ['sales-properties'],
    {
        revalidate: CACHE_TTL,
        tags: ['properties', 'sales']
    }
);

// Función para obtener propiedades en alquiler (con caché)
const _getRentProperties = async (): Promise<Property[]> => {
    try {
        const url = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&operation_type=2&limit=20`;
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
                bedrooms: property.room_amount || 0,
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

export const getRentProperties = unstable_cache(
    _getRentProperties,
    ['rent-properties'],
    {
        revalidate: CACHE_TTL,
        tags: ['properties', 'rent']
    }
);

// Función para obtener proyectos inmobiliarios
const _getProjects = async (): Promise<Project[]> => {
    try {
        const url = `${BASE_URL}development/?lang=${LANG}&key=${API_KEY}&limit=10`;
        const response = await axios.get(url);

        const formattedProjects = response.data.objects.map((project: any) => {
            const formattedProject: Project = {
                id: project.id || 0,
                title: project.name || project.address || 'Proyecto Inmobiliario',
                location: project.address || '',
                full_location: project.location?.full_location || '',
                status: getProjectStatus(project.status || 0, LANG),
                completion: getCompletionDate(project.completion_date, LANG),
                units: project.units || 0,
                images: project.photos?.map((photo: any) => ({
                    image: formatImageUrl(photo?.image),
                    thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                    original: photo?.original ? formatImageUrl(photo.original) : undefined,
                    description: photo?.description,
                    is_front_cover: photo?.is_front_cover,
                    order: photo?.order,
                    is_blueprint: photo?.is_blueprint
                })) || [{ image: '/placeholder.svg' }],
                type: project.type?.name || getProjectType(typeof project.type === 'number' ? project.type : 0, LANG)
            };

            if (formattedProject.images && formattedProject.images.length > 0) {
                formattedProject.images.sort((a, b) => {
                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }
                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;
                    return 0;
                });
            }

            return formattedProject;
        });

        return formattedProjects;
    } catch (error) {
        console.error('Error al obtener proyectos:', error);
        return [];
    }
};

export const getProjects = unstable_cache(
    _getProjects,
    ['projects'],
    {
        revalidate: CACHE_TTL,
        tags: ['projects']
    }
);

// Función para obtener una propiedad individual por su ID (con caché dinámico)
const _getPropertyById = async (id: number): Promise<Property | null> => {
    try {
        const url = `${BASE_URL}property/${id}/?lang=${LANG}&key=${API_KEY}`;
        const response = await axios.get(url);
        const property = response.data;

        if (!property) {
            return null;
        }

        // Determinar el tipo de operación
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
            bedrooms: property.room_amount || 0,
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
            parking_lot_amount: property.parking_lot_amount || 0,
            disposition: property.disposition,
            property_condition: property.property_condition,
            situation: property.situation,
            expenses: property.expenses,
            total_surface: property.total_surface,
            geo_lat: property.geo_lat || '',
            geo_long: property.geo_long || '',
            operations: operations.map((op: any) => ({
                operation_id: op.operation_id,
                operation_type: op.operation_type,
                price: op.prices?.[0]?.price || 0,
                currency: op.prices?.[0]?.currency || 'USD',
                period: op.prices?.[0]?.period
            }))
        };

        if (formattedProperty.images && formattedProperty.images.length > 0) {
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
    const cachedFunction = unstable_cache(
        () => _getPropertyById(id),
        [`property-${id}`],
        {
            revalidate: CACHE_TTL,
            tags: ['properties', `property-${id}`]
        }
    );

    return cachedFunction();
};

// Función para obtener propiedades destacadas
const _getFeaturedProperties = async (): Promise<Property[]> => {
    try {
        const url = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&limit=200`;
        const response = await axios.get(url);

        const featuredProperties = response.data.objects.filter((property: any) =>
            property.is_starred_on_web === true
        );

        if (featuredProperties.length === 0) {
            return [];
        }

        const allFormattedProperties: Property[] = [];

        featuredProperties.forEach((property: any) => {
            const operations = property.operations || [];

            operations.forEach((operation: any) => {
                const priceInfo = operation.prices?.[0];

                if (!priceInfo?.price || priceInfo.price <= 0) {
                    return;
                }

                let operationType = '';
                let formattedPrice = '';
                let defaultCurrency = 'USD';

                if (operation.operation_id === 1) {
                    operationType = 'sale';
                    defaultCurrency = 'USD';
                    formattedPrice = formatPrice(priceInfo.price, priceInfo.currency || defaultCurrency);
                } else if (operation.operation_id === 2) {
                    operationType = 'rent';
                    defaultCurrency = 'ARS';
                    formattedPrice = `${formatPrice(priceInfo.price, priceInfo.currency || defaultCurrency)}/mes`;
                } else {
                    return;
                }

                const formattedProperty: Property = {
                    id: property.id || 0,
                    title: property.title || property.address || `Propiedad en ${operationType === 'venta' ? 'Venta' : 'Alquiler'}`,
                    description_only: property.description || '',
                    address: property.address || '',
                    full_location: property.location?.full_location || '',
                    short_location: property.location?.short_location || '',
                    price: formattedPrice,
                    currency: priceInfo.currency || defaultCurrency,
                    bedrooms: property.room_amount || 0,
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
                    featured: true,
                    age: property.age || 0,
                    parking_lot_amount: property.parking_lot_amount || 0,
                    disposition: property.disposition,
                    operations: [{
                        operation_id: operation.operation_id,
                        operation_type: operationType,
                        price: priceInfo.price,
                        currency: priceInfo.currency || defaultCurrency,
                        period: priceInfo.period
                    }]
                };

                if (formattedProperty.images && formattedProperty.images.length > 0) {
                    formattedProperty.images.sort((a, b) => {
                        if (a.order !== undefined && b.order !== undefined) {
                            return a.order - b.order;
                        }
                        if (a.order !== undefined) return -1;
                        if (b.order !== undefined) return 1;
                        return 0;
                    });
                }

                allFormattedProperties.push(formattedProperty);
            });
        });

        return allFormattedProperties;
    } catch (error) {
        console.error('Error al obtener propiedades destacadas:', error);
        return [];
    }
};

export const getFeaturedProperties = unstable_cache(
    _getFeaturedProperties,
    ['featured-properties'],
    {
        revalidate: CACHE_TTL,
        tags: ['properties', 'featured']
    }
);