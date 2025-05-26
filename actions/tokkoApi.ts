import axios from 'axios';

// Cliente de axios para llamadas a nuestra API interna (que actúa como proxy)
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
    full_location?: string;
    short_location?: string;
    name?: string;
    state?: string | null;
    zip_code?: string | null;
}

export interface Property {
    id: number;
    title: string;
    description?: string;
    location: string;
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
    orientation?: string | null;
    operations?: PropertyOperation[];
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
        return response.data;
    } catch (error) {
        console.error('Error al obtener propiedades en venta:', error);
        return [];
    }
};

// Función para obtener propiedades en alquiler
export const getRentProperties = async (): Promise<Property[]> => {
    try {
        const response = await apiClient.get("/rent");
        return response.data;
    } catch (error) {
        console.error('Error al obtener propiedades en alquiler:', error);
        return [];
    }
};

// Función para obtener proyectos inmobiliarios
export const getProjects = async (): Promise<Project[]> => {
    try {
        const response = await apiClient.get("/projects");
        return response.data;
    } catch (error) {
        console.error('Error al obtener proyectos:', error);
        return [];
    }
};