"use client"

import { Button } from "@/components/ui/button"
import { X, Mail, MessageCircle } from "lucide-react"

interface ContactMethodModalProps {
    propertyId: number
    propertyTitle: string
    propertyPrice?: string
    propertyOperation: string
    isOpen: boolean
    onClose: () => void
    onSelectEmail: () => void
}

export function ContactMethodModal({ 
    propertyId, 
    propertyTitle, 
    propertyPrice, 
    propertyOperation, 
    isOpen, 
    onClose,
    onSelectEmail
}: ContactMethodModalProps) {
    
    if (!isOpen) return null

    const operationType = propertyOperation === "venta" ? "En Venta" : "En Alquiler"
    
    const whatsappMessage = `Hola! Me interesa esta propiedad:

🏠 *${propertyTitle || `Propiedad Ref: #${propertyId}`}*
💰 *${propertyPrice || 'Consultar precio'}*
📋 *${operationType}*

Me gustaría obtener más información:
• ¿Podrían enviarme más fotos?
• ¿Está disponible para visitar?
• ¿Cuáles son los gastos adicionales?
• ¿Hay documentación disponible?

¡Gracias!`

    const handleWhatsAppClick = () => {
        const phoneNumber = "+5493812185255"
        const encodedMessage = encodeURIComponent(whatsappMessage)
        
        if (typeof window !== 'undefined') {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            
            if (isMobile) {
                const mobileUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
                window.open(mobileUrl, '_blank')
            } else {
                const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
                window.open(webUrl, '_blank')
            }
        }
        onClose()
    }

    const handleEmailClick = () => {
        onSelectEmail()
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 sm:mx-0">
                <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">¿Cómo te gustaría contactarnos?</h2>
                            <p className="text-gray-600 text-sm sm:text-base mt-1">
                                {propertyTitle} - Ref: #{propertyId}
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <Button
                            onClick={handleWhatsAppClick}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-6 sm:py-8 flex items-center justify-center gap-3 sm:gap-4"
                        >
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            <div className="text-left">
                                <div className="font-bold text-lg sm:text-xl">WhatsApp</div>
                            </div>
                        </Button>

                        <Button
                            onClick={handleEmailClick}
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-6 sm:py-8 flex items-center justify-center gap-3 sm:gap-4"
                        >
                            <Mail className="h-8 w-8 sm:h-10 sm:w-10" />
                            <div className="text-left">
                                <div className="font-bold text-lg sm:text-xl">Email</div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
