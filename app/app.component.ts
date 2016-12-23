import {Component} from '@angular/core';
import { HeroService} from './hero.service';

@Component ({
    selector : "my-app",
    templateUrl : "../templates/app.component.html",
    styleUrls: ["../styles/app.component.css"],
    providers : [HeroService]
})

export class AppComponent {
    title = "Tour of Heroes";
}