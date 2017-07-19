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
var core_1 = require("@angular/core");
var TilesService = (function () {
    function TilesService() {
    }
    TilesService.prototype.initTiles = function (nrOfTiles) {
        var tiles = [];
        for (var i = 0; i < nrOfTiles; i++) {
            var tile = { id: i + 1, active: false };
            tiles.push(tile);
        }
        return tiles;
    };
    TilesService.prototype.tileClicked = function (tile) {
        tile.active = false;
        var nextActiveTile = this.getNotActiveTile();
        nextActiveTile.active = true;
        this.removeFromList(tile.id);
    };
    TilesService.prototype.startPlay = function () {
        //random select first 3 tiles
        var tile1 = this.getNotActiveTile();
        tile1.active = true;
        var tile2 = this.getNotActiveTile();
        tile2.active = true;
        var tile3 = this.getNotActiveTile();
        tile3.active = true;
    };
    TilesService.prototype.removeFromList = function (index) {
        index = index - 1;
        var value = this.selectedTilesIds.indexOf(index);
        if (value !== -1) {
            this.selectedTilesIds.splice(value, 1);
        }
    };
    TilesService.prototype.getNotActiveTile = function () {
        var randomNr = this.getRandomIndex();
        var tile = this.tiles[randomNr];
        return tile;
    };
    TilesService.prototype.getRandomIndex = function () {
        var nr = Math.floor(Math.random() * 9);
        if (this.selectedTilesIds.indexOf(nr) !== -1) {
            return this.getRandomIndex();
        }
        else {
            this.selectedTilesIds.push(nr);
            return nr;
        }
    };
    TilesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TilesService);
    return TilesService;
}());
exports.TilesService = TilesService;
//# sourceMappingURL=tiles.service.js.map