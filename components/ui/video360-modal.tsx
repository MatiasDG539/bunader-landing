"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { PropertyVideo } from "@/actions/tokkoApi"

interface Video360ModalProps {
    video: PropertyVideo
    isOpen: boolean
    onClose: () => void
}

export function Video360Modal({ video, isOpen, onClose }: Video360ModalProps) {
    if (!isOpen) return null

    // Detectar si es un video de Matterport
    const isMatterport = video.provider === "matterport" || video.provider_id === 3

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] md:h-[75vh] bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón de cerrar */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:text-gray-300 hover:bg-white/10 rounded-full bg-black/50"
                >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>

                {/* Contenedor del video */}
                <div className="w-full h-full flex items-center justify-center">
                    {isMatterport ? (
                        <iframe
                            src={video.player_url || video.url}
                            className="w-full h-full border-0"
                            allow="fullscreen; vr"
                            allowFullScreen
                            title={video.title || "Tour Virtual 360°"}
                        />
                    ) : (
                        <div className="text-white text-center p-4 sm:p-8">
                            <p className="text-base sm:text-lg mb-4">Video no disponible</p>
                            <Button
                                onClick={() => window.open(video.url || video.player_url, '_blank')}
                                className="bg-red-600 hover:bg-red-700 text-sm sm:text-base"
                            >
                                Abrir en nueva pestaña
                            </Button>
                        </div>
                    )}
                </div>

                {/* Título del video (opcional, en la parte inferior) */}
                {video.title && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg max-w-[90%]">
                        <p className="text-xs sm:text-sm font-medium truncate">{video.title}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
