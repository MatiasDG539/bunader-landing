import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
    return (
        <div>
            <div className="space-y-8">
                <div className="flex items-start">
                    <div className="bg-red-600/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Llámanos</h3>
                        <p className="text-gray-600">0381 4243087</p>
                        <p className="text-gray-600">+54 9 381 350-1893</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-red-600/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Envíanos un Email</h3>
                        <a href="mailto:info@bunader.com.ar" className="text-gray-600 hover:text-red-600 transition-colors break-all">
                            info@bunader.com.ar
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-red-600/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Visítanos</h3>
                        <a href="https://maps.app.goo.gl/As9gkEPS7FNeE8scA" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                            Buenos Aires 491 Piso 6
                            <br />
                            San Miguel de Tucumán
                            <br />
                            Tucumán, Argentina
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-red-600/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Horario de Atención</h3>
                        <p className="text-gray-600">
                            Lunes a Viernes: 9:00 - 17:00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
