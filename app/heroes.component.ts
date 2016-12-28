// import { Component } from '@angular/core';
// import { Hero } from './hero';
// import { HeroService} from './hero.service';
// import { OnInit } from '@angular/core';
// import { Router }   from '@angular/router';

// @Component({
//   moduleId: module.id,
//   selector: 'my-heroes',
//   templateUrl: '../templates/heroes.component.html',
//   styleUrls: ["../styles/heroes.component.css"]
// })

// export class HeroesComponent implements OnInit { 
//   ngOnInit() : void {
//      this.getHeroes();
//   }
//   constructor(
//     private heroService: HeroService, 
//     private router: Router) {
//   }

//   heroes : Hero[];
//   selectedHero : Hero;

//   onSelect(hero: Hero) : void {
//     this.selectedHero = hero;
//   }

//   getHeroes() : void {
//     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//   }

//   gotoDetail() : void {
//       this.router.navigate(['/detail', this.selectedHero.id]);
//   }

// }