"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="Casa de lujo"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-wide">
                        Encontra Tu Casa Soñada Con <span className="text-red-600">Bunader</span>
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl font-semibold">
                        Tu socio confiable en cada etapa de tu viaje inmobiliario. Transformamos tu experiencia en bienes raíces.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                <Link href="#about">
                    <Button variant="ghost" size="lg" className="text-white text-md hover:bg-white/10 group">
                        Conoce más sobre nosotros
                        <ArrowDown
                            className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform animate-bounce"
                        />
                    </Button>
                </Link>
            </div>
        </section>
    )
}
