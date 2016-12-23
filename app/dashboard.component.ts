import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HeroService} from "./hero.service";
import {Hero} from "./hero"

@Component ({
    selector: "my-dashboard",
    templateUrl: "../templates/dashboard.component.html",
    styleUrls: ["../styles/dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) : void {
      this.router.navigate(['/detail', hero.id]);
  }

}