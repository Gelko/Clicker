import {Component, OnInit, OnDestroy, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component({
  selector: 'timer-component',
  template: 'Time : {{initRemainingTime}}',
})

@Injectable()
export class TimerComponent implements OnInit {
      
  private initRemainingTime = 30;
  currentRemainingTime : number;
  private subscription$;
  private timer$;

  ngOnInit() {
      this.timer$ = Observable.interval(1000).take(this.initRemainingTime);
      //let timer$ = Observable.interval(1000).take(this.initRemainingTime);
      //this.subscription$ = this.timer$.subscribe(x => this.initRemainingTime--);   
  }

  start() : void {
    //let timer$ = Observable.interval(1000).take(this.initRemainingTime);
    //this.currentRemainingTime = this.initRemainingTime;

    this.timer$ = Observable.interval(1000).take(this.initRemainingTime);
    this.subscription$ = this.timer$.subscribe(x => this.initRemainingTime--);   
  }

  restart() {
    // this.subscription$.unsubscribe();
    // this.currentRemainingTime = this.initRemainingTime;
    // this.subscription$ = this.timer$.subscribe(x => this.currentRemainingTime--);   
  }

  getRemainingTime() : number {
    return this.currentRemainingTime;
  }

}