// Cliente HTTP para la API GVAmax v3. Solo debe usarse del lado del servidor:
// el token nunca se expone al navegador (las variables no son NEXT_PUBLIC_*).
//
// Variables de entorno (.env):
//   GVAMAX_API_URL     URL base. Opcional, por defecto https://gvamax.ar/Api/v3
//   GVAMAX_TOKEN       Token de la cuenta (parámetro "token")
//   GVAMAX_ACCOUNT_ID  ID de la inmobiliaria en GVAmax (parámetro "id")

import type {
    GvaEmprendimiento,
    GvaEmprendimientosResponse,
    GvaInmueble,
    GvaInmueblesResponse,
} from './types';

const DEFAULT_API_URL = 'https://gvamax.ar/Api/v3';
const REQUEST_TIMEOUT_MS = 15_000;
/** La API pagina de a 25. Tope de seguridad: 40 páginas = 1000 propiedades. */
const MAX_PAGES = 40;

type QueryValue = string | number | undefined | null;
type Query = Record<string, QueryValue>;

export class GvamaxError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GvamaxError';
    }
}

function getConfig() {
    const apiUrl = (process.env.GVAMAX_API_URL || DEFAULT_API_URL).replace(/\/+$/, '');
    const token = process.env.GVAMAX_TOKEN;
    const accountId = process.env.GVAMAX_ACCOUNT_ID;

    if (!token || !accountId) {
        throw new GvamaxError('Faltan GVAMAX_TOKEN y/o GVAMAX_ACCOUNT_ID en las variables de entorno');
    }
    return { apiUrl, token, accountId };
}

function buildUrl(path: string, query: Query): string {
    const { apiUrl, token, accountId } = getConfig();
    // GVAmax responde 301 si el path no termina en "/".
    const url = new URL(`${apiUrl}/${path.replace(/^\/+|\/+$/g, '')}/`);
    url.searchParams.set('token', token);
    url.searchParams.set('id', accountId);
    for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.set(key, String(value));
        }
    }
    return url.toString();
}

/**
 * GVAmax a veces devuelve JSON con caracteres de control sin escapar dentro de
 * los strings (saltos de línea en descripciones), lo que rompe JSON.parse.
 * Esta función los escapa respetando la estructura del JSON.
 */
function escapeControlCharsInStrings(text: string): string {
    let out = '';
    let inString = false;
    let escaped = false;

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (!inString) {
            if (ch === '"') inString = true;
            out += ch;
            continue;
        }
        if (escaped) {
            escaped = false;
            out += ch;
            continue;
        }
        if (ch === '\\') {
            escaped = true;
            out += ch;
            continue;
        }
        if (ch === '"') {
            inString = false;
            out += ch;
            continue;
        }
        const code = ch.charCodeAt(0);
        if (code < 0x20) {
            if (ch === '\n') out += '\\n';
            else if (ch === '\r') out += '\\r';
            else if (ch === '\t') out += '\\t';
            else out += `\\u${code.toString(16).padStart(4, '0')}`;
            continue;
        }
        out += ch;
    }
    return out;
}

function parseLenientJson<T>(text: string): T {
    const clean = text.replace(/^﻿/, '');
    try {
        return JSON.parse(clean) as T;
    } catch {
        // Cuando no hay resultados GVAmax devuelve `"propiedades": ]}` (sin el "[").
        const repaired = clean.replace(/"(propiedades|emprendimientos)"\s*:\s*\]/g, '"$1": []');
        return JSON.parse(escapeControlCharsInStrings(repaired)) as T;
    }
}

async function gvamaxGet<T>(path: string, query: Query = {}): Promise<T> {
    const url = buildUrl(path, query);
    let response: Response;
    try {
        response = await fetch(url, {
            headers: { Accept: 'application/json' },
            signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        });
    } catch (error) {
        // No se loguea la URL porque contiene el token.
        throw new GvamaxError(`No se pudo conectar con GVAmax (${path}): ${(error as Error).message}`);
    }

    const body = await response.text();

    if (body.trim() === 'no_autorizado') {
        throw new GvamaxError('GVAmax rechazó las credenciales (no_autorizado). Revisar GVAMAX_TOKEN / GVAMAX_ACCOUNT_ID');
    }
    if (!response.ok) {
        throw new GvamaxError(`GVAmax respondió HTTP ${response.status} en ${path}`);
    }

    try {
        return parseLenientJson<T>(body);
    } catch {
        throw new GvamaxError(`Respuesta inválida de GVAmax en ${path}`);
    }
}

function dedupeById<T extends { id: string | number }>(items: T[]): T[] {
    const seen = new Set<string>();
    return items.filter((item) => {
        const key = String(item.id);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

export interface InmueblesQuery {
    /** 1 venta, 2 alquiler */
    opera?: 1 | 2;
    /** id de tipo de inmueble (endpoint /buscador/Tipos) */
    tipo?: number;
    /** -1 todos, 1 disponibles, 2 vendidas, 3 alquiladas, ... */
    disponible?: number;
    destacado?: 0 | 1;
    oportunidad?: 1;
    /** prec_ofrec_a | prec_ofrec_d | fec_ing | fec_mod */
    order?: 'prec_ofrec_a' | 'prec_ofrec_d' | 'fec_ing' | 'fec_mod';
}

/** Trae todas las páginas de /inmuebles para los filtros dados. */
export async function fetchAllInmuebles(query: InmueblesQuery = {}): Promise<GvaInmueble[]> {
    const params: Query = { ...query };
    const first = await gvamaxGet<GvaInmueblesResponse>('inmuebles', { ...params, page: 1 });
    const totalPages = Math.min(Number(first.content?.totalpages) || 1, MAX_PAGES);

    const remaining = totalPages > 1
        ? await Promise.all(
            Array.from({ length: totalPages - 1 }, (_, i) =>
                gvamaxGet<GvaInmueblesResponse>('inmuebles', { ...params, page: i + 2 })
            )
        )
        : [];

    const all = [first, ...remaining].flatMap((page) => page.propiedades ?? []);
    return dedupeById(all);
}

/**
 * Trae una propiedad por ID. Usa el parámetro `idInmueble`, que funciona en la
 * API aunque no figura en la documentación. Si GVAmax lo ignorara (devuelve el
 * listado completo), se busca la propiedad recorriendo todas las páginas.
 */
export async function fetchInmuebleById(id: number): Promise<GvaInmueble | null> {
    const response = await gvamaxGet<GvaInmueblesResponse>('inmuebles', { idInmueble: id });
    const items = response.propiedades ?? [];
    const match = items.find((item) => String(item.id) === String(id));
    if (match) return match;

    const total = Number(response.content?.totalresults) || 0;
    if (total > items.length) {
        const all = await fetchAllInmuebles({ disponible: -1 });
        return all.find((item) => String(item.id) === String(id)) ?? null;
    }
    return null;
}

export async function fetchEmprendimientos(): Promise<GvaEmprendimiento[]> {
    const response = await gvamaxGet<GvaEmprendimientosResponse>('emprendimientos');
    return dedupeById(response.emprendimientos ?? []);
}

export async function fetchEmprendimientoById(id: number): Promise<GvaEmprendimiento | null> {
    const response = await gvamaxGet<GvaEmprendimientosResponse>('emprendimientos', { Idemprendimiento: id });
    return (response.emprendimientos ?? []).find((item) => String(item.id) === String(id)) ?? null;
}
