import { HeroInterface } from "../../data/heroInterface";
import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { HEROES } from '../../data/mock-heroes';
import { HeroEditComponent } from '../hero-edit-component/hero-edit-component';
import { HeroDetailComponent } from '../hero-details-component/hero-detail-component';

@Component({
  imports: [FormField, UpperCasePipe, HeroEditComponent, HeroDetailComponent],
  selector: 'app-heroes-component',
  styleUrl: './heroes-component.css',
  templateUrl: './heroes-component.html',
})
export class HeroesComponent {
  title = 'Mon Titre de Héros';

  heroesModel = signal<HeroInterface[]>(HEROES);
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
}












  //heroModel = signal<HeroInterface>({
  //  id: 2,
  //  name: 'Hervé',
  //  actif: true,
  //});

  //heroNameModelCapitalized = computed(() => this.heroModel().name.toUpperCase());

  //protected changerHeroName($name: string) {
  //  this.heroModel.update((hero) => ({...hero, name: $name}));
  //}

  //protected changerHeroActif() {
  //  this.heroModel.update((hero) => ({...hero, actif: !hero.actif}));
  //}

  //heroForm = form(this.heroModel);