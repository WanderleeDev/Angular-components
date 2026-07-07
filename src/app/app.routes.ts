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
        path: 'navbars',
        title: 'catalog | navbars',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/navbars-view/navbars-view'),
      },
      {
        path: 'cards',
        title: 'catalog | cards',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/cards-view/cards-view'),
      },
      {
        path: 'sliders',
        title: 'catalog | sliders',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/sliders-view/sliders-view'),
      },
      {
        path: 'footers',
        title: 'catalog | footers',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/footers-view/footers-view'),
      },
      {
        path: 'headers',
        title: 'catalog | headers',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/headers-view/headers-view'),
      },
      {
        path: 'lists',
        title: 'catalog | lists',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/lists-view/lists-view'),
      },
      {
        path: 'services',
        title: 'catalog | services',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/services-view/services-view'),
      },
      {
        path: 'blocks',
        title: 'catalog | blocks',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/blocks-view/blocks-view'),
      },
      {
        path: 'others',
        title: 'catalog | others',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/others-view/others-view'),
      },
      {
        path: 'themes',
        title: 'catalog | themes',
        loadComponent: () =>
          import('./modules/catalog/presentation/views/themes-view/themes-view'),
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
