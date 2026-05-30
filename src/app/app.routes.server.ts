import { RenderMode, ServerRoute } from '@angular/ssr';
import { COMPONENTS_DATA } from 'app/modules/catalog/const';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'catalog/category/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      console.log(
        'DEBUG: getPrerenderParams called! Categories:',
        COMPONENTS_DATA.map(c => c.title)
      );
      return COMPONENTS_DATA.map(category => ({
        id: category.title,
      }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
