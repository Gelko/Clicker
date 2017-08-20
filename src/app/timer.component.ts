import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component({
  selector: 'timer-component',
  template: 'Time : {{initRemainingTime}}',
})

export class TimerComponent implements OnInit {
      
  @Output() onTimerExpired = new EventEmitter();

  public initRemainingTime = 30;

  private subscription$;
  private timer$;

  ngOnInit() {
      this.timer$ = Observable.interval(1000).take(this.initRemainingTime);
  }

  start() : void {
    
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }

    this.initRemainingTime = 30;
    this.timer$ = Observable.interval(1000).take(this.initRemainingTime);
    this.subscription$ = this.timer$.finally(() => this.timerFinished()).subscribe(x => this.initRemainingTime--);   
  }

  timerFinished() {
    if (this.initRemainingTime == 0)
    {
        this.onTimerExpired.emit();
    }    
  }

  isTimeExpired() : boolean {
    return this.initRemainingTime == 0;
  }

}