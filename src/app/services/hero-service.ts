import { Service } from '@angular/core';
import { HeroInterface } from '../data/heroInterface';
import { HEROES } from '../data/mock-heroes';

@Service()
export class HeroService {
    private heroes: HeroInterface[] = HEROES;

    getHeroes(): HeroInterface[] {
        return this.heroes;
    }
}