import { Injectable } from "@angular/core";
import { Hero } from "./heroes/hero";
import { HEROES } from "./heroes/mock-heroes";
import { MessageService } from "./message.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  getHero(id: number): Observable<Hero> {
    //TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    //TODO: send the information _after_ fetching the heroes
    this.messageService.add("HeroService: fetched hero");
    return of(HEROES);
  }
}
