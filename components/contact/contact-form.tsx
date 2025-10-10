"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from "react-google-recaptcha"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
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
                    ...formData,
                    recaptchaToken: tokenToSend
                }),
            })

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje')
            }

            setSubmitSuccess(true)
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            })
            
            recaptchaRef.current?.reset()
            setRecaptchaToken(null)
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>

            {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-700 rounded-lg">
                    Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.
                </div>
            )}

            {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-lg">
                    Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.
                </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre
                        </label>
                        <Input
                            id="name"
                            placeholder="Tu nombre"
                            className="border-gray-300"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Tu email"
                            className="border-gray-300"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                    </label>
                    <Input
                        id="phone"
                        placeholder="Tu número de teléfono"
                        className="border-gray-300"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                    </label>
                    <Input
                        id="subject"
                        placeholder="¿Cómo podemos ayudarte?"
                        className="border-gray-300"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Cuéntanos más sobre tus necesidades..."
                        className="border-gray-300 min-h-[120px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                {process.env.NODE_ENV !== 'development' ? (
                    <div className="flex justify-center">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                            onChange={handleRecaptchaChange}
                            size="normal"
                        />
                    </div>
                ) : (
                    <div className="text-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-700">
                            🔧 Modo desarrollo: reCAPTCHA deshabilitado
                        </p>
                    </div>
                )}
                
                <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                    disabled={isSubmitting || (!recaptchaToken && process.env.NODE_ENV !== 'development')}
                >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
            </form>
        </div>
    )
}
