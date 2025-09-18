"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Home, Building2, MapPin, Building, Briefcase, Store, TreePine, Warehouse, FileText, Building2 as BuildingIcon } from 'lucide-react' //add this later here: Maximize2, ParkingCircle, Filter

const PROPERTY_TYPE_ICONS: Record<string, any> = {
    'Casa': Home,
    'Departamento': Building2,
    'Terreno': MapPin,
    'Oficina': Briefcase,
    'Local Comercial': Store,
    'Condominio': Building,
    'Campo': TreePine,
    'Galpón': Warehouse,
    'Estudio': FileText,
    'Edificio': BuildingIcon,
}

export interface PropertyFilterProps {
    onFilter: (filters: PropertyFilters) => void;
    isRental?: boolean;
    propertyTypes?: string[];
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

export function PropertyFilter({ onFilter, isRental = false, propertyTypes = [] }: PropertyFilterProps) {
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

    const handlePropertyTypeToggle = (type: string) => {
        const currentTypes = filters.propertyTypes || []
        const updatedTypes = currentTypes.includes(type)
            ? []
            : [type]

        const newFilters = {
            ...filters,
            propertyTypes: updatedTypes
        }

        setFilters(newFilters)
        onFilter(newFilters)
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
                        {propertyTypes.length > 0 ? (
                            propertyTypes.map((type) => {
                                const Icon = PROPERTY_TYPE_ICONS[type] || Building2
                                const isActive = filters.propertyTypes?.includes(type.toLowerCase())

                                return (
                                    <Button
                                        key={type}
                                        type="button"
                                        variant={isActive ? "default" : "outline"}
                                        className={`flex items-center ${isActive ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-red-50 hover:text-red-600'}`}
                                        onClick={() => handlePropertyTypeToggle(type.toLowerCase())}
                                    >
                                        <Icon className="h-4 w-4 mr-1" />
                                        {type}
                                    </Button>
                                )
                            })
                        ) : (
                            <p className="text-gray-500 text-sm">Cargando tipos de propiedades...</p>
                        )}
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

            </div>
        </div>
    )
}
