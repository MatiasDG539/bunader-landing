import { NextResponse } from 'next/server';
import { getPropertyById } from '@/actions/tokkoApi';

/**
 * Endpoint para redirigir propiedades desde Tokko
 * Formato esperado: http://bunader.com.ar/p/$id$-prop
 * 
 * Este endpoint consulta la propiedad en Tokko y redirige a la página correspondiente
 */
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Remover el sufijo "-prop" si existe (Tokko puede incluir: $id$-prop)
        const cleanId = id.replace(/-prop$/, '');
        const propertyId = parseInt(cleanId);

        if (isNaN(propertyId)) {
            return NextResponse.json(
                { error: 'ID de propiedad inválido' },
                { status: 400 }
            );
        }

        // Obtener la propiedad desde Tokko
        const property = await getPropertyById(propertyId);

        if (!property) {
            return NextResponse.json(
                { error: 'Propiedad no encontrada' },
                { status: 404 }
            );
        }

        // Redirigir a la página de la propiedad
        // La página /propiedades/[id] maneja tanto venta como alquiler
        return NextResponse.redirect(
            new URL(`/propiedades/${propertyId}`, request.url),
            302
        );
    } catch (error) {
        console.error('Error al redirigir propiedad:', error);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}

