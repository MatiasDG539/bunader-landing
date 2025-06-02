"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Building } from "lucide-react"
import { getProjects, Project } from "@/actions/tokkoApi"

export function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({})

    useEffect(() => {
        if (!projects.length) return;

        const intervalIds: Record<number, NodeJS.Timeout> = {};

        projects.forEach(project => {
            if (project.images.length > 1) {
                intervalIds[project.id] = setInterval(() => {
                    setActiveImageIndex(prev => ({
                        ...prev,
                        [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
                    }));
                }, 7000);
            }
        });

        return () => {
            Object.values(intervalIds).forEach(id => clearInterval(id));
        };
    }, [projects]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true)
                const projectsData = await getProjects()
                setProjects(projectsData)
            } catch (error) {
                console.error("Error fetching projects:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
        }
    }

    return (
        <section className="py-16 bg-white">
            <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Proyectos en Desarrollo</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Descubre nuestros proyectos inmobiliarios en desarrollo y asegura tu inversión con anticipación.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-gray-300"
                            onClick={scrollLeft}
                        >
                            <ChevronLeft className="h-6 w-6" />
                            <span className="sr-only">Desplazar a la izquierda</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-gray-300"
                            onClick={scrollRight}
                        >
                            <ChevronRight className="h-6 w-6" />
                            <span className="sr-only">Desplazar a la derecha</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {loading ? (
                    <div className="flex justify-center items-center w-full py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                    </div>
                ) : projects.length > 0 ? (
                    projects.map((project) => (
                        <Card
                            key={project.id}
                            className="min-w-[350px] max-w-[350px] border-0 overflow-hidden shadow-lg rounded-xl flex-shrink-0"
                        >
                            <div className="relative h-[250px] w-full">
                                <div className="relative w-full h-full">
                                    {project.images && project.images.length > 0 &&
                                        project.images.map((image, index) => (
                                            <Image
                                                key={index}
                                                src={image.image || "/placeholder.svg"}
                                                alt={`${project.title} - imagen ${index + 1}`}
                                                fill
                                                className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === (activeImageIndex[project.id] || 0) ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            />
                                        ))
                                    }
                                    {(!project.images || project.images.length === 0) && (
                                        <Image
                                            src="/placeholder.svg"
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>

                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveImageIndex(prev => ({
                                                    ...prev,
                                                    [project.id]: (prev[project.id] - 1 + project.images.length) % project.images.length
                                                }));
                                            }}
                                            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 shadow-md transition-all"
                                            aria-label="Imagen anterior"
                                        >
                                            <ChevronLeft className="h-5 w-5 text-gray-800" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveImageIndex(prev => ({
                                                    ...prev,
                                                    [project.id]: (prev[project.id] + 1) % project.images.length
                                                }));
                                            }}
                                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 shadow-md transition-all"
                                            aria-label="Imagen siguiente"
                                        >
                                            <ChevronRight className="h-5 w-5 text-gray-800" />
                                        </button>
                                    </>
                                )}

                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {project.status}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-xl font-bold">{project.type}</div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col h-[180px]">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <div className="flex items-center text-gray-500 mb-4">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {project.location}
                                </div>
                                <div className="flex justify-between mb-6">
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 mr-1 text-gray-400" />
                                        <span>Entrega: {project.completion || '-'}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Building className="h-5 w-5 mr-1 text-gray-400" />
                                        <span>{project.units || '-'} Unidades</span>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Button className="w-full bg-red-600 hover:bg-red-800">Más Información</Button>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full py-20">
                        <p className="text-gray-500 text-lg">No se encontraron proyectos en desarrollo</p>
                    </div>
                )}
            </div>

            <div className="mt-10 text-center">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300">
                    Ver Todos los Proyectos
                </Button>
            </div>
        </section>
    )
}
