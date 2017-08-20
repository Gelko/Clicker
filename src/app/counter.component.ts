import {Component, OnInit} from "@angular/core";

@Component({
    selector: "counter-component",
    template: "Hits: {{counter}}"
})

export class CounterComponent implements OnInit {
    
    public counter : number = 0;

    ngOnInit() {
    }

    raiseCounter() : number {
        this.counter = this.counter + 1;
        return this.counter;
    }

    start() {
        this.counter = 0;
    }

    getCounter() : number {
        return this.counter;
    }

}