import { NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const LANG = process.env.LANG;

interface ProjectLocation {
    full_location: string;
}

interface ProjectPhoto {
    image?: string;
    thumb?: string;
    original?: string;
    description?: string;
    is_front_cover?: boolean;
    order?: number;
    is_blueprint?: boolean;
}

interface ProjectType {
    name?: string;
}

interface Project {
    id?: number;
    name?: string;
    address?: string;
    location?: ProjectLocation;
    status?: number;
    completion_date?: string;
    units?: number;
    photos?: ProjectPhoto[];
    type?: ProjectType;
}

export async function GET() {
    try {
        const url = `${BASE_URL}development/?lang=${LANG}&key=${API_KEY}&limit=10`;

        const response = await axios.get(url, {
        });

        const formattedProjects = response.data.objects.map((project: Project) => ({
            id: project.id || 0,
            title: project.name || project.address || 'Proyecto Inmobiliario',
            location: project.address || '',
            full_location: project.location?.full_location || '',
            status: getProjectStatus(project.status || 0, LANG),
            completion: getCompletionDate(project.completion_date, LANG),
            units: project.units || 0,
            images: project.photos?.map((photo) => ({
                image: formatImageUrl(photo?.image),
                thumb: photo?.thumb ? formatImageUrl(photo.thumb) : undefined,
                original: photo?.original ? formatImageUrl(photo.original) : undefined,
                description: photo?.description,
                is_front_cover: photo?.is_front_cover,
                order: photo?.order,
                is_blueprint: photo?.is_blueprint
            })) || [{ image: '/placeholder.svg' }],
            type: project.type?.name || getProjectType(typeof project.type === 'number' ? project.type : 0, LANG)
        }));

        return NextResponse.json(formattedProjects);
    } catch (error) {
        console.error('Error al obtener proyectos:', error);
        return NextResponse.json({ error: 'Error al obtener proyectos' }, { status: 500 });
    }
}

// Funciones auxiliares
function formatImageUrl(imageUrl: string | undefined): string {
    if (!imageUrl) return '/placeholder.svg';

    if (imageUrl.startsWith('http')) {
        return imageUrl;
    } else {
        return `https://static.tokkobroker.com${imageUrl}`;
    }
}

function getProjectType(typeId: number, lang: string = 'es_ar'): string {
    const types: Record<string, Record<number, string>> = {
        'es_ar': {
            1: 'Apartamentos',
            2: 'Condominios',
            3: 'Villas',
            4: 'Casas',
            5: 'Oficinas',
            6: 'Locales Comerciales'
        },
        'en': {
            1: 'Apartments',
            2: 'Condominiums',
            3: 'Villas',
            4: 'Houses',
            5: 'Offices',
            6: 'Commercial Spaces'
        }
    };

    const langTypes = types[lang] || types['es_ar'];
    return langTypes[typeId] || (lang === 'en' ? 'Development' : 'Desarrollo');
}

function getProjectStatus(statusId: number, lang: string = 'es_ar'): string {
    const statuses: Record<string, Record<number, string>> = {
        'es_ar': {
            1: 'Planeamiento',
            2: 'Pre-venta',
            3: 'En Construcción',
            4: 'Terminado'
        },
        'en': {
            1: 'Planning',
            2: 'Pre-sale',
            3: 'Under Construction',
            4: 'Completed'
        }
    };

    const langStatuses = statuses[lang] || statuses['es_ar'];
    return langStatuses[statusId] || (lang === 'en' ? 'In Development' : 'En Desarrollo');
}

function getCompletionDate(dateString: string | undefined, lang: string = 'es_ar'): string {
    if (!dateString) return lang === 'en' ? 'To be confirmed' : 'A confirmar';

    const date = new Date(dateString);
    const months: Record<string, string[]> = {
        'es_ar': [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ],
        'en': [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ]
    };

    const langMonths = months[lang] || months['es_ar'];
    return `${langMonths[date.getMonth()]} ${date.getFullYear()}`;
}
