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
    loadComponent: () => import('./Pages/Home/Home.component'),
  },
  {
    path: '**',
    title: 'not found',
    loadComponent: () => import('./Pages/NotFound/NotFound.component')
  }
];
