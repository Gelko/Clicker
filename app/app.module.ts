import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';

import {PlaygroundComponent} from './playground.component';
import {ClickerService} from './clicker.service';
import { TimerComponent }      from './timer.component';
import {FooterComponent} from './footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TimerComponent,
    PlaygroundComponent,
    FooterComponent
  ],
  providers: [ ClickerService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
