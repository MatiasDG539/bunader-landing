# Integración Tokko Broker (legacy)

Desde noviembre de 2026 el sitio obtiene las propiedades de **GVAmax**
(`actions/gvamaxApi.ts` + `lib/gvamax/`). La integración anterior con Tokko se
conserva acá, **comentada línea por línea**, como referencia. Estos archivos no
se compilan ni se ejecutan (solo exportan `{}`).

| Archivo legacy                              | Ubicación original                  | Reemplazo GVAmax                         |
| ------------------------------------------- | ----------------------------------- | ---------------------------------------- |
| `actions/tokkoApi.ts`                       | `actions/tokkoApi.ts`               | `actions/gvamaxApi.ts`                   |
| `api-properties/sales.route.ts`             | `app/api/properties/sales/route.ts` | mismo path, wrapper de `gvamaxApi`       |
| `api-properties/rent.route.ts`              | `app/api/properties/rent/route.ts`  | mismo path, wrapper de `gvamaxApi`       |
| `api-properties/featured.route.ts`          | `app/api/properties/featured/route.ts` | mismo path, wrapper de `gvamaxApi`    |
| `api-properties/id.route.ts`                | `app/api/properties/[id]/route.ts`  | mismo path, wrapper de `gvamaxApi`       |
| `api-properties/projects.route.ts`          | `app/api/properties/projects/route.ts` | mismo path, emprendimientos GVAmax    |
| `redirects/p-id.route.ts`                   | `app/p/[id]/route.ts`               | mismo archivo, solo cambia el import     |
| `redirects/d-id.route.ts`                   | `app/d/[id]/route.ts`               | mismo archivo, solo cambia el import     |

Otros restos de Tokko comentados:

- `next.config.ts`: dominio de imágenes `static.tokkobroker.com`.
- `.env`: variables `API_KEY`, `BASE_URL` y `LANG` (bloque `[LEGACY TOKKO]`).

## Cómo volver a Tokko (si hiciera falta)

1. Descomentar `legacy/tokko/actions/tokkoApi.ts` (quitar el `// ` inicial de
   cada línea y el `export {};` final) y copiarlo a `actions/tokkoApi.ts`.
2. En los componentes, cambiar los imports de `@/actions/gvamaxApi` a
   `@/actions/tokkoApi`. Los tipos de `@/lib/properties/types` son compatibles.
3. Restaurar las rutas de `api-properties/` si se usan.
4. Descomentar las variables de Tokko en `.env` y el dominio en `next.config.ts`.

Nota: los IDs de propiedades de Tokko y de GVAmax son distintos, por lo que los
links `/propiedades/<id>` compartidos antes de la migración ya no funcionan.
