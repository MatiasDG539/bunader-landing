import React from "react";
import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import ProjectsPage from "@/components/projectsPage";
import { getDevelopments } from "@/actions/gvamaxApi";

export const metadata = {
    title: 'Nuestros Proyectos | Bunader Inmobiliaria',
    description: 'Descubre nuestros desarrollos inmobiliarios únicos, diseñados para el futuro. Proyectos en diferentes etapas de desarrollo.',
}

// Los emprendimientos salen de GVAmax: la página se regenera cada 5 minutos.
export const revalidate = 300;

export default async function ProyectosPage() {
    const developments = await getDevelopments();

    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Header */}
            <SiteHeaderDark />

            <main>
                <ProjectsPage developments={developments} />
            </main>

            {/* Footer */}
            <SiteFooter />
        </div>
    );
}
