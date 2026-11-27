"use client";

import Link from "next/link";
import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
    Search,
    DollarSign,
    Key,
    Calendar,
    TrendingUp,
    Settings,
    Globe,
    FileText,
    CheckCircle,
    ArrowRight,
    ArrowUp
} from "lucide-react";

export default function ServicesPage() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <SiteHeaderDark />
            <main className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-8">
                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('compra-propiedades')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Search className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Compra de Propiedades</h3>
                        <p className="text-gray-600">Búsqueda estratégica y asesoría integral para adquirir casas, departamentos y terrenos en Tucumán y Yerba Buena. </p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('venta-propiedades')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <DollarSign className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Venta de Propiedades</h3>
                        <p className="text-gray-600">Plan integral de comercialización y negociación especializado para maximizar el valor de su activo con respaldo legal.
                            Profesionales con certificación CRS</p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('alquiler-inmuebles')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Key className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Alquiler de Inmuebles</h3>
                        <p className="text-gray-600">Gestión profesional de alquileres (residenciales y comerciales): selección de inquilinos, contratos y cobranza segura.</p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('alquileres-temporales')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Calendar className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Alquileres Temporales</h3>
                        <p className="text-gray-600">Operación completa para short-stay: anuncios optimizados, check-in/out, limpieza y pricing dinámico para lograr altas tasas de ocupación.</p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('inversiones-inmobiliarias')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <TrendingUp className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Inversiones Inmobiliarias (Desarrollos)</h3>
                        <p className="text-gray-600">Consultoría para proyectos: viabilidad, modelización financiera y gestión de ejecución respaldada por 20 años de experiencia.</p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('administracion-propiedades')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Settings className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Administración de Propiedades</h3>
                        <p className="text-gray-600">Administración integral: cobranza, mantenimiento, reportes financieros y optimización de la rentabilidad del activo.</p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('inversiones-extranjero')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <Globe className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Inversiones en el Extranjero</h3>
                        <p className="text-gray-600">Asesoría focal en EEUU, Paraguay y España: selección de activos, due-diligence y estructura legal/fiscal para inversores argentinos.</p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105"
                        onClick={() => scrollToSection('tasaciones-profesionales')}
                    >
                        <div className="bg-red-100 p-4 rounded-full mb-4">
                            <FileText className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Tasaciones Profesionales</h3>
                        <p className="text-gray-600">Informes técnicos y valuaciones comparativas para fijar precio de venta o inversión con fundamentos técnicos.</p>
                    </div>

                </div>

                <section id="compra-propiedades" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <Search className="w-10 h-10 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Compra de Propiedades</h2>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Asesoramos la compra de casas, departamentos y terrenos en San Miguel de Tucumán, Yerba Buena y zonas aledañas. Realizamos búsqueda personalizada, análisis comparativo de mercado y verificación documental para que la compra sea segura y alineada a su perfil financiero. Nuestro equipo está integrado por agentes certificados CRS.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Búsqueda y preselección según criterios (zona, presupuesto, amenities).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Tours presenciales y virtuales.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Análisis comparativo de mercado (precios y plusvalía).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Revisión de títulos y coordinación con escribanos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Negociación de condiciones y seguimiento hasta escrituración.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Sin riesgo legal y financiero.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Ahorro de tiempo y esfuerzos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Decisión basada en datos locales y experiencia.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Listo para encontrar tu próxima propiedad?</h4>
                                            <p className="text-gray-700">Explora nuestras opciones disponibles para compra</p>
                                        </div>
                                        <Link href="/propiedades/venta">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Ver opciones para comprar
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="venta-propiedades" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <DollarSign className="w-10 h-10 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Venta de Propiedades</h2>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Ofrecemos un plan integral de comercialización y gestión de operaciones que busca maximizar el valor de su inmueble. Desde tasación técnica hasta la coordinación de la escrituración, cada etapa se ejecuta con procesos documentados y transparencia. Nuestro equipo de agentes certificados CRS trabaja para dar los mejores resultados y acordar los tiempos en los procesos de venta.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Tasación técnica y estrategia de posicionamiento de precio.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Producción fotográfica y videos profesionales (tour virtual).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Marketing multicanal y segmentación de potenciales compradores.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Gestión de propuestas y negociaciones documentadas.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Acompañamiento hasta la firma y entrega.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Mayor exposición a compradores calificados.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Optimización del precio neto de venta.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Proceso legalmente respaldado y transparente.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Listo para vender tu propiedad?</h4>
                                            <p className="text-gray-700">Consulta nuestro plan de venta personalizado</p>
                                        </div>
                                        <Link href="/vender-propiedad">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Consultar plan de venta
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="alquiler-inmuebles" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <Key className="w-10 h-10 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Alquiler de Inmuebles</h2>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Gestionamos alquileres residenciales y comerciales de forma eficiente. Cubrimos desde la promoción del inmueble hasta el seguimiento contractual y la cobranza, con controles periódicos y reportes al propietario.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Publicación optimizada y filtros de selección.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Verificación de antecedentes y garantías.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Preparación y firma de contrato conforme a normativa.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Gestión de cobranzas y reporte mensual.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Atención de mantenimiento y reclamos.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Menor exposición a incumplimientos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Control financiero y operativo permanente.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas gestionar tus alquileres?</h4>
                                            <p className="text-gray-700">Administración profesional con respaldo CRS</p>
                                        </div>
                                        <Link href="/propiedades/alquiler">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Consultar gestión de alquileres
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="alquileres-temporales" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <Calendar className="w-10 h-10 text-red-600" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Alquileres Temporales</h2>
                                        <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full self-start sm:self-center">
                                            Short-stay / Vacacional
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Operamos alquileres temporales optimizando precio y ocupación mediante anuncios profesionales, tarifas inteligentes y atención completa al huésped (check-in, limpieza, soporte). Ideal para propietarios que buscan ingresos recurrentes sin dedicación operativa.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Optimización de anuncios y fotografía.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Gestión de reservas y calendario.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Pricing dinámico y estrategia de temporada.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Check-in/out, limpieza profesional y atención 24/7.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Informes de ocupación y remesas al propietario.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Operación llave en mano.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Mejora de reputación y reviews.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Quieres maximizar tus ingresos con alquileres temporales?</h4>
                                            <p className="text-gray-700">Gestión profesional sin dedicación operativa</p>
                                        </div>
                                        <Link href="/contacto">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Consultar gestión temporales
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="inversiones-inmobiliarias" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <TrendingUp className="w-10 h-10 text-red-600" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Inversiones Inmobiliarias</h2>
                                        <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full self-start">
                                            Consultoría para Desarrollos
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Asesoramos proyectos inmobiliarios desde la prefactibilidad hasta la comercialización. Realizamos estudios de demanda, modelización financiera (TIR, ROI), estructuración de financiamiento y coordinación de equipos técnicos y comerciales.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Estudio de factibilidad y demanda.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Modelos financieros y escenarios de sensibilidad.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Búsqueda y negociación de terrenos/activos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Estructuración financiera y asesoría legal.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Plan comercial y acompañamiento en la ejecución.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Menor incertidumbre en la toma de decisiones.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Mayor eficiencia en tiempos y costos de desarrollo.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Acceso a red de inversores y proveedores.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Tienes un proyecto inmobiliario en mente?</h4>
                                            <p className="text-gray-700">Solicita nuestra consultoría especializada</p>
                                        </div>
                                        <Link href="/propiedades/proyectos">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Solicitar consultoría de proyecto
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="administracion-propiedades" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <Settings className="w-10 h-10 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Administración de Propiedades</h2>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Servicio integral para la administración de propiedades: cobranzas, mantenimiento, seguros, control presupuestario y reportes periódicos. Diseñado para propietarios que buscan profesionalizar la gestión y optimizar la rentabilidad de su portfolio.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Gestión de cobranzas y cuentas.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Coordinación de proveedores y mantenimiento preventivo.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Control presupuestario y pagos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Sugerencias de revalorización y reformas rentables.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Reportes financieros mensuales.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Transparencia contable y operativa.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Reducción de costos y riesgos operativos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Mejora sostenida del rendimiento del activo.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Quieres profesionalizar la gestión de tu propiedad?</h4>
                                            <p className="text-gray-700">Optimiza la rentabilidad de tu portfolio</p>
                                        </div>
                                        <Link href="/contacto">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Administrar mi propiedad
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="inversiones-extranjero" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <Globe className="w-10 h-10 text-red-600" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Inversiones en el Extranjero</h2>
                                        <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full self-start">
                                            EE. UU., Paraguay, España
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Asesoramos inversiones internacionales focalizadas en Estados Unidos, Paraguay y España. Brindamos análisis de mercado, due-diligence, estructura legal y fiscal, y coordinación con asesores locales para operaciones seguras y eficientes.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Análisis de mercado y selección de oportunidades.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Due-diligence legal y verificación de títulos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Estructuración fiscal y societaria (coordinación con asesores locales).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Gestión de la compra y seguimiento post-adquisición.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Informes de riesgos y retorno estimado.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Diversificación geográfica del portafolio.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Reducción de riesgos transfronterizos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Acompañamiento local y remoto en todo el proceso.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Quieres diversificar tu portafolio internacionalmente?</h4>
                                            <p className="text-gray-700">Asesoría especializada para inversiones en el exterior</p>
                                        </div>
                                        <Link href="/invertir-exterior">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Asesoría para invertir en el exterior
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="tasaciones-profesionales" className="py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                                        <FileText className="w-10 h-10 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Tasaciones Profesionales</h2>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Informes técnicos y valuaciones comparativas para determinar un precio objetivo de venta o inversión. Ideal para vendedores, compradores e inversores que requieren una valuación con metodología y comparables. Solución eficiente para particulares y empresas que buscan determinar el valor exacto de su inmueble.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Qué incluye:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Informe técnico con comparables y fotos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Recomendación de precio y estrategia de salida.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Entrega en formato PDF con anexos justificatorios.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                                            Beneficios:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Precio fijado con fundamentos sólidos.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Mayor credibilidad ante compradores e inversores.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">Base para decisiones comerciales y fiscales.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-r-lg">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas una valuación profesional de tu propiedad?</h4>
                                            <p className="text-gray-700">Informe técnico con fundamentos sólidos</p>
                                        </div>
                                        <Link href="/contacto">
                                            <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                                                Solicitar tasación profesional
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button
                                        onClick={scrollToTop}
                                        variant="outline"
                                        className="text-gray-600 bg-gray-100 hover:bg-gray-200"
                                    >
                                        <ArrowUp className="w-4 h-4 mr-2" />
                                        Volver arriba
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </div>
    );
}