import { Component, input, linkedSignal, output } from '@angular/core';
import { HeroInterface } from '../../data/heroInterface';
import { HeroDetailComponent } from '../hero-details-component/hero-detail-component';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-hero-edit-component',
  imports: [HeroDetailComponent, FormField],
  templateUrl: './hero-edit-component.html',
  styleUrl: './hero-edit-component.css',
})
export class HeroEditComponent {
  hero = input.required<HeroInterface>();

  heroModel = linkedSignal(() => ({ ...this.hero() }));

  heroForm = form(this.heroModel);

  heroChange = output<HeroInterface>();

  save() {
    this.heroChange.emit(this.heroModel());
  }
}