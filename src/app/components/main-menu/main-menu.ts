import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [RouterLink],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss'
})
export class MainMenu {

  readonly title = signal('Hacker News');

  readonly menuPoints = [
    'new',
    'past',
    'comments',
    'ask',
    'show ',
    'jobs',
    'submit'
  ]
}
