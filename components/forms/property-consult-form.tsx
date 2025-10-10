"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from "react-google-recaptcha"
import { X } from "lucide-react"

interface PropertyConsultFormProps {
    propertyId: number
    propertyTitle: string
    propertyPrice?: string
    propertyOperation: string
    isOpen: boolean
    onClose: () => void
}

export function PropertyConsultForm({ 
    propertyId, 
    propertyTitle, 
    propertyPrice, 
    propertyOperation, 
    isOpen, 
    onClose 
}: PropertyConsultFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState(false)
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    // Mensaje por defecto para la consulta
    const defaultMessage = `Hola, me interesa esta propiedad y me gustaría obtener más información:

- ¿Podrían enviarme más fotos?
- ¿Está disponible para visitar?
- ¿Cuáles son los gastos adicionales?
- ¿Hay documentación disponible?

Gracias por su atención.`

    // Generar asunto automáticamente
    const operationType = propertyOperation === "venta" ? "En Venta" : "En Alquiler"
    const autoSubject = `Consulta sobre ${propertyTitle || `propiedad Ref: #${propertyId}`} - ${operationType}`

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
            const response = await fetch('/api/mailing/property_consult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: tokenToSend,
                    propertyId,
                    propertyTitle,
                    propertyPrice,
                    propertyOperation
                }),
            })

            if (!response.ok) {
                throw new Error('Error al enviar la consulta')
            }

            setSubmitSuccess(true)
            
            // Reset form after successful submission
            setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
                recaptchaRef.current?.reset()
                setRecaptchaToken(null)
                setSubmitSuccess(false)
                onClose()
            }, 2000)
            
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        if (!isSubmitting) {
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
            setSubmitSuccess(false)
            setSubmitError(false)
            recaptchaRef.current?.reset()
            setRecaptchaToken(null)
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-0">
                <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Consulta sobre esta propiedad</h2>
                            <p className="text-gray-600 text-xs sm:text-sm mt-1 truncate">
                                {propertyTitle} - Ref: #{propertyId}
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {submitSuccess && (
                        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-100 text-green-700 rounded-lg">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-2 sm:ml-3">
                                    <p className="text-xs sm:text-sm font-medium">
                                        ¡Consulta enviada correctamente! Nos pondremos en contacto contigo pronto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {submitError && (
                        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-100 text-red-700 rounded-lg">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-2 sm:ml-3">
                                    <p className="text-xs sm:text-sm font-medium">
                                        Ha ocurrido un error al enviar tu consulta. Por favor, inténtalo de nuevo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre *
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Tu nombre completo"
                                    className="border-gray-300 text-sm sm:text-base"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email *
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="border-gray-300 text-sm sm:text-base"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
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
                                className="border-gray-300 text-sm sm:text-base"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Asunto
                            </label>
                            <Input
                                id="subject"
                                value={autoSubject}
                                className="border-gray-300 bg-gray-50 text-gray-600 text-xs sm:text-sm"
                                disabled={true}
                                readOnly
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                El asunto se genera automáticamente basado en la propiedad
                            </p>
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje *
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Escribe tu consulta aquí..."
                                className="border-gray-300 min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                                value={formData.message || defaultMessage}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Puedes modificar el mensaje predeterminado según tus necesidades
                            </p>
                        </div>
                        
                        {process.env.NODE_ENV !== 'development' ? (
                            <div className="flex justify-center">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                                    onChange={handleRecaptchaChange}
                                    size="compact"
                                />
                            </div>
                        ) : (
                            <div className="text-center p-2 sm:p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-xs sm:text-sm text-yellow-700">
                                    🔧 Modo desarrollo: reCAPTCHA deshabilitado
                                </p>
                            </div>
                        )}
                        
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                disabled={isSubmitting}
                                className="flex-1 order-2 sm:order-1"
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                className="flex-1 bg-red-600 hover:bg-red-700 order-1 sm:order-2"
                                disabled={isSubmitting || (!recaptchaToken && process.env.NODE_ENV !== 'development')}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}