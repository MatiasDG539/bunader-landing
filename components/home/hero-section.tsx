"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
            <Image
                src="/img/hero-image.jpg"
                alt="Casa de lujo"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-wide">
                        Encontrá Tu Lugar Soñado Con <span className="text-red-600">Bunader</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl font-medium sm:font-semibold leading-relaxed">
                        Tu socio confiable en cada etapa de tu viaje inmobiliario. Encargados de transformar tu experiencia en bienes raíces.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 w-full">
                    <div className="grid grid-cols-2 sm:contents gap-3 sm:gap-4">
                        <Link href="/propiedades" className="col-span-1">
                            <Button variant="default" size="lg" className="w-full text-white text-base sm:text-lg bg-red-600 hover:bg-red-600/90 py-4 sm:py-6 cursor-pointer">
                                Quiero Comprar
                            </Button>
                        </Link>

                        <Link href="/vender-propiedad" className="col-span-1">
                            <Button variant="default" size="lg" className="w-full text-white text-base sm:text-lg bg-red-600 hover:bg-red-600/90 py-4 sm:py-6 cursor-pointer">
                                Quiero Vender
                            </Button>
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:contents gap-3 sm:gap-4">
                        <Link href="#desarrollos" className="col-span-1">
                            <Button variant="default" size="lg" className="w-full text-white text-base sm:text-lg bg-red-600 hover:bg-red-600/90 py-4 sm:py-6 cursor-pointer">
                                Conocer proyectos
                            </Button>
                        </Link>

                        <Link href="/invertir-exterior" className="col-span-1">
                            <Button variant="default" size="lg" className="w-full text-white text-base sm:text-lg bg-red-600 hover:bg-red-600/90 py-4 sm:py-6 cursor-pointer">
                                Invertir en el exterior
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                <Link href="#about">
                    <Button variant="ghost" size="lg" className="text-white text-sm sm:text-md hover:bg-white/10 group">
                        <span className="hidden sm:inline">Conoce más sobre nosotros</span>
                        <span className="sm:hidden">Conoce más</span>
                        <ArrowDown
                            className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform animate-bounce"
                        />
                    </Button>
                </Link>
            </div>
        </section>
    )
}
