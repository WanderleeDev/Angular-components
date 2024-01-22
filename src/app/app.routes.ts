import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title:'home',
    loadComponent: () => import('./Pages/Home/Home.component')
  },
  {
    path: 'components',
    title: 'components',
    loadComponent: () => import('./Pages/Components/Components.component'),
  },
  {
    path: '**',
    title: 'not found',
    loadComponent: () => import('./Pages/NotFound/NotFound.component')
  }
];
