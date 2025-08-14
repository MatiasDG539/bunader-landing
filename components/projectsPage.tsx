"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Building, Calendar, Users } from "lucide-react"

const developments = [
    {
        id: "corrientes_65",
        title: "Corrientes 65",
        description: "Moderno complejo residencial en el corazón de la ciudad",
        location: "Corrientes 65, Centro",
        image: "/img/corrientes_65/c65_thumbnail.jpg",
        status: "En construcción", // "En construcción", "Próximamente", "Entregado"
        deliveryDate: "2025",
        totalUnits: 24,
        availableUnits: 8,
        priceFrom: "USD 180.000"
    },
]

export default function ProjectsPage() {
    const getStatusTag = (status: string) => {
        const statusColors = {
            "En construcción": "bg-red-600",
            "Próximamente": "bg-blue-600", 
            "Entregado": "bg-green-600"
        }
        
        return (
            <div className={`absolute top-4 right-4 ${statusColors[status as keyof typeof statusColors] || 'bg-gray-600'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {status}
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] bg-red-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container mx-auto max-w-5xl h-full">
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-18">Nuestros Proyectos</h1>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                            Descubre nuestros desarrollos inmobiliarios únicos, diseñados para el futuro
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="py-20">
                <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Todos Nuestros Desarrollos</h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Explora nuestra completa cartera de proyectos inmobiliarios en diferentes etapas de desarrollo.
                        </p>
                    </div>

                    {developments.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {developments.map((development) => (
                                <Card
                                    key={development.id}
                                    className="border-0 overflow-hidden shadow-lg rounded-xl"
                                >
                                    <div className="relative h-[280px] w-full">
                                        <Image 
                                            src={development.image || "/placeholder.svg"} 
                                            alt={development.title} 
                                            fill 
                                            className="object-cover" 
                                        />
                                        {getStatusTag(development.status)}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="text-sm font-medium">Desde</div>
                                            <div className="text-2xl font-bold">{development.priceFrom}</div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{development.title}</h3>
                                        <p className="text-gray-600 mb-3 text-sm">{development.description}</p>
                                        <div className="flex items-center text-gray-500 mb-4">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            <span className="text-sm">{development.location}</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                            <div className="flex items-center">
                                                <Building className="h-4 w-4 mr-2 text-gray-400" />
                                                <div>
                                                    <div className="font-medium">{development.totalUnits} unidades</div>
                                                    <div className="text-gray-500 text-xs">{development.availableUnits} disponibles</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                                                <div>
                                                    <div className="font-medium">Entrega</div>
                                                    <div className="text-gray-500 text-xs">{development.deliveryDate}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={`/propiedades/proyectos/${development.id}`}>
                                            <Button className="w-full bg-red-600 hover:bg-red-700">Ver Proyecto</Button>
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center py-20">
                            <div className="text-center">
                                <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No hay proyectos disponibles</h3>
                                <p className="text-gray-500">Pronto tendremos nuevos desarrollos para mostrar.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                    <div className="bg-red-600 text-white rounded-xl p-12 my-16 text-center">
                        <h2 className="text-3xl font-bold mb-4">¿Interesado en nuestros proyectos?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Contáctanos para obtener más información sobre nuestros desarrollos y opciones de inversión.
                        </p>
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <Link href="/contacto">
                                <button className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors">
                                    Contactar Asesor
                                </button>
                            </Link>
                            <Link href="/propiedades">
                                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium py-3 px-8 rounded-lg text-lg transition-colors">
                                    Ver Todas las Propiedades
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
