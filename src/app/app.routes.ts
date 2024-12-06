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
    loadComponent: () => import('./pages/Home/Home.component'),
  },
  {
    path: 'components',
    title: 'components',
    loadComponent: () => import('./pages/Components/Components.component'),
    children: [
      {
        path: '',
        title: 'components | catalog',
        loadComponent: () =>
          import('./pages/Components/Pages/EntryPage/EntryPage.component'),
      },
      {
        path: 'models/:id',
        loadComponent: () =>
          import('./pages/Components/Pages/Models/Models.component'),
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
    loadComponent: () => import('./pages/NotFound/NotFound.component'),
  },
];
