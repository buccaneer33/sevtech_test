import { Component, DestroyRef, inject, Signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../../services/data.service';
import { News } from '../../interface/news';
import { ListItemComponent } from '../list-item/list-item';

@Component({
  selector: 'app-news',
  imports: [ListItemComponent],
  templateUrl: './news-list.html',
  styleUrl: './news-list.scss'
})
export class NewsComponent {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private dataService = inject(DataService);

  newsList: Signal <News[] | undefined> = toSignal(this.dataService.newsData$);

  constructor(){
    this.routerListener();
  }

  routerListener(){
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event: NavigationEnd) => {
      const section = event.urlAfterRedirects.replace('/', '');
      this.dataService.getData(section);
    });
  }
}
