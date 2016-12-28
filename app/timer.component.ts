import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'timer-component',
  template: 'Time : {{ticks}}',
})
export class TimerComponent implements OnInit {

  ticks = 30;

  ngOnInit() {
    // let timer = TimerObservable.create(1000, 1000);
    // timer.subscribe(t => this.ticks = this.ticks - 1);
  }


}