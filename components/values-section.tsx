import { Heart, Users, Shield, Home } from "lucide-react"

export function ValuesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
                    <p className="text-lg text-gray-600">
                        En Bunader, creemos que encontrar un hogar es una de las decisiones más importantes en la vida. Por eso, nos
                        guiamos por valores que ponen a las personas en el centro de todo lo que hacemos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Pasión</h3>
                        <p className="text-gray-600">
                            Amamos lo que hacemos y nos apasiona ayudar a las familias a encontrar el lugar perfecto para llamar
                            hogar.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Cercanía</h3>
                        <p className="text-gray-600">
                            Construimos relaciones duraderas basadas en la confianza, la empatía y el entendimiento de tus
                            necesidades.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Integridad</h3>
                        <p className="text-gray-600">
                            Actuamos con honestidad y transparencia en cada paso del proceso, priorizando siempre tus intereses.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Home className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Compromiso</h3>
                        <p className="text-gray-600">
                            Nos dedicamos a encontrar no solo una propiedad, sino el lugar donde tus sueños puedan hacerse realidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
