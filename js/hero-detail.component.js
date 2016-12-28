// import { Component, Input, OnInit} from "@angular/core"; //Component and Input are decorators
// import { ActivatedRoute, Params }   from '@angular/router';
// import { Location }                 from '@angular/common';
// import 'rxjs/add/operator/switchMap';
// import { HeroService } from './hero.service';
// // import { Hero } from './hero';
// @Component({
//     moduleId: module.id,
//     selector: "my-hero-detail",
//     templateUrl: "../templates/hero-detail.component.html",
//     styleUrls:["../styles/hero-detail.component.css"]  
// })
// export class HeroDetailComponent implements OnInit { //export make it available for other components
//     constructor(
//         private heroService: HeroService,
//         private route: ActivatedRoute,
//         private location: Location
//         ) {}
//         @Input() hero: Hero;
//         ngOnInit(): void {
//         this.route.params
//             .switchMap((params: Params) => this.heroService.getHero( + params['id']))
//             .subscribe(hero => this.hero = hero);
//         }
//         goBack(): void {
//             this.location.back();
//         }
//         save() : void {
//             this.heroService.update(this.hero)
//             .then(() => this.goBack());
//         }
// } 
//# sourceMappingURL=hero-detail.component.js.map