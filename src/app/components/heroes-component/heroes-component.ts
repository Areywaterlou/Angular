import { HeroInterface } from "../../data/heroInterface";
import { UpperCasePipe } from '@angular/common';
import { Component, inject, computed, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { HEROES } from '../../data/mock-heroes';
import { HeroEditComponent } from '../hero-edit-component/hero-edit-component';
import { HeroDetailComponent } from '../hero-details-component/hero-detail-component';
import { HeroService } from '../../services/hero-service';

@Component({
  imports: [FormField, UpperCasePipe, HeroEditComponent, HeroDetailComponent],
  selector: 'app-heroes-component',
  styleUrl: './heroes-component.css',
  templateUrl: './heroes-component.html',
})
export class HeroesComponent {
  private heroService = inject(HeroService);
  title = 'Mon Titre de Héros';

  heroesModel = signal<HeroInterface[]>([]);
  selectedHeroModel = signal<HeroInterface | null>(null);

  onSelect(hero: HeroInterface): void {
    this.selectedHeroModel.set(hero);
    console.log(this.selectedHeroModel());
  }
  
  protected onHeroChange(updatedHero: HeroInterface) {
    this.heroesModel.update((heroes) =>
      heroes.map((hero) => (hero.id === updatedHero.id ? updatedHero : hero)),
    );
    this.selectedHeroModel.set(updatedHero);
  }

  ngOnInit() {
        this.heroesModel.set(this.heroService.getHeroes());
    } 
}