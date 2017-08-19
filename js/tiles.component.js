"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TilesComponent = (function () {
    function TilesComponent() {
        this.onTileClicked = new core_1.EventEmitter();
        this.numberOfTiles = 9;
    }
    TilesComponent.prototype.ngOnInit = function () {
        this.tiles = this.initTiles(this.numberOfTiles);
    };
    ;
    TilesComponent.prototype.start = function () {
        this.tiles = this.initTiles(this.numberOfTiles);
        this.selectedTilesIds = [];
        this.setRandomTiles();
    };
    TilesComponent.prototype.initTiles = function (nrOfTiles) {
        var tiles = [];
        for (var i = 0; i < nrOfTiles; i++) {
            var tile = { id: i + 1, active: false };
            tiles.push(tile);
        }
        return tiles;
    };
    TilesComponent.prototype.tileClicked = function (tile) {
        this.onTileClicked.emit(tile);
    };
    TilesComponent.prototype.setAnotherTile = function (tile) {
        tile.active = false;
        var nextActiveTile = this.getNotActiveTile();
        nextActiveTile.active = true;
        this.removeFromList(tile.id);
    };
    TilesComponent.prototype.setRandomTiles = function () {
        //random select first 3 tiles
        var tile1 = this.getNotActiveTile();
        tile1.active = true;
        var tile2 = this.getNotActiveTile();
        tile2.active = true;
        var tile3 = this.getNotActiveTile();
        tile3.active = true;
    };
    TilesComponent.prototype.removeFromList = function (index) {
        index = index - 1;
        var value = this.selectedTilesIds.indexOf(index);
        if (value !== -1) {
            this.selectedTilesIds.splice(value, 1);
        }
    };
    TilesComponent.prototype.getNotActiveTile = function () {
        var randomNr = this.getRandomIndex();
        var tile = this.tiles[randomNr];
        return tile;
    };
    TilesComponent.prototype.getRandomIndex = function () {
        var nr = Math.floor(Math.random() * this.numberOfTiles);
        if (this.selectedTilesIds.indexOf(nr) !== -1) {
            return this.getRandomIndex();
        }
        else {
            this.selectedTilesIds.push(nr);
            return nr;
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TilesComponent.prototype, "onTileClicked", void 0);
    TilesComponent = __decorate([
        core_1.Component({
            selector: "tiles",
            templateUrl: "../templates/tiles.component.html",
            styleUrls: ["../css/main.css"]
        }),
        __metadata("design:paramtypes", [])
    ], TilesComponent);
    return TilesComponent;
}());
exports.TilesComponent = TilesComponent;
//# sourceMappingURL=tiles.component.js.map