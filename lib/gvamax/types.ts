// Tipos crudos de la API GVAmax v3 (https://gvamax.ar/Api/v3).
// Basados en la documentación "API GVAmax v3" y en respuestas reales de la
// cuenta demo (id 900). Varios campos numéricos llegan a veces como string,
// por eso se tipan como `number | string` y se normalizan en mappers.ts.

export type NumLike = number | string;

export interface GvaPaging {
    status?: number;
    totalresults?: number;
    limit?: number;
    totalpages?: number;
    currentpage?: number;
}

export interface GvaUbicacion {
    pais?: string;
    provincia?: string;
    idprovincia?: NumLike;
    localidad?: string;
    idlocalidad?: NumLike;
    barrio?: string;
    idbarrio?: NumLike;
    calle?: string;
    numero?: string;
    denomina?: string;
    /** "lat, long" (con o sin espacio) o "" */
    coordenadas?: string;
}

export interface GvaMedia {
    /** ID de YouTube (a veces podría venir una URL completa) */
    video?: string;
    /** URL del recorrido virtual 360° (matterport, kuula, webobook, etc.) */
    tour?: string;
    /** { image_1: url, image_2: url, ... } */
    images?: Record<string, string> | string[];
}

export interface GvaContacto {
    nombre?: string;
    telefono?: string;
    email?: string;
    whatsapp?: string;
}

export interface GvaInmueble {
    id: NumLike;
    imagenPortada?: string;
    /** 1 disponible, 2 vendida, 3 alquilada, 4 tasación, 5 suspendida, 7 reservada, 8 en carga */
    disponible?: NumLike;
    /** "1" publicada en web, "0" no publicada */
    publicada?: NumLike;
    idTipoInmueble?: NumLike;
    tipoInmueble?: string;
    /** "Venta" | "Alquiler" (la doc menciona también "Compra") */
    tipoOperacion?: string;
    /** 1 venta, 2 alquiler */
    idOperacion?: NumLike;
    fechaIngreso?: string;
    fechaActualizada?: string;
    dormitorios?: NumLike;
    ambientes?: NumLike;
    banos?: NumLike;
    /** "D" dólares, "P" pesos */
    moneda?: string;
    /** Precio ya formateado, ej: "U$S  100.000" o "$  530.000" */
    precio?: string;
    precioVisible?: NumLike;
    expensas?: NumLike;
    tituloComercial?: string;
    /** Texto con <br> como saltos de línea */
    descripcion?: string;
    aptoCredito?: NumLike;
    aceptaPermuta?: NumLike;
    permutaDetalle?: string;
    financiacionPropia?: NumLike;
    financiacionDetalle?: string;
    /** Texto libre: "", "1", "2", "doble", "2 Autos"... */
    cochera?: string;
    estilo?: string;
    plantas?: NumLike;
    /** Años. -1 = sin dato */
    antiguedad?: NumLike;
    /** Texto libre: "MUY_BUENO", "Excelente"... */
    estado?: string;
    destacada?: NumLike;
    oportunidad?: NumLike;
    superficies?: {
        metrosTerreno?: NumLike;
        metrosCubiertos?: NumLike;
        metrosFrente?: NumLike;
        metrosFondo?: NumLike;
    };
    ubicacion?: GvaUbicacion;
    media?: GvaMedia;
    contacto?: GvaContacto;
}

export interface GvaInmueblesResponse {
    content?: GvaPaging;
    propiedades?: GvaInmueble[];
}

export interface GvaEmprendimiento {
    id: NumLike;
    nombre?: string;
    precio?: string;
    /** 1 Housing, 2 Edificio, 3 Loteos */
    idTipo?: NumLike;
    situacion?: string;
    /** Ante Proyecto, Proyecto, En pozo, En construcción, Terminado */
    estado?: string;
    imagenPortada?: string;
    descripcion?: string;
    ubicacion?: GvaUbicacion & { idpais?: NumLike };
    media?: GvaMedia;
}

export interface GvaEmprendimientosResponse {
    content?: GvaPaging;
    emprendimientos?: GvaEmprendimiento[];
}

export interface GvaTipoInmueble {
    id: NumLike;
    nombre: string;
}
