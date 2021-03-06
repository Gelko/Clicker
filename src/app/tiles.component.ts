import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {Tile} from "./tile";

@Component ({
    selector: "tiles",
    templateUrl: "../templates/tiles.component.html",
    styleUrls: ["../css/main.css"]
})

export class TilesComponent implements OnInit {
    
    @Output() onTileClicked = new EventEmitter<Tile>();

    numberOfTiles : number = 9;
    tiles: Tile[];
    selectedTilesIds: number[];

    ngOnInit() : void {
        this.tiles = this.initTiles(this.numberOfTiles);
    }

    constructor () {};

    start() {        
        this.tiles = this.initTiles(this.numberOfTiles)
        this.selectedTilesIds = [];
        this.setRandomTiles();
    }

    initTiles(nrOfTiles : number) : Tile[] {

        let tiles : Tile[] = [];

        for (let i = 0; i < nrOfTiles; i++) {
            let tile : Tile = {id: i + 1, active: false}
            tiles.push(tile);
        }

        return tiles;
    }

    tileClicked(tile : Tile) {        
        this.onTileClicked.emit(tile);
    }

    setAnotherTile(tile: Tile) {
        tile.active = false;
        var nextActiveTile = this.getNotActiveTile();
        nextActiveTile.active = true;
        this.removeFromList(tile.id);
    }

    private setRandomTiles()
    {
        //random select first 3 tiles
        var tile1 = this.getNotActiveTile();
        tile1.active = true;

        var tile2 = this.getNotActiveTile();
        tile2.active = true;

        var tile3 = this.getNotActiveTile();
        tile3.active = true;
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

        var nr = Math.floor(Math.random() * this.numberOfTiles); 

        if (this.selectedTilesIds.indexOf(nr) !== -1) {
            return this.getRandomIndex();
        }
        else{
            this.selectedTilesIds.push(nr);
            return nr;
        }
    }

}