import { Route } from '@angular/router';
import { NewsComponent } from './components/news-list/news-list';
import { NewsItem } from './components/news-item/news-item';

export const NewsRoutes: Route[] =  [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'item:id',
    component: NewsItem
  }
];
