"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Bed, Bath, Grid3X3, Car, MapPin } from "lucide-react"
import { SiteHeaderDark } from "@/components/ui/header-dark"
import { SiteFooter } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"

import { getPropertyById, Property } from "@/actions/tokkoApi"

export default function PropertyPage() {
    const { id } = useParams()
    const [property, setProperty] = useState<Property | null>(null)
    const [loading, setLoading] = useState(true)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                setLoading(true)
                const propertyId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string)
                const data = await getPropertyById(propertyId)
                setProperty(data)
            } catch (error) {
                console.error("Error fetching property details:", error)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchProperty()
        }
    }, [id])

    const changeImage = (direction: 'next' | 'prev') => {
        if (!property || !property.images || property.images.length <= 1) return

        setActiveImageIndex(prevIndex => {
            if (direction === 'next') {
                return (prevIndex + 1) % property.images.length
            } else {
                return (prevIndex - 1 + property.images.length) % property.images.length
            }
        })
    }

    if (loading) {
        return (
            <div className="flex min-h-screen flex-col bg-gray-50">
                <SiteHeaderDark />
                <main className="flex-1 py-12">
                    <div className="container mx-auto px-4 flex justify-center items-center h-[50vh]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                    </div>
                </main>
                <SiteFooter />
            </div>
        )
    }

    if (!property) {
        return (
            <div className="flex min-h-screen flex-col bg-gray-50">
                <SiteHeaderDark />
                <main className="flex-1 py-12">
                    <div className="container mx-auto px-4 text-center py-20">
                        <h1 className="text-3xl font-bold mb-4">Propiedad no encontrada</h1>
                        <p className="text-gray-600 mb-8">La propiedad que estás buscando no está disponible o no existe.</p>
                        <Button onClick={() => window.history.back()}>Volver atrás</Button>
                    </div>
                </main>
                <SiteFooter />
            </div>
        )
    }

    const propertyType = property.operation_type === "venta" ? "En Venta" : "En Alquiler"
    const formattedPrice = property.price || "Consultar precio"

    return (

        <div className="flex min-h-screen flex-col bg-gray-50">

            <SiteHeaderDark />

            <main className="flex-1 py-8 mx-auto max-w-7xl mt-20">
                <div className="container mx-auto px-4">

                    <div className="mb-6 flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-red-600">Inicio</Link>
                        <span className="mx-2">/</span>
                        <Link href="/propiedades" className="hover:text-red-600">Propiedades</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">{property.title}</span>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
                        <div className="flex items-center text-gray-600">
                            <MapPin className="h-5 w-5 mr-1" />
                            <span>{property.full_location || property.location}</span>
                        </div>
                    </div>

                    <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
                        <div className="relative aspect-video w-full">
                            {property.images && property.images.length > 0 ? (
                                <>
                                    <Image
                                        src={property.images[activeImageIndex]?.image || "/placeholder.svg"}
                                        alt={`${property.title} - imagen ${activeImageIndex + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    {property.images.length > 1 && (
                                        <>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white"
                                                onClick={() => changeImage('prev')}
                                            >
                                                <ChevronLeft className="h-6 w-6" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white"
                                                onClick={() => changeImage('next')}
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                            </Button>
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {property.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                                            index === activeImageIndex ? "bg-white" : "bg-white/50"
                                                        }`}
                                                        onClick={() => setActiveImageIndex(index)}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <Image
                                    src="/placeholder.svg"
                                    alt={property.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                            
                                <div className="flex flex-wrap gap-6 mb-8 border-b pb-6">
                                    {property.bedrooms && (
                                        <div className="flex items-center">
                                            <Bed className="h-5 w-5 mr-2 text-gray-400" />
                                            <span><strong>{property.bedrooms}</strong> Dormitorios</span>
                                        </div>
                                    )}
                                    {property.bathrooms && (
                                        <div className="flex items-center">
                                            <Bath className="h-5 w-5 mr-2 text-gray-400" />
                                            <span><strong>{property.bathrooms}</strong> Baños</span>
                                        </div>
                                    )}
                                    {property.sqft && (
                                        <div className="flex items-center">
                                            <Grid3X3 className="h-5 w-5 mr-2 text-gray-400" />
                                            <span><strong>{property.sqft}</strong> m²</span>
                                        </div>
                                    )}
                                    {property.parking_lot_amount && (
                                        <div className="flex items-center">
                                            <Car className="h-5 w-5 mr-2 text-gray-400" />
                                            <span><strong>{property.parking_lot_amount}</strong> Estacionamientos</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">Descripción</h2>
                                    <div className="text-gray-700 space-y-4" 
                                        dangerouslySetInnerHTML={{ __html: property.description_only || 'No hay descripción disponible' }}>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Detalles de la propiedad</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                                        <div className="flex items-center">
                                            <span className="font-semibold mr-2">Tipo:</span>
                                            <span>{property.type || 'No especificado'}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-semibold mr-2">Año de construcción:</span>
                                            <span>{property.age ? new Date().getFullYear() - property.age : 'No especificado'}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-semibold mr-2">Orientación:</span>
                                            <span>{property.orientation || 'No especificado'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {property.location && (
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <h2 className="text-2xl font-bold mb-4">Ubicación</h2>
                                    <div className="aspect-video w-full bg-gray-200 rounded-lg">
                                        <div className="w-full h-full flex items-center justify-center text-gray-500 p-4">
                                            <p>{property.full_location || property.location}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                                <h2 className="text-2xl font-bold mb-4">
                                    {formattedPrice}
                                </h2>
                                <p className="text-gray-500 mb-6">
                                    {propertyType} - Ref: #{property.id}
                                </p>
                                <div className="space-y-4">
                                    <div className="mb-4">
                                        <Link href="/contacto" className="block">
                                            <Button className="w-full bg-red-600 hover:bg-red-700">
                                                Contactar al agente
                                            </Button>
                                        </Link>
                                    </div>
                                    <Link href="/contacto">
                                        <Button variant="outline" className="w-full">
                                            Solicitar visita
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    )
}