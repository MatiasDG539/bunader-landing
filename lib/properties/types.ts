// Tipos de dominio que consume la UI (listados, ficha, destacadas).
// Originalmente vivían en actions/tokkoApi.ts; se movieron acá para que la UI
// no dependa del proveedor (hoy GVAmax, antes Tokko — ver legacy/tokko/).

export interface PropertyImage {
    image: string;
    thumb?: string;
    original?: string;
    description?: string | null;
    is_front_cover?: boolean;
    order?: number;
    is_blueprint?: boolean;
}

export interface PropertyVideo {
    description?: string;
    id: number;
    order: number;
    player_url: string;
    /** 'youtube' | 'tour360' (GVAmax) | 'matterport' (Tokko) */
    provider: string;
    /** 3 = recorrido 360° (se mantiene el valor que usaba Tokko para Matterport) */
    provider_id: number;
    title: string;
    url: string;
    video_id: string;
}

export interface PropertyProducer {
    id?: number;
    name?: string;
    phone?: string;
    cellphone?: string;
    email?: string;
    picture?: string;
    position?: string;
}

export interface PropertyOperation {
    operation_id: number;
    operation_type: string;
    price: number;
    currency: string;
    period?: number;
}

export interface Property {
    id: number;
    title: string;
    description_only?: string;
    /** HTML saneado (solo etiquetas de formato básicas, sin atributos) */
    rich_description?: string;
    address: string;
    short_location?: string;
    full_location?: string;
    price: string;
    currency?: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    images: PropertyImage[];
    type: string;
    /** 'sale' | 'rent' */
    operation_type: string;
    featured?: boolean;
    age?: number;
    age_display?: string;
    parking_lot_amount?: number;
    operations?: PropertyOperation[];
    producer?: PropertyProducer;
    rooms?: number;
    disposition?: string;
    property_condition?: string;
    situation?: string;
    expenses?: number;
    total_surface?: number;
    covered_surface?: number;
    land_surface?: number;
    front_meters?: number;
    depth_meters?: number;
    floors?: number;
    style?: string;
    credit_eligible?: boolean;
    /** type 2 = dormitorios, type 3 = adicionales (formato heredado de Tokko) */
    tags?: Array<{ id: number; name: string; type: number }>;
    geo_lat?: string;
    geo_long?: string;
    videos?: PropertyVideo[];
}

export interface Development {
    id: number;
    /** "<nombre>-<id>", ej: "canitas-mall-8". Es la URL: /propiedades/proyectos/<slug> */
    slug: string;
    name: string;
    address?: string;
    short_location?: string;
    full_location?: string;
    /** Estado de obra según GVAmax: Ante Proyecto, Proyecto, En pozo, En construcción, Terminado */
    status?: string;
    /** "Propio" | "Terceros" */
    situation?: string;
    completion_date?: string;
    units?: number;
    images?: PropertyImage[];
    type?: string;
    /** Precio formateado ("USD $70.000") o undefined si no hay precio */
    price?: string;
    /** Primeras ~180 letras de la descripción, para tarjetas y el hero */
    short_description?: string;
    description_only?: string;
    /** HTML saneado (solo etiquetas de formato básicas, sin atributos) */
    rich_description?: string;
    videos?: PropertyVideo[];
    geo_lat?: string;
    geo_long?: string;
}
