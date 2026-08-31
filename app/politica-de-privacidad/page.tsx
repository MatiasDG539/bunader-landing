import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/header";
import { SiteFooter } from "@/components/ui/footer";

export const metadata: Metadata = {
    title: "Política de Privacidad | Bunader Negocios Inmobiliarios",
    description: "Política de Privacidad de Bunader Negocios Inmobiliarios.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <SiteHeader />
            <main className="flex-1">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
                    <p className="text-gray-500 mb-8">Última actualización: agosto de 2026</p>

                    <p className="mb-4">
                        Bunader Negocios Inmobiliarios es una marca comercial operada por Federico Bunader, con
                        domicilio en 25 de Mayo 851, San Miguel de Tucumán, Tucumán, Argentina.
                    </p>

                    <p className="mb-8">
                        La presente Política de Privacidad describe el tratamiento de la información personal
                        proporcionada por usuarios que interactúan con nuestro sitio web, formularios, canales de
                        comunicación y servicios digitales.
                    </p>

                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Datos que podemos recopilar</h2>
                    <p className="mb-4">
                        Podemos recopilar información proporcionada voluntariamente por los usuarios, incluyendo
                        nombre y apellido, dirección de correo electrónico, número de teléfono o WhatsApp y datos
                        relacionados con consultas, búsquedas, propiedades u operaciones inmobiliarias.
                    </p>
                    <p className="mb-8">
                        También podemos recibir información generada a través de la interacción con nuestros
                        formularios, anuncios y canales digitales, incluyendo servicios de Meta como Facebook,
                        Instagram y WhatsApp, cuando corresponda.
                    </p>

                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Finalidad del uso de los datos</h2>
                    <p className="mb-3">La información podrá ser utilizada para:</p>
                    <ul className="list-disc pl-5 mb-8 space-y-1">
                        <li>responder consultas y solicitudes;</li>
                        <li>brindar asesoramiento y servicios inmobiliarios;</li>
                        <li>contactar a personas interesadas en comprar, vender o alquilar inmuebles;</li>
                        <li>coordinar reuniones, visitas o tasaciones;</li>
                        <li>realizar seguimiento de consultas y relaciones comerciales;</li>
                        <li>
                            comunicar propiedades, servicios o información que pueda resultar de interés en relación
                            con la consulta realizada;
                        </li>
                        <li>mejorar nuestros procesos de atención y comunicación.</li>
                    </ul>

                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Tratamiento y proveedores tecnológicos</h2>
                    <p className="mb-4">
                        Bunader Negocios Inmobiliarios podrá utilizar plataformas y proveedores tecnológicos para
                        gestionar comunicaciones, formularios, bases de datos, CRM, publicidad y automatizaciones
                        necesarias para prestar sus servicios.
                    </p>
                    <p className="mb-4">No vendemos ni comercializamos los datos personales de nuestros usuarios a terceros.</p>
                    <p className="mb-8">
                        La información será conservada durante el tiempo razonablemente necesario para atender las
                        finalidades para las que fue recopilada y cumplir las obligaciones legales que correspondan.
                    </p>

                    <h2 id="eliminacion-de-datos" className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 scroll-mt-24">
                        Derechos del usuario y eliminación de datos
                    </h2>
                    <p className="mb-4">
                        Los usuarios pueden solicitar el acceso, actualización, rectificación o eliminación de sus
                        datos personales.
                    </p>
                    <p className="mb-4">
                        Para solicitar la eliminación de información almacenada por Bunader Negocios Inmobiliarios,
                        el usuario deberá enviar un correo electrónico a:
                    </p>
                    <p className="mb-4">
                        <a href="mailto:info@bunader.com.ar" className="text-red-600 hover:underline">
                            info@bunader.com.ar
                        </a>
                    </p>
                    <p className="mb-4">
                        indicando en el asunto &ldquo;Solicitud de eliminación de datos&rdquo; e identificando los
                        datos necesarios para poder localizar su información.
                    </p>
                    <p className="mb-8">
                        Una vez recibida y verificada la solicitud, se procederá a eliminar o anonimizar la
                        información que corresponda, salvo aquella que deba conservarse por obligaciones legales,
                        contractuales o administrativas.
                    </p>

                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Seguridad</h2>
                    <p className="mb-8">
                        Adoptamos medidas razonables para proteger la información personal y limitar su acceso a las
                        personas y proveedores que necesitan utilizarla para las finalidades indicadas.
                    </p>

                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Modificaciones</h2>
                    <p className="mb-8">
                        Esta Política de Privacidad podrá actualizarse cuando resulte necesario por cambios en
                        nuestros servicios, procesos o requisitos legales. La versión vigente estará disponible
                        permanentemente en este sitio web.
                    </p>

                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Contacto</h2>
                    <p className="mb-1">
                        Para consultas relacionadas con privacidad y tratamiento de datos personales:
                    </p>
                    <p className="mt-4">
                        Bunader Negocios Inmobiliarios
                        <br />
                        Responsable: Federico Bunader
                        <br />
                        25 de Mayo 851
                        <br />
                        San Miguel de Tucumán, Tucumán, Argentina
                        <br />
                        <a href="mailto:info@bunader.com.ar" className="text-red-600 hover:underline">
                            info@bunader.com.ar
                        </a>
                    </p>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
