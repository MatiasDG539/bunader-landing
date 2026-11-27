// Endpoint conectado a GVAmax. Versión Tokko original: legacy/tokko/api-properties/featured.route.ts
import { NextResponse } from 'next/server';
import { getFeaturedProperties } from '@/actions/gvamaxApi';

export async function GET() {
    return NextResponse.json(await getFeaturedProperties());
}
