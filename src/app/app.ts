import { Component, signal } from '@angular/core';
import { HeroesComponent } from './components/heroes-component/heroes-component';
import { Messages } from './components/messages/messages';

@Component({
  selector: 'app-root',
  imports: [HeroesComponent,Messages],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Arthur Reymond ToH2026');
}