import { Routes, ActivatedRouteSnapshot } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'home',
    loadComponent: () => import('./modules/home/presentation/views/home-view'),
  },
  {
    path: 'catalog',
    title: 'catalog',

    loadComponent: () =>
      import('./modules/catalog/presentation/layouts/catalog-layout'),
    children: [
      {
        path: '',
        title: 'catalog | entry',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/entry-view/entry-view'),
      },
      {
        path: 'themes',
        title: 'catalog | themes',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/themes-view/themes-view'),
      },
      {
        path: ':category',
        redirectTo: ':category/page/1',
        pathMatch: 'full',
      },
      {
        path: ':category/page/:page',
        title: (route: ActivatedRouteSnapshot) => `catalog | ${route.paramMap.get('category')}`,
        loadComponent: () =>
          import('./modules/catalog/presentation/views/category-view'),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    title: 'not found',
    loadComponent: () =>
      import('./modules/shared/presentation/view/not-found-view'),
  },
];
