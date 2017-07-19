import {Component, OnInit, ViewChild} from "@angular/core";
import {TilesComponent} from "./tiles.component"

@Component ({
    selector: "playground",
    templateUrl: "../templates/playground.component.html",
    styleUrls: ["../css/main.css"]
})

export class PlaygroundComponent implements OnInit {

    @ViewChild(TilesComponent)
    private tilesComponent: TilesComponent;

    counter : number = 0;
    countDown : number = 3;

    constructor () {};

    ngOnInit() : void {
    }
    
    start() {
        this.tilesComponent.start();
    }

    restart() {
    }

}