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
var PlaygroundComponent = (function () {
    function PlaygroundComponent(clickerService) {
        this.clickerService = clickerService;
        this.counter = 0;
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
        this.tiles = tilesData_1.TILES;
    };
    PlaygroundComponent.prototype.tileClicked = function () {
        this.counter = this.clickerService.raiseCounter();
    };
    PlaygroundComponent = __decorate([
        core_1.Component({
            selector: "playground",
            templateUrl: "../templates/playground.component.html",
            styleUrls: ["../styles/playground.component.css", "../styles/tile.css"]
        }), 
        __metadata('design:paramtypes', [clicker_service_1.ClickerService])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());
exports.PlaygroundComponent = PlaygroundComponent;
//# sourceMappingURL=playground.component.js.map