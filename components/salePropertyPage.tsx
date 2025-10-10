import Link from "next/link";
import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import {
    Home,
    ClipboardCheck,
    Briefcase,
} from "lucide-react";

export default function SaleProperty() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeaderDark />
            <main className="flex-1">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="mb-20 pt-6">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                ¿Estás tratando de vender tu propiedad y no encontrás al comprador indicado? 
                                ¿Querés que más personas vean tu inmueble, sin perder tiempo ni dinero?
                            </p>
                            
                            <p>
                                En <span className="font-semibold text-red-600">Bunader Negocios Inmobiliarios</span>, 
                                abrimos un nuevo espacio para que puedas <span className="font-semibold">cargar tu propiedad en nuestro sitio web</span> y así ser visto por cientos de potenciales compradores que nos visitan todos los días.
                            </p>
                            
                            <p>
                                Sabemos que vender una propiedad no es solo una operación, es una decisión importante. 
                                Por eso, si tu inmueble tiene verdadero potencial, nuestro equipo va a contactarte 
                                para ayudarte con la <span className="font-semibold">tasación profesional</span>, el <span className="font-semibold">asesoramiento comercial</span> y todos los 
                                pasos que hacen falta para concretar una buena venta.
                            </p>
                            
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                                <p className="font-semibold text-red-800">
                                    Este nuevo canal es <span className="text-green-600">100% gratuito</span>, 
                                    sin compromiso, y está pensado para que puedas dar a conocer tu propiedad 
                                    de forma más ágil, directa y segura.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-4xl font-bold mb-6">¿Cómo funciona?</h2>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                                <div className="bg-red-100 p-4 rounded-full mb-4">
                                    <ClipboardCheck className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Completá el Formulario</h3>
                                <p className="text-gray-600">
                                    Completá un breve formulario con los datos de tu inmueble de manera fácil y rápida.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                                <div className="bg-red-100 p-4 rounded-full mb-4">
                                    <Briefcase className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Evaluación Profesional</h3>
                                <p className="text-gray-600">
                                    Nuestro equipo evaluará el caso y se pondrá en contacto si la propiedad califica.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                                <div className="bg-red-100 p-4 rounded-full mb-4">
                                    <Home className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Máxima Visibilidad</h3>
                                <p className="text-gray-600">
                                    Tu inmueble aparecerá marcado como &ldquo;Recientemente cargado&rdquo; para máxima visibilidad.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-600 text-white rounded-xl p-12 my-16 text-center">
                            <h2 className="text-3xl font-bold mb-4">¿Te animás a probar algo distinto?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Aprovechá esta oportunidad única de mostrar tu propiedad a miles de 
                                compradores potenciales sin costo alguno y con el respaldo de nuestros profesionales.
                            </p>
                            <Link href="/vender-propiedad/formulario" className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors inline-block">
                                Quiero cargar mi propiedad
                            </Link>
                        </div>

                    </div>

                </div>
            </main>
            <SiteFooter />
        </div>
    );
}