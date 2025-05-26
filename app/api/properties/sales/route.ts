// @ts-nocheck
import { NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

export async function GET() {
    try {
        const apiClient = axios.create({
            baseURL: BASE_URL,
            params: {
                key: API_KEY
            }
        });

        const response = await apiClient.get("property/", {
            params: {
                operation_type: 1,
                limit: 20
            }
        });

        const salesProperties = response.data.objects.filter((property) => {
            const operations = property.operations || [];
            return operations.some((op) => op.operation_id === 1);
        });

        // Transformar los datos antes de enviarlos al cliente
        const formattedProperties = salesProperties.map((property) => {
            const operations = property.operations || [];
            const saleOperation = operations.find((op) => op.operation_id === 1) || {};
            const priceInfo = saleOperation.prices?.[0] || {};

            return {
                id: property.id || 0,
                title: property.title || property.address || 'Propiedad en Venta',
                description: property.description || '',
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
                operation_type: 'sale',
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
        });

        // Retornar los datos procesados
        return NextResponse.json(formattedProperties);
    } catch (error) {
        console.error('Error al obtener propiedades en venta:', error);
        return NextResponse.json({ error: 'Error al obtener propiedades' }, { status: 500 });
    }
}

// Funciones auxiliares
function formatPrice(price, currency) {
    if (currency === 'USD') {
        return `USD $${price.toLocaleString('es-AR')}`;
    } else {
        return `ARS $${price.toLocaleString('es-AR')}`;
    }
}

function formatImageUrl(imageUrl) {
    if (!imageUrl) return '/placeholder.svg';

    if (imageUrl.startsWith('http')) {
        return imageUrl;
    } else {
        return `https://static.tokkobroker.com${imageUrl}`;
    }
}

function getPropertyType(typeId) {
    const types = {
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
