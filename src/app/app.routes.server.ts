import { RenderMode, ServerRoute } from '@angular/ssr';
import { categories } from './modules/components/loader';
import { calculateBaseMetadataSection } from './modules/shared/utils';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'catalog/themes',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'catalog/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return categories.map(category => ({ category }));
    },
  },
  {
    path: 'catalog/:category/page/:page',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return categories.flatMap(category => {
        const { totalPages } = calculateBaseMetadataSection(category);
        const pagesToPreRender = Math.max(1, totalPages);

        return Array.from({ length: pagesToPreRender }, (_, i) => ({
          category,
          page: (i + 1).toString(),
        }));
      });
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ '**': '404' }],
  },
];
