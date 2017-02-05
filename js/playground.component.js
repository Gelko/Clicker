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
var clicker_service_1 = require("./clicker.service");
var tilesData_1 = require("./tilesData");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var PlaygroundComponent = (function () {
    function PlaygroundComponent(clickerService) {
        this.clickerService = clickerService;
        this.counter = 0;
        this.countDown = 3;
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
        this.tiles = tilesData_1.TILES;
        this.selectedTilesIds = [];
    };
    PlaygroundComponent.prototype.tileClicked = function (tile) {
        if (this.ticks > 0) {
            if (tile.active) {
                tile.active = false;
                this.counter = this.clickerService.raiseCounter();
                var nextActiveTile = this.getNotActiveTile();
                nextActiveTile.active = true;
                this.removeFromList(tile.id);
            }
        }
    };
    PlaygroundComponent.prototype.removeFromList = function (index) {
        index = index - 1;
        var value = this.selectedTilesIds.indexOf(index);
        if (value !== -1) {
            this.selectedTilesIds.splice(value, 1);
        }
    };
    PlaygroundComponent.prototype.raise = function () {
    };
    PlaygroundComponent.prototype.start = function () {
        this.tiles = tilesData_1.TILES;
        this.selectedTilesIds = [];
        this.ticks = 30;
        this.counter = 0;
        this.countDown = 3;
        //start countdown
        var startObs$ = new Observable_1.Observable(function (observer) {
            setTimeout(function () { observer.next(3); }, 1000);
            setTimeout(function () { observer.next(2); }, 2000);
            setTimeout(function () { observer.next(1); }, 3000);
            setTimeout(function () { observer.complete(); }, 10000);
        });
        var subs$ = startObs$.subscribe(function (x) { return console.log(x); }, function (err) { return console.log(err); }, function () { return console.log('done'); });
        // let timer$ = Observable.interval(1000).take(this.ticks);
        // let subs$ = timer$.subscribe(x => this.ticks--);        
    };
    PlaygroundComponent.prototype.startPlay = function () {
        //random select first 3 tiles
        var tile1 = this.getNotActiveTile();
        tile1.active = true;
        var tile2 = this.getNotActiveTile();
        tile2.active = true;
        var tile3 = this.getNotActiveTile();
        tile3.active = true;
        //
    };
    PlaygroundComponent.prototype.getNotActiveTile = function () {
        var randomNr = this.getRandomIndex();
        var tile = this.tiles[randomNr];
        return tile;
    };
    PlaygroundComponent.prototype.getRandomIndex = function () {
        var nr = Math.floor(Math.random() * 9);
        if (this.selectedTilesIds.indexOf(nr) !== -1) {
            return this.getRandomIndex();
        }
        else {
            this.selectedTilesIds.push(nr);
            return nr;
        }
    };
    PlaygroundComponent = __decorate([
        core_1.Component({
            selector: "playground",
            templateUrl: "../templates/playground.component.html",
            styleUrls: ["../css/main.css"]
        }), 
        __metadata('design:paramtypes', [clicker_service_1.ClickerService])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());
exports.PlaygroundComponent = PlaygroundComponent;
//# sourceMappingURL=playground.component.js.map