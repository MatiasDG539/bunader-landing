import { ContactForm } from "./contact-form"
import { ContactInfo } from "./contact-info"
import { ContactMap } from "./contact-map"
import { ContactFAQ } from "./contact-faq"

export function ContactPageContent() {
    return (
        <div className="py-5 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            {/* Hero section for contact page */}
            <div className="text-center mb-16">
                <h1 className="text-6xl font-bold mb-4">Contacto</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Estamos aquí para atender todas tus necesidades inmobiliarias.
                    Ponte en contacto con nosotros y descubre cómo podemos ayudarte.
                </p>
            </div>

            {/* Main contact section with form and info */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <ContactInfo />
                <ContactForm />
            </div>

            {/* Map section */}
            <ContactMap />

            {/* FAQ section */}
            <ContactFAQ />

            {/* CTA section */}
            <div className="bg-red-600 text-white rounded-xl p-12 my-16 text-center">
                <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar tu hogar ideal?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Nuestro equipo de profesionales está listo para ayudarte a encontrar
                    la propiedad perfecta que se ajuste a tus necesidades y presupuesto.
                </p>
                <button className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors">
                    Ver Propiedades
                </button>
            </div>
        </div>
    )
}
