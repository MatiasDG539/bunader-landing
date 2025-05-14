// import Image from "next/image"

export function ContactMap() {
    return (
        <div className="my-16 rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold p-6 bg-white">Nuestra Ubicación</h3>

            {/* Aquí normalmente iría un mapa interactivo con Google Maps o similar */}
            {/* Por ahora, usamos una imagen estática como placeholder */}
            <div className="relative w-full h-[400px]">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                        <p className="text-gray-600 mb-4">Aquí se integraría un mapa interactivo con Google Maps, Mapbox u otra API.</p>
                        <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                            <h4 className="font-bold">Bunader Inmobiliaria</h4>
                            <p>Av. Principal 123, San Miguel de Tucumán</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="p-6 bg-white">
                <h4 className="font-bold text-lg mb-2">¿Cómo llegar?</h4>
                <p className="text-gray-600">
                    Estamos ubicados en una zona céntrica y accesible de la ciudad. Puedes llegar fácilmente
                    utilizando transporte público (líneas 5, 12 y 18) o en auto propio. Contamos con
                    estacionamiento gratuito para nuestros clientes.
                </p>
            </div> */}
        </div>
    )
}
