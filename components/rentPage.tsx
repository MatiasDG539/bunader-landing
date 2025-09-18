"use client"

import React, { useEffect, useState } from 'react';
import { SiteHeaderDark } from '@/components/ui/header-dark';
import { SiteFooter } from '@/components/ui/footer';
import { PropertyFilter, PropertyFilters } from '@/components/ui/property-filter';
import { getRentProperties, getPropertyTypesForOperation, Property } from '@/actions/tokkoApi';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { PromoBanner } from '@/components/promoBanner';

export default function RentPage() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});
    const [propertyTypes, setPropertyTypes] = useState<string[]>([]);

    const isValidValue = (value: string | number | null | undefined): boolean => {
        const numValue = Number(value);
        return numValue > 0;
    };

    const loadProperties = async () => {
        try {
            setLoading(true);
            setError(null);
            const [propertiesData, typesData] = await Promise.all([
                getRentProperties(),
                getPropertyTypesForOperation('rent')
            ]);
            setProperties(propertiesData);
            setPropertyTypes(typesData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al cargar propiedades');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProperties();
    }, []);

    useEffect(() => {
        setFilteredProperties(properties);
    }, [properties]);

    useEffect(() => {
        if (!filteredProperties.length) return;

        const intervalIds: Record<number, NodeJS.Timeout> = {};

        filteredProperties.forEach(property => {
            if (property.images && property.images.length > 1) {
                intervalIds[property.id] = setInterval(() => {
                    setActiveImageIndex(prev => {
                        const currentIndex = prev[property.id] || 0;
                        const nextIndex = (currentIndex + 1) % property.images.length;
                        return { ...prev, [property.id]: nextIndex };
                    });
                }, 5000);
            }
        });

        return () => {
            Object.values(intervalIds).forEach(intervalId => clearInterval(intervalId));
        };
    }, [filteredProperties]);

    const applyFilters = (filters: PropertyFilters) => {
        let filtered = properties;

        if (filters.minPrice || filters.maxPrice) {
            filtered = filtered.filter(property => {
                const price = parseInt(property.price.replace(/[^\d]/g, ''));
                const minPrice = filters.minPrice || 0;
                const maxPrice = filters.maxPrice || Infinity;
                return price >= minPrice && price <= maxPrice;
            });
        }

        if (filters.minBedrooms && filters.minBedrooms > 0) {
            filtered = filtered.filter(property => property.bedrooms >= filters.minBedrooms!);
        }

        if (filters.minBathrooms && filters.minBathrooms > 0) {
            filtered = filtered.filter(property => property.bathrooms >= filters.minBathrooms!);
        }

        if (filters.propertyTypes && filters.propertyTypes.length > 0) {
            filtered = filtered.filter(property =>
                filters.propertyTypes!.some(type => 
                    property.type.toLowerCase() === type.toLowerCase()
                )
            );
        }

        if (filters.minParkingSpots) {
            filtered = filtered.filter(property =>
                property.parking_lot_amount !== undefined &&
                property.parking_lot_amount >= filters.minParkingSpots!
            );
        }

        setFilteredProperties(filtered);
    };

    const changePropertyImage = (propertyId: number, direction: 'next' | 'prev') => {
        const property = filteredProperties.find(p => p.id === propertyId);
        if (!property || property.images.length <= 1) return;

        setActiveImageIndex(prev => {
            const currentIndex = prev[propertyId] || 0;
            const totalImages = property.images.length;
            let newIndex;

            if (direction === 'next') {
                newIndex = (currentIndex + 1) % totalImages;
            } else {
                newIndex = (currentIndex - 1 + totalImages) % totalImages;
            }

            return { ...prev, [propertyId]: newIndex };
        });
    };

    if (error) {
        return (
            <div className="flex min-h-screen flex-col bg-gray-50">
                <SiteHeaderDark />
                <main className="flex-1 py-8 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-red-600 mb-4">Error al cargar las propiedades: {error}</p>
                        <Button onClick={loadProperties}>Reintentar</Button>
                    </div>
                </main>
                <SiteFooter />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <SiteHeaderDark />

            <main className="flex-1 py-8">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Hero */}
                    <section className="relative h-[300px] mb-12 overflow-hidden rounded-lg shadow-lg bg-red-600">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-12">Propiedades en Alquiler</h1>
                            <p className="text-xl max-w-2xl">Descubre el hogar perfecto para rentar entre nuestra selección de propiedades disponibles</p>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Filtros - columna izquierda */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                                <PropertyFilter 
                                    onFilter={applyFilters} 
                                    isRental={true}
                                    propertyTypes={propertyTypes}
                                />
                            </div>
                        </div>

                        {/* Propiedades - columna derecha */}
                        <div className="lg:col-span-3">
                            {loading && filteredProperties.length === 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[...Array(6)].map((_, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                                            <div className="w-full h-64 bg-gray-200"></div>
                                            <div className="p-6">
                                                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                                                <div className="flex justify-between">
                                                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                                                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-semibold">
                                            {filteredProperties.length} propiedades encontradas
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {filteredProperties.map((property) => {
                                            const currentImageIndex = activeImageIndex[property.id] || 0;
                                            const currentImage = property.images[currentImageIndex]?.image || "/placeholder.svg";
                                            
                                            return (
                                                <Card
                                                    key={property.id}
                                                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                                                    onClick={() => window.location.href = `/propiedades/${property.id}`}
                                                >
                                                    <div className="relative h-[250px] w-full">
                                                        <Image
                                                            src={currentImage}
                                                            alt={property.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        
                                                        {property.images.length > 1 && (
                                                            <div className="absolute inset-0 flex justify-between items-center px-2">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="icon"
                                                                    className="bg-black/30 text-white rounded-full h-9 w-9 hover:bg-black/50"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        changePropertyImage(property.id, 'prev');
                                                                    }}
                                                                >
                                                                    <ChevronLeft className="h-6 w-6" />
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="icon"
                                                                    className="bg-black/30 text-white rounded-full h-9 w-9 hover:bg-black/50"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        changePropertyImage(property.id, 'next');
                                                                    }}
                                                                >
                                                                    <ChevronRight className="h-6 w-6" />
                                                                </Button>
                                                            </div>
                                                        )}

                                                        {property.images.length > 1 && (
                                                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                                                                {property.images.map((_, imgIndex) => (
                                                                    <div
                                                                        key={imgIndex}
                                                                        className={`h-1.5 w-1.5 rounded-full ${
                                                                            imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                                        }`}
                                                                    ></div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
                                                        <div className="absolute bottom-4 left-4 text-white">
                                                            <div className="text-2xl font-bold">{property.price}</div>
                                                        </div>

                                                        <div className="absolute top-4 left-4">
                                                            <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                                Alquiler
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                                        <div className="flex items-center text-gray-500 mb-4">
                                                            <MapPin className="h-4 w-4 mr-1" />
                                                            {property.full_location || property.short_location}
                                                        </div>
                                                        <div className="flex justify-between mb-6">
                                                            {isValidValue(property.bedrooms) && (
                                                                <div className="flex items-center">
                                                                    <Bed className="h-5 w-5 mr-1 text-gray-400" />
                                                                    <span>{property.bedrooms} Hab</span>
                                                                </div>
                                                            )}
                                                            {isValidValue(property.bathrooms) && (
                                                                <div className="flex items-center">
                                                                    <Bath className="h-5 w-5 mr-1 text-gray-400" />
                                                                    <span>{property.bathrooms} Baños</span>
                                                                </div>
                                                            )}
                                                            {isValidValue(property.sqft) && (
                                                                <div className="flex items-center">
                                                                    <Maximize className="h-5 w-5 mr-1 text-gray-400" />
                                                                    <span>{property.sqft} m²</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <Link href={`/propiedades/${property.id}`}>
                                                            <Button className="w-full bg-red-600 hover:bg-red-700">
                                                                Ver Detalles
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </Card>
                                            );
                                        })}
                                        
                                        {filteredProperties.length > 0 && (
                                            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                                <PromoBanner 
                                                    title="¿No encontraste lo que buscabas?"
                                                    description="Contamos con un equipo de agentes especializados para ayudarte a encontrar el lugar perfecto para vos."
                                                    buttonText="Contáctanos"
                                                    buttonLink="/contacto"
                                                />
                                            </Card>
                                        )}
                                    </div>

                                    {filteredProperties.length === 0 ? (
                                        <div className="bg-white p-8 rounded-lg text-center shadow-md">
                                            <p className="text-lg text-gray-600 mb-4">No se encontraron propiedades que coincidan con los filtros seleccionados.</p>
                                            <Button
                                                variant="outline"
                                                className="hover:bg-red-50 hover:text-red-600"
                                                onClick={() => applyFilters({})}
                                            >
                                                Limpiar filtros
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                            {filteredProperties.length > 0 && (
                                                <div className="text-center text-gray-500 py-8">
                                                    Llegaste al final de la lista.
                                                </div>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
