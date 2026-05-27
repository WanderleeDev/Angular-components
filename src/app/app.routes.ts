import { Routes } from '@angular/router';

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
          import('./modules/catalog/presentation/views/catalog-entry-view/catalog-entry-view'),
      },
      {
        path: 'category/:id',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/catalog-detail-view/catalog-detail-view'),
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
