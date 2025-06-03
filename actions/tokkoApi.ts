import axios from 'axios';

// Cliente de axios para llamadas a nuestra API interna
const apiClient = axios.create({
    baseURL: '/api/properties'
});

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

// Función para obtener propiedades en venta
export const getSalesProperties = async (): Promise<Property[]> => {
    try {
        const response = await apiClient.get("/sales");

        const propertiesWithOrderedImages = response.data.map((property: Property) => {
            if (property.images && property.images.length > 0) {

                property.images.sort((a, b) => {

                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }

                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;

                    return 0;
                });
            }
            return property;
        });

        return propertiesWithOrderedImages;
    } catch (error) {
        console.error('Error al obtener propiedades en venta:', error);
        return [];
    }
};

// Función para obtener propiedades en alquiler
export const getRentProperties = async (): Promise<Property[]> => {
    try {
        const response = await apiClient.get("/rent");

        const propertiesWithOrderedImages = response.data.map((property: Property) => {
            if (property.images && property.images.length > 0) {

                property.images.sort((a, b) => {

                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }

                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;

                    return 0;
                });
            }
            return property;
        });

        return propertiesWithOrderedImages;
    } catch (error) {
        console.error('Error al obtener propiedades en alquiler:', error);
        return [];
    }
};

// Función para obtener proyectos inmobiliarios
export const getProjects = async (): Promise<Project[]> => {
    try {
        const response = await apiClient.get("/projects");

        const projectsWithOrderedImages = response.data.map((project: Project) => {
            if (project.images && project.images.length > 0) {

                project.images.sort((a, b) => {

                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }

                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;

                    return 0;
                });
            }
            return project;
        });

        return projectsWithOrderedImages;
    } catch (error) {
        console.error('Error al obtener proyectos:', error);
        return [];
    }
};

// Función para obtener una propiedad individual por su ID
export const getPropertyById = async (id: number): Promise<Property | null> => {
    try {
        const response = await apiClient.get(`/${id}`);

        if (response.data) {
            const property = response.data;

            if (property.images && property.images.length > 0) {
                property.images.sort((a: PropertyImage, b: PropertyImage) => {
                    if (a.order !== undefined && b.order !== undefined) {
                        return a.order - b.order;
                    }
                    if (a.order !== undefined) return -1;
                    if (b.order !== undefined) return 1;
                    return 0;
                });
            }

            return property;
        }

        return null;
    } catch (error) {
        console.error(`Error al obtener la propiedad con ID ${id}:`, error);
        return null;
    }
};