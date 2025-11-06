"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQItem = {
    question: string
    answer: React.ReactNode
}

export function ContactFAQ() {
    const faqs: FAQItem[] = [
        {
            question: "¿Cuál es el proceso para comprar una propiedad?",
            answer: (
                <>
                    Comprar una propiedad con <strong>Bunader Negocios Inmobiliarios</strong> es un proceso claro, seguro y acompañado en cada etapa. Primero, escuchamos tus necesidades para definir el tipo de inmueble ideal. Luego, te mostramos las mejores opciones disponibles en <strong>Tucumán, Yerba Buena y alrededores</strong>, evaluando ubicación, calidad constructiva y valor de mercado. Una vez seleccionada la propiedad, coordinamos la <strong>reserva</strong>, revisamos la documentación legal y te acompañamos hasta la <strong>firma de la escritura</strong>, garantizando transparencia en todo momento. Nuestro equipo te asesora también en aspectos financieros, hipotecarios y notariales, para que tu inversión sea <strong>segura, rentable y sin sorpresas</strong>.
                </>
            )
        },
        {
            question: "¿Qué documentos necesito para vender mi propiedad?",
            answer: (
                <>
                    <p className="mb-3">Para vender tu propiedad de forma segura y sin demoras, es fundamental contar con la documentación completa. Entre los principales documentos solicitados se encuentran:</p>
                    <ul className="list-disc list-inside mb-3 space-y-2">
                        <li><strong>Título de propiedad</strong> (escritura o boleto con posesión efectiva)</li>
                        <li><strong>DNI del propietario</strong> y, en caso de corresponder, <strong>poder de venta</strong></li>
                        <li><strong>Última boleta de impuestos y servicios</strong></li>
                        <li><strong>Plano aprobado y reglamento de copropiedad</strong> (si aplica)</li>
                        <li><strong>Certificado de libre deuda y expensas actualizadas</strong></li>
                    </ul>
                    <p>Nuestro equipo revisa y organiza toda la documentación, evitando errores o demoras en la operación. Trabajar con una <strong>inmobiliaria seria</strong> como <strong>Bunader</strong> te garantiza que cada paso sea <strong>legal, transparente y respaldado</strong>.</p>
                </>
            )
        },
        {
            question: "¿Bunader ofrece servicios de tasación?",
            answer: (
                <>
                    Sí. En <strong>Bunader Negocios Inmobiliarios</strong> realizamos <strong>tasaciones profesionales</strong> con base en el <strong>análisis comparativo de mercado (ACM)</strong>, experiencia en transacciones reales y conocimiento actualizado del valor por zona. Una <strong>tasación precisa</strong> es clave para definir un precio competitivo y lograr resultados reales en el menor tiempo posible. Publicar una propiedad sin tasación profesional puede hacerte <strong>perder oportunidades de venta o valor patrimonial</strong>. Por eso, en Bunader cada tasación se realiza con <strong>criterios técnicos, respaldo documental y total objetividad</strong>.
                </>
            )
        },
        {
            question: "¿Cuánto tiempo toma normalmente vender una propiedad?",
            answer: (
                <>
                    El tiempo de venta depende de factores como ubicación, estado del inmueble, precio y estrategia comercial. En promedio, una propiedad bien tasada y presentada con exclusividad puede venderse entre <strong>60 y 120 días</strong>, mientras que aquellas con precios fuera de mercado o sin una gestión profesional pueden tardar mucho más. En Bunader optimizamos los tiempos gracias a una red de difusión multicanal, fotografía profesional, base activa de compradores y el trabajo conjunto con <strong>MLS Tucumán</strong>, un sistema colaborativo entre las principales inmobiliarias de la provincia.
                </>
            )
        },
        {
            question: "¿Cómo puedo vender mi propiedad con Bunader?",
            answer: (
                <>
                    Vender tu propiedad con <strong>Bunader Negocios Inmobiliarios</strong> es <strong>simple, seguro y eficaz</strong>. Solo necesitás <strong>contactarnos</strong>, y nuestro equipo coordinará una visita para <strong>evaluar el inmueble y realizar la tasación profesional</strong>. Luego, te propondremos un <strong>plan comercial personalizado</strong> que incluye <strong>fotografías profesionales</strong>, publicación en portales destacados, redes sociales, base de clientes y difusión entre las principales inmobiliarias asociadas a <strong>MLS Tucumán</strong>. Recomendamos otorgar una <strong>autorización exclusiva</strong>, lo que nos permite trabajar con <strong>foco, inversión publicitaria y máxima dedicación</strong> para lograr el mejor resultado posible en el menor tiempo.
                </>
            )
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
                                <div className="text-gray-600">{faq.answer}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
