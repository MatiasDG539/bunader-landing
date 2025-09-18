"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin } from "lucide-react"
import { getRentProperties, Property } from "@/actions/tokkoApi"
import Link from "next/link"

export function RentSection() {
    const [rentProperties, setRentProperties] = useState<Property[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({})

    // Helper function to check if a value is valid (not 0, "0", "00", null, undefined)
    const isValidValue = (value: string | number | null | undefined): boolean => {
        if (!value) return false;
        const numValue = Number(value);
        return numValue > 0;
    };

    useEffect(() => {
        if (!rentProperties.length) return;

        const intervalIds: Record<number, NodeJS.Timeout> = {};

        rentProperties.forEach(property => {
            if (property.images.length > 1) {
                intervalIds[property.id] = setInterval(() => {
                    setActiveImageIndex(prev => ({
                        ...prev,
                        [property.id]: ((prev[property.id] || 0) + 1) % property.images.length
                    }));
                }, 7000);
            }
        });

        return () => {
            Object.values(intervalIds).forEach(id => clearInterval(id));
        };
    }, [rentProperties]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true)
                const properties = await getRentProperties()
                setRentProperties(properties)
            } catch (error) {
                console.error("Error fetching rent properties:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProperties()
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

    return (
        <section className="py-16">
            <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Propiedades en Alquiler</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Encuentra el lugar perfecto para vivir entre nuestras propiedades disponibles para alquiler.
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
                {loading ? (
                    <div className="flex justify-center items-center w-full py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                    </div>
                ) : rentProperties.length > 0 ? (
                    rentProperties.map((property) => (
                        <Card
                            key={property.id}
                            className="min-w-[350px] max-w-[350px] border-0 overflow-hidden shadow-lg rounded-xl flex-shrink-0"
                        >
                            <div className="relative h-[250px] w-full">
                                <div className="relative w-full h-full">
                                    {property.images && property.images.length > 0 &&
                                        property.images.map((image, index) => (
                                            <Image
                                                key={index}
                                                src={image.image || "/placeholder.svg"}
                                                alt={`${property.title} - imagen ${index + 1}`}
                                                fill
                                                className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === (activeImageIndex[property.id] || 0) ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            />
                                        ))
                                    }
                                    {(!property.images || property.images.length === 0) && (
                                        <Image
                                            src="/placeholder.svg"
                                            alt={property.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>

                                {property.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveImageIndex(prev => ({
                                                    ...prev,
                                                    [property.id]: (prev[property.id] - 1 + property.images.length) % property.images.length
                                                }));
                                            }}
                                            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 shadow-md transition-all"
                                            aria-label="Imagen anterior"
                                        >
                                            <ChevronLeft className="h-5 w-5 text-gray-800" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveImageIndex(prev => ({
                                                    ...prev,
                                                    [property.id]: (prev[property.id] + 1) % property.images.length
                                                }));
                                            }}
                                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 shadow-md transition-all"
                                            aria-label="Imagen siguiente"
                                        >
                                            <ChevronRight className="h-5 w-5 text-gray-800" />
                                        </button>
                                    </>
                                )}

                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    En Alquiler
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold">{property.price || 'Consultar'}</div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col h-[220px]">
                                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                <div className="flex items-center text-gray-500 mb-4">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {property.short_location|| property.short_location || 'Ubicación no disponible'}
                                </div>
                                <div className="flex flex-wrap gap-4 mb-6">
                                    {isValidValue(property.bedrooms) && (
                                        <div className="flex items-center">
                                            <Bed className="h-5 w-5 mr-1 text-gray-400" />
                                            <span>{property.bedrooms} Hab</span>
                                        </div>
                                    )}
                                    {isValidValue(property.bathrooms) && (
                                        <div className="flex items-center">
                                            <Bath className="h-5 w-5 mr-1 text-gray-400" />
                                            <span>{property.bathrooms} Baños</span>
                                        </div>
                                    )}
                                    {isValidValue(property.sqft) && (
                                        <div className="flex items-center">
                                            <Maximize className="h-5 w-5 mr-1 text-gray-400" />
                                            <span>{property.sqft} m²</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-auto">
                                    <Link href={`/propiedades/${property.id}`}>
                                        <Button className="w-full bg-red-600 hover:bg-red-800">Ver Detalles</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full py-20">
                        <p className="text-gray-500 text-lg">No se encontraron propiedades en alquiler</p>
                    </div>
                )}
            </div>

            <div className="mt-10 text-center">
                <Link href='/propiedades/alquiler'>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300">
                        Ver Todas las Propiedades en Alquiler
                    </Button>
                </Link>
            </div>
        </section>
    )
}
