import Link from "next/link"
import Image from "next/image"
import { siFacebook, siInstagram, siX } from "simple-icons"

export function SiteFooter() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="mb-0 -mt-10">
                            <Image src="/bunader-white-logo.png" alt="Bunader Logo" width={180} height={20} className="h-auto" />
                        </div>
                        <div className="-mt-10">
                            <p className="text-gray-400 leading-relaxed text-center md:text-left">
                                Tu socio de confianza para encontrar la propiedad perfecta. Con años de experiencia y un equipo
                                dedicado, estamos comprometidos a hacer que tu viaje inmobiliario sea sin complicaciones.
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    dangerouslySetInnerHTML={{ __html: siFacebook.svg }}
                                />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
                                />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    dangerouslySetInnerHTML={{ __html: siX.svg }}
                                />
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

                    {/* <div>
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
          </div> */}
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Bunader. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
