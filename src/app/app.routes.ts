import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { authGuard } from './core/guards/auth-guard';
import { Home } from './domain/home/home';
import { Dashboard } from './domain/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: Dashboard,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
