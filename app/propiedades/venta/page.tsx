import { Suspense } from 'react';
import SalesPage from '@/components/salesPage';

export const metadata = {
    title: 'Propiedades en Venta | Bunader Inmobiliaria',
    description: 'Explora nuestra selección de propiedades en venta. Encuentra la casa de tus sueños con Bunader Inmobiliaria.',
}

export default function VentaPage() {
    return (
        <Suspense fallback={<div className="min-h-[40vh]" />}>
            <SalesPage />
        </Suspense>
    );
}