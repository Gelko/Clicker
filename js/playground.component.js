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
var tiles_component_1 = require("./tiles.component");
var PlaygroundComponent = (function () {
    function PlaygroundComponent() {
        this.counter = 0;
        this.countDown = 3;
    }
    ;
    PlaygroundComponent.prototype.ngOnInit = function () {
    };
    PlaygroundComponent.prototype.start = function () {
        this.tilesComponent.start();
    };
    PlaygroundComponent.prototype.restart = function () {
    };
    __decorate([
        core_1.ViewChild(tiles_component_1.TilesComponent), 
        __metadata('design:type', tiles_component_1.TilesComponent)
    ], PlaygroundComponent.prototype, "tilesComponent", void 0);
    PlaygroundComponent = __decorate([
        core_1.Component({
            selector: "playground",
            templateUrl: "../templates/playground.component.html",
            styleUrls: ["../css/main.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());
exports.PlaygroundComponent = PlaygroundComponent;
//# sourceMappingURL=playground.component.js.map