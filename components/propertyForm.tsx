"use client"

import { useState } from "react";
import { SiteHeaderDark } from "@/components/ui/header-dark";
import { SiteFooter } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Home,
    MapPin,
    DollarSign,
    Phone,
    Mail,
    User,
    FileText,
    CheckCircle
} from "lucide-react";

export function PropertyForm() {
    const [formData, setFormData] = useState({
        address: "",
        propertyType: "",
        condition: "",
        tentativePrice: "",
        previousSaleAttempt: "",
        previousExperience: "",
        wantValuation: "",
        comments: "",
        name: "",
        phone: "",
        email: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log("Datos del formulario:", formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="flex min-h-screen flex-col bg-white">
                <SiteHeaderDark />
                <main className="flex-1">
                    <div className="max-w-2xl mx-auto text-center py-20">
                        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            ¡Gracias por confiar en nosotros!
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Hemos recibido la información de tu propiedad. Nuestro equipo la evaluará y
                            te contactaremos en las próximas 48 horas si consideramos que tiene potencial
                            para una venta exitosa.
                        </p>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <p className="text-red-800 font-medium">
                                Revisá tu email (incluyendo la carpeta de spam) para confirmar que recibimos tu consulta.
                            </p>
                        </div>
                    </div>
                </main>
                <SiteFooter />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeaderDark />
            <main className="min-h-screen">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-lg text-gray-600">
                                Completá este formulario y contanos un poco más sobre tu inmueble. No hace falta que subas fotos: con tus datos iniciales podremos empezar el análisis. Si la propiedad tiene potencial, te contactamos para avanzar con una tasación y ayudarte a venderla de forma profesional.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-10">

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <Home className="w-6 h-6 mr-2 text-red-600" />
                                        Información de la Propiedad
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                                Dirección del inmueble *
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <Input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className="pl-10"
                                                    placeholder="Ej: Av. Mitre 1234, San Miguel de Tucumán"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                                                Tipo de propiedad *
                                            </label>
                                            <select
                                                id="propertyType"
                                                name="propertyType"
                                                value={formData.propertyType}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            >
                                                <option value="">Seleccionar tipo</option>
                                                <option value="departamento">Departamento</option>
                                                <option value="casa">Casa</option>
                                                <option value="local">Local comercial</option>
                                                <option value="lote">Lote/Terreno</option>
                                                <option value="oficina">Oficina</option>
                                                <option value="galpon">Galpón/Depósito</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                                                Estado general *
                                            </label>
                                            <select
                                                id="condition"
                                                name="condition"
                                                value={formData.condition}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                            >
                                                <option value="">Seleccionar estado</option>
                                                <option value="a-estrenar">A estrenar</option>
                                                <option value="excelente">Excelente estado</option>
                                                <option value="muy-bueno">Muy buen estado</option>
                                                <option value="bueno">Buen estado</option>
                                                <option value="regular">Estado regular</option>
                                                <option value="necesita-mejoras">Necesita mejoras</option>
                                                <option value="refaccion">A refaccionar</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="tentativePrice" className="block text-sm font-medium text-gray-700 mb-2">
                                                Precio tentativo
                                            </label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <Input
                                                    type="text"
                                                    id="tentativePrice"
                                                    name="tentativePrice"
                                                    value={formData.tentativePrice}
                                                    onChange={handleInputChange}
                                                    className="pl-10"
                                                    placeholder="Ej: USD 120,000 o $50,000,000"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <FileText className="w-6 h-6 mr-2 text-red-600" />
                                        Experiencia Previa
                                    </h2>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                                ¿Intentaste venderla antes? *
                                            </label>
                                            <div className="flex space-x-4">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="previousSaleAttempt"
                                                        value="si"
                                                        checked={formData.previousSaleAttempt === "si"}
                                                        onChange={handleInputChange}
                                                        className="mr-2"
                                                        required
                                                    />
                                                    Sí
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="previousSaleAttempt"
                                                        value="no"
                                                        checked={formData.previousSaleAttempt === "no"}
                                                        onChange={handleInputChange}
                                                        className="mr-2"
                                                        required
                                                    />
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        {formData.previousSaleAttempt === "si" && (
                                            <div>
                                                <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Contanos brevemente cómo fue esa experiencia
                                                </label>
                                                <textarea
                                                    id="previousExperience"
                                                    name="previousExperience"
                                                    value={formData.previousExperience}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                    placeholder="Ej: Estuvo publicada 6 meses en diferentes portales, tuvimos algunas visitas pero no se concretó..."
                                                />
                                            </div>
                                        )}

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                                ¿Querés que te contactemos para hacerte una tasación sin compromiso? *
                                            </label>
                                            <div className="flex space-x-4">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="wantValuation"
                                                        value="si"
                                                        checked={formData.wantValuation === "si"}
                                                        onChange={handleInputChange}
                                                        className="mr-2"
                                                        required
                                                    />
                                                    Sí
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="wantValuation"
                                                        value="no"
                                                        checked={formData.wantValuation === "no"}
                                                        onChange={handleInputChange}
                                                        className="mr-2"
                                                        required
                                                    />
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                                                Comentarios y/o sugerencias
                                            </label>
                                            <textarea
                                                id="comments"
                                                name="comments"
                                                value={formData.comments}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                placeholder="Contanos cualquier detalle adicional que consideres importante..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <User className="w-6 h-6 mr-2 text-red-600" />
                                        Datos de Contacto
                                    </h2>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nombre completo *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="pl-10"
                                                    placeholder="Tu nombre completo"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Teléfono *
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <Input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="pl-10"
                                                    placeholder="Ej: +54 9 381 123-4567"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="pl-10"
                                                    placeholder="tu.email@ejemplo.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-8">
                                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Al enviar este formulario, aceptás que <span className="font-semibold text-red-600">Bunader Negocios Inmobiliarios</span> se ponga en contacto contigo para evaluar tu propiedad. Tus datos serán tratados de forma confidencial y solo se utilizarán para este propósito.
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 text-lg rounded-lg transition-colors duration-200"
                                        >
                                            Enviar Información de mi Propiedad
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}