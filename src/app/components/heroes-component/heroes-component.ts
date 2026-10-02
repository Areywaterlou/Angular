import { HeroInterface } from "../../data/heroInterface";
import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { HeroEditComponent } from '../hero-edit-component/hero-edit-component';
import { HeroDetailComponent } from '../hero-details-component/hero-detail-component';
import { HeroService } from '../../services/hero-service';
import { MessageService } from '../../services/message-service';

@Component({
  imports: [FormField, UpperCasePipe, HeroEditComponent, HeroDetailComponent],
  selector: 'app-heroes-component',
  styleUrl: './heroes-component.css',
  templateUrl: './heroes-component.html',
})
export class HeroesComponent {
  private heroService = inject(HeroService);
  private messageService = inject(MessageService);
  
  title = 'Mon Titre de Héros';

  heroesModel = signal<HeroInterface[]>([]);
  selectedHeroModel = signal<HeroInterface | null>(null);

  onSelect(hero: HeroInterface): void {
    this.selectedHeroModel.set(hero);
    this.messageService.add(`Sélection : Héros "${hero.name}" (ID: ${hero.id})`);
    console.log(this.selectedHeroModel());
  }
  
  protected onHeroChange(updatedHero: HeroInterface) {
    this.heroesModel.update((heroes) =>
      heroes.map((hero) => (hero.id === updatedHero.id ? updatedHero : hero)),
    );
    this.selectedHeroModel.set(updatedHero);
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroesModel.set(heroes);
    });
  }
}