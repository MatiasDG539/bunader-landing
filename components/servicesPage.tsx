import { SiteHeaderDark } from "@/components/header-dark";
import { SiteFooter } from "@/components/footer";
import {
    Home,
    Building,
    LineChart,
    Key,
    Map,
    ClipboardCheck,
    Briefcase,
    HelpCircle
} from "lucide-react";

export default function ServicesPage() {
    return (
        <div>
            <SiteHeaderDark />
            <main className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mt-20 mb-8 text-center">Indícanos como podemos ayudarte!</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Home className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Compra de Propiedades</h3>
                        <p className="text-gray-600">Te ayudamos a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Building className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Venta de Propiedades</h3>
                        <p className="text-gray-600">Gestionamos la venta de tu propiedad con valoración de mercado y estrategias de marketing efectivas.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Key className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Alquiler de Inmuebles</h3>
                        <p className="text-gray-600">Facilitamos el proceso de alquiler, tanto para propietarios como para inquilinos, con contratos seguros.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <LineChart className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Inversiones Inmobiliarias</h3>
                        <p className="text-gray-600">Asesoramiento profesional para maximizar tus inversiones en el mercado inmobiliario.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Map className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Gestión de Terrenos</h3>
                        <p className="text-gray-600">Compra, venta y desarrollo de terrenos urbanos y rurales con todos los trámites legales.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <ClipboardCheck className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Trámites Legales</h3>
                        <p className="text-gray-600">Asistencia completa en documentación, permisos y trámites relacionados con propiedades.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Briefcase className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Administración de Propiedades</h3>
                        <p className="text-gray-600">Gestionamos tu propiedad incluyendo mantenimiento, cobros y atención a inquilinos.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <HelpCircle className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Asesoría Personalizada</h3>
                        <p className="text-gray-600">Consultoría a medida para resolver dudas específicas sobre el mercado inmobiliario.</p>
                    </div>
                </div>

            </main>
            <SiteFooter />
        </div>
    );
}