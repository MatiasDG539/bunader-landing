import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeaderDark } from "@/components/ui/header-dark"
import { SiteFooter } from "@/components/ui/footer"
import PropertyMap from "@/components/ui/property-map"
import {
    MapPin,
    Building,
    Calendar,
    Tag,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    MessageCircle,
    Mail,
    Box,
} from "lucide-react"
import { getDevelopmentById, getDevelopments } from "@/actions/gvamaxApi"
import { parseDevelopmentSlug } from "@/lib/gvamax/mappers"
import type { Development } from "@/lib/properties/types"

// Página genérica de emprendimiento, generada desde GVAmax. Toma la estructura
// de la antigua página fija de Corrientes 65 (legacy/proyectos-hardcodeados/)
// y muestra solo las secciones para las que GVAmax tiene datos.

export const revalidate = 300

/** Mismo número que el botón flotante de WhatsApp (components/ui/whatsapp-button.tsx) */
const BUNADER_WHATSAPP = "5493815726417"

interface PageProps {
    params: Promise<{ slug: string }>
}

async function loadDevelopment(slug: string): Promise<Development | null> {
    const id = parseDevelopmentSlug(slug)
    return id ? getDevelopmentById(id) : null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const development = await loadDevelopment(slug)
    if (!development) return { title: "Proyecto no encontrado | Bunader Inmobiliaria" }

    const cover = development.images?.[0]?.image
    return {
        title: `${development.name} | Bunader Inmobiliaria`,
        description: development.short_description || `Proyecto ${development.name} - ${development.full_location || ""}`,
        openGraph: cover && cover.startsWith("http") ? { images: [cover] } : undefined,
    }
}

export default async function DevelopmentPage({ params }: PageProps) {
    const { slug } = await params

    // URLs viejas sin id (ej. /propiedades/proyectos/corrientes_65) → listado
    if (!parseDevelopmentSlug(slug)) redirect("/propiedades/proyectos")

    const development = await loadDevelopment(slug)
    if (!development) notFound()

    // Si cambió el nombre en GVAmax, redirigir a la URL actual
    if (slug !== development.slug) redirect(`/propiedades/proyectos/${development.slug}`)

    const allDevelopments = await getDevelopments()
    const index = allDevelopments.findIndex((d) => d.id === development.id)
    const hasSiblings = index !== -1 && allDevelopments.length > 1
    const previous = hasSiblings ? allDevelopments[(index - 1 + allDevelopments.length) % allDevelopments.length] : null
    const next = hasSiblings ? allDevelopments[(index + 1) % allDevelopments.length] : null

    const images = (development.images || []).filter((img) => img.image && img.image !== "/placeholder.svg")
    const cover = images[0]?.image || "/placeholder.svg"
    const secondaryImage = images[1]?.image || cover
    const location = development.full_location || development.address
    const youtube = development.videos?.find((v) => v.provider === "youtube")
    const tour = development.videos?.find((v) => v.provider_id === 3)
    const hasMap = Boolean((development.geo_lat && development.geo_long) || location)
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        development.geo_lat && development.geo_long ? `${development.geo_lat},${development.geo_long}` : location || development.name
    )}`

    const whatsappUrl = `https://wa.me/${BUNADER_WHATSAPP}?text=${encodeURIComponent(
        `Hola, me interesa el proyecto ${development.name}. ¿Me podrían dar más información?`
    )}`

    const highlights = [
        development.type && { icon: Building, title: development.type, subtitle: development.situation ? `Desarrollo ${development.situation.toLowerCase()}` : "Tipo de proyecto" },
        development.status && { icon: Calendar, title: development.status, subtitle: "Estado de obra" },
        { icon: Tag, title: development.price || "Consultar", subtitle: development.price ? "Precio desde" : "Precio" },
        development.short_location && { icon: MapPin, title: development.short_location, subtitle: "Ubicación" },
    ].filter(Boolean) as Array<{ icon: typeof Building; title: string; subtitle: string }>

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <SiteHeaderDark />
            <main className="min-h-screen mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 py-2 sm:py-4 md:py-6 pt-20 sm:pt-24 md:pt-32">

                {/* Hero */}
                <section className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-6 sm:mb-8 md:mb-12 shadow-2xl group">
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                        <Image
                            src={cover}
                            alt={`${development.name} - Imagen principal`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    <div className="absolute top-3 sm:top-6 left-3 sm:left-6 z-20 animate-slide-in-left">
                        <Link href="/propiedades/proyectos">
                            <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg text-xs sm:text-sm">
                                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                <span className="hidden sm:inline">Volver a Proyectos</span>
                                <span className="sm:hidden">Volver</span>
                            </Button>
                        </Link>
                    </div>

                    {previous && next && (
                        <div className="absolute top-3 sm:top-6 right-3 sm:right-6 z-20 animate-slide-in-right">
                            <div className="flex gap-1 sm:gap-2">
                                <Link href={`/propiedades/proyectos/${previous.slug}`}>
                                    <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg text-xs">
                                        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                        <span className="hidden sm:inline">Anterior</span>
                                    </Button>
                                </Link>
                                <Link href={`/propiedades/proyectos/${next.slug}`}>
                                    <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg text-xs">
                                        <span className="hidden sm:inline">Siguiente</span>
                                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="container mx-auto max-w-6xl relative z-10 h-full">
                        <div className="h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 px-3 sm:px-6 md:px-8">
                            <div className="text-white animate-slide-in-up">
                                {development.status && (
                                    <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-lg animate-pulse">
                                        {development.status}
                                    </div>
                                )}
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-fade-in-scale">
                                    {development.name}
                                </h1>
                                {development.short_description && (
                                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-2xl text-gray-100 animate-slide-in-right line-clamp-3">
                                        {development.short_description}
                                    </p>
                                )}
                                {location && (
                                    <div className="flex items-center text-sm sm:text-base md:text-lg mb-4 sm:mb-6 animate-slide-in-left">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-400 animate-bounce flex-shrink-0" />
                                        <span className="text-xs sm:text-sm md:text-base">{location}</span>
                                    </div>
                                )}
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-slide-in-up">
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                        <Button size="sm" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-xs sm:text-sm">
                                            Solicitar Información
                                        </Button>
                                    </a>
                                    {images.length > 1 && (
                                        <a href="#galeria">
                                            <Button size="sm" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg text-xs sm:text-sm">
                                                Ver Galería
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Datos principales */}
                <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-r from-gray-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl mb-6 sm:mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <div className={`grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 ${highlights.length >= 4 ? "sm:grid-cols-4" : highlights.length === 3 ? "sm:grid-cols-3" : ""}`}>
                            {highlights.map(({ icon: Icon, title, subtitle }) => (
                                <Card key={subtitle} className="p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">{title}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">{subtitle}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Descripción */}
                {development.rich_description && (
                    <section className="py-8 sm:py-12 md:py-20 mb-6 sm:mb-8 md:mb-12">
                        <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                                <div className="animate-slide-in-left order-2 lg:order-1">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                        Sobre el proyecto
                                    </h2>
                                    <div
                                        className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: development.rich_description }}
                                    />
                                </div>
                                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right group order-1 lg:order-2">
                                    <Image
                                        src={secondaryImage}
                                        alt={`${development.name} - Vista del proyecto`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Galería */}
                {images.length > 1 && (
                    <section id="galeria" className="py-8 sm:py-12 md:py-20 mb-6 sm:mb-8 md:mb-12 scroll-mt-28">
                        <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Galería del Proyecto
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                                {images.map((imagen, i) => (
                                    <a
                                        key={imagen.image}
                                        href={imagen.original || imagen.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block h-[200px] sm:h-[220px] md:h-[250px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group"
                                    >
                                        <Image
                                            src={imagen.image}
                                            alt={`${development.name} - imagen ${i + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Video y recorrido 360° */}
                {(youtube || tour) && (
                    <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl mb-6 sm:mb-8 md:mb-12 shadow-xl">
                        <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                {youtube && tour ? "Video y Recorrido Virtual" : youtube ? "Video del Proyecto" : "Recorrido Virtual 360°"}
                            </h2>
                            <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${youtube && tour ? "lg:grid-cols-2" : ""}`}>
                                {youtube && (
                                    <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black shadow-2xl">
                                        <iframe
                                            src={youtube.player_url}
                                            title={`${development.name} - video`}
                                            className="absolute inset-0 h-full w-full border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                {tour && (
                                    <div>
                                        <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black shadow-2xl">
                                            <iframe
                                                src={tour.player_url}
                                                title={`${development.name} - recorrido 360°`}
                                                className="absolute inset-0 h-full w-full border-0"
                                                allow="fullscreen; vr; xr-spatial-tracking"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </div>
                                        <a href={tour.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700">
                                            <Box className="h-4 w-4" />
                                            Abrir el recorrido en pantalla completa
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Ubicación */}
                {hasMap && (
                    <section className="py-8 sm:py-12 md:py-20 mb-6 sm:mb-8 md:mb-12">
                        <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">Ubicación</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{development.short_location || development.name}</h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        {location && (
                                            <div className="flex items-center">
                                                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                                                <span className="text-sm sm:text-base">{location}</span>
                                            </div>
                                        )}
                                        <a
                                            href={googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-red-600 hover:text-red-700"
                                        >
                                            Ver en Google Maps
                                            <ChevronRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                                    <PropertyMap
                                        address={location || development.name}
                                        title={development.name}
                                        geoLat={development.geo_lat}
                                        geoLong={development.geo_long}
                                        zoom={16}
                                        className="h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Contacto */}
                <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
                    <div className="container mx-auto max-w-4xl px-3 sm:px-6 md:px-8 text-center relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-scale">
                            ¿Te interesa este proyecto?
                        </h2>
                        <p className="text-sm sm:text-base md:text-xl text-white/90 mb-6 sm:mb-8 animate-slide-in-up">
                            Contacta con nuestro equipo de especialistas para más información y asesoramiento personalizado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-in-up">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-red-600 backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
                                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                    Consultar por WhatsApp
                                </Button>
                            </a>
                            <Link href="/contacto">
                                <Button size="sm" className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
                                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                    Ver Contacto
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}
