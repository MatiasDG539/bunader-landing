import { Suspense } from 'react';
import RentPage from '@/components/rentPage';

export const metadata = {
    title: 'Propiedades en Alquiler | Bunader Inmobiliaria',
    description: 'Explora nuestra selección de propiedades en alquiler. Encuentra el hogar perfecto para alquilar con Bunader Inmobiliaria.',
}

export default function AlquilerPage() {
    return (
        <Suspense fallback={<div className="min-h-[40vh]" />}>
            <RentPage />
        </Suspense>
    );
}
