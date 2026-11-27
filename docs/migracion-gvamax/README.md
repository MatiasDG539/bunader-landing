# Migración Tokko → GVAmax

Desde noviembre de 2026 el sitio obtiene las propiedades de **GVAmax (API v3)**
en lugar de Tokko Broker. El diseño y la experiencia para los visitantes son los
mismos; cambió la fuente de los datos.

Las capturas de este documento se tomaron el 27/11/2026 sobre un build de
producción local conectado a la cuenta real de Bunader en GVAmax.

## Qué cambió en el código

| Archivo | Qué hace |
| --- | --- |
| `lib/gvamax/client.ts` | Conexión con la API: autenticación, paginado (25 por página), timeout y parseo tolerante a respuestas mal formadas. |
| `lib/gvamax/mappers.ts` | Convierte cada inmueble de GVAmax al modelo `Property` que ya usaba la UI. Corrige acentos, precios, teléfonos, ubicaciones, videos y tours. |
| `lib/gvamax/types.ts` | Tipos de las respuestas crudas de GVAmax. |
| `lib/properties/types.ts` | Tipos de dominio que consume la UI (antes vivían en `actions/tokkoApi.ts`). |
| `actions/gvamaxApi.ts` | Server actions con las mismas funciones que exponía Tokko (`getSalesProperties`, `getPropertyById`, etc.), con caché de 5 minutos. |
| `app/api/properties/*` | Ahora son wrappers de `gvamaxApi`. |
| `app/propiedades/[id]/page.tsx` | Video de YouTube, filas de ambientes, terreno, frente y fondo, e iniciales del asesor (GVAmax no envía foto). |
| `components/ui/video360-modal.tsx` | Link "Abrir en nueva pestaña" por si un tour no permite mostrarse embebido. |
| `app/propiedades/proyectos/page.tsx` + `components/projectsPage.tsx` | Listado de desarrollos desde los emprendimientos de GVAmax. |
| `app/propiedades/proyectos/[slug]/page.tsx` | Página genérica de cada emprendimiento, con la estructura de la antigua página de Corrientes 65. |
| `components/home/developments-section.tsx` | Sección "Nuestros Desarrollos" de la home desde GVAmax (se oculta si no hay emprendimientos). |
| `legacy/tokko/` | Toda la integración Tokko, **comentada** (no se compila). Ver su `README.md` para volver atrás. |
| `legacy/proyectos-hardcodeados/` | Las páginas fijas de Corrientes 65 y Mate de Luna 2197, **comentadas**. |

## Desarrollos (emprendimientos)

Toda la sección de desarrollos es automática desde GVAmax; no hay que tocar código.

- **Listado** (`/propiedades/proyectos`) y **home**: muestran todos los emprendimientos
  cargados en GVAmax, con foto, estado de obra, precio "desde", tipo y ubicación.
- **Página de cada emprendimiento** (`/propiedades/proyectos/<nombre>-<id>`, ej.
  `/propiedades/proyectos/canitas-mall-8`): misma estructura que la antigua página de
  Corrientes 65 — hero con foto, estado y botones; tarjetas (tipo, estado, precio,
  ubicación); "Sobre el proyecto"; galería; video y recorrido 360° si existen; mapa;
  contacto por WhatsApp. Cada sección aparece solo si GVAmax tiene ese dato.
- Si cambia el nombre en GVAmax, la URL vieja redirige sola a la nueva.
- Las URLs viejas fijas (`/propiedades/proyectos/corrientes_65`) redirigen al listado.
- El link `/d/<id>-dev` redirige a la página del emprendimiento.

**GVAmax no envía** cantidad de unidades, fecha de entrega, amenities ni tipologías
con planos (que sí tenía la página fija de Corrientes 65). Si se cargan en la
descripción del emprendimiento, se muestran en "Sobre el proyecto".

> **Estado actual:** la cuenta de Bunader tiene **0 emprendimientos** en GVAmax.
> Hasta que se carguen, el listado muestra "Pronto tendremos nuevos desarrollos"
> y la home oculta la sección. Corrientes 65 y Mate de Luna 2197 hay que cargarlos
> en GVAmax para que vuelvan a aparecer.

Variables de entorno (en `.env` y en el hosting):

```
GVAMAX_API_URL=https://gvamax.ar/Api/v3
GVAMAX_TOKEN=        # hash de 32 caracteres
GVAMAX_ACCOUNT_ID=   # número de cuenta
```

> Ojo: el token es el valor largo y el ID de cuenta el corto. Si se invierten,
> GVAmax responde `no_autorizado` y el sitio muestra los listados vacíos.

Los cambios en GVAmax se ven en el sitio en **5 minutos como máximo**, por la caché.

## Particularidades de la API de GVAmax resueltas

- **Acentos rotos:** 49 de 50 descripciones llegan con doble codificación
  (`mÃ¡s` en vez de `más`). Se corrige cada secuencia rota sin tocar el texto
  que ya viene bien.
- **JSON inválido:** con 0 resultados la API devuelve `"emprendimientos": ]}`,
  y algunas descripciones traen saltos de línea sin escapar. El parser repara
  ambos casos.
- **Propiedad individual:** la documentación no tiene ese endpoint. Se usa el
  parámetro `idInmueble`, que no figura en la documentación pero funciona.
  Si dejara de funcionar, el código busca la propiedad en el listado completo.
- **Ubicación:** la localidad llega como `"San Miguel De Tucuman ,es"`; se limpia el sufijo.
- **Tipos abreviados:** `Depto`, `Galpon` y `Local` se muestran como
  "Departamento", "Galpón" y "Local comercial".
- **Matterport:** las URLs `/models/<id>` (panel con login) se convierten a la
  URL embebible `/show/?m=<id>`.
- **WhatsApp:** los números se normalizan a formato internacional (`549…`),
  incluso los que vienen con el "15".
- **Las URLs necesitan `/` al final**; sin ella la API responde 301.

## Capturas

### Home: propiedades destacadas
Muestra las propiedades marcadas como destacadas en GVAmax.
![Home destacadas](capturas/01-home-destacadas.jpg)

### Listado de venta
![Listado de venta](capturas/02-listado-venta.jpg)

### Listado de alquiler con filtro por tipo
Los tipos del filtro salen de las propiedades cargadas en GVAmax.
![Listado de alquiler filtrado](capturas/03-listado-alquiler-filtro-tipo.jpg)

### Ficha: galería y acceso al tour 360°
![Ficha galería](capturas/04-ficha-galeria-tour360.jpg)

### Ficha: tour virtual 360° (Matterport) embebido
![Tour 360](capturas/05-ficha-modal-tour360-matterport.jpg)

### Ficha: datos, precio y contacto por WhatsApp con el asesor
Sin foto del asesor (GVAmax no la provee), se muestran sus iniciales.
![Datos y asesor](capturas/06-ficha-datos-asesor-whatsapp.jpg)

### Ficha: descripción con acentos corregidos
![Descripción](capturas/07-ficha-descripcion-acentos.jpg)

### Ficha: video de YouTube
![Video](capturas/08-ficha-video-youtube.jpg)

### Ficha: video y ubicación en el mapa
![Mapa](capturas/09-ficha-video-y-mapa.jpg)

### Ficha: superficies con terreno, frente y fondo
![Superficies](capturas/10-ficha-superficies-terreno-frente-fondo.jpg)

### Propiedad no publicada en GVAmax
Las propiedades con `publicada = 0` no se muestran.
![No publicada](capturas/11-propiedad-no-publicada.jpg)

### Celular: ficha de propiedad
![Mobile ficha](capturas/12-mobile-ficha.jpg)
![Mobile precio y WhatsApp](capturas/13-mobile-ficha-precio-whatsapp.jpg)

## Capturas: desarrollos

### Cuenta de Bunader hoy (0 emprendimientos cargados en GVAmax)
![Sin emprendimientos](capturas/20-desarrollos-cuenta-bunader-sin-emprendimientos-mobile.jpg)

Las siguientes capturas usan la **cuenta demo de GVAmax** (que sí tiene 4
emprendimientos de prueba, en Córdoba) para mostrar cómo se ven las páginas con
datos. Los textos y fotos son los de prueba de GVAmax.

### Listado de desarrollos
![Listado desarrollos](capturas/21-demo-listado-desarrollos.jpg)

### Home: sección "Nuestros Desarrollos"
![Home desarrollos](capturas/29-demo-home-seccion-desarrollos.jpg)

### Página del emprendimiento: hero
Misma estructura que la antigua página de Corrientes 65: volver, anterior/siguiente,
estado de obra, nombre, descripción corta, dirección y botones.
![Hero](capturas/22-demo-ficha-desarrollo-hero.jpg)

### Página del emprendimiento: tipo, estado de obra, precio y ubicación
![Datos](capturas/23-demo-ficha-desarrollo-datos.jpg)

### Página del emprendimiento: sobre el proyecto
![Descripción](capturas/24-demo-ficha-desarrollo-descripcion.jpg)

### Página del emprendimiento: galería
![Galería](capturas/25-demo-ficha-desarrollo-galeria.jpg)

### Página del emprendimiento: ubicación
![Ubicación](capturas/26-demo-ficha-desarrollo-ubicacion.jpg)

### Página del emprendimiento: contacto
![Contacto](capturas/30-demo-ficha-desarrollo-contacto.jpg)

### Celular: listado y página del emprendimiento
![Mobile listado](capturas/27-demo-mobile-listado-desarrollos.jpg)
![Mobile ficha](capturas/28-demo-mobile-ficha-desarrollo.jpg)

## Pendiente de definir con Bunader

- **Cargar los emprendimientos en GVAmax** (Corrientes 65, Mate de Luna 2197 y los
  que correspondan). Hasta entonces la sección de desarrollos queda vacía.

- **Propiedades no publicadas:** de 44 disponibles, 26 están marcadas como
  publicadas en GVAmax y son las que se ven en el sitio. Para mostrar otra,
  marcarla como publicada en GVAmax. Para mostrar todas sin importar la marca,
  cambiar `ONLY_PUBLISHED` a `false` en `lib/gvamax/mappers.ts`.
- **Reservadas:** las 4 propiedades reservadas no aparecen en los listados.
- **Antigüedad:** GVAmax usa 0 como valor por defecto, así que no se muestra
  "A estrenar" automáticamente (sí aparece si está en el título o la descripción).
- **Links viejos:** los IDs de GVAmax son distintos a los de Tokko, por lo que
  los links a propiedades compartidos antes del cambio muestran "Propiedad no encontrada".
