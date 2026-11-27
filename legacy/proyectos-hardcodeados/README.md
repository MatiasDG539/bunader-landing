# Proyectos hardcodeados (legacy)

Hasta noviembre de 2026 la sección de desarrollos tenía los proyectos escritos
a mano en el código (Corrientes 65 y Mate de Luna 2197). Ahora todo sale de los
**emprendimientos de GVAmax**: alcanza con cargar o editar el emprendimiento en
GVAmax y el sitio se actualiza solo (en hasta 5 minutos).

| Archivo legacy | Ubicación original | Reemplazo |
| --- | --- | --- |
| `corrientes_65.page.tsx` | `app/propiedades/proyectos/corrientes_65/page.tsx` | `app/propiedades/proyectos/[slug]/page.tsx` (página genérica, misma estructura) |
| `mate_de_luna_2197.page.tsx` | `app/propiedades/proyectos/mate_de_luna_2197/page.tsx` | ídem |
| `projectsPage.tsx` | `components/projectsPage.tsx` | mismo archivo, recibe los emprendimientos de GVAmax |
| `developments-section.tsx` | `components/home/developments-section.tsx` | mismo archivo, carga los emprendimientos de GVAmax |

Los archivos están comentados línea por línea y no se compilan. Las imágenes
(`public/img/corrientes_65/`, `public/img/mate_de_luna_2197/`) se conservan.

Las URLs viejas (`/propiedades/proyectos/corrientes_65`) redirigen al listado de proyectos.
