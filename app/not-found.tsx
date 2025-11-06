import { SiteHeader } from "@/components/ui/header";
import { SiteFooter } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeader />
            <main className="flex-1">
                <section className="relative min-h-[calc(100vh-200px)] w-full overflow-hidden flex items-center justify-center pt-24 sm:pt-32 pb-16 sm:pb-20">
                    <Image
                        src="/img/hero-image.jpg"
                        alt="Fondo"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
                        <div className="mb-8">
                            <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white mb-4 leading-none">
                                404
                            </h1>
                            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Página No Encontrada
                        </h2>
                        
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                            Lo sentimos, la página que estás buscando no existe o ha sido movida. 
                            Pero no te preocupes, podemos ayudarte a encontrar lo que necesitás.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <Link href="/">
                                <Button 
                                    size="lg" 
                                    className="w-full sm:w-auto text-white text-base sm:text-lg bg-red-600 hover:bg-red-700 py-6 px-8 cursor-pointer flex items-center gap-2"
                                >
                                    <Home className="h-5 w-5" />
                                    Volver al Inicio
                                </Button>
                            </Link>
                            
                            <Link href="/propiedades">
                                <Button 
                                    size="lg" 
                                    className="w-full sm:w-auto text-white text-base sm:text-lg bg-transparent border-2 border-white hover:bg-white/10 hover:text-white py-6 px-8 cursor-pointer flex items-center gap-2"
                                >
                                    <Search className="h-5 w-5" />
                                    Explorar Propiedades
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            <Link 
                                href="/propiedades/venta" 
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all group"
                            >
                                <div className="text-white group-hover:text-red-400 transition-colors">
                                    <h3 className="font-bold text-lg mb-2">En Venta</h3>
                                    <p className="text-sm text-white/80">Encontrá tu propiedad ideal</p>
                                </div>
                            </Link>
                            
                            <Link 
                                href="/propiedades/alquiler" 
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all group"
                            >
                                <div className="text-white group-hover:text-red-400 transition-colors">
                                    <h3 className="font-bold text-lg mb-2">En Alquiler</h3>
                                    <p className="text-sm text-white/80">Alquileres disponibles</p>
                                </div>
                            </Link>
                            
                            <Link 
                                href="/contacto" 
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all group"
                            >
                                <div className="text-white group-hover:text-red-400 transition-colors">
                                    <h3 className="font-bold text-lg mb-2">Contacto</h3>
                                    <p className="text-sm text-white/80">Estamos para ayudarte</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}

