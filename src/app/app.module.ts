import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClockDayComponent } from './clock/clock-day/clock-day.component';
import { ClockDateComponent } from './clock/clock-date/clock-date.component';
import { ClockDigitComponent } from './clock/clock-digit/clock-digit.component';
import { ClockPeriodComponent } from './clock/clock-period/clock-period.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ClockDayComponent,
    ClockDateComponent,
    ClockDigitComponent,
    ClockPeriodComponent
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
