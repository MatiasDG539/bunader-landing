import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-5xl font-bold mb-8">
                        Sobre <span className="text-red-600">Bunader</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Durante más de 20 años, hemos sido más que simples agentes inmobiliarios - hemos sido asesores de confianza,
                        vecinos y amigos para innumerables familias. Nuestro enfoque es simple: primero
                        escuchamos a nuestros clientes, entendemos sus necesidades y luego los guiamos en cada paso de su viaje inmobiliario.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-3xl font-bold text-red-600 mb-2">350+</h3>
                            <p className="text-gray-600">Propiedades Vendidas/Alquiladas</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-red-600 mb-2">100%</h3>
                            <p className="text-gray-600">Acompañamiento al Cliente</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-red-600 mb-2">20+</h3>
                            <p className="text-gray-600">Años de Experiencia</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-red-600 mb-2">24/7</h3>
                            <p className="text-gray-600">Atención al Cliente</p>
                        </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">Conoce Más Sobre Nosotros</Button>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                            alt="Nuestro Equipo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-red-600 rounded-lg -z-10"></div>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-black rounded-lg -z-10"></div>
                </div>
            </div>
        </section>
    )
}
