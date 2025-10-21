import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter, map } from 'rxjs';
import { environment } from '@environment/environment';
import { News } from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef)

  private _newsData = new BehaviorSubject<News[] | null>(null)
  get newsData$(){
    return this._newsData
    .asObservable()
    .pipe(
      filter(item => !!item),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  getDataUrl(route: string): string | undefined {
    const urls: { [key: string]: string} =  {
      'news': 'front_page',
      'newest': '2',
      'front': '3'
    }
    if(Object.keys(urls).includes(route)){
      return `${environment.mainApi}/v1/search?tags=${urls[route]}`;
    }
    return;
  }

  getData(section: string){
    const url = this.getDataUrl(section);
    if(!url){ return; }
    this.http
      .get<{[key: string]: unknown}>(url)
      .pipe(
        map(response => response['hits']),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
          next: data => console.log(data),//this._newsData.next(data),
          error: error => console.error(error),
        }
      )
  }

}
