"use client"

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { SiteHeaderDark } from '@/components/ui/header-dark';
import { SiteFooter } from '@/components/ui/footer';
import { PropertyFilter, PropertyFilters } from '@/components/ui/property-filter';
import { getSalesProperties, Property } from '@/actions/tokkoApi';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { PromoBanner } from '@/components/promoBanner';

export default function SalesPage() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef<IntersectionObserver | null>(null);
    const propertiesPerPage = 6;

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const data = await getSalesProperties();
                setProperties(data);
                setFilteredProperties(data);
            } catch (error) {
                console.error("Error fetching sales properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    useEffect(() => {
        if (!filteredProperties.length) return;

        const intervalIds: Record<number, NodeJS.Timeout> = {};

        filteredProperties.forEach(property => {
            if (property.images.length > 1) {
                intervalIds[property.id] = setInterval(() => {
                    setActiveImageIndex(prev => ({
                        ...prev,
                        [property.id]: ((prev[property.id] || 0) + 1) % property.images.length
                    }));
                }, 7000);
            }
        });

        return () => {
            Object.values(intervalIds).forEach(id => clearInterval(id));
        };
    }, [filteredProperties]);

    const handleFilterProperties = (filters: PropertyFilters) => {
        let filtered = [...properties];

        if (filters.location) {
            const locationLower = filters.location.toLowerCase();
            filtered = filtered.filter(property =>
                property.location.toLowerCase().includes(locationLower) ||
                property.full_location?.toLowerCase().includes(locationLower)
            );
        }

        if (filters.minPrice) {
            filtered = filtered.filter(property => {
                const price = parseFloat(property.price.replace(/[^0-9.-]+/g, ""));
                return price >= filters.minPrice!;
            });
        }

        if (filters.maxPrice) {
            filtered = filtered.filter(property => {
                const price = parseFloat(property.price.replace(/[^0-9.-]+/g, ""));
                return price <= filters.maxPrice!;
            });
        }

        if (filters.propertyTypes && filters.propertyTypes.length > 0) {
            filtered = filtered.filter(property =>
                filters.propertyTypes!.includes(property.type.toLowerCase())
            );
        }

        if (filters.minBedrooms) {
            filtered = filtered.filter(property => property.bedrooms >= filters.minBedrooms!);
        }

        if (filters.minBathrooms) {
            filtered = filtered.filter(property => property.bathrooms >= filters.minBathrooms!);
        }

        if (filters.minArea) {
            filtered = filtered.filter(property => property.sqft >= filters.minArea!);
        }

        if (filters.minParkingSpots) {
            filtered = filtered.filter(property =>
                property.parking_lot_amount !== undefined &&
                property.parking_lot_amount >= filters.minParkingSpots!
            );
        }

        setFilteredProperties(filtered);
        setCurrentPage(1);
        setVisibleProperties(filtered.slice(0, propertiesPerPage));
        setHasMore(filtered.length > propertiesPerPage);
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

    const loadMoreProperties = useCallback(() => {
        if (loadingMore) return;

        const nextPage = currentPage + 1;
        const startIndex = currentPage * propertiesPerPage;
        const endIndex = startIndex + propertiesPerPage;

        if (endIndex >= filteredProperties.length) {
            setHasMore(false);
        }

        setLoadingMore(true);

        setTimeout(() => {
            setVisibleProperties(prevVisible => {
                const newItems = filteredProperties.slice(startIndex, endIndex);
                const existingIds = new Set(prevVisible.map(p => p.id));
                const uniqueNewItems = newItems.filter(item => !existingIds.has(item.id));

                return [...prevVisible, ...uniqueNewItems];
            });
            setCurrentPage(nextPage);
            setLoadingMore(false);
        }, 500);
    }, [currentPage, filteredProperties, loadingMore, propertiesPerPage]);

    const lastPropertyElementRef = useCallback((node: HTMLDivElement | null) => {
        if (loading || loadingMore) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMoreProperties();
            }
        });

        if (node) observer.current.observe(node);
    }, [loading, loadingMore, hasMore, loadMoreProperties]);

    useEffect(() => {
        setCurrentPage(1);
        setHasMore(filteredProperties.length > propertiesPerPage);
        setVisibleProperties(() => [...filteredProperties.slice(0, propertiesPerPage)]);
    }, [filteredProperties, propertiesPerPage]);

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <SiteHeaderDark />

            <main className="flex-1 py-8">
                <div className="container mx-auto px-4">

                    {/* Hero */}

                    <section className="relative h-[300px] mb-12 overflow-hidden rounded-lg shadow-lg bg-red-600">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-12">Propiedades en Venta</h1>
                            <p className="text-xl max-w-2xl">Encuentra el lugar de tus sueños entre nuestra selección de propiedades disponibles</p>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* Filtros - columna izquierda */}

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24">
                                <PropertyFilter onFilter={handleFilterProperties} />
                            </div>
                        </aside>

                        {/* Listado de propiedades - columna derecha */}

                        <div className="lg:col-span-3">
                            {loading ? (
                                <div className="flex justify-center items-center h-64">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-semibold">
                                            {filteredProperties.length} propiedades encontradas
                                        </h2>
                                    </div>

                                    {filteredProperties.length === 0 ? (
                                        <div className="bg-white p-8 rounded-lg text-center shadow-md">
                                            <p className="text-lg text-gray-600 mb-4">No se encontraron propiedades que coincidan con los filtros seleccionados.</p>
                                            <Button
                                                variant="outline"
                                                className="hover:bg-red-50 hover:text-red-600"
                                                onClick={() => handleFilterProperties({})}
                                            >
                                                Limpiar filtros
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {visibleProperties.map((property, index) => {
                                                const currentImageIndex = activeImageIndex[property.id] || 0;
                                                const currentImage = property.images[currentImageIndex]?.image || "/placeholder.svg";

                                                const isLastElement = index === visibleProperties.length - 1;

                                                return (
                                                    <Card
                                                        key={property.id}
                                                        ref={isLastElement ? lastPropertyElementRef : undefined}
                                                        className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                                        <div className="relative h-[250px] w-full">
                                                            <Image
                                                                src={currentImage}
                                                                alt={property.title}
                                                                fill
                                                                className="object-cover"
                                                            />

                                                            {/* Navegación de imágenes */}

                                                            {property.images.length > 1 && (
                                                                <div className="absolute inset-0 flex justify-between items-center px-2">
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="icon"
                                                                        className="bg-black/30 text-white rounded-full h-9 w-9 hover:bg-black/50"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
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
                                                                            e.preventDefault();
                                                                            changePropertyImage(property.id, 'next');
                                                                        }}
                                                                    >
                                                                        <ChevronRight className="h-6 w-6" />
                                                                    </Button>
                                                                </div>
                                                            )}

                                                            {/* Indicadores */}

                                                            {property.images.length > 1 && (
                                                                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                                                                    {property.images.map((_, imgIndex) => (
                                                                        <div
                                                                            key={imgIndex}
                                                                            className={`h-1.5 w-1.5 rounded-full ${imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                                                }`}
                                                                        ></div>
                                                                    ))}
                                                                </div>
                                                            )}

                                                            {/* Precio */}

                                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24" />
                                                            <div className="absolute bottom-4 left-4 text-white">
                                                                <div className="text-2xl font-bold">{property.price}</div>
                                                            </div>

                                                            {/* Tags */}

                                                            <div className="absolute top-4 left-4">
                                                                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                                    En venta
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-6">
                                                            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                                            <div className="flex items-center text-gray-500 mb-4">
                                                                <MapPin className="h-4 w-4 mr-1" />
                                                                {property.location}
                                                            </div>
                                                            <div className="flex justify-between mb-6">
                                                                <div className="flex items-center">
                                                                    <Bed className="h-5 w-5 mr-1 text-gray-400" />
                                                                    <span>{property.bedrooms} Hab</span>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <Bath className="h-5 w-5 mr-1 text-gray-400" />
                                                                    <span>{property.bathrooms} Baños</span>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <Maximize className="h-5 w-5 mr-1 text-gray-400" />
                                                                    <span>{property.sqft} m²</span>
                                                                </div>
                                                            </div>
                                                            <Button className="w-full bg-red-600 hover:bg-red-700">
                                                                Ver Detalles
                                                            </Button>
                                                        </div>
                                                    </Card>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Indicador de carga para scroll infinito */}

                                    {loadingMore && (
                                        <div className="flex justify-center mt-8 mb-8">
                                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
                                        </div>
                                    )}
                                    
                                    {!loadingMore && visibleProperties.length > 0 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                                <PromoBanner 
                                                    title="¿No encontraste lo que buscabas?"
                                                    description="Contamos con un equipo de agentes especializados para ayudarte a encontrar el lugar perfecto para vos."
                                                    buttonText="Contáctanos"
                                                    buttonLink="/contacto"
                                                />
                                            </Card>
                                        </div>
                                    )}

                                    {!hasMore && visibleProperties.length > 0 && filteredProperties.length > propertiesPerPage && (
                                        <div className="text-center text-gray-500 py-8">
                                            Has llegado al final de la lista
                                        </div>
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