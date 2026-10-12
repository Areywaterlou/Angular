import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroInterface } from '../../data/heroInterface'; 
import { HeroService } from '../../services/hero-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.css']
})
export class DashboardComponent implements OnInit {
  heroes: HeroInterface[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Récupère 4 héros (du 2e au 5e)
  }
}