import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-5xl font-bold mb-8">Contáctanos</h2>
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        Ya sea que estés buscando comprar, vender o simplemente tengas preguntas sobre el mercado inmobiliario,
                        nuestro equipo está aquí para ayudarte. Ponte en contacto con nosotros hoy.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="bg-red-600/10 p-3 rounded-full mr-4">
                                <Phone className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Llámanos</h3>
                                <p className="text-gray-600">(381) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-red-600/10 p-3 rounded-full mr-4">
                                <Mail className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Envíanos un Email</h3>
                                <p className="text-gray-600">info@primeestate.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-red-600/10 p-3 rounded-full mr-4">
                                <MapPin className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Visítanos</h3>
                                <p className="text-gray-600">
                                    123 Av. Inmobiliaria
                                    <br />
                                    Oficina 456
                                    <br />
                                    San Miguel de Tucumán, Tucumán
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre
                                </label>
                                <Input id="name" placeholder="Tu nombre" className="border-gray-300" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="Tu email" className="border-gray-300" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Teléfono
                            </label>
                            <Input id="phone" placeholder="Tu número de teléfono" className="border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Asunto
                            </label>
                            <Input id="subject" placeholder="¿Cómo podemos ayudarte?" className="border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Cuéntanos más sobre tus necesidades..."
                                className="border-gray-300 min-h-[120px]"
                            />
                        </div>
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-6">Enviar Mensaje</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
