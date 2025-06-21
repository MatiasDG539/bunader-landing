import { NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const LANG = process.env.LANG;

interface PropertyLocation {
    full_location: string;
    short_location?: string;
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
    disposition?: string;
    type?: {
        name?: string;
    };
    type_id?: number;
    is_starred_on_web?: boolean;
    age?: number;
    parking_lot_amount?: number;
}

export async function GET() {
    try {
        const allPropertiesUrl = `${BASE_URL}property/?lang=${LANG}&key=${API_KEY}&limit=200`;

        const response = await axios.get(allPropertiesUrl);

        const featuredProperties = response.data.objects.filter((property: Property) =>
            property.is_starred_on_web === true
        );

        if (featuredProperties.length === 0) {
            console.log('No hay propiedades con is_starred_on_web: true');
            return NextResponse.json([]);
        }

        console.log('Total featured properties found:', featuredProperties.length);

        interface FormattedProperty {
            id: number;
            title: string;
            description: string;
            address: string;
            full_location: string;
            short_location: string;
            price: string;
            currency: string;
            bedrooms: number;
            bathrooms: number;
            sqft: number;
            images: Array<{
                image: string;
                thumb?: string;
                original?: string;
                description?: string;
                is_front_cover?: boolean;
                order?: number;
                is_blueprint?: boolean;
            }>;
            type: string;
            operation_type: string;
            featured: boolean;
            age: number;
            parking_lot_amount: number;
            disposition?: string;
            operations: Array<{
                operation_id: number;
                operation_type: string;
                price: number;
                currency: string;
                period?: string;
            }>;
        }

        const allFormattedProperties: FormattedProperty[] = [];

        featuredProperties.forEach((property: Property) => {
            const operations = property.operations || [];

            operations.forEach((operation: PropertyOperation) => {
                const priceInfo = operation.prices?.[0];

                if (!priceInfo?.price || priceInfo.price <= 0) {
                    console.log(`Propiedad ${property.id} - Operación ${operation.operation_id} sin precio válido, omitida`);
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

                const formattedProperty = {
                    id: property.id || 0,
                    title: property.title || property.address || `Propiedad en ${operationType === 'sale' ? 'Venta' : 'Alquiler'}`,
                    description: property.description || '',
                    address: property.address || '',
                    full_location: property.location?.full_location || '',
                    short_location: property.location?.short_location || '',
                    price: formattedPrice,
                    currency: priceInfo.currency || defaultCurrency,
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

                allFormattedProperties.push(formattedProperty);
            });
        });

        console.log(`Propiedades destacadas procesadas: ${allFormattedProperties.length} (${allFormattedProperties.filter(p => p.operation_type === 'sale').length} ventas, ${allFormattedProperties.filter(p => p.operation_type === 'rent').length} alquileres)`);

        return NextResponse.json(allFormattedProperties);
    } catch (error) {
        console.error('Error al obtener propiedades destacadas:', error);
        return NextResponse.json({ error: 'Error al obtener propiedades destacadas' }, { status: 500 });
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
