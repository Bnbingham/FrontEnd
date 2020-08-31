import { MessageService } from "./../message.service";
import { HeroService } from "./../hero.service";
import { async } from "@angular/core/testing";
import { HEROES } from "./mock-heroes";
import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";

@Component({
  selector: "heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private HeroService: HeroService,
    private MessageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
