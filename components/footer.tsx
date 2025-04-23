import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            <span className="text-red-600">Prime</span>Estate
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Tu socio de confianza para encontrar la propiedad perfecta. Con años de experiencia y un equipo dedicado,
                            estamos comprometidos a hacer que tu viaje inmobiliario sea sin complicaciones.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                                    Propiedades
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Tipos de Propiedades</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Casas
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Apartamentos
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Condominios
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Casas Adosadas
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Terrenos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Boletín Informativo</h3>
                        <p className="text-gray-400 mb-4">
                            Suscríbete a nuestro boletín para recibir las últimas actualizaciones de propiedades y tendencias del
                            mercado.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="bg-gray-900 text-white px-4 py-3 rounded-l-md w-full focus:outline-none"
                            />
                            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-r-md transition-colors">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} PrimeEstate. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
