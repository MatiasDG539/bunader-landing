'use server'

import { revalidateTag } from 'next/cache';

// Funciones para invalidar caché manualmente
export async function revalidateAllProperties() {
    revalidateTag('properties');
}

export async function revalidateSalesProperties() {
    revalidateTag('sales');
}

export async function revalidateRentProperties() {
    revalidateTag('rent');
}

export async function revalidateFeaturedProperties() {
    revalidateTag('featured');
}

export async function revalidateProjects() {
    revalidateTag('projects');
}

export async function revalidateProperty(id: number) {
    revalidateTag(`property-${id}`);
}

// Función para invalidar todo el caché
export async function revalidateAllCache() {
    revalidateTag('properties');
    revalidateTag('projects');
}
