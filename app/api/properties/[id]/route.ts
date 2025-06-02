import { NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const LANG = process.env.LANG;

interface PropertyLocation {
    full_location: string;
}

interface PropertyPhoto {
    image?: string;
    thumb?: string;
    original?: string;
    description?: string;
    is_front_cover?: boolean;
    order?: number;
    is_blueprint?: boolean;
}

interface PropertyPrice {
    price?: number;
    currency?: string;
    period?: string;
}

interface PropertyOperation {
    operation_id: number;
    operation_type?: string;
    prices?: PropertyPrice[];
}

interface Property {
    id?: number;
    title?: string;
    description?: string;
    address?: string;
    location?: PropertyLocation;
    operations?: PropertyOperation[];
    price?: number;
    currency?: string;
    room_amount?: number;
    bathroom_amount?: number;
    total_surface?: number;
    photos?: PropertyPhoto[];
    orientation?: string;
    type?: {
        name?: string;
    };
    type_id?: number;
    starred?: boolean;
    age?: number;
    parking_lot_amount?: number;
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const apiClient = axios.create({
            baseURL: BASE_URL,
            params: {
                key: API_KEY,
                lang: LANG
            }
        });

        const response = await apiClient.get(`property/${id}/`);
        const property: Property = response.data;

        if (!property) {
            return NextResponse.json({ error: 'Propiedad no encontrada' }, { status: 404 });
        }

        // Determinar el tipo de operación
        const operations = property.operations || [];
        const saleOperation = operations.find((op: PropertyOperation) => op.operation_id === 1);
        const rentOperation = operations.find((op: PropertyOperation) => op.operation_id === 2);

        let operationType = 'sale';
        let priceInfo = {} as PropertyPrice;

        if (saleOperation) {
            operationType = 'sale';
            priceInfo = saleOperation.prices?.[0] || {} as PropertyPrice;
        } else if (rentOperation) {
            operationType = 'rent';
            priceInfo = rentOperation.prices?.[0] || {} as PropertyPrice;
        }

        // Formatear la propiedad
        const formattedProperty = {
            id: property.id || 0,
            title: property.title || property.address || 'Propiedad',
            description_only: property.description || '',
            location: property.address || '',
            full_location: property.location?.full_location || '',
            price: formatPrice(priceInfo.price || property.price || 0, priceInfo.currency || property.currency || 'USD'),
            currency: priceInfo.currency || property.currency || 'USD',
            bedrooms: property.room_amount || 0,
            bathrooms: property.bathroom_amount || 0,
            sqft: property.total_surface || 0,
            images: property.photos?.map((photo) => ({
                image: formatImageUrl(photo?.image),
                thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                original: photo?.original ? formatImageUrl(photo.original) : undefined,
                description: photo?.description,
                is_front_cover: photo?.is_front_cover,
                order: photo?.order,
                is_blueprint: photo?.is_blueprint
            })) || [{ image: '/placeholder.svg' }],
            type: property.type?.name || getPropertyType(property.type_id || 0),
            operation_type: operationType,
            featured: property.starred || false,
            age: property.age || 0,
            parking_lot_amount: property.parking_lot_amount || 0,
            orientation: property.orientation,
            operations: operations.map((op) => ({
                operation_id: op.operation_id,
                operation_type: op.operation_type,
                price: op.prices?.[0]?.price || 0,
                currency: op.prices?.[0]?.currency || 'USD',
                period: op.prices?.[0]?.period
            }))
        };

        return NextResponse.json(formattedProperty);
    } catch (error) {
        console.error(`Error al obtener la propiedad con ID ${params.id}:`, error);
        return NextResponse.json({ error: 'Error al obtener la propiedad' }, { status: 500 });
    }
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

function getPropertyType(typeId: number): string {
    const types: Record<number, string> = {
        1: 'Casa',
        2: 'Apartamento',
        3: 'Terreno',
        4: 'Oficina',
        5: 'Local Comercial',
        6: 'Condominio',
        7: 'Campo',
        8: 'Galpón',
        9: 'Estudio',
        10: 'Edificio'
    };

    return types[typeId] || 'Propiedad';
}
