import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component({
  selector: 'timer-component',
  template: 'Time : {{initRemainingTime}}',
})

export class TimerComponent implements OnInit {
      
  @Output() onTimerExpired = new EventEmitter();

  private initRemainingTime = 30;
  private subscription$;
  private timer$;

  ngOnInit() {
      this.timer$ = Observable.interval(1000).take(this.initRemainingTime);
  }

  start() : void {
    this.timer$ = Observable.interval(1000).take(this.initRemainingTime);
    this.subscription$ = this.timer$.finally(() => this.timerFinished()).subscribe(x => this.initRemainingTime--);   
  }

  restart() {
    this.subscription$.unsubscribe();
    this.initRemainingTime = 30;
    this.subscription$ = this.timer$.subscribe(x => this.initRemainingTime--);   
  }

  timerFinished() {
    this.onTimerExpired.emit();
  }

  isTimeExpired() : boolean {
    return this.initRemainingTime == 0;
  }

}