import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BrowseWebsiteSection() {
    return (
        <section className="py-16 bg-gray-100 border-t border-b border-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">RECORRÉ NUESTRA WEB</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 flex flex-col items-center text-center">
                        <div className="relative w-full h-[200px] mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop"
                                alt="Interior de cocina moderna"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-4">TASACIONES</h3>
                        <p className="text-gray-600 mb-6">¿Cuál es el valor de tu propiedad?</p>
                        <Button className="bg-black hover:bg-gray-800 text-white">Click Aquí</Button>
                    </div>

                    <div className="bg-white p-6 flex flex-col items-center text-center">
                        <div className="relative w-full h-[200px] mb-6">
                            <Image
                                src="https://www.caminodelosjesuitas.com/wp-content/uploads/2023/06/18_Tucuman-Casa-Historica-de-la-Independencia.jpg"
                                alt="Edificio histórico"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-4">PATRIMONIO</h3>
                        <p className="text-gray-600 mb-6">Tucumán y su apasionante historia</p>
                        <Button className="bg-black hover:bg-gray-800 text-white">Click Aquí</Button>
                    </div>

                    <div className="bg-white p-6 flex flex-col items-center text-center">
                        <div className="relative w-full h-[200px] mb-6">
                            <Image
                                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop"
                                alt="Fotografía arquitectónica"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-4">FOTOGRAFÍAS</h3>
                        <p className="text-gray-600 mb-6">Una mirada fotográfica sobre Tucumán</p>
                        <Button className="bg-black hover:bg-gray-800 text-white">Click Aquí</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
