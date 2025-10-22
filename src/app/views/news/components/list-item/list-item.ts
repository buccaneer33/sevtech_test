import { Component, input } from '@angular/core';
import { News } from '../../interface/news';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-item',
  imports: [NzDividerModule, RouterLink],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss'
})
export class ListItemComponent {
  readonly newsItem = input.required<News>();
}
