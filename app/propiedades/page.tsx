import React from "react";
import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import { SalesSection } from "@/components/properties/salesSection";
import { RentSection } from "@/components/properties/rentSection";
import { ProjectsSection } from "@/components/properties/projectsSection";

export default function PropertiesHome() {
    return (

        <div className="flex min-h-screen flex-col bg-white">

            {/* Header */}
            <SiteHeaderDark />

            <main className="min-h-screen">

                {/* Hero Section */}

                <section className="relative h-[400px] md:h-[500px] bg-red-600">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="container mx-auto max-w-5xl h-full">
                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-18">Nuestras Propiedades</h1>
                            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                                Descubre nuestra amplia selección de propiedades en venta, alquiler y proyectos en desarrollo
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sales Section */}
                <SalesSection />

                {/* Rent Section */}
                <RentSection />

                {/* Projects Section */}
                <ProjectsSection />
            </main>

            {/* Footer */}
            <SiteFooter />

        </div >
    );
}