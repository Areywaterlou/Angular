import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { HeroesComponent } from './components/heroes-component/heroes-component';
import { HeroDetailComponent } from './components/hero-details-component/hero-detail-component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '**', redirectTo: '/dashboard' },
];