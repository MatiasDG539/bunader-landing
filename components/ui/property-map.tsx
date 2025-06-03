'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Importación dinámica para evitar errores de SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface PropertyMapProps {
  address: string
  title?: string
  className?: string
  geoLat?: string | number
  geoLong?: string | number
}

export default function PropertyMap({ address, title, className = "", geoLat, geoLong }: PropertyMapProps) {
  const [isClient, setIsClient] = useState(false)
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const initializeCoordinates = async () => {
      try {
        setLoading(true)
        
        // Si tenemos coordenadas de la API, las usamos directamente
        if (geoLat && geoLong) {
          const lat = typeof geoLat === 'string' ? parseFloat(geoLat) : geoLat
          const lon = typeof geoLong === 'string' ? parseFloat(geoLong) : geoLong
          
          if (!isNaN(lat) && !isNaN(lon)) {
            setCoordinates([lat, lon])
            return
          }
        }
        
        // Si no tenemos coordenadas válidas de la API, geocodificamos la dirección
        if (address) {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
          )
          const data = await response.json()
          
          if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat)
            const lon = parseFloat(data[0].lon)
            setCoordinates([lat, lon])
          } else {
            // Coordenadas por defecto de Buenos Aires
            setCoordinates([-34.6037, -58.3816])
          }
        } else {
          // Coordenadas por defecto de Buenos Aires
          setCoordinates([-34.6037, -58.3816])
        }
      } catch (error) {
        console.error('Error obteniendo coordenadas:', error)
        // Coordenadas por defecto de Buenos Aires
        setCoordinates([-34.6037, -58.3816])
      } finally {
        setLoading(false)
      }
    }

    initializeCoordinates()
  }, [address, geoLat, geoLong])

  if (!isClient) {
    return (
      <div className={`w-full bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-500 p-4">
          <p>Cargando mapa...</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={`w-full bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-500 p-4">
          <p>Cargando ubicación...</p>
        </div>
      </div>
    )
  }

  if (!coordinates) {
    return (
      <div className={`w-full bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-500 p-4">
          <p>{address}</p>
          <p className="text-sm">No se pudo cargar el mapa</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full rounded-lg overflow-hidden ${className}`}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <MapContainer
        center={coordinates}
        zoom={15}
        style={{ height: '100%', width: '100%', minHeight: '300px' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            <div className="text-center">
              {title && <p className="font-semibold">{title}</p>}
              <p className="text-sm">{address}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
