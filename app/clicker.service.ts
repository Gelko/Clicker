import {Injectable} from "@angular/core";

@Injectable()
export class ClickerService {
    
    counter : number = 0;

    raiseCounter() : void {
        this.counter = this.counter + 1;
        console.log("counter: ", this.counter);
    }

}