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
        const apiClient = axios.create({
            baseURL: BASE_URL,
            params: {
                key: API_KEY,
                lang: LANG
            }
        });

        const response = await apiClient.get("development/", {
            params: {
                limit: 10
            }
        });

        const formattedProjects = response.data.objects.map((project: Project) => ({
            id: project.id || 0,
            title: project.name || project.address || 'Proyecto Inmobiliario',
            location: project.address || '',
            full_location: project.location?.full_location || '',
            status: getProjectStatus(project.status || 0),
            completion: getCompletionDate(project.completion_date),
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
            type: project.type?.name || getProjectType(typeof project.type === 'number' ? project.type : 0)
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

function getProjectType(typeId: number): string {
    const types: Record<number, string> = {
        1: 'Apartamentos',
        2: 'Condominios',
        3: 'Villas',
        4: 'Casas',
        5: 'Oficinas',
        6: 'Locales Comerciales'
    };

    return types[typeId] || 'Desarrollo';
}

function getProjectStatus(statusId: number): string {
    const statuses: Record<number, string> = {
        1: 'Planeamiento',
        2: 'Pre-venta',
        3: 'En Construcción',
        4: 'Terminado'
    };

    return statuses[statusId] || 'En Desarrollo';
}

function getCompletionDate(dateString: string | undefined): string {
    if (!dateString) return 'A confirmar';

    const date = new Date(dateString);
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
