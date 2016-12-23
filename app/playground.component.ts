import {Component, OnInit} from "@angular/core";
import {ClickerService} from "./clicker.service";
import {Tile} from "./tile";
import {TILES} from "./tilesData";

@Component ({
    selector: "playground",
    templateUrl: "../templates/playground.component.html",
    styleUrls: ["../styles/playground.component.css","../styles/tile.css"]
})

export class PlaygroundComponent implements OnInit {
    
    tiles: Tile[];
    counter : number = 0;

    ngOnInit() : void {
        this.tiles = TILES;
    }

    constructor(
        private clickerService: ClickerService
        ) {}

    tileClicked(tile : Tile) : void {
        tile.active = !tile.active;
        console.log("tile state: ", tile.active);
        this.counter = this.clickerService.raiseCounter();
    }

}