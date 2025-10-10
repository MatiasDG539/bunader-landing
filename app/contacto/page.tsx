import { SiteHeaderDark } from "@/components/ui/header-dark"
import { ContactPageContent } from "@/components/contact/contact-page-content"
import { SiteFooter } from "@/components/ui/footer"

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">

            <SiteHeaderDark />

            <main className="min-h-screen">

                {/* Hero Section */}

                <section className="relative h-[400px] md:h-[500px] bg-red-600 mb-10">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="container mx-auto max-w-5xl">
                        <div className="relative z-10 h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center text-white px-4">
                            <div className="mt-6 md:mt-0">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-18">Contáctanos</h1>
                                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                                    Estamos aquí para atender todas tus necesidades inmobiliarias.<br />
                                    Ponte en contacto con nosotros y descubre cómo podemos ayudarte.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactPageContent />
            </main>
            <SiteFooter />
        </div>
    )
}

export const metadata = {
    title: "Contacto | Bunader Inmobiliaria",
    description: "Ponte en contacto con Bunader Inmobiliaria para todas tus necesidades inmobiliarias en Tucumán. Estamos aquí para ayudarte a encontrar, comprar o vender tu propiedad ideal.",
}