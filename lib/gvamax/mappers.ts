// Transforma las respuestas crudas de GVAmax al modelo `Property` que usa la UI.

import type {
    Development,
    Property,
    PropertyImage,
    PropertyProducer,
    PropertyVideo,
} from '@/lib/properties/types';
import type { GvaEmprendimiento, GvaInmueble, GvaMedia, GvaUbicacion, NumLike } from './types';

/**
 * Si es true, solo se muestran en el sitio las propiedades con `publicada = "1"`.
 * Si la cuenta de Bunader no usa esa marca, cambiar a false.
 */
const ONLY_PUBLISHED = true;

const PLACEHOLDER_IMAGE = '/placeholder.svg';

// ---------------------------------------------------------------------------
// Corrección de acentos (mojibake)
// ---------------------------------------------------------------------------
// GVAmax devuelve algunos textos con UTF-8 decodificado como Latin-1/Windows-1252
// ("mÃ¡s" en vez de "más", "Ã‘" en vez de "Ñ"). En la misma respuesta otros
// campos llegan bien, por eso se corrige solo cada secuencia rota y no el texto
// entero.

/** Caracteres de Windows-1252 en 0x80–0x9F → byte original */
const CP1252_TO_BYTE: Record<number, number> = {
    0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84, 0x2026: 0x85,
    0x2020: 0x86, 0x2021: 0x87, 0x02c6: 0x88, 0x2030: 0x89, 0x0160: 0x8a,
    0x2039: 0x8b, 0x0152: 0x8c, 0x017d: 0x8e, 0x2018: 0x91, 0x2019: 0x92,
    0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
    0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b, 0x0153: 0x9c,
    0x017e: 0x9e, 0x0178: 0x9f,
};

// Un byte de continuación UTF-8 (0x80–0xBF) visto como Latin-1 o Windows-1252.
const CONT = '[\\u0080-\\u00BF\\u20AC\\u201A\\u0192\\u201E\\u2026\\u2020\\u2021\\u02C6\\u2030\\u0160\\u2039\\u0152\\u017D\\u2018\\u2019\\u201C\\u201D\\u2022\\u2013\\u2014\\u02DC\\u2122\\u0161\\u203A\\u0153\\u017E\\u0178]';
const MOJIBAKE_SEQUENCE = new RegExp(
    `(?:[\\u00C2-\\u00DF]${CONT}|[\\u00E0-\\u00EF]${CONT}{2}|[\\u00F0-\\u00F4]${CONT}{3})+`,
    'g'
);
const utf8Decoder = new TextDecoder('utf-8', { fatal: true });

export function fixEncoding(text: string): string {
    if (!text) return text;
    return text.replace(MOJIBAKE_SEQUENCE, (sequence) => {
        const bytes: number[] = [];
        for (const ch of sequence) {
            const code = ch.charCodeAt(0);
            bytes.push(code <= 0xff ? code : CP1252_TO_BYTE[code]);
        }
        try {
            return utf8Decoder.decode(new Uint8Array(bytes));
        } catch {
            return sequence;
        }
    });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function str(value: unknown): string {
    if (value === undefined || value === null) return '';
    return fixEncoding(String(value)).trim();
}

function num(value: NumLike | undefined | null): number {
    if (value === undefined || value === null || value === '') return 0;
    const n = typeof value === 'number' ? value : parseFloat(String(value).replace(',', '.'));
    return Number.isFinite(n) ? n : 0;
}

function flag(value: NumLike | undefined | null): boolean {
    return String(value ?? '').trim() === '1';
}

function uniqueJoin(parts: string[], separator = ', '): string {
    const seen = new Set<string>();
    return parts
        .filter((part) => {
            const key = part.toLowerCase();
            if (!part || seen.has(key)) return false;
            seen.add(key);
            return true;
        })
        .join(separator);
}

/** "MUY_BUENO" → "Muy bueno" */
function humanize(value: string): string {
    const text = value.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text || /^\d+$/.test(text)) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/** "U$S  100.000" → 100000 · "$ 1.234,50" → 1234 */
function parsePrice(price: string | undefined): number {
    if (!price) return 0;
    const integerPart = price.split(',')[0];
    const digits = integerPart.replace(/\D/g, '');
    return digits ? parseInt(digits, 10) : 0;
}

function parseCurrency(moneda: string | undefined, price: string | undefined): 'USD' | 'ARS' {
    const m = (moneda || '').trim().toUpperCase();
    if (m === 'D') return 'USD';
    if (m === 'P') return 'ARS';
    return /U\$S|USD/i.test(price || '') ? 'USD' : 'ARS';
}

// Mismo formato que se usaba con Tokko: "USD $100.000" / "ARS $530.000"
function formatPrice(price: number, currency: string): string {
    const prefix = currency === 'USD' ? 'USD' : 'ARS';
    return `${prefix} $${price.toLocaleString('es-AR')}`;
}

/** "2", "doble", "2 Autos" → número de cocheras */
function parseParking(cochera: string | undefined): number {
    const text = (cochera || '').trim().toLowerCase();
    if (!text) return 0;
    const digits = text.match(/\d+/);
    if (digits) return parseInt(digits[0], 10);
    if (text.includes('doble')) return 2;
    if (text.includes('triple')) return 3;
    if (/^(si|sí|simple|cubierta|descubierta)/.test(text)) return 1;
    return 0;
}

function getAgeDisplay(age: number): string {
    if (age === 0) return 'A estrenar';
    return `${age} ${age === 1 ? 'año' : 'años'}`;
}

/**
 * Número de WhatsApp en formato internacional para wa.me (Argentina por defecto).
 * "3516740906" → "5493516740906" · "5493513088926" → igual.
 */
export function normalizeArPhone(raw: string | undefined): string {
    let digits = (raw || '').replace(/\D/g, '');
    if (!digits) return '';
    if (digits.startsWith('00')) digits = digits.slice(2);
    if (digits.startsWith('549')) return digits;
    if (digits.startsWith('54')) return `549${digits.slice(2)}`;
    if (digits.startsWith('0')) digits = digits.slice(1);
    if (digits.length === 12) {
        // Formato local con "15" después de la característica: 351 15 6740906
        for (const areaLength of [2, 3, 4]) {
            if (digits.slice(areaLength, areaLength + 2) === '15') {
                digits = digits.slice(0, areaLength) + digits.slice(areaLength + 2);
                break;
            }
        }
    }
    if (digits.length === 10) return `549${digits}`;
    return digits;
}

function parseCoordinates(coordenadas: string | undefined): { lat: string; long: string } {
    const [lat, long] = (coordenadas || '').split(',').map((part) => part.trim());
    const latNum = parseFloat(lat);
    const longNum = parseFloat(long);
    if (!Number.isFinite(latNum) || !Number.isFinite(longNum) || (latNum === 0 && longNum === 0)) {
        return { lat: '', long: '' };
    }
    return { lat, long };
}

/** "San Miguel De Tucuman ,es" → "San Miguel De Tucuman" (sufijo de idioma que agrega GVAmax) */
function cleanPlace(value: unknown): string {
    return str(value).replace(/\s*,\s*[a-z]{2}$/, '').trim();
}

function mapLocation(ubicacion: GvaUbicacion | undefined) {
    const u = ubicacion || {};
    const barrio = cleanPlace(u.barrio);
    const localidad = cleanPlace(u.localidad);
    const provincia = cleanPlace(u.provincia);
    const address = uniqueJoin([str(u.calle), str(u.numero)], ' ');
    const { lat, long } = parseCoordinates(u.coordenadas);

    return {
        address,
        short_location: uniqueJoin([barrio, localidad]),
        full_location: uniqueJoin([address, barrio, localidad, provincia]),
        geo_lat: lat,
        geo_long: long,
    };
}

function mapImages(media: GvaMedia | undefined, cover: string | undefined): PropertyImage[] {
    const raw = media?.images;
    let urls: string[] = [];

    if (Array.isArray(raw)) {
        urls = raw;
    } else if (raw && typeof raw === 'object') {
        // { image_1, image_2, ..., image_10 } → ordenar por número, no alfabéticamente
        urls = Object.entries(raw)
            .sort(([a], [b]) => (parseInt(a.replace(/\D/g, ''), 10) || 0) - (parseInt(b.replace(/\D/g, ''), 10) || 0))
            .map(([, url]) => url);
    }

    urls = urls.filter((url) => typeof url === 'string' && /^https?:\/\//i.test(url));
    if (urls.length === 0 && cover && /^https?:\/\//i.test(cover)) urls = [cover];
    if (urls.length === 0) return [{ image: PLACEHOLDER_IMAGE, is_front_cover: true, order: 0 }];

    return urls.map((url, index) => ({
        image: url,
        original: url,
        is_front_cover: index === 0,
        order: index,
    }));
}

function extractYoutubeId(value: string): string {
    const text = value.trim();
    if (/^[\w-]{11}$/.test(text)) return text;
    const match = text.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
    return match ? match[1] : '';
}

function mapVideos(media: GvaMedia | undefined, propertyId: number): PropertyVideo[] {
    const videos: PropertyVideo[] = [];

    const youtubeId = extractYoutubeId(media?.video || '');
    if (youtubeId) {
        videos.push({
            id: propertyId * 10 + 1,
            order: 0,
            provider: 'youtube',
            provider_id: 1,
            title: 'Video',
            description: '',
            video_id: youtubeId,
            url: `https://www.youtube.com/watch?v=${youtubeId}`,
            player_url: `https://www.youtube.com/embed/${youtubeId}`,
        });
    }

    // Matterport: la URL /models/<id> es la del panel (pide login); la embebible es /show/?m=<id>
    const tour = (media?.tour || '')
        .trim()
        .replace(/^https?:\/\/my\.matterport\.com\/models\/([\w-]+).*$/i, 'https://my.matterport.com/show/?m=$1');
    if (/^https?:\/\//i.test(tour)) {
        videos.push({
            id: propertyId * 10 + 3,
            order: 1,
            provider: 'tour360',
            // provider_id 3 = recorrido 360° (es lo que la ficha detecta para abrir el modal)
            provider_id: 3,
            title: 'Tour Virtual 360°',
            description: '',
            video_id: '',
            url: tour,
            player_url: tour,
        });
    }

    return videos;
}

const ALLOWED_TAGS = 'br|p|b|strong|i|em|u|ul|ol|li';

/**
 * Convierte la descripción de GVAmax en HTML seguro para dangerouslySetInnerHTML:
 * se escapa todo y luego se restauran solo etiquetas de formato sin atributos.
 */
function sanitizeDescriptionHtml(raw: string): string {
    const escaped = raw.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const restored = escaped.replace(
        new RegExp(`&lt;\\s*(\\/?)\\s*(${ALLOWED_TAGS})\\s*\\/?\\s*&gt;`, 'gi'),
        (_, slash: string, tag: string) => (tag.toLowerCase() === 'br' ? '<br />' : `<${slash}${tag.toLowerCase()}>`)
    );
    return restored.replace(/^(\s*<br \/>\s*)+|(\s*<br \/>\s*)+$/g, '').trim();
}

function descriptionToPlainText(raw: string): string {
    return raw
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<[^>]*>/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function mapProducer(contacto: GvaInmueble['contacto']): PropertyProducer | undefined {
    if (!contacto) return undefined;
    const name = str(contacto.nombre);
    const cellphone = normalizeArPhone(contacto.whatsapp);
    const phone = normalizeArPhone(contacto.telefono);
    const email = str(contacto.email);
    if (!name && !cellphone && !phone && !email) return undefined;

    // GVAmax no provee foto del asesor (picture queda vacío).
    return { name, cellphone, phone, email };
}

function mapTags(p: GvaInmueble): Property['tags'] {
    // type 3 = "Adicionales" en la ficha de la propiedad
    const tags: NonNullable<Property['tags']> = [];
    if (flag(p.aptoCredito)) tags.push({ id: 1, name: 'Apto crédito', type: 3 });
    if (flag(p.aceptaPermuta)) tags.push({ id: 2, name: 'Acepta permuta', type: 3 });
    if (flag(p.financiacionPropia)) tags.push({ id: 3, name: 'Financiación propia', type: 3 });
    const estilo = humanize(str(p.estilo));
    if (estilo) tags.push({ id: 4, name: `Estilo ${estilo.toLowerCase()}`, type: 3 });
    return tags;
}

// ---------------------------------------------------------------------------
// Mappers públicos
// ---------------------------------------------------------------------------

/** Nombres abreviados de tipos en GVAmax (endpoint /buscador/Tipos) → texto para el sitio */
const PROPERTY_TYPE_LABELS: Record<string, string> = {
    depto: 'Departamento',
    galpon: 'Galpón',
    local: 'Local comercial',
};

export function isPublished(p: GvaInmueble): boolean {
    if (!ONLY_PUBLISHED || p.publicada === undefined || p.publicada === null) return true;
    return flag(p.publicada);
}

export function isRent(p: GvaInmueble): boolean {
    const opId = num(p.idOperacion);
    if (opId === 2) return true;
    if (opId === 1) return false;
    return /alquiler/i.test(p.tipoOperacion || '');
}

export function mapInmueble(p: GvaInmueble): Property {
    const id = num(p.id);
    const rent = isRent(p);
    const operationType = rent ? 'rent' : 'sale';

    const currency = parseCurrency(p.moneda, p.precio);
    const priceValue = parsePrice(p.precio);
    const price = priceValue > 0
        ? `${formatPrice(priceValue, currency)}${rent ? '/mes' : ''}`
        : 'Consultar precio';

    const location = mapLocation(p.ubicacion);
    const rawType = str(p.tipoInmueble);
    const type = PROPERTY_TYPE_LABELS[rawType.toLowerCase()] || rawType || 'Propiedad';
    const title = str(p.tituloComercial)
        || uniqueJoin([`${type} en ${rent ? 'alquiler' : 'venta'}`, location.short_location], ' - ');

    const rawDescription = fixEncoding(p.descripcion || '');
    const covered = num(p.superficies?.metrosCubiertos);
    const land = num(p.superficies?.metrosTerreno);
    const antiguedad = num(p.antiguedad);
    // 0 y -1 se tratan como "sin dato": en GVAmax 0 es el valor por defecto.
    const age = antiguedad > 0 ? antiguedad : undefined;

    return {
        id,
        title,
        description_only: descriptionToPlainText(rawDescription),
        rich_description: sanitizeDescriptionHtml(rawDescription),
        ...location,
        price,
        currency,
        bedrooms: num(p.dormitorios),
        bathrooms: num(p.banos),
        rooms: num(p.ambientes) > 0 ? num(p.ambientes) : undefined,
        sqft: covered || land,
        total_surface: covered || undefined,
        covered_surface: covered || undefined,
        land_surface: land || undefined,
        front_meters: num(p.superficies?.metrosFrente) || undefined,
        depth_meters: num(p.superficies?.metrosFondo) || undefined,
        images: mapImages(p.media, p.imagenPortada),
        type,
        operation_type: operationType,
        featured: flag(p.destacada),
        age,
        age_display: age !== undefined ? getAgeDisplay(age) : undefined,
        parking_lot_amount: parseParking(p.cochera),
        property_condition: humanize(str(p.estado)) || undefined,
        expenses: num(p.expensas) || undefined,
        floors: num(p.plantas) || undefined,
        style: humanize(str(p.estilo)) || undefined,
        credit_eligible: flag(p.aptoCredito),
        tags: mapTags(p),
        operations: [{
            operation_id: rent ? 2 : 1,
            operation_type: operationType,
            price: priceValue,
            currency,
        }],
        producer: mapProducer(p.contacto),
        videos: mapVideos(p.media, id),
    };
}

// La documentación lista 1, 2 y 3; la cuenta demo de GVAmax además usa 7 para loteos.
const DEVELOPMENT_TYPES: Record<string, string> = {
    '1': 'Housing',
    '2': 'Edificio',
    '3': 'Loteo',
    '7': 'Loteo',
};

/** "Propio" | "Tercer" (así llega en la API) → texto para el sitio */
function mapSituation(value: string): string | undefined {
    if (!value) return undefined;
    if (/^propi/i.test(value)) return 'Propio';
    if (/^terc/i.test(value)) return 'Terceros';
    return value;
}

function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/** URL del emprendimiento: "<nombre>-<id>". El id al final permite encontrarlo aunque cambie el nombre. */
export function developmentSlug(name: string, id: number): string {
    const base = slugify(name);
    return base ? `${base}-${id}` : String(id);
}

/** "canitas-mall-8" → 8 · "corrientes_65" (URL vieja, sin id) → null */
export function parseDevelopmentSlug(slug: string): number | null {
    const match = slug.match(/(?:^|-)(\d+)$/);
    if (!match) return null;
    const id = parseInt(match[1], 10);
    return Number.isInteger(id) && id > 0 ? id : null;
}

function excerpt(text: string, maxLength = 180): string {
    const clean = text.replace(/\s+/g, ' ').trim();
    if (clean.length <= maxLength) return clean;
    const cut = clean.slice(0, maxLength);
    return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), maxLength - 30)).replace(/[\s,;.:-]+$/, '')}…`;
}

export function mapEmprendimiento(e: GvaEmprendimiento): Development {
    const id = num(e.id);
    const location = mapLocation(e.ubicacion);
    const priceValue = parsePrice(e.precio);
    const currency = parseCurrency(undefined, e.precio);
    const name = str(e.nombre) || location.address || 'Proyecto Inmobiliario';
    const rawDescription = fixEncoding(e.descripcion || '');
    const plainDescription = descriptionToPlainText(rawDescription);

    return {
        id,
        slug: developmentSlug(name, id),
        name,
        address: location.address,
        short_location: location.short_location,
        full_location: location.full_location,
        status: str(e.estado) || undefined,
        situation: mapSituation(str(e.situacion)),
        images: mapImages(e.media, e.imagenPortada),
        type: DEVELOPMENT_TYPES[String(e.idTipo ?? '').trim()],
        price: priceValue > 0 ? formatPrice(priceValue, currency) : undefined,
        short_description: plainDescription ? excerpt(plainDescription) : undefined,
        description_only: plainDescription || undefined,
        rich_description: sanitizeDescriptionHtml(rawDescription) || undefined,
        videos: mapVideos(e.media, id),
        geo_lat: location.geo_lat,
        geo_long: location.geo_long,
    };
}
