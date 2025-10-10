"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQItem = {
    question: string
    answer: string
}

export function ContactFAQ() {
    const faqs: FAQItem[] = [
        {
            question: "¿Cuál es el proceso para comprar una propiedad?",
            answer: "El proceso de compra incluye encontrar la propiedad ideal, hacer una oferta, negociar el precio, firmar un contrato de compra-venta, y finalmente la escrituración. Nuestros asesores te guiarán durante todo el proceso."
        },
        {
            question: "¿Qué documentos necesito para vender mi propiedad?",
            answer: "Necesitarás la escritura de la propiedad, comprobantes de pago de impuestos y servicios al día, planos actualizados, y tu identificación personal. Nuestro equipo te asesorará con todos los requisitos específicos según tu caso."
        },
        {
            question: "¿Bunader ofrece servicios de tasación?",
            answer: "Sí, ofrecemos servicios de tasación profesional para determinar el valor de mercado de tu propiedad. Nuestros expertos realizan un análisis detallado considerando la ubicación, características, y tendencias actuales del mercado inmobiliario."
        },
        {
            question: "¿Cuánto tiempo toma normalmente vender una propiedad?",
            answer: "El tiempo de venta puede variar dependiendo de factores como la ubicación, precio, y condiciones del mercado. En promedio, una propiedad bien tasada y promocionada puede venderse entre 3 y 6 meses."
        },
        {
            question: "¿Cómo puedo publicar mi propiedad con Bunader?",
            answer: "Puedes contactarnos por teléfono, email o visitar nuestra oficina. Un asesor te visitará para evaluar tu propiedad, tomar fotos profesionales y preparar el anuncio para nuestra plataforma y redes asociadas."
        }
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>

            <div className="space-y-4 max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <button
                            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-medium text-gray-800">{faq.question}</span>
                            {openIndex === index ?
                                <ChevronUp className="h-5 w-5 text-red-600" /> :
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            }
                        </button>

                        {openIndex === index && (
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
