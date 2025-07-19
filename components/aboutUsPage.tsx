import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import { Users, MapPin, Briefcase, Heart, Shield, Home } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeaderDark />
            <main className="flex-1">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
                            <h3 className="text-xl font-semibold mb-2">20 años de trayectoria en el mercado inmobiliario de Tucumán y en el exterior.</h3>
                            <p className="text-gray-600 mb-4">
                                En Bunader Negocios Inmobiliarios, llevamos más de dos décadas conectando personas con oportunidades reales de inversión en bienes raíces. Fundada y dirigida por Federico Bunader, nuestra firma es reconocida por su enfoque estratégico, transparente y profesional, tanto en San Miguel de Tucumán, Yerba Buena y zonas de crecimiento como San Pablo, Manantiales, Cevil Redondo y Tafí Viejo, como también en mercados internacionales como Estados Unidos (Florida) , España y Paraguay (Asunción).
                            </p>
                            <p className="text-gray-600 mb-4">
                                Nos especializamos en la venta de propiedades, desarrollos desde el pozo y negocios inmobiliarios de mediana y gran escala, tanto para inversores particulares como para clientes corporativos. Nuestro diferencial está en el acompañamiento: no solo ofrecemos propiedades, sino también una consultoría integral que ayuda a nuestros clientes a tomar decisiones con seguridad, adaptadas a sus necesidades reales y expectativas de rentabilidad.
                            </p>
                        </div>
                        <div className="relative h-[600px] w-full">
                            <Image
                                src="/img/office_door.jpg"
                                alt="Imagen de oficina"
                                className="rounded-xl shadow-lg object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
                        <p className="text-gray-600">
                            En Bunader Negocios Inmobiliarios, creemos que encontrar el lugar adecuado es una de las decisiones más importantes en la vida. Por eso, nos
                            guiamos por valores que ponen a las personas en el centro de todo lo que hacemos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Pasión</h3>
                            <p className="text-gray-600">
                                Amamos lo que hacemos y nos apasiona ayudar a las familias a encontrar el lugar perfecto para llamar
                                hogar.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Cercanía</h3>
                            <p className="text-gray-600">
                                Construimos relaciones duraderas basadas en la confianza, la empatía y el entendimiento de tus
                                necesidades.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Integridad</h3>
                            <p className="text-gray-600">
                                Actuamos con honestidad y transparencia en cada paso del proceso, priorizando siempre tus intereses.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Home className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Compromiso</h3>
                            <p className="text-gray-600">
                                Nos dedicamos a encontrar no solo una propiedad, sino el lugar donde tus sueños puedan hacerse realidad.
                            </p>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative w-full h-64">
                                    <Image
                                        src="/personas/federico.jpg"
                                        alt="Miembro del equipo"
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Federico Bunader</h3>
                                    <p className="text-red-600 mb-3">Fundador</p>
                                    {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p> */}
                                </div>

                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative w-full h-64">
                                    <Image
                                        src="/personas/sra_camisa_blanca.jpg"
                                        alt="Miembro del equipo"
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Gabriela Coronel</h3>
                                    <p className="text-red-600 mb-3">Representante Atención al Cliente</p>
                                </div>

                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative w-full h-64">
                                    <Image
                                        src="/personas/sra_rubia.jpg"
                                        alt="Miembro del equipo"
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Veronica Bertolino</h3>
                                    <p className="text-red-600 mb-3">Ejecutivo Comercial</p>
                                </div>

                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative w-full h-64">
                                    <Image
                                        src="/personas/sra_saco_negro.jpg"
                                        alt="Miembro del equipo"
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Valentina Lopez</h3>
                                    <p className="text-red-600 mb-3">Gerente Administrativo</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-center">Dónde Encontrarnos</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="relative w-full h-[350px]">
                                    <Image
                                        src="/img/office.jpg"
                                        alt="Imagen de nuestra oficina"
                                        className="rounded-xl shadow-lg object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Oficinas</h3>
                                <div className="flex items-start gap-4 mb-4">
                                    <MapPin className="text-red-600 w-6 h-6 flex-shrink-0 mt-1" />
                                    <div>
                                        <a href="https://maps.app.goo.gl/As9gkEPS7FNeE8scA" target="_blank" rel="noopener noreferrer">
                                            <p className="text-gray-700">Buenos Aires 491 Piso 6, San Miguel de Tucumán</p>
                                            <p className="text-gray-700">Tucumán, Argentina</p>
                                        </a>
                                    </div>
                                </div>

                                <h4 className="text-xl font-semibold mb-3 mt-6">Horario de Atención</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-medium">Lunes a Viernes</p>
                                        <p className="text-gray-600">9:00 - 17:00</p>
                                    </div>
                                </div>

                                <h4 className="text-xl font-semibold mb-3 mt-6">Contacto</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-medium">Oficina</p>
                                        <p className="text-gray-600">0381 4243087</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Movil</p>
                                        <p className="text-gray-600">+54 9 381 350-1893</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">WhatsApp</p>
                                        <p className="text-gray-600">+54 9 381 218-5255</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:info@bunader.com.ar" className="text-gray-600 hover:text-red-600 transition-colors">
                                            info@bunader.com.ar
                                        </a>
                                    </div>
                                </div>

                                <button className="mt-8 bg-red-600 text-white hover:bg-red-700 font-medium py-3 px-8 rounded-lg text-lg transition-colors flex items-center gap-2">
                                    <Briefcase className="w-5 h-5" />
                                    Coordinar una Visita
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-600 text-white rounded-xl p-12 mt-20 mb-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">¿Quieres formar parte de nuestro equipo?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Estamos siempre en busca de nuevos talentos. Si estás interesado en unirte a nuestra familia,
                            envíanos tu CV y nos pondremos en contacto contigo.
                        </p>
                        <button className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors">
                            Trabaja con Nosotros
                        </button>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
