import { RenderMode, ServerRoute } from '@angular/ssr';
import { Catalog, categories } from './modules/components/loader';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'catalog/:category/page/:page',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return categories.map(category => ({
        category,
        page: '1',
      }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
