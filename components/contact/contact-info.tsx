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
                        <p className="text-gray-600">(381) 456-7890</p>
                        <p className="text-gray-600">(381) 123-4567</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-red-600/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Envíanos un Email</h3>
                        <p className="text-gray-600">contacto@bunader.com</p>
                        <p className="text-gray-600">ventas@bunader.com</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-red-600/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Visítanos</h3>
                        <p className="text-gray-600">
                            Av. Principal 123
                            <br />
                            Oficina 456, Torre Inmobiliaria
                            <br />
                            San Miguel de Tucumán, Tucumán
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-red-600/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Horario de Atención</h3>
                        <p className="text-gray-600">
                            Lunes a Viernes: 8:30 - 18:00
                            <br />
                            Sábados: 9:00 - 13:00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
