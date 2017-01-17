import {Component, OnInit} from "@angular/core";
import {ClickerService} from "./clicker.service";
import {Tile} from "./tile";
import {TILES} from "./tilesData";

import {Subscription} from "rxjs";
import {Observable} from "rxjs/Observable";

@Component ({
    selector: "playground",
    templateUrl: "../templates/playground.component.html",
    styleUrls: ["../styles/playground.component.css","../styles/tile.css"]
})

export class PlaygroundComponent implements OnInit {
    
    tiles: Tile[];
    selectedTilesIds: number[];
    counter : number = 0;
    ticks = 30;

    ngOnInit() : void {
        this.tiles = TILES;
        this.selectedTilesIds = [];

        let timer$ = new Observable(observer => {
            let interval = setInterval(() => {
                observer.next(this.ticks--);
            }, 1000);

            return () => {
                clearInterval(interval);
            }
        });

        let unsub = timer$.count(value => value < 30).subscribe(value => console.log(value));
        
        // let timer = TimerObservable.create(1000, 1000);
        // timer.subscribe(t => this.ticks = this.ticks - 1);

        var tile1 = this.getNotActiveTile();
        tile1.active = true;

        var tile2 = this.getNotActiveTile();
        tile2.active = true;

        var tile3 = this.getNotActiveTile();
        tile3.active = true;
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
        else
        {

            //TimerObservable.dispatch(this.ticks);
            //timer.subscribe(t => this.ticks = this.ticks - 1).unsubscribe;
        }
    }

    removeFromList(index : number) {
        index = index - 1;
        var value = this.selectedTilesIds.indexOf(index);
        if (value !== -1) {
            this.selectedTilesIds.splice(value, 1);
        }
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