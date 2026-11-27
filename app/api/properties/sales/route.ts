// Endpoint conectado a GVAmax. Versión Tokko original: legacy/tokko/api-properties/sales.route.ts
import { NextResponse } from 'next/server';
import { getSalesProperties } from '@/actions/gvamaxApi';

export async function GET() {
    return NextResponse.json(await getSalesProperties());
}
