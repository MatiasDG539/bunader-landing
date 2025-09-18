import PropertyMap from "@/components/ui/property-map";

export function ContactMap() {
    return (
        <div className="my-16 rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <div className="relative w-full h-[400px] sm:h-[500px]">
                <PropertyMap
                    address="Buenos Aires 491, San Miguel de Tucumán, Tucumán, Argentina"
                    title="Bunader Negocios Inmobiliarios"
                    className="w-full h-full"
                    geoLat={-26.8372136}
                    geoLong={-65.2080526}
                    zoom={18}
                />
            </div>
        </div>
    )
}
