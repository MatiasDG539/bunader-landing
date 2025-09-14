import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeaderDark } from "@/components/ui/header-dark"
import { SiteFooter } from "@/components/ui/footer"
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
    Home,
    TreePine,
    Mountain,
    Clock,
    Star
} from "lucide-react"

export default function Natania89Page() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <SiteHeaderDark />
            <main className="min-h-screen mx-4 md:mx-8 lg:mx-12 xl:mx-16 py-4 md:py-6 pt-24 md:pt-32">

                <section className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 shadow-2xl group">

                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                        <Image
                            src="/img/mate_de_luna_2197/"
                            alt="Edificio Natania 89 - Imagen principal"
                            fill
                            className="object-cover"
                            priority
                        />

                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center animate-slide-in-left">
                        <Link href="/propiedades/proyectos">
                            <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Volver a Proyectos
                            </Button>
                        </Link>
                        
                        <div className="flex gap-2">
                            <Link href="/propiedades/proyectos/corrientes_65">
                                <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                                    <ChevronLeft className="h-4 w-4 mr-1" />
                                    Anterior
                                </Button>
                            </Link>
                            <Link href="/propiedades/proyectos/corrientes_65">
                                <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                                    Siguiente
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="container mx-auto max-w-6xl relative z-10 h-full">
                        <div className="h-full flex flex-col justify-end pb-16 px-6 md:px-8">
                            <div className="text-white animate-slide-in-up">
                                <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 shadow-lg animate-pulse">
                                    En Venta
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-fade-in-scale">
                                    Natania 89
                                </h1>
                                <p className="text-xl md:text-2xl mb-2 max-w-2xl text-gray-100 animate-slide-in-right font-semibold">
                                    Redefine tu estilo de vida
                                </p>
                                <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200 animate-slide-in-right">
                                    Edificio exclusivo sobre la Av. Mate de Luna, la avenida más importante de Tucumán.
                                </p>
                                <div className="flex items-center text-lg mb-6 animate-slide-in-left">
                                    <MapPin className="h-5 w-5 mr-2 text-red-400 animate-bounce" />
                                    Av. Mate de Luna 2197, esquina Juan José Paso - Tucumán
                                </div>
                                <div className="flex flex-wrap gap-4 animate-slide-in-up">
                                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                        Solicitar Información
                                    </Button>
                                    <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg">
                                        Descargar Brochure
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 bg-gradient-to-r from-gray-50 to-white rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <Card className="p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Home className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Monoambiente a 2 Dorm.</h3>
                                <p className="text-gray-600 text-sm">30m² a 60m²</p>
                            </Card>
                            <Card className="p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Calendar className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">En Venta</h3>
                                <p className="text-gray-600 text-sm">Disponible ahora</p>
                            </Card>
                            <Card className="p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Sun className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Unidades Luminosas</h3>
                                <p className="text-gray-600 text-sm">Con balcón</p>
                            </Card>
                            <Card className="p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Car className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Cocheras</h3>
                                <p className="text-gray-600 text-sm">Y bauleras</p>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="animate-slide-in-left">
                                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Exclusividad en la Avenida Principal
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Natania 89 es un edificio exclusivo sobre la Av. Mate de Luna, la avenida más importante de Tucumán.
                                    Un emprendimiento que combina seguridad, exclusividad, comodidad y refugio en medio de la ciudad.
                                </p>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Propuesta con estilo, alto potencial de revalorización y unidades amplias y funcionales.
                                    Ubicado estratégicamente con acceso directo hacia el Cerro San Javier y afluencia vehicular las 24hs.
                                </p>
                                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                    Agendar Visita
                                </Button>
                            </div>
                            <div className="relative h-[400px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right group">
                                <Image
                                    src="/img/mate_de_luna_2197/m2197_render.png"
                                    alt="Render del Edificio Natania 89"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Amenities y Servicios
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Building className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Hall Jerarquizado</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Car className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Ingreso Vehicular</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Sun className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Pileta y Solárium</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Building className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Terraza</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Users className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Asador</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <TreePine className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Plaza con Juegos</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Tipologías Disponibles
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <Card className="p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <div className="relative h-[200px] rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">

                                    <div className="absolute inset-0">
                                        <Image
                                            src="/img/mate_de_luna_2197/m2197_monoambiente.png"
                                            alt="Monoambiente"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                </div>
                                <h3 className="font-bold text-xl mb-3 group-hover:text-red-600 transition-colors duration-300">Monoambiente</h3>
                                <p className="text-gray-600 mb-4">30 m² | Con balcón | Espacio Flex</p>
                                <p className="text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Consultar precio</p>
                            </Card>

                            <Card className="p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <div className="relative h-[200px] rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">

                                    <div className="absolute inset-0">
                                        <Image
                                            src="/img/mate_de_luna_2197/m2197_1_dorm.png"
                                            alt="1 Dormitorio"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                </div>
                                <h3 className="font-bold text-xl mb-3 group-hover:text-red-600 transition-colors duration-300">1 Dormitorio</h3>
                                <p className="text-gray-600 mb-4">40 m² | Funcional | Terminaciones de primera</p>
                                <p className="text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Consultar precio</p>
                            </Card>
                            <Card className="p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <div className="relative h-[200px] rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">

                                    <div className="absolute inset-0">
                                        <Image
                                            src="/img/mate_de_luna_2197/m2197_2_dorm.png"
                                            alt="2 Dormitorios"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                </div>
                                <h3 className="font-bold text-xl mb-3 group-hover:text-red-600 transition-colors duration-300">2 Dormitorios</h3>
                                <p className="text-gray-600 mb-4">60 m² | Amplio | Luminoso</p>
                                <p className="text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Consultar precio</p>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Galería del Proyecto
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                            {[
                                { src: "/img/mate_de_luna_2197/m2197_fachada.png", alt: "Fachada principal" },
                                { src: "/img/mate_de_luna_2197/m2197_thumbnail.png", alt: "Vista general del edificio" },
                                { src: "/img/mate_de_luna_2197/m2197_pileta.png", alt: "Pileta y solárium" },
                                { src: "/img/mate_de_luna_2197/m2197_terraza.png", alt: "Terraza con asador" },
                                { src: "/img/mate_de_luna_2197/m2197_hall.png", alt: "Hall de ingreso" },
                                { src: "/img/mate_de_luna_2197/m2197_plaza.png", alt: "Plaza con juegos" }
                            ].map((imagen, i) => (
                                <div key={i} className="relative h-[250px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group cursor-pointer">
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

                <section className="py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-xl border border-gray-100/50">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Opciones de Financiación
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group text-center">
                                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                                    <Clock className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-red-600 group-hover:text-red-700 transition-colors duration-300">De Contado</h3>
                                <p className="text-gray-600 text-sm">Pago al contado con descuentos especiales</p>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group text-center">
                                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                                    <Calendar className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-red-600 group-hover:text-red-700 transition-colors duration-300">Anticipo + Cuotas</h3>
                                <p className="text-gray-600 text-sm">Financiación flexible con anticipo</p>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group text-center">
                                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                                    <Building className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-red-600 group-hover:text-red-700 transition-colors duration-300">Post Entrega</h3>
                                <p className="text-gray-600 text-sm">Financiación después de la entrega</p>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group text-center">
                                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-red-600 group-hover:text-red-700 transition-colors duration-300">100% en Cuotas</h3>
                                <p className="text-gray-600 text-sm">Financiación completa en cuotas</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-xl border border-gray-100/50">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Terminaciones Destacadas
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Pisos y Revestimientos</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Pisos de porcelanato premium</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Revoques interiores con terminación fina</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Zócalos de porcelanato</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Carpintería</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Carpintería exterior: Aluminio negro</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Carpintería interior: Puertas de madera</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Ventanas con DVH</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Cocina y Placares</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Muebles de cocina: Melamina premium</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Mesadas: Granito natural</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Placares empotrados</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Climatización</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Preinstalación aire acondicionado</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Agua caliente central</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Calefacción por radiadores</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Sanitarios</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Griferías: FV línea premium</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Artefactos sanitarios: FERRUM</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Revestimientos cerámicos</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Seguridad</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Portero eléctrico con video</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Sistema de alarma</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Cámaras de seguridad</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16">Ubicación Privilegiada</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">En la Avenida Principal de Tucumán</h3>
                                <p className="text-lg text-gray-600 mb-6">
                                    Ubicado sobre la Av. Mate de Luna 2197, esquina Juan José Paso,
                                    en la avenida más importante de la ciudad con acceso directo hacia el Cerro San Javier.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                                        <span>A 2 cuadras del Parque Avellaneda</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                                        <span>A 15 cuadras del centro y plaza principal</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mountain className="h-5 w-5 text-red-600 mr-3" />
                                        <span>Acceso directo hacia el Cerro San Javier</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 text-red-600 mr-3" />
                                        <span>Afluencia vehicular las 24hs</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="h-5 w-5 text-red-600 mr-3" />
                                        <span>Cercano a propuestas sociales, culturales y educativas</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/mate_de_luna_2197/m2197_mapa.png"
                                    alt="Mapa de ubicación - Natania 89"
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <MapPin className="h-16 w-16 mx-auto mb-4" />
                                        <p className="text-lg font-medium">Mapa de ubicación</p>
                                        <p className="text-sm mt-2 opacity-75">Ruta: /img/mate_de_luna_2197/mapa-ubicacion.jpg</p>
                                        <p className="text-xs mt-1 opacity-50">O integrar Google Maps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Empresa Desarrolladora
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[400px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/mate_de_luna_2197/m2197_natania_logo.png"
                                    alt="Logo Natania - Grupo ECIPSA"
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <Building className="h-16 w-16 mx-auto mb-4" />
                                        <p className="text-lg font-medium">Logo Natania</p>
                                        <p className="text-sm mt-2 opacity-75">Ruta: /img/mate_de_luna_2197/natania-logo.jpg</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-6 text-red-600">Natania (Grupo ECIPSA)</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <h4 className="font-bold text-lg mb-3 text-gray-800">Experiencia Comprobada</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center">
                                                <Star className="h-4 w-4 text-red-600 mr-2" />
                                                +37 años de experiencia en el sector inmobiliario
                                            </li>
                                            <li className="flex items-center">
                                                <Star className="h-4 w-4 text-red-600 mr-2" />
                                                Grupo ECIPSA: +45 años en Real Estate
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <h4 className="font-bold text-lg mb-3 text-gray-800">Presencia Internacional</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center">
                                                <MapPin className="h-4 w-4 text-red-600 mr-2" />
                                                Presencia en 8 provincias argentinas
                                            </li>
                                            <li className="flex items-center">
                                                <MapPin className="h-4 w-4 text-red-600 mr-2" />
                                                Paraguay, Israel, Panamá y Estados Unidos
                                            </li>
                                            <li className="flex items-center">
                                                <MapPin className="h-4 w-4 text-red-600 mr-2" />
                                                Expansión hacia Brasil y otros países
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <h4 className="font-bold text-lg mb-3 text-gray-800">Números que Hablan</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center">
                                                <Building className="h-4 w-4 text-red-600 mr-2" />
                                                +88 desarrollos realizados
                                            </li>
                                            <li className="flex items-center">
                                                <Users className="h-4 w-4 text-red-600 mr-2" />
                                                +9.200 entregas exitosas
                                            </li>
                                            <li className="flex items-center">
                                                <Users className="h-4 w-4 text-red-600 mr-2" />
                                                +19.000 clientes activos
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl md:rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
                    <div className="container mx-auto max-w-4xl px-6 md:px-8 text-center relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-scale">
                            ¿Te interesa este proyecto?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 animate-slide-in-up">
                            Contacta con nuestro equipo de especialistas para más información y asesoramiento personalizado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up">
                            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-red-600 backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Phone className="h-5 w-5 mr-2" />
                                Llamar Ahora
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-red-600 backdrop-blur-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Mail className="h-5 w-5 mr-2" />
                                Enviar Consulta
                            </Button>
                            <Link href="/contacto">
                                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
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
