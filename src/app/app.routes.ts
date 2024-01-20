import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./Pages/Home/Home.component')
  },
  {
    path: '**',
    loadComponent: () => import('./Pages/NotFound/NotFound.component')
  }
];
