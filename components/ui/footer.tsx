import Link from "next/link"
import Image from "next/image"
import { siFacebook, siInstagram } from "simple-icons"

export function SiteFooter() {
    return (
        <footer className="bg-black text-white w-full max-w-[100vw] overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="mb-4 w-[220px] sm:w-[250px] h-[45px] sm:h-[50px] overflow-hidden">
                            <Image src="/bunader-white-logo.png" alt="Bunader Logo" width={280} height={28} className="h-full w-full object-cover" />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-400 leading-relaxed text-center md:text-left text-sm sm:text-base">
                                Tu socio de confianza para encontrar la propiedad perfecta. Con años de experiencia y un equipo
                                dedicado, estamos comprometidos a hacer que tu viaje inmobiliario sea sin complicaciones.
                            </p>
                        </div>
                        <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                            <Link href="https://www.facebook.com/bunadernegociosinmobiliarios/" className="text-gray-400 hover:text-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    dangerouslySetInnerHTML={{ __html: siFacebook.svg }}
                                />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://www.instagram.com/inmobiliariabunader/" className="text-gray-400 hover:text-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
                                />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    Nosotros
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Propiedades</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li>
                                <Link href="/propiedades/venta" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    En Venta
                                </Link>
                            </li>
                            <li>
                                <Link href="/propiedades/alquiler" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    En Alquiler
                                </Link>
                            </li>
                            <li>
                                <Link href="/propiedades/proyectos" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                                    Proyectos Nuevos
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

                <div className="border-t border-gray-800 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
                    <p>&copy; {new Date().getFullYear()} Bunader Negocios Inmobiliarios. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
