"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function SiteHeaderDark() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const shouldShowScrolledStyle = isScrolled || isMenuOpen

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${shouldShowScrolledStyle ? "bg-white shadow-md py-6" : "bg-white py-6"
                }`}
        >
            <div className="relative container mx-auto flex items-center justify-between px-2">
                <div className="absolute md:left-0 left-1/2 md:transform-none transform -translate-x-1/2 top-1/2 -translate-y-1/2 md:ml-40">
                    <Link href="/" className="flex items-center">
                        <Image src="/bunader-logo.png" alt="Bunader Logo" width={180} height={180} />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6 ml-auto mr-10">
                    <Link
                        href="/"
                        className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/about"
                        className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors"
                    >
                        Nosotros
                    </Link>
                    <div className="relative group">
                        <Link
                            href="/properties"
                            className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors flex items-center gap-1"
                        >
                            Propiedades
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </Link>
                        <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="py-1">
                                <Link href="/properties/venta" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600">
                                    En Venta
                                </Link>
                                <Link href="/properties/alquiler" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600">
                                    En Alquiler
                                </Link>
                                <Link href="/properties/proyectos" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600">
                                    Proyectos Nuevos
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Link
                            href="/services"
                            className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors flex items-center gap-1"
                        >
                            Servicios
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </Link>
                        <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="py-1">
                                <Link href="/#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600">
                                    Asesoramiento
                                </Link>
                                <Link href="/#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600">
                                    Tasaciones
                                </Link>
                                <Link href="/#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-600">
                                    Cobranzas
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/contact"
                        className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors"
                    >
                        Contacto
                    </Link>
                    <Link href="#">
                        <Button className="bg-white text-black border border-red-600 hover:bg-red-600 hover:text-white ml-4 text-sm cursor-pointer transition-colors">Publica Tu Propiedad</Button>
                    </Link>
                </nav>

                <Button
                    variant={shouldShowScrolledStyle ? "outline" : "ghost"}
                    size="icon"
                    className="md:hidden ml-auto text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Alternar menú</span>
                </Button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/properties"
                            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Propiedades
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="/contact"
                            className="text-lg font-medium py-2 hover:text-red-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contacto
                        </Link>
                        <Button className="bg-red-600 hover:bg-red-700 w-full mt-2">Publica Tu Propiedad</Button>
                    </div>
                </div>
            )}
        </header>
    )
}
