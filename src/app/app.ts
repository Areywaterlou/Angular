import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './components/heroes-component/heroes-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Arthur Reymond ToH2026');
}