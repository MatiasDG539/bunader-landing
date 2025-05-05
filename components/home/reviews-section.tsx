"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Sara Jiménez",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "Trabajar con PrimeEstate fue la mejor decisión que tomamos. Nuestro agente se tomó el tiempo para entender exactamente lo que estábamos buscando y nos encontró nuestra casa soñada dentro de nuestro presupuesto. ¡Todo el proceso fue fluido y sin estrés!",
    },
    {
        id: 2,
        name: "Miguel Rodríguez",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "¡No puedo recomendar PrimeEstate lo suficiente! Me ayudaron a vender mi casa por encima del precio pedido en menos de una semana. Su conocimiento del mercado y consejos de presentación marcaron la diferencia. Equipo profesional, receptivo y genuinamente atento.",
    },
    {
        id: 3,
        name: "Jennifer Chávez",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        rating: 5,
        text: "Como compradores de primera vivienda, estábamos nerviosos por el proceso, pero nuestro agente en PrimeEstate nos guió en cada paso del camino. Explicaron todo claramente y siempre tuvieron nuestros mejores intereses en mente. ¡Encontramos una casa inicial perfecta gracias a ellos!",
    },
]

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    No solo tomes nuestra palabra. Escucha a nuestros clientes satisfechos.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="absolute -top-12 -left-12 text-9xl text-red-600/10">
                    <Quote />
                </div>

                <div className="relative z-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                                }`}
                        >
                            <div className="text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-6 w-6 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-2xl font-light italic text-gray-700 mb-6 max-w-3xl mx-auto">
                                    &quot;{testimonial.text}&quot;
                                </blockquote>
                                <div className="font-bold text-xl">{testimonial.name}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute -bottom-12 -right-12 text-9xl text-red-600/10 rotate-180">
                    <Quote />
                </div>

                <div className="flex justify-center mt-12 gap-4">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full border-gray-300"
                        onClick={prevTestimonial}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Testimonio anterior</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full border-gray-300"
                        onClick={nextTestimonial}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Siguiente testimonio</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}
