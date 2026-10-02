import { Component, input, signal } from '@angular/core';
import { HeroInterface } from '../../data/heroInterface';

@Component({
  imports: [],
  selector: 'app-hero-detail-component',
  styleUrl: './hero-detail-component.css',
  templateUrl: './hero-detail-component.html',
})
export class HeroDetailComponent {
  hero = input.required<HeroInterface>();
  selectedHeroModel = signal<HeroInterface | null>(null);
}
