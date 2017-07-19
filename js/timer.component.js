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
var core_1 = require('@angular/core');
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var TimerComponent = (function () {
    function TimerComponent() {
        this.initRemainingTime = 30;
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.timer$ = Observable_1.Observable.interval(1000).take(this.initRemainingTime);
        //let timer$ = Observable.interval(1000).take(this.initRemainingTime);
        //this.subscription$ = this.timer$.subscribe(x => this.initRemainingTime--);   
    };
    TimerComponent.prototype.start = function () {
        //let timer$ = Observable.interval(1000).take(this.initRemainingTime);
        //this.currentRemainingTime = this.initRemainingTime;
        var _this = this;
        this.timer$ = Observable_1.Observable.interval(1000).take(this.initRemainingTime);
        this.subscription$ = this.timer$.subscribe(function (x) { return _this.initRemainingTime--; });
    };
    TimerComponent.prototype.restart = function () {
        // this.subscription$.unsubscribe();
        // this.currentRemainingTime = this.initRemainingTime;
        // this.subscription$ = this.timer$.subscribe(x => this.currentRemainingTime--);   
    };
    TimerComponent.prototype.getRemainingTime = function () {
        return this.currentRemainingTime;
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'timer-component',
            template: 'Time : {{initRemainingTime}}',
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map