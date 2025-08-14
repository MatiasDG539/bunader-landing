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
    Shield, 
    Sun, 
    ArrowLeft,
    Phone,
    Mail
} from "lucide-react"

export default function Corrientes65Page() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <SiteHeaderDark />
            <main className="min-h-screen mx-4 md:mx-8 lg:mx-12 xl:mx-16 py-4 md:py-6 pt-24 md:pt-32">

                <section className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 shadow-2xl group">

                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                        <Image
                            src="/img/corrientes_65/front_closeup_c65.jpg"
                            alt="Edificio Corrientes 65 - Imagen principal"
                            fill
                            className="object-cover"
                            priority
                        />
                        
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6 z-20 animate-slide-in-left">
                        <Link href="/propiedades/proyectos">
                            <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Volver a Proyectos
                            </Button>
                        </Link>
                    </div>

                    <div className="container mx-auto max-w-6xl relative z-10 h-full">
                        <div className="h-full flex flex-col justify-end pb-16 px-6 md:px-8">
                            <div className="text-white animate-slide-in-up">
                                <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 shadow-lg animate-pulse">
                                    En Construcción
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-fade-in-scale">
                                    Edificio Corrientes 65
                                </h1>
                                <p className="text-xl md:text-2xl mb-6 max-w-2xl text-gray-100 animate-slide-in-right">
                                    Desarrollo de viviendas, oficinas y local comercial en el corazón de Barrio Norte.
                                </p>
                                <div className="flex items-center text-lg mb-6 animate-slide-in-left">
                                    <MapPin className="h-5 w-5 mr-2 text-red-400 animate-bounce" />
                                    Corrientes 65, Barrio Norte - San Miguel de Tucumán
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
                                <Building className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Viviendas + Oficinas</h3>
                                <p className="text-gray-600 text-sm">+ Local comercial</p>
                            </Card>
                            <Card className="p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Calendar className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">En Construcción</h3>
                                <p className="text-gray-600 text-sm">Próxima entrega</p>
                            </Card>
                            <Card className="p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Users className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">2 y 3 Ambientes</h3>
                                <p className="text-gray-600 text-sm">Con balcón</p>
                            </Card>
                            <Card className="p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <Car className="h-8 w-8 mx-auto mb-3 text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">Cocheras</h3>
                                <p className="text-gray-600 text-sm">En subsuelo</p>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 mb-8 md:mb-12">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="animate-slide-in-left">
                                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Proyecto Integral en Barrio Norte
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    El Edificio Corrientes 65 es un desarrollo integral que incluye cocheras en subsuelo, 
                                    departamentos y oficinas en pisos superiores. El último piso cuenta con terraza, 
                                    pileta y área con asadores.
                                </p>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Ubicado estratégicamente entre Balcarce y Av. Avellaneda, este proyecto combina 
                                    funcionalidad residencial y comercial con terminaciones de primera calidad 
                                    y amenities exclusivos.
                                </p>
                                <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                    Agendar Visita
                                </Button>
                            </div>
                            <div className="relative h-[400px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right group">
                                <Image
                                    src="/img/corrientes_65/construction_view_c65.jpg"
                                    alt="Render del Edificio Corrientes 65"
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
                            Servicios y Amenities
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Car className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Cocheras en Subsuelo</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Building className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Ascensores Automáticos</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Shield className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Portero Eléctrico</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Building className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Terraza</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Sun className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">Pileta con Solárium</h3>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <Users className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                                </div>
                                <h3 className="font-semibold group-hover:text-red-600 transition-colors duration-300">SUM con Parrilla</h3>
                            </div>
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
                                { src: "/img/corrientes_65/outside_view_c65.jpg", alt: "Fachada principal" },
                                { src: "/img/corrientes_65/c65_thumbnail.jpg", alt: "Frente Edificio" },
                                { src: "/img/corrientes_65/pool_view_c65.jpg", alt: "Terraza con pileta" },
                                { src: "/img/corrientes_65/2_pool_view_c65.jpg", alt: "Vista de pileta" },
                                { src: "/img/corrientes_65/inside_view_c65.jpg", alt: "Entrada principal" },
                                { src: "/img/corrientes_65/2_inside_view_c65.jpg", alt: "Sector plantas entrada principal" }
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

                <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-xl">
                    <div className="container mx-auto max-w-6xl px-6 md:px-8">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Tipologías Disponibles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <Card className="p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <div className="relative h-[200px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/img/corrientes_65/local-comercial.jpg"
                                        alt="Planta del local comercial"
                                        fill
                                        className="object-cover"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 group-hover:opacity-80 transition-opacity duration-500"></div>
                                        <div className="text-center z-10">
                                            <Building className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                                            <p className="text-sm font-medium">Local Comercial</p>
                                            <p className="text-xs mt-1 opacity-75">Planta/render</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 group-hover:text-red-600 transition-colors duration-300">Local Comercial</h3>
                                <p className="text-gray-600 mb-4">Planta baja | Frente a calle</p>
                                <p className="text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Consultar precio</p>
                            </Card>
                            <Card className="p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <div className="relative h-[200px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/img/corrientes_65/depto-2amb.jpg"
                                        alt="Planta departamento 2 ambientes"
                                        fill
                                        className="object-cover"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-80 transition-opacity duration-500"></div>
                                        <div className="text-center z-10">
                                            <Building className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                                            <p className="text-sm font-medium">Depto 2 Ambientes</p>
                                            <p className="text-xs mt-1 opacity-75">Planta/render</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 group-hover:text-red-600 transition-colors duration-300">2 Ambientes</h3>
                                <p className="text-gray-600 mb-4">63.69 m² totales | 1 dormitorio | 1 baño | Balcón</p>
                                <p className="text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Unidades B y C</p>
                            </Card>
                            <Card className="p-8 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-0 group">
                                <div className="relative h-[200px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/img/corrientes_65/depto-3amb.jpg"
                                        alt="Planta departamento 3 ambientes"
                                        fill
                                        className="object-cover"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:opacity-80 transition-opacity duration-500"></div>
                                        <div className="text-center z-10">
                                            <Building className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                                            <p className="text-sm font-medium">Depto 3 Ambientes</p>
                                            <p className="text-xs mt-1 opacity-75">Planta/render</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-3 group-hover:text-red-600 transition-colors duration-300">3 Ambientes</h3>
                                <p className="text-gray-600 mb-4">104.62 m² totales | 2 dormitorios | 2 baños | Balcón corrido</p>
                                <p className="text-lg font-semibold text-red-600 group-hover:scale-105 transition-transform duration-300">Unidad A</p>
                            </Card>
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
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Pisos de porcelanato</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Revoques interiores grueso con terminación fina</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Carpintería</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Carpintería exterior: Aluminio negro tipo Econal</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Carpintería interior: Puertas de madera para pintar</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Cocina y Placares</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Muebles de cocina: Melamina con cantos enchapados</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Mesadas: Granito natural</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Placares: Melamina blanca con estantes</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Climatización</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Preinstalación aire acondicionado frío/calor</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Agua caliente central</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 border border-gray-100/50 group">
                                <h3 className="font-bold text-lg mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">Sanitarios</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Griferías: FV línea California y Arizona</li>
                                    <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">• Artefactos sanitarios: FERRUM línea Bari</li>
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
                                <h3 className="text-2xl font-bold mb-6">En el corazón de Barrio Norte</h3>
                                <p className="text-lg text-gray-600 mb-6">
                                    Ubicado sobre la calle Corrientes 65, entre Balcarce y Av. Avellaneda, 
                                    en una de las zonas más valoradas de San Miguel de Tucumán.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                                        <span>A 500m del Parque 9 de Julio</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                                        <span>A 500m de Plaza Urquiza</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                                        <span>Clínicas y colegios cercanos</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                                        <span>Zona gastronómica y de bares</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3" />
                                        <span>Supermercados, gimnasios, farmacias</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl overflow-hidden shadow-2xl">
                            
                                <Image
                                    src="/img/corrientes_65/mapa-ubicacion.jpg"
                                    alt="Mapa de ubicación - Corrientes 65"
                                    fill
                                    className="object-cover"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <MapPin className="h-16 w-16 mx-auto mb-4" />
                                        <p className="text-lg font-medium">Mapa de ubicación</p>
                                        <p className="text-sm mt-2 opacity-75">Ruta: /img/corrientes_65/mapa-ubicacion.jpg</p>
                                        <p className="text-xs mt-1 opacity-50">O integrar Google Maps</p>
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
