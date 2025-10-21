import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'news',
    loadChildren: () => import('./views/news/news.routes').then(m => m.NewsRoutes)
  },
  {
    path: 'newest',
    loadChildren: () => import('./views/news/news.routes').then(m => m.NewsRoutes)
  },
  {
    path: 'front',
    loadChildren: () => import('./views/news/news.routes').then(m => m.NewsRoutes)
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  }
];
