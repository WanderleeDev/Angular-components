# MiAngularComponents

Biblioteca de componentes UI reutilizables construida con **Angular 22**, **Tailwind CSS v4** y *server-side rendering* (SSR/prerender), con un sitio-catálogo para explorar, configurar y copiar el código de cada componente.

## Stack

- **Angular 22** (componentes standalone, signals, lazy loading)
- **@angular/ssr** + Express (SSR y prerender)
- **Tailwind CSS v4** (vía PostCSS) y `tailwind-animations`
- **ngx-theme-stack** para theming (se sincroniza en el `prebuild`)
- **ngx-highlightjs** + **highlight.js** para el visor de código
- **ESLint** + **Prettier** y tests con **Karma/Jasmine**
- Gestor de paquetes: **pnpm**

## Scripts

```bash
pnpm start      # servidor de desarrollo (ng serve)
pnpm build      # build de producción (ejecuta prebuild de ngx-theme-stack)
pnpm watch      # build en modo desarrollo con watch
pnpm test       # tests unitarios (Karma)
pnpm lint       # ESLint
```

> El script `prebuild` ejecuta `ng generate ngx-theme-stack:sync` antes de cada build.

## Estructura

```
src/app/
├── modules/
│   ├── components/        # Componentes de la librería (blocks, cards, footers,
│   │                      #   headers, lists, navbars, sliders, others, loader)
│   ├── catalog/           # Sitio-catálogo (layout, views, panel de propiedades,
│   │                      #   visor de código, header, etc.)
│   ├── home/              # Landing (home-view)
│   └── shared/            # Vistas/utilidades compartidas (p. ej. not-found)
├── app.config.ts          # Configuración de la app
├── app.routes.ts          # Rutas (home, catalog, **)
└── app.ts                 # Componente raíz
```

## Rutas

- `/home` — landing
- `/catalog` — catálogo (entrada, `themes`, y `:category/page/:page` con paginación lazy)
- `**` — vista *not found*

## Componentes

La librería agrupa ~109 componentes en categorías: `blocks` (15), `loader` (11), `navbars` (11), `cards` (5), `footers` (5), `headers` (5), `lists` (4), `sliders` (2) y `others` (native-picker, star-rating).

## Servidor de desarrollo

Ejecuta `pnpm start` y abre `http://localhost:4200/`. La app recarga automáticamente al modificar los archivos fuente.
