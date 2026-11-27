"use client"

import { useState, useRef } from "react"
import { SiteHeaderDark } from "@/components/ui/header-dark"
import { SiteFooter } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from "react-google-recaptcha"

export default function ExteriorInvestment() {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState(false)
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitSuccess(false)
        setSubmitError(false)

        const tokenToSend = process.env.NODE_ENV === 'development' ? 'test-token' : recaptchaToken

        if (!tokenToSend) {
            setSubmitError(true)
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/mailing/common_form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.email.split('@')[0] || 'Interesado en inversión exterior',
                    email: formData.email,
                    phone: formData.phone,
                    subject: 'Consulta sobre inversión en el exterior',
                    message: formData.message || `Consulta sobre inversión en el exterior.\n\nEmail: ${formData.email}\nTeléfono: ${formData.phone || 'No proporcionado'}`,
                    recaptchaToken: tokenToSend
                }),
            })

            if (!response.ok) {
                throw new Error('Error al enviar la consulta')
            }

            setSubmitSuccess(true)
            
            setTimeout(() => {
                setFormData({
                    email: "",
                    phone: "",
                    message: ""
                })
                recaptchaRef.current?.reset()
                setRecaptchaToken(null)
                setSubmitSuccess(false)
            }, 3000)
            
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeaderDark />
            <main className="flex-1">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="mb-20">
                        <div className="text-lg text-gray-700 leading-relaxed">
                            <p>
                                Invertir en bienes raíces en el exterior requiere entender cada mercado, sus leyes y sus riesgos. 
                                En <span className="font-semibold text-red-600">Bunader Negocios Inmobiliarios</span> te guiamos paso a paso 
                                para que tu capital crezca en un entorno seguro, con asesoramiento profesional en Paraguay, Estados Unidos 
                                y otros destinos estratégicos, aprovechando oportunidades globales con una mirada local y confiable.
                            </p>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                                    Contactanos
                                </h2>

                                {submitSuccess && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-700 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium">
                                                    ¡Consulta enviada correctamente! Nos pondremos en contacto contigo pronto.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {submitError && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium">
                                                    Ha ocurrido un error al enviar tu consulta. Por favor, inténtalo de nuevo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="tu@email.com"
                                            className="border-gray-300"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Teléfono *
                                        </label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="Tu número de teléfono"
                                            className="border-gray-300"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mensaje
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Escribe tu consulta aquí..."
                                            className="border-gray-300 min-h-[100px]"
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    
                                    {process.env.NODE_ENV !== 'development' ? (
                                        <div className="flex justify-center pt-2">
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                                                onChange={handleRecaptchaChange}
                                                size="compact"
                                            />
                                        </div>
                                    ) : (
                                        <div className="text-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                            <p className="text-xs text-yellow-700">
                                                🔧 Modo desarrollo: reCAPTCHA deshabilitado
                                            </p>
                                        </div>
                                    )}
                                    
                                    <Button
                                        type="submit"
                                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                                        disabled={isSubmitting || (!recaptchaToken && process.env.NODE_ENV !== 'development')}
                                    >
                                        {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <SiteFooter />
        </div>
    )
}

