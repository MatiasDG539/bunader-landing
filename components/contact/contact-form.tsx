"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitSuccess(false)
        setSubmitError(false)

        // Simulamos el envío del formulario
        try {
            // Aquí iría la lógica para enviar el formulario a un backend
            // Por ahora, solo simulamos un retraso
            await new Promise(resolve => setTimeout(resolve, 1500))
            setSubmitSuccess(true)
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            })
        } catch (error) {
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
                <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
            </form>
        </div>
    )
}
