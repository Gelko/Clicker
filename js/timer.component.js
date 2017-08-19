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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var TimerComponent = (function () {
    function TimerComponent() {
        this.onTimerExpired = new core_1.EventEmitter();
        this.initRemainingTime = 30;
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.timer$ = Observable_1.Observable.interval(1000).take(this.initRemainingTime);
    };
    TimerComponent.prototype.start = function () {
        var _this = this;
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
        this.initRemainingTime = 30;
        this.timer$ = Observable_1.Observable.interval(1000).take(this.initRemainingTime);
        this.subscription$ = this.timer$.finally(function () { return _this.timerFinished(); }).subscribe(function (x) { return _this.initRemainingTime--; });
    };
    TimerComponent.prototype.timerFinished = function () {
        if (this.initRemainingTime == 0) {
            this.onTimerExpired.emit();
        }
    };
    TimerComponent.prototype.isTimeExpired = function () {
        return this.initRemainingTime == 0;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "onTimerExpired", void 0);
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'timer-component',
            template: 'Time : {{initRemainingTime}}',
        })
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map