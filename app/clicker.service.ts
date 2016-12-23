import {Injectable} from "@angular/core";

@Injectable()
export class ClickerService {
    
    counter : number = 0;

    raiseCounter() : number {
        this.counter = this.counter + 1;
        return this.counter;
    }

}