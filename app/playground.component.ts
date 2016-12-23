import {Component} from "@angular/core";
import {ClickerService} from "./clicker.service";

@Component ({
    selector: "playground",
    templateUrl: "../templates/playground.component.html"
})

export class PlaygroundComponent {

    constructor(
        private clickerService: ClickerService
        ) {}

    tileClicked() : void {
        this.clickerService.raiseCounter();
    }

}