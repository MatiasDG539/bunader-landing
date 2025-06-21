"use client"

import { useEffect, useState, useCallback } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Bath, Grid3X3, MapPin, Home, Calendar, Building } from "lucide-react"
import { SiteHeaderDark } from "@/components/ui/header-dark"
import { SiteFooter } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import PropertyMap from "@/components/ui/property-map"

import { getPropertyById, Property } from "@/actions/tokkoApi"

// Interface extendida para propiedades adicionales
interface ExtendedProperty extends Property {
    tags?: Array<{
        id: number;
        name: string;
        type: number;
    }>;
    property_condition?: string;
    situation?: string;
    expenses?: number;
    toilet_amount?: number;
    roofed_surface?: string;
    semiroofed_surface?: string;
    unroofed_surface?: string;
    rich_description?: string;
    producer?: {
        name?: string;
        phone?: string;
        cellphone?: string;
        email?: string;
    };
    reference_code?: string;
}

export default function PropertyPage() {
    const { id } = useParams()
    const [property, setProperty] = useState<ExtendedProperty | null>(null)
    const [loading, setLoading] = useState(true)
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

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

    const openImageModal = () => {
        setIsImageModalOpen(true)
    }

    const closeImageModal = () => {
        setIsImageModalOpen(false)
    }

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeImageModal()
        }
    }, [])

    useEffect(() => {
        if (isImageModalOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        } else {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
        }
    }, [isImageModalOpen, handleKeyDown])

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
                            <span>{property.full_location || property.address}</span>
                        </div>
                    </div>

                    <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
                        <div className="relative aspect-video w-full bg-white">
                            {property.images && property.images.length > 0 ? (
                                <>
                                    <Image
                                        src={property.images[activeImageIndex]?.image || "/placeholder.svg"}
                                        alt={`${property.title} - imagen ${activeImageIndex + 1}`}
                                        fill
                                        className="object-contain cursor-pointer transition-transform hover:scale-[1.01]"
                                        onClick={openImageModal}
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
                                    className="object-contain"
                                />
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                            
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 text-center">
                                    {property.total_surface !== undefined && property.total_surface > 0 && (
                                        <div className="flex flex-col items-center p-4">
                                            <Grid3X3 className="h-8 w-8 text-gray-600 mb-2" />
                                            <span className="text-lg font-bold text-gray-900">{property.total_surface} m²</span>
                                            <span className="text-sm text-gray-500">construido</span>
                                        </div>
                                    )}
                                    {property.bedrooms !== undefined && property.bedrooms > 0 && (
                                        <div className="flex flex-col items-center p-4">
                                            <Home className="h-8 w-8 text-gray-600 mb-2" />
                                            <span className="text-lg font-bold text-gray-900">{property.bedrooms}</span>
                                            <span className="text-sm text-gray-500">ambiente{property.bedrooms > 1 ? 's' : ''}</span>
                                        </div>
                                    )}
                                    {property.bathrooms !== undefined && property.bathrooms > 0 && (
                                        <div className="flex flex-col items-center p-4">
                                            <Bath className="h-8 w-8 text-gray-600 mb-2" />
                                            <span className="text-lg font-bold text-gray-900">{property.bathrooms}</span>
                                            <span className="text-sm text-gray-500">baño{property.bathrooms > 1 ? 's' : ''}</span>
                                        </div>
                                    )}
                                    {property.age !== undefined && (
                                        <div className="flex flex-col items-center p-4">
                                            <Calendar className="h-8 w-8 text-gray-600 mb-2" />
                                            <span className="text-lg font-bold text-gray-900">
                                                {property.age === 0 ? "A estrenar" : `${property.age} años`}
                                            </span>
                                            <span className="text-sm text-gray-500">antigüedad</span>
                                        </div>
                                    )}
                                    {property.disposition && property.disposition.trim() !== '' && (
                                        <div className="flex flex-col items-center p-4">
                                            <Building className="h-8 w-8 text-gray-600 mb-2" />
                                            <span className="text-lg font-bold text-gray-900">{property.disposition}</span>
                                            <span className="text-sm text-gray-500">orientación</span>
                                        </div>
                                    )}
                                </div>

                                {/* Información general */}
                                {((property.bedrooms !== undefined && property.bedrooms > 0) ||
                                  (property.age !== undefined) ||
                                  (property.bathrooms !== undefined && property.bathrooms > 0) ||
                                  (property.disposition && property.disposition.trim() !== '') ||
                                  (property.property_condition && property.property_condition.trim() !== '') ||
                                  (property.situation && property.situation.trim() !== '') ||
                                  (property.expenses !== undefined && property.expenses > 0) ||
                                  (property.toilet_amount !== undefined && property.toilet_amount > 0) ||
                                  (property.parking_lot_amount !== undefined && property.parking_lot_amount > 0)) && (
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold mb-6">Información general</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                            {property.bedrooms !== undefined && property.bedrooms > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Ambiente:</span>
                                                    <span className="font-medium">{property.bedrooms}</span>
                                                </div>
                                            )}
                                            {property.age !== undefined && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Antigüedad:</span>
                                                    <span className="font-medium">
                                                        {property.age === 0 ? "A estrenar" : `${property.age} años`}
                                                    </span>
                                                </div>
                                            )}
                                            {property.bathrooms !== undefined && property.bathrooms > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Baño:</span>
                                                    <span className="font-medium">{property.bathrooms}</span>
                                                </div>
                                            )}
                                            {property.disposition && property.disposition.trim() !== '' && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Disposición:</span>
                                                    <span className="font-medium">{property.disposition}</span>
                                                </div>
                                            )}
                                            {property.property_condition && property.property_condition.trim() !== '' && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Condición:</span>
                                                    <span className="font-medium">{property.property_condition}</span>
                                                </div>
                                            )}
                                            {property.situation && property.situation.trim() !== '' && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Situación:</span>
                                                    <span className="font-medium">{property.situation}</span>
                                                </div>
                                            )}
                                            {property.expenses !== undefined && property.expenses > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Expensas:</span>
                                                    <span className="font-medium">${property.expenses.toLocaleString()}</span>
                                                </div>
                                            )}
                                            {property.toilet_amount !== undefined && property.toilet_amount > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Toilettes:</span>
                                                    <span className="font-medium">{property.toilet_amount}</span>
                                                </div>
                                            )}
                                            {property.parking_lot_amount !== undefined && property.parking_lot_amount > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Cocheras:</span>
                                                    <span className="font-medium">{property.parking_lot_amount}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Ambientes */}
                                {property.tags && property.tags.filter((tag) => tag.type === 2).length > 0 && (
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold mb-6">Ambientes</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {property.tags
                                                .filter((tag) => tag.type === 2)
                                                .map((tag) => (
                                                    <span
                                                        key={tag.id}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                                                    >
                                                        ✓ {tag.name}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* Adicionales */}
                                {property.tags && property.tags.filter((tag) => tag.type === 3).length > 0 && (
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold mb-6">Adicionales</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {property.tags
                                                .filter((tag) => tag.type === 3)
                                                .map((tag) => (
                                                    <span
                                                        key={tag.id}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                                                    >
                                                        ✓ {tag.name}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* Superficies y medidas */}
                                {((property.total_surface !== undefined && property.total_surface > 0) ||
                                  (property.roofed_surface && parseFloat(property.roofed_surface) > 0) ||
                                  (property.semiroofed_surface && parseFloat(property.semiroofed_surface) > 0) ||
                                  (property.unroofed_surface && parseFloat(property.unroofed_surface) > 0)) && (
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold mb-6">Superficies y medidas</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                            {property.total_surface !== undefined && property.total_surface > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Total construido:</span>
                                                    <span className="font-medium">{property.total_surface} m²</span>
                                                </div>
                                            )}
                                            {property.roofed_surface && parseFloat(property.roofed_surface) > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Superficie techada:</span>
                                                    <span className="font-medium">{property.roofed_surface} m²</span>
                                                </div>
                                            )}
                                            {property.semiroofed_surface && parseFloat(property.semiroofed_surface) > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Superficie semi-techada:</span>
                                                    <span className="font-medium">{property.semiroofed_surface} m²</span>
                                                </div>
                                            )}
                                            {property.unroofed_surface && parseFloat(property.unroofed_surface) > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Superficie descubierta:</span>
                                                    <span className="font-medium">{property.unroofed_surface} m²</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold mb-4">Descripción</h2>
                                    <div className="text-gray-700 leading-relaxed">
                                        {property.rich_description ? (
                                            <div 
                                                dangerouslySetInnerHTML={{ 
                                                    __html: property.rich_description
                                                        .replace(/<br\s*\/?>/gi, '<br />')
                                                        .replace(/<p><br \/><\/p>/gi, '<br />')
                                                }} 
                                            />
                                        ) : property.description_only ? (
                                            property.description_only
                                                .split(/\n\s*\n/)
                                                .filter(paragraph => paragraph.trim())
                                                .map((paragraph, index) => (
                                                    <p key={index} className="mb-4 last:mb-0">
                                                        {paragraph.trim()}
                                                    </p>
                                                ))
                                        ) : (
                                            'No hay descripción disponible'
                                        )}
                                    </div>
                                    
                                    {/* Información del agente */}
                                    {/* {property.producer && (
                                        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                                            <h3 className="text-lg font-bold mb-4">Información del agente</h3>
                                            <div className="flex items-start space-x-4">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900">{property.producer.name}</h4>
                                                    <div className="space-y-1 text-sm">
                                                        {property.producer.email && (
                                                            <p className="text-gray-600">
                                                                <span className="font-medium">Email:</span> {property.producer.email}
                                                            </p>
                                                        )}
                                                        {property.producer.phone && (
                                                            <p className="text-gray-600">
                                                                <span className="font-medium">Teléfono:</span> {property.producer.phone}
                                                            </p>
                                                        )}
                                                        {property.producer.cellphone && (
                                                            <p className="text-gray-600">
                                                                <span className="font-medium">Celular:</span> {property.producer.cellphone}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )} */}
                                </div>

                            </div>

                            {/* Sección del Mapa */}
                            {/* Debug: Mostramos siempre el mapa para ver si funciona */}
                            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                                <h2 className="text-2xl font-bold mb-4">Ubicación</h2>
                                <PropertyMap
                                    address={property.full_location || property.address || "Buenos Aires, Argentina"}
                                    title={property.title}
                                    className="aspect-video w-full"
                                    geoLat={property.geo_lat}
                                    geoLong={property.geo_long}
                                />
                            </div>
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

            {/* Modal para imagen en grande */}
            {isImageModalOpen && property?.images && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                        <button
                            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                            onClick={closeImageModal}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <Image
                            src={property.images[activeImageIndex]?.image || "/placeholder.svg"}
                            alt={`${property.title} - imagen ${activeImageIndex + 1}`}
                            fill
                            className="object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                        
                        {property.images.length > 1 && (
                            <>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        changeImage('prev')
                                    }}
                                >
                                    <ChevronLeft className="h-8 w-8" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        changeImage('next')
                                    }}
                                >
                                    <ChevronRight className="h-8 w-8" />
                                </Button>
                                
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                                    {property.images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`h-3 w-3 rounded-full transition-colors ${
                                                index === activeImageIndex ? "bg-white" : "bg-white/50"
                                            }`}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setActiveImageIndex(index)
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        
                        <div className="absolute bottom-6 right-6 text-white/80 text-sm">
                            {activeImageIndex + 1} / {property.images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}