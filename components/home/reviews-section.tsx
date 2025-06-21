"use client"

import { useEffect } from "react"
import Image from "next/image"

export function TestimonialsSection() {
    useEffect(() => {
        if (!document.getElementById("EmbedSocialWidgetScript")) {
            const script = document.createElement("script")
            script.id = "EmbedSocialWidgetScript"
            script.src = "https://embedsocial.com/cdn/aht.js"
            document.getElementsByTagName("head")[0].appendChild(script)
        }
    }, [])

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    No solo tomes nuestra palabra. Escucha a nuestros clientes satisfechos.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div 
                    className="embedsocial-widget" 
                    data-ref="52a781d896bd34c7b612990db025ddc3"
                >
                    <a 
                        href="https://embedsocial.com/google-reviews-widget/" 
                        title="Add Google reviews on a website" 
                        target="_blank" 
                        className="powered-by-es es-summary-slider"
                        rel="noopener noreferrer"
                    >
                        <Image 
                            src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" 
                            alt="EmbedSocial"
                            width={24}
                            height={24}
                        />
                        <span>Google reviews widget</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
