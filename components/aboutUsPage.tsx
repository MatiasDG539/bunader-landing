import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import { Users, MapPin, Heart, Shield, Home } from "lucide-react";
import Image from "next/image";
import PropertyMap from "@/components/ui/property-map";

export default function AboutUsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeaderDark />
            <main className="flex-1">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Nuestra Historia</h2>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-2">20 años de trayectoria en el mercado inmobiliario de Tucumán y en el exterior.</h3>
                            <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                En Bunader Negocios Inmobiliarios, llevamos más de dos décadas conectando personas con oportunidades reales de inversión en bienes raíces. Fundada y dirigida por Federico Bunader, nuestra firma es reconocida por su enfoque estratégico, transparente y profesional, tanto en San Miguel de Tucumán, Yerba Buena y zonas de crecimiento como San Pablo, Manantiales, Cevil Redondo y Tafí Viejo, como también en mercados internacionales como Estados Unidos (Florida) , España y Paraguay (Asunción).
                            </p>
                            <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                Nos especializamos en la venta de propiedades, desarrollos desde el pozo y negocios inmobiliarios de mediana y gran escala, tanto para inversores particulares como para clientes corporativos. Nuestro diferencial está en el acompañamiento: no solo ofrecemos propiedades, sino también una consultoría integral que ayuda a nuestros clientes a tomar decisiones con seguridad, adaptadas a sus necesidades reales y expectativas de rentabilidad.
                            </p>
                        </div>
                        <div className="relative h-[350px] sm:h-[400px] md:h-[600px] w-full order-1 md:order-2">
                            <Image
                                src="/img/office_door.jpg"
                                alt="Imagen de oficina"
                                className="rounded-xl shadow-lg object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="mb-12 md:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Nuestros Valores</h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            En Bunader Negocios Inmobiliarios, creemos que encontrar el lugar adecuado es una de las decisiones más importantes en la vida. Por eso, nos
                            guiamos por valores que ponen a las personas en el centro de todo lo que hacemos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                <Heart className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">Pasión</h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Amamos lo que hacemos y nos apasiona ayudar a las familias a encontrar el lugar perfecto para llamar
                                hogar.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                <Users className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">Cercanía</h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Construimos relaciones duraderas basadas en la confianza, la empatía y el entendimiento de tus
                                necesidades.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                <Shield className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">Integridad</h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Actuamos con honestidad y transparencia en cada paso del proceso, priorizando siempre tus intereses.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 md:p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                <Home className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">Compromiso</h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Nos dedicamos a encontrar no solo una propiedad, sino el lugar donde tus sueños puedan hacerse realidad.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12 md:mb-20">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center">Nuestro Equipo</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-80 sm:max-w-none mx-auto sm:mx-0">

                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-80 sm:max-w-none mx-auto sm:mx-0">
                                <div className="relative w-full h-80 sm:h-56 md:h-56 bg-white flex items-center justify-center p-2">
                                    <Image
                                        src="/personas/federico.jpg"
                                        alt="Miembro del equipo"
                                        className="object-contain w-full h-full"
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                <div className="p-3 md:p-6">
                                    <h3 className="text-base md:text-xl font-semibold mb-1">Federico Bunader</h3>
                                    <p className="text-red-600 mb-3 text-xs md:text-base">Fundador</p>
                                    {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p> */}
                                </div>

                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-80 sm:max-w-none mx-auto sm:mx-0">
                                <div className="relative w-full h-80 sm:h-56 md:h-56 bg-white flex items-center justify-center p-2">
                                    <Image
                                        src="/personas/sra_camisa_blanca.jpg"
                                        alt="Miembro del equipo"
                                        className="object-contain w-full h-full"
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                <div className="p-3 md:p-6">
                                    <h3 className="text-base md:text-xl font-semibold mb-1">Gabriela Coronel</h3>
                                    <p className="text-red-600 mb-3 text-xs md:text-base">Rep. Atención al Cliente</p>
                                </div>

                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-80 sm:max-w-none mx-auto sm:mx-0">
                                <div className="relative w-full h-80 sm:h-56 md:h-56 bg-white flex items-center justify-center p-2">
                                    <Image
                                        src="/personas/sra_rubia.jpg"
                                        alt="Miembro del equipo"
                                        className="object-contain w-full h-full"
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                <div className="p-3 md:p-6">
                                    <h3 className="text-base md:text-xl font-semibold mb-1">Veronica Bertolino</h3>
                                    <p className="text-red-600 mb-3 text-xs md:text-base">Ejecutivo Comercial</p>
                                </div>

                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-80 sm:max-w-none mx-auto sm:mx-0">
                                <div className="relative w-full h-80 sm:h-56 md:h-56 bg-white flex items-center justify-center p-2">
                                    <Image
                                        src="/personas/sra_saco_negro.jpg"
                                        alt="Miembro del equipo"
                                        className="object-contain w-full h-full"
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                <div className="p-3 md:p-6">
                                    <h3 className="text-base md:text-xl font-semibold mb-1">Valentina Lopez</h3>
                                    <p className="text-red-600 mb-3 text-xs md:text-base">Gerente Administrativo</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mb-12 md:mb-20">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center">Dónde Encontrarnos</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">Oficinas</h3>
                                <div className="flex items-start gap-3 md:gap-4 mb-4 justify-center md:justify-start">
                                    <MapPin className="text-red-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                                    <div className="text-center md:text-left">
                                        <a href="https://maps.app.goo.gl/As9gkEPS7FNeE8scA" target="_blank" rel="noopener noreferrer">
                                            <p className="text-gray-700 text-sm md:text-base">Buenos Aires 491 Piso 6, San Miguel de Tucumán</p>
                                            <p className="text-gray-700 text-sm md:text-base">Tucumán, Argentina</p>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl shadow-lg overflow-hidden mb-6">
                                    <PropertyMap
                                        address="Buenos Aires 491, San Miguel de Tucumán, Tucumán, Argentina"
                                        title="Bunader Negocios Inmobiliarios"
                                        className="w-full h-full"
                                        geoLat={-26.8372136}
                                        geoLong={-65.2080526}
                                    />
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg md:text-xl font-semibold mb-3 text-center md:text-left">Horario de Atención</h4>
                                <div className="text-center md:text-left">
                                    <p className="font-medium text-sm md:text-base">Lunes a Viernes</p>
                                    <p className="text-gray-600 text-sm md:text-base">9:00 - 17:00</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">Contacto</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="text-center md:text-left">
                                        <p className="font-medium text-sm md:text-base">Oficina</p>
                                        <p className="text-gray-600 text-sm md:text-base">0381 4243087</p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="font-medium text-sm md:text-base">Móvil</p>
                                        <p className="text-gray-600 text-sm md:text-base">+54 9 381 350-1893</p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="font-medium text-sm md:text-base">WhatsApp</p>
                                        <p className="text-gray-600 text-sm md:text-base">+54 9 381 218-5255</p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="font-medium text-sm md:text-base">Email</p>
                                        <a href="mailto:info@bunader.com.ar" className="text-gray-600 hover:text-red-600 transition-colors text-sm md:text-base break-all">
                                            info@bunader.com.ar
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-start pt-4">
                                {/* <button className="bg-red-600 text-white hover:bg-red-700 font-medium py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                                    <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                                    Coordinar una Visita
                                </button> */}
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
                                <Image
                                    src="/img/office.jpg"
                                    alt="Imagen de nuestra oficina"
                                    className="rounded-xl shadow-lg object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-600 text-white rounded-xl p-6 sm:p-8 md:p-12 mt-12 md:mt-20 mb-8 md:mb-12 text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">¿Quieres formar parte de nuestro equipo?</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
                            Estamos siempre en busca de nuevos talentos. Si estás interesado en unirte a nuestra familia,
                            envíanos tu CV y nos pondremos en contacto contigo.
                        </p>
                        <a 
                            href="https://www.linkedin.com/company/bunader/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transition-colors w-full sm:w-auto inline-block text-center"
                        >
                            Trabaja con Nosotros
                        </a>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
