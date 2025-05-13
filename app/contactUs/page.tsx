import { SiteHeaderDark } from "@/components/header-dark"
import { ContactPageContent } from "@/components/contact/contact-page-content"
import { SiteFooter } from "@/components/footer"

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeaderDark />
            <main className="flex-1 pt-32">
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