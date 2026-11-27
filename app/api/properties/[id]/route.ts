// Endpoint conectado a GVAmax. Versión Tokko original: legacy/tokko/api-properties/id.route.ts
import { NextResponse } from 'next/server';
import { getPropertyById } from '@/actions/gvamaxApi';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const property = await getPropertyById(parseInt(id, 10));

    if (!property) {
        return NextResponse.json({ error: 'Propiedad no encontrada' }, { status: 404 });
    }
    return NextResponse.json(property);
}
