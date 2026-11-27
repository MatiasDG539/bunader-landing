// Endpoint conectado a GVAmax. Versión Tokko original: legacy/tokko/api-properties/rent.route.ts
import { NextResponse } from 'next/server';
import { getRentProperties } from '@/actions/gvamaxApi';

export async function GET() {
    return NextResponse.json(await getRentProperties());
}
