import {Component} from "@angular/core";
import {ClickerService} from "./clicker.service";

@Component ({
    selector: "playground",
    templateUrl: "../templates/playground.component.html"
})

export class PlaygroundComponent {

    counter : number = 0;

    constructor(
        private clickerService: ClickerService
        ) {}

    tileClicked() : void {
        this.counter = this.clickerService.raiseCounter();
    }

}