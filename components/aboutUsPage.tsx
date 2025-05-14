import { SiteHeaderDark } from "@/components/header-dark";
import { SiteFooter } from "@/components/footer";
import { Users, MapPin, Briefcase, Heart, Shield, Home } from "lucide-react";

export default function AboutUsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeaderDark />
            <main className="flex-1 pt-24">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero section */}
                    <div className="text-center my-20">
                        <h1 className="text-6xl font-bold mb-6">Sobre Nosotros</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Conoce nuestro equipo y descubre por qué somos líderes en el mercado inmobiliario.
                        </p>
                    </div>

                    {/* Company story section */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis euismod, congue magna eget, tempor eros. Sed non arcu tortor. Proin nec semper tortor. Quisque vel quam vel nisi rutrum pharetra in non ipsum. Sed placerat diam non magna sollicitudin, non eleifend dui vestibulum.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Suspendisse potenti. Donec fermentum tortor ac magna facilisis, nec imperdiet ligula pulvinar. Morbi eu tellus quam. Integer tristique turpis vel lectus pulvinar, quis ultrices nisi finibus. Quisque elementum a nulla eu feugiat.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                alt="Imagen de oficina"
                                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
                            />
                        </div>
                    </div>

                    {/* Values section */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
                        <p className="text-lg text-gray-600">
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

                    {/* Team section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Team member 1 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2384&q=80"
                                    alt="Miembro del equipo"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Carlos Rodríguez</h3>
                                    <p className="text-red-600 mb-3">CEO & Fundador</p>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                                </div>
                            </div>
                            {/* Team member 2 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2376&q=80"
                                    alt="Miembro del equipo"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Laura González</h3>
                                    <p className="text-red-600 mb-3">Directora de Ventas</p>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                                </div>
                            </div>
                            {/* Team member 3 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80"
                                    alt="Miembro del equipo"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Miguel Torres</h3>
                                    <p className="text-red-600 mb-3">Asesor Inmobiliario</p>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                                </div>
                            </div>
                            {/* Team member 4 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2361&q=80"
                                    alt="Miembro del equipo"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">Ana Martínez</h3>
                                    <p className="text-red-600 mb-3">Directora de Marketing</p>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-center">Dónde Encontrarnos</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80"
                                    alt="Imagen de nuestra oficina"
                                    className="rounded-xl shadow-lg w-full object-cover h-[350px]"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Oficina Principal</h3>
                                <div className="flex items-start gap-4 mb-4">
                                    <MapPin className="text-red-600 w-6 h-6 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-700">Av. Libertador 1234, Piso 5</p>
                                        <p className="text-gray-700">Ciudad Autónoma de Buenos Aires</p>
                                        <p className="text-gray-700">Argentina</p>
                                    </div>
                                </div>

                                <h4 className="text-xl font-semibold mb-3 mt-6">Horario de Atención</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-medium">Lunes a Viernes</p>
                                        <p className="text-gray-600">9:00 - 18:00</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Sábados</p>
                                        <p className="text-gray-600">10:00 - 14:00</p>
                                    </div>
                                </div>

                                <button className="mt-8 bg-red-600 text-white hover:bg-red-700 font-medium py-3 px-8 rounded-lg text-lg transition-colors flex items-center gap-2">
                                    <Briefcase className="w-5 h-5" />
                                    Coordinar una Visita
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div className="bg-red-600 text-white rounded-xl p-12 my-20 text-center">
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
