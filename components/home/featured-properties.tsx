"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin } from "lucide-react"
import { getFeaturedProperties, Property } from "@/actions/tokkoApi"

export function FeaturedProperties() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [properties, setProperties] = useState<Property[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFeaturedProperties = async () => {
            try {
                setLoading(true)
                const data = await getFeaturedProperties()
                setProperties(data)
            } catch (error) {
                console.error("Error fetching featured properties:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchFeaturedProperties()
    }, [])

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

    const getOperationTypeTag = (operationType: string) => {
        if (operationType === 'sale') {
            return (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Venta
                </div>
            )
        } else if (operationType === 'rent') {
            return (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Alquiler
                </div>
            )
        }
        return null
    }

    return (
        <section className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="text-center lg:text-left mb-8 sm:mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 whitespace-nowrap">
                                Propiedades Destacadas
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                Descubre nuestra selección de propiedades disponibles ahora mismo.
                            </p>
                        </div>
                        <div className="hidden lg:flex gap-2 mt-4 lg:mt-0">
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
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {loading ? (
                    <div className="flex justify-center items-center w-full py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                    </div>
                ) : properties.length > 0 ? (
                    properties.map((property) => (
                        <Card
                            key={property.id}
                            className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] border-0 overflow-hidden shadow-lg rounded-xl flex-shrink-0"
                        >
                            <div className="relative h-[200px] sm:h-[220px] lg:h-[250px] w-full">
                                <Image 
                                    src={property.images?.[0]?.image || "/placeholder.svg"} 
                                    alt={property.title} 
                                    fill 
                                    className="object-cover" 
                                />
                                {getOperationTypeTag(property.operation_type)}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-20 sm:h-24" />
                                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">{property.price}</div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold mb-2">{property.title}</h3>
                                <div className="flex items-center text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">
                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                    <span className="truncate">{property.full_location || property.address}</span>
                                </div>
                                <div className="flex justify-between mb-4 sm:mb-6 text-sm sm:text-base">
                                    <div className="flex items-center">
                                        <Bed className="h-4 w-4 sm:h-5 sm:w-5 mr-1 text-gray-400" />
                                        <span>{property.bedrooms || '-'} Hab</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Bath className="h-4 w-4 sm:h-5 sm:w-5 mr-1 text-gray-400" />
                                        <span>{property.bathrooms || '-'} Baños</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Maximize className="h-4 w-4 sm:h-5 sm:w-5 mr-1 text-gray-400" />
                                        <span>{property.sqft || '-'} m²</span>
                                    </div>
                                </div>
                                <Link href={`/propiedades/${property.id}`}>
                                    <Button className="w-full bg-red-600 hover:bg-red-700 text-sm sm:text-base py-2 sm:py-3">Ver Detalles</Button>
                                </Link>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full py-20">
                        <p className="text-gray-500 text-lg">No hay propiedades destacadas disponibles</p>
                    </div>
                )}
            </div>

            <div className="mt-8 sm:mt-12 text-center px-6">
                <Link href="/propiedades">
                    <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-gray-300">
                        Ver Todas las Propiedades
                    </Button>
                </Link>
            </div>
        </section>
    )
}
