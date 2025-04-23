"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/bunader-logo"
                        alt="Bunader Logo"
                        width={32}
                        height={32}
                        className="h-20 w-80"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className={`text-lg font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-gray-800" : "text-white"
                            }`}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/properties"
                        className={`text-lg font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-gray-800" : "text-white"
                            }`}
                    >
                        Propiedades
                    </Link>
                    <Link
                        href="/about"
                        className={`text-lg font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-gray-800" : "text-white"
                            }`}
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-lg font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-gray-800" : "text-white"
                            }`}
                    >
                        Contacto
                    </Link>
                    <Button className="bg-red-600 hover:bg-red-700 ml-4">Publica Tu Propiedad</Button>
                </nav>

                <Button
                    variant={isScrolled ? "outline" : "ghost"}
                    size="icon"
                    className={`md:hidden ${!isScrolled && "text-white hover:bg-white/10"}`}
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
