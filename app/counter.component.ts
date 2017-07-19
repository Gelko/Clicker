import {Component} from "@angular/core";

@Component({
    selector: "counter",
    template: "Hits: {{counter}}"
})

export class CounterComponent {
    
    private counter : number = 0;

    raiseCounter() : number {
        this.counter = this.counter + 1;
        return this.counter;
    }

    start() {
        this.counter = 0;
    }

}