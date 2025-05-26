"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { Home, Building2, MapPin, Building } from 'lucide-react' //add this later here: Maximize2, ParkingCircle, Filter

const PROPERTY_TYPES = [
    { value: "casa", label: "Casas", icon: Home },
    { value: "apartamento", label: "Apartamentos", icon: Building2 },
    { value: "condominio", label: "Condominios", icon: Building },
    { value: "casaAdosada", label: "Casas Adosadas", icon: Home },
    { value: "terreno", label: "Terrenos", icon: MapPin },
]

export interface PropertyFilterProps {
    onFilter: (filters: PropertyFilters) => void;
    isRental?: boolean;
}

export interface PropertyFilters {
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
    minBathrooms?: number;
    minArea?: number;
    propertyTypes?: string[];
    minParkingSpots?: number;
}

export function PropertyFilter({ onFilter, isRental = false }: PropertyFilterProps) {
    const [filters, setFilters] = useState<PropertyFilters>({
        location: '',
        minPrice: undefined,
        maxPrice: undefined,
        minBedrooms: undefined,
        minBathrooms: undefined,
        minArea: undefined,
        propertyTypes: [],
        minParkingSpots: undefined,
    })


    // const handleFilterChange = (key: keyof PropertyFilters, value: string | number | string[] | undefined) => {
    //     setFilters(prev => ({
    //         ...prev,
    //         [key]: value
    //     }))
    // }

    const handlePropertyTypeToggle = (type: string) => {
        setFilters(prev => {
            const currentTypes = prev.propertyTypes || []
            const updatedTypes = currentTypes.includes(type)
                ? currentTypes.filter(t => t !== type)
                : [...currentTypes, type]

            return {
                ...prev,
                propertyTypes: updatedTypes
            }
        })
    }

    const applyFilters = () => {
        onFilter(filters)
    }

    const clearFilters = () => {
        const clearedFilters = {
            location: '',
            minPrice: undefined,
            maxPrice: undefined,
            minBedrooms: undefined,
            minBathrooms: undefined,
            minArea: undefined,
            propertyTypes: [],
            minParkingSpots: undefined,
        }
        setFilters(clearedFilters)
        onFilter(clearedFilters)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Filtrar {isRental ? "Alquileres" : "Propiedades"}</h3>

            <div className="space-y-4">
                {/* Ubicación */}
                {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                            type="text"
                            placeholder="Barrio, localidad..."
                            className="pl-10"
                            value={filters.location || ''}
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                        />
                    </div>
                </div> */}

                {/* Rango de Precio */}
                {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {isRental ? "Rango de Alquiler" : "Rango de Precio"}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        <Input
                            type="number"
                            placeholder="Mínimo"
                            value={filters.minPrice || ''}
                            onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                        />
                        <Input
                            type="number"
                            placeholder="Máximo"
                            value={filters.maxPrice || ''}
                            onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                        />
                    </div>
                </div> */}

                {/* Tipo de propiedad */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Propiedad</label>
                    <div className="flex flex-wrap gap-2">
                        {PROPERTY_TYPES.map((type) => {
                            const Icon = type.icon
                            const isActive = filters.propertyTypes?.includes(type.value)

                            return (
                                <Button
                                    key={type.value}
                                    type="button"
                                    variant={isActive ? "default" : "outline"}
                                    className={`flex items-center ${isActive ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-red-50 hover:text-red-600'}`}
                                    onClick={() => handlePropertyTypeToggle(type.value)}
                                >
                                    <Icon className="h-4 w-4 mr-1" />
                                    {type.label}
                                </Button>
                            )
                        })}
                    </div>
                </div>

                {/* Botón para mostrar más filtros */}
                {/* <Button
                    variant="ghost"
                    className="flex items-center text-gray-600 hover:text-red-600"
                    onClick={() => setShowMoreFilters(!showMoreFilters)}
                >
                    <Filter className="h-4 w-4 mr-2" />
                    {showMoreFilters ? 'Menos filtros' : 'Más filtros'}
                </Button> */}

                {/* Filtros adicionales */}
                {/* {showMoreFilters && (
                    <div className="space-y-4 pt-2"> */}
                {/* Dormitorios y baños */}
                {/* <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Dormitorios (mín.)</label>
                                <Input
                                    type="number"
                                    min={0}
                                    value={filters.minBedrooms || ''}
                                    onChange={(e) => handleFilterChange('minBedrooms', e.target.value ? Number(e.target.value) : undefined)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Baños (mín.)</label>
                                <Input
                                    type="number"
                                    min={0}
                                    value={filters.minBathrooms || ''}
                                    onChange={(e) => handleFilterChange('minBathrooms', e.target.value ? Number(e.target.value) : undefined)}
                                />
                            </div>
                        </div> */}

                {/* Superficie y estacionamiento */}
                {/* <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    <span className="flex items-center">
                                        <Maximize2 className="h-4 w-4 mr-1" />
                                        Superficie (m²)
                                    </span>
                                </label>
                                <Input
                                    type="number"
                                    min={0}
                                    placeholder="Mínima"
                                    value={filters.minArea || ''}
                                    onChange={(e) => handleFilterChange('minArea', e.target.value ? Number(e.target.value) : undefined)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    <span className="flex items-center">
                                        <ParkingCircle className="h-4 w-4 mr-1" />
                                        Estacionamientos
                                    </span>
                                </label>
                                <Input
                                    type="number"
                                    min={0}
                                    placeholder="Mínimo"
                                    value={filters.minParkingSpots || ''}
                                    onChange={(e) => handleFilterChange('minParkingSpots', e.target.value ? Number(e.target.value) : undefined)}
                                />
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Botones de acción */}
                <div className="flex flex-col space-y-2 pt-4">
                    <Button
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={applyFilters}
                    >
                        Aplicar Filtros
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full hover:bg-red-50 hover:text-red-600"
                        onClick={clearFilters}
                    >
                        Limpiar
                    </Button>
                </div>
            </div>
        </div>
    )
}
