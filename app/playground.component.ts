import {Component, OnInit, ViewChild} from "@angular/core";
import {TilesComponent} from "./tiles.component"
import {TimerComponent} from "./timer.component"
import {CounterComponent} from "./counter.component"
import {Tile} from "./tile";

@Component ({
    selector: "playground",
    templateUrl: "../templates/playground.component.html",
    styleUrls: ["../css/main.css"]
})

export class PlaygroundComponent implements OnInit {

    gameInProgress : boolean;
    ButtonLabel : string;

    @ViewChild(TilesComponent)
    private tilesComponent: TilesComponent;
    @ViewChild(TimerComponent)
    private timerComponent: TimerComponent;
    @ViewChild(CounterComponent)
    private counterComponent: CounterComponent;

    counter : number = 0;
    countDown : number = 3;

    constructor () {};

    ngOnInit() : void {
        this.gameInProgress = false;
        this.ButtonLabel = "Start";
    }
    
    start() {
        this.tilesComponent.start();
        this.timerComponent.start();
        this.counterComponent.start();
        this.gameInProgress = true;    
    }    

    onTimerExpired() {
        this.gameInProgress = false;
    }

    onTileClicked(tile : Tile) {
        if (tile.active && !this.timerComponent.isTimeExpired()) {
            this.tilesComponent.setAnotherTile(tile);
            this.counterComponent.raiseCounter();
        }
    }

    restart() {
        this.tilesComponent.start();
        this.timerComponent.restart();
        this.counterComponent.start();
    }

}