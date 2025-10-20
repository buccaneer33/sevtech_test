import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'new',
    loadChildren: () => import('./views/new/new.routes').then(m => m.NewRoutes)
  },
  {
    path: '',
    redirectTo: 'new',
    pathMatch: 'full'
  }
];
