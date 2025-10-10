import React from "react";
import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import ProjectsPage from "@/components/projectsPage";

export const metadata = {
    title: 'Nuestros Proyectos | Bunader Inmobiliaria',
    description: 'Descubre nuestros desarrollos inmobiliarios únicos, diseñados para el futuro. Proyectos en diferentes etapas de desarrollo.',
}

export default function ProyectosPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Header */}
            <SiteHeaderDark />

            <main>
                <ProjectsPage />
            </main>

            {/* Footer */}
            <SiteFooter />
        </div>
    );
}
