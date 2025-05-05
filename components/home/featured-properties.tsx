"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin } from "lucide-react"

const properties = [
    {
        id: 1,
        title: "Casa Familiar Moderna",
        location: "Tucumán, Argentina",
        price: "$1.250.000",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 260,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        type: "Casa",
        featured: true,
    },
    {
        id: 2,
        title: "Apartamento en el Centro",
        location: "Tucumán, Argentina",
        price: "$950.000",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 140,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        type: "Apartamento",
        featured: false,
    },
    {
        id: 3,
        title: "Casa Adosada Suburbana",
        location: "Yerba Buena, Tucumán",
        price: "$675.000",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 195,
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
        type: "Casa Adosada",
        featured: false,
    },
    {
        id: 4,
        title: "Condominio con Vista",
        location: "San Miguel, Tucumán",
        price: "$1.850.000",
        bedrooms: 3,
        bathrooms: 3,
        sqft: 205,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        type: "Condominio",
        featured: true,
    },
    {
        id: 5,
        title: "Cabaña con Vista a la Montaña",
        location: "Tafí del Valle, Tucumán",
        price: "$525.000",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 110,
        image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop",
        type: "Casa",
        featured: false,
    },
    {
        id: 6,
        title: "Casa Histórica",
        location: "Centro Histórico, Tucumán",
        price: "$3.200.000",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 325,
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop",
        type: "Casa",
        featured: true,
    },
]

export function FeaturedProperties() {
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

    return (
        <section className="py-20 bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-5xl font-bold mb-4">Propiedades Destacadas</h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Descubre nuestra selección de propiedades disponibles ahora mismo.
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
                {properties.map((property) => (
                    <Card
                        key={property.id}
                        className="min-w-[350px] max-w-[350px] border-0 overflow-hidden shadow-lg rounded-xl flex-shrink-0"
                    >
                        <div className="relative h-[250px] w-full">
                            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
                            {property.featured && (
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Destacada
                                </div>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="text-2xl font-bold">{property.price}</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                            <div className="flex items-center text-gray-500 mb-4">
                                <MapPin className="h-4 w-4 mr-1" />
                                {property.location}
                            </div>
                            <div className="flex justify-between mb-6">
                                <div className="flex items-center">
                                    <Bed className="h-5 w-5 mr-1 text-gray-400" />
                                    <span>{property.bedrooms} Hab</span>
                                </div>
                                <div className="flex items-center">
                                    <Bath className="h-5 w-5 mr-1 text-gray-400" />
                                    <span>{property.bathrooms} Baños</span>
                                </div>
                                <div className="flex items-center">
                                    <Maximize className="h-5 w-5 mr-1 text-gray-400" />
                                    <span>{property.sqft} m²</span>
                                </div>
                            </div>
                            <Button className="w-full bg-red-600 hover:bg-red-700">Ver Detalles</Button>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300">
                    Ver Todas las Propiedades
                </Button>
            </div>
        </section>
    )
}
