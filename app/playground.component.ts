import {Component, OnInit} from "@angular/core";
import {ClickerService} from "./clicker.service";
import {Tile} from "./tile";
import {TILES} from "./tilesData";

import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component ({
    selector: "playground",
    templateUrl: "../templates/playground.component.html",
    styleUrls: ["../css/main.css"]
})

export class PlaygroundComponent implements OnInit {
    
    tiles: Tile[];
    selectedTilesIds: number[];
    counter : number = 0;
    ticks : number;
    countDown : number = 3;

    ngOnInit() : void {
        this.tiles = TILES;
        this.selectedTilesIds = [];
    }

    constructor(
        private clickerService: ClickerService
        ) {}

    tileClicked(tile : Tile) : void {
        if (this.ticks > 0)
        {
            if (tile.active)
            {
                tile.active = false;
                this.counter = this.clickerService.raiseCounter();

                var nextActiveTile = this.getNotActiveTile();
                nextActiveTile.active = true;

                this.removeFromList(tile.id);
            }
        }
    }

    removeFromList(index : number) {
        index = index - 1;
        var value = this.selectedTilesIds.indexOf(index);
        if (value !== -1) {
            this.selectedTilesIds.splice(value, 1);
        }
    }

    raise = function() {
        console.log('done');
    }

    start() {

        this.tiles = TILES;
        this.selectedTilesIds = [];

        this.ticks = 30;
        this.counter = 0;
        this.countDown = 3;

        //start countdown
        let startObs$ = new Observable(observer => {
        })

        // let timer$ = Observable.interval(1000).take(this.ticks);
        // let subs$ = timer$.subscribe(x => this.ticks--);        
    }

    startPlay()
    {
        //random select first 3 tiles
        var tile1 = this.getNotActiveTile();
        tile1.active = true;

        var tile2 = this.getNotActiveTile();
        tile2.active = true;

        var tile3 = this.getNotActiveTile();
        tile3.active = true;
        //
    }

    getNotActiveTile() : Tile {
        var randomNr = this.getRandomIndex();
        var tile = this.tiles[randomNr];
    
        return tile;
    }

    getRandomIndex() : number {

        var nr = Math.floor(Math.random() * 9); 

        if (this.selectedTilesIds.indexOf(nr) !== -1) {
            return this.getRandomIndex();
        }
        else{
            this.selectedTilesIds.push(nr);
            return nr;
        }
    }

}