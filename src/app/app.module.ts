import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { AnalogComponent } from './analog/analog.component';
import { AppDayComponent } from './app-day/app-day.component';
import { DigitalComponent } from './digital/digital.component';
import { AppDigitComponent } from './app-digit/app-digit.component';
import { AppWatchComponent } from './app-watch/app-watch.component';


@NgModule({
  declarations: [
    AppComponent,
    AppDigitComponent,
    AppWatchComponent,
    AppDayComponent,
    DigitalComponent,
    AnalogComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
