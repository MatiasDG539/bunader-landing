"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, MapPin, Building, Calendar } from "lucide-react"

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
    {
        id: "mate_de_luna_2197",
        title: "Mate de Luna 2197",
        description: "Edificio exclusivo sobre la Av. Mate de Luna, la avenida más importante de Tucumán",
        location: "Av. Mate de Luna 2197, Tucumán",
        image: "/img/mate_de_luna_2197/m2197_thumbnail.png",
        status: "En Venta", // "En construcción", "Próximamente", "Entregado"
        deliveryDate: "2025",
        totalUnits: 48,
        availableUnits: 32,
        priceFrom: "Consultar"
    },
]

export function DevelopmentsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
        }
    }

    const getStatusTag = (status: string) => {
        const statusColors = {
            "En construcción": "bg-red-600",
            "En Venta": "bg-red-600",
            "Próximamente": "bg-red-600", 
            "Entregado": "bg-red-600"
        }
        
        return (
            <div className={`absolute top-4 right-4 ${statusColors[status as keyof typeof statusColors] || 'bg-gray-600'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {status}
            </div>
        )
    }

    return (
        <section id="desarrollos" className="py-20 bg-white">
            <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h2 className="text-5xl font-bold">Nuestros Desarrollos</h2>
                        </div>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Descubre nuestros proyectos inmobiliarios únicos, diseñados para el futuro.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-gray-300"
                            onClick={scrollLeft}
                        >
                            <ChevronLeft className="h-6 w-6" />
                            <span className="sr-only">Desplazar a la izquierda</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-gray-300"
                            onClick={scrollRight}
                        >
                            <ChevronRight className="h-6 w-6" />
                            <span className="sr-only">Desplazar a la derecha</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {developments.length > 0 ? (
                    developments.map((development) => (
                        <Card
                            key={development.id}
                            className="min-w-[380px] max-w-[380px] border-0 overflow-hidden shadow-lg rounded-xl flex-shrink-0"
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
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full py-20">
                        <p className="text-gray-500 text-lg">No hay desarrollos disponibles</p>
                    </div>
                )}
            </div>

            <div className="mt-12 text-center">
                <Link href="/propiedades/proyectos">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300">
                        Ver Todos los Proyectos
                    </Button>
                </Link>
            </div>
        </section>
    )
}
