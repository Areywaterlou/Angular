import { Service, inject } from '@angular/core';
import { HeroInterface } from '../data/heroInterface';
import { HEROES } from '../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message-service';

@Service()
export class HeroService {
    private messageService = inject(MessageService);
    private heroes: HeroInterface[] = HEROES;

    getHeroes(): Observable<HeroInterface[]> {
        const heroes: Observable<HeroInterface[]> = new Observable(observer => {
            observer.next(HEROES.slice(0, 2));
            setTimeout(() => {
                observer.next(HEROES);
                observer.complete();
            }, 3000); 
        });
        
        this.messageService.add('Héros récupérés avec succès');

        return heroes;
    }
}