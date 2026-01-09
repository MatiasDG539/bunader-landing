import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeaderDark } from "@/components/ui/header-dark"
import { SiteFooter } from "@/components/ui/footer"
import PropertyMap from "@/components/ui/property-map"
import {
    MapPin,
    Building,
    Calendar,
    Users,
    Car,
    Sun,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Phone,
    Mail,
    TreePine
} from "lucide-react"

export default function Natania89Page() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <SiteHeaderDark />
            <main className="min-h-screen mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 py-2 sm:py-4 md:py-6 pt-20 sm:pt-24 md:pt-32">

                <section className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-6 sm:mb-8 md:mb-12 shadow-2xl group">

                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                        <Image
                            src="/img/mate_de_luna_2197/m2197_thumbnail.png"
                            alt="Edificio Mate de Luna 2197 - Imagen principal"
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
                    
                    <div className="absolute top-3 sm:top-6 right-3 sm:right-6 z-20 animate-slide-in-right">
                        <div className="flex gap-1 sm:gap-2">
                            <Link href="/propiedades/proyectos/corrientes_65">
                                <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg text-xs">
                                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                    <span className="hidden sm:inline">Anterior</span>
                                </Button>
                            </Link>
                            <Link href="/propiedades/proyectos/corrientes_65">
                                <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg text-xs">
                                    <span className="hidden sm:inline">Siguiente</span>
                                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="container mx-auto max-w-6xl relative z-10 h-full">
                        <div className="h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 px-3 sm:px-6 md:px-8">
                            <div className="text-white animate-slide-in-up">
                                <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-lg animate-pulse">
                                    En Venta
                                </div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-fade-in-scale">
                                    Edificio Mate de Luna 2197
                                </h1>
                                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-2xl text-gray-100 animate-slide-in-right">
                                    Edificio exclusivo sobre la Av. Mate de Luna, la avenida más importante de Tucumán.
                                </p>
                                <div className="flex items-center text-sm sm:text-base md:text-lg mb-4 sm:mb-6 animate-slide-in-left">
                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-400 animate-bounce flex-shrink-0" />
                                    <span className="text-xs sm:text-sm md:text-base">Av. Mate de Luna 2197, esquina Juan José Paso - Tucumán</span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-slide-in-up">
                                    <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-xs sm:text-sm">
                                        Solicitar Información
                                    </Button>
                                    <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg text-xs sm:text-sm">
                                        Descargar Brochure
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-r from-gray-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl mb-6 sm:mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            <Card className="p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Building className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Monoambiente a 2 Dorm.</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">30m² a 60m²</p>
                            </Card>
                            <Card className="p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">En Venta</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Disponible ahora</p>
                            </Card>
                            <Card className="p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Unidades Luminosas</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Con balcón</p>
                            </Card>
                            <Card className="p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Car className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Cocheras</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">Y bauleras</p>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-20 mb-6 sm:mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                            <div className="animate-slide-in-left order-2 lg:order-1">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Exclusividad en la Avenida Principal
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                                    El Edificio Mate de Luna 2197 es un desarrollo exclusivo sobre la Av. Mate de Luna, 
                                    la avenida más importante de Tucumán. Un emprendimiento que combina seguridad, 
                                    exclusividad, comodidad y refugio en medio de la ciudad.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                    Propuesta con estilo, alto potencial de revalorización y unidades amplias y funcionales.
                                    Ubicado estratégicamente con acceso directo hacia el Cerro San Javier y afluencia vehicular las 24hs.
                                </p>
                                {/* <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-sm">
                                    Agendar Visita
                                </Button> */}
                            </div>
                            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right group order-1 lg:order-2">
                                <Image
                                    src="/img/mate_de_luna_2197/m2197_render.png"
                                    alt="Render del Edificio Mate de Luna 2197"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl mb-6 sm:mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Servicios y Amenities
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Building className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">Hall Jerarquizado</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Car className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">Ingreso Vehicular</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">Pileta y Solárium</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Building className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">Terraza</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">Asador</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <TreePine className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">Plaza con Juegos</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-20 mb-6 sm:mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Galería del Proyecto
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        
                            {[
                                { src: "/img/mate_de_luna_2197/m2197_fachada.png", alt: "Fachada principal" },
                                { src: "/img/mate_de_luna_2197/m2197_thumbnail.png", alt: "Vista general del edificio" },
                                { src: "/img/mate_de_luna_2197/m2197_pileta.png", alt: "Pileta y solárium" },
                                { src: "/img/mate_de_luna_2197/m2197_terraza.png", alt: "Terraza con asador" },
                                { src: "/img/mate_de_luna_2197/m2197_hall.png", alt: "Hall de ingreso" },
                                { src: "/img/mate_de_luna_2197/m2197_plaza.png", alt: "Plaza con juegos" }
                            ].map((imagen, i) => (
                                <div key={i} className="relative h-[200px] sm:h-[220px] md:h-[250px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group cursor-pointer">
                                    <Image
                                        src={imagen.src}
                                        alt={imagen.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl mb-6 sm:mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Tipologías Disponibles
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                            <Card className="p-4 sm:p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/img/mate_de_luna_2197/m2197_monoambiente.png"
                                        alt="Monoambiente"
                                        fill
                                        className="object-cover"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 group-hover:opacity-80 transition-opacity duration-500"></div>
                                        <div className="text-center z-10">
                                            <Building className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 animate-pulse" />
                                            <p className="text-xs sm:text-sm font-medium">Monoambiente</p>
                                            <p className="text-xs mt-1 opacity-75">30 m²</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">Monoambiente</h3>
                                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">30 m² | Con balcón | Espacio Flex</p>
                                <p className="text-base sm:text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Consultar precio</p>
                            </Card>

                            <Card className="p-4 sm:p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-white border-0 group">
                                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] bg-white rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/img/mate_de_luna_2197/m2197_1_dorm.png"
                                        alt="1 Dormitorio"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">1 Dormitorio</h3>
                                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">40 m² | Funcional | Terminaciones de primera</p>
                                <p className="text-base sm:text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Consultar precio</p>
                            </Card>

                            <Card className="p-4 sm:p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group sm:col-span-2 md:col-span-1">
                                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] bg-white rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/img/mate_de_luna_2197/m2197_2_dorm.png"
                                            alt="2 Dormitorios"
                                            fill
                                            className="object-contain"
                                            style={{ objectPosition: "center" }}
                                        />
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">2 Dormitorios</h3>
                                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">60 m² | Amplio | Luminoso</p>
                                <p className="text-base sm:text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Consultar precio</p>
                            </Card>

                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl mb-6 sm:mb-8 md:mb-12 shadow-xl border border-gray-100/50">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Terminaciones Destacadas
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                            <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Pisos y Revestimientos</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Pisos de porcelanato premium</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Revoques interiores con terminación fina</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Zócalos de porcelanato</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Carpintería</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Carpintería exterior: Aluminio negro</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Carpintería interior: Puertas de madera</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Ventanas con DVH</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Cocina y Placares</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Muebles de cocina: Melamina premium</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Mesadas: Granito natural</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Placares empotrados</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Climatización</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Preinstalación aire acondicionado</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Agua caliente central</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Calefacción por radiadores</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Sanitarios</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Griferías: FV línea premium</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Artefactos sanitarios: FERRUM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 sm:py-12 md:py-20 mb-6 sm:mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">Ubicación Privilegiada</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                            <div className="order-2 lg:order-1">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">En la Avenida Principal de Tucumán</h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                                    Ubicado sobre la Av. Mate de Luna 2197, esquina Juan José Paso,
                                    en la avenida más importante de la ciudad con acceso directo hacia el Cerro San Javier.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">A 2 cuadras del Parque Avellaneda</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">A 15 cuadras del centro y plaza principal</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Acceso directo hacia el Cerro San Javier</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Afluencia vehicular las 24hs</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Cercano a propuestas sociales, culturales y educativas</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                                <PropertyMap
                                    address="Av. Mate de Luna 2197, San Miguel de Tucumán, Tucumán"
                                    title="Edificio Mate de Luna 2197"
                                    geoLat={-26.8251689}
                                    geoLong={-65.2307431}
                                    zoom={16}
                                    className="h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

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
                            <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-red-600 backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
                                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                Llamar Ahora
                            </Button>
                            <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-red-600 backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
                                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                Enviar Consulta
                            </Button>
                            <Link href="/contacto">
                                <Button size="sm" className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
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
