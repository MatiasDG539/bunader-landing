import { NextResponse } from 'next/server';
import { getDevelopmentSlug, getDevelopmentById } from '@/actions/tokkoApi';

/**
 * Endpoint para redirigir desarrollos/proyectos desde Tokko
 * Formato esperado: http://bunader.com.ar/d/$id$-dev
 * 
 * Este endpoint consulta el desarrollo en Tokko y redirige a la página correspondiente
 */
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Remover el sufijo "-dev" si existe (Tokko puede incluir: $id$-dev)
        const cleanId = id.replace(/-dev$/, '');
        const developmentId = parseInt(cleanId);

        if (isNaN(developmentId)) {
            return NextResponse.json(
                { error: 'ID de desarrollo inválido' },
                { status: 400 }
            );
        }

        // Verificar que el desarrollo existe
        const development = await getDevelopmentById(developmentId);

        if (!development) {
            // Si no se encuentra el desarrollo, redirigir a la página de proyectos
            return NextResponse.redirect(
                new URL('/propiedades/proyectos', request.url),
                302
            );
        }

        // Obtener el slug del proyecto
        const slug = await getDevelopmentSlug(developmentId);

        if (!slug) {
            // Si no se puede generar el slug, redirigir a la página de proyectos
            return NextResponse.redirect(
                new URL('/propiedades/proyectos', request.url),
                302
            );
        }

        // Redirigir a la página del proyecto
        return NextResponse.redirect(
            new URL(`/propiedades/proyectos/${slug}`, request.url),
            302
        );
    } catch (error) {
        console.error('Error al redirigir desarrollo:', error);
        // En caso de error, redirigir a la página de proyectos
        try {
            return NextResponse.redirect(
                new URL('/propiedades/proyectos', request.url),
                302
            );
        } catch {
            return NextResponse.json(
                { error: 'Error al procesar la solicitud' },
                { status: 500 }
            );
        }
    }
}

