import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { AnalogComponent } from './analog/analog.component';
import { DigitalComponent } from './digital/digital.component';
import { ClockDayComponent } from './clock/clock-day/clock-day.component';
import { ClockDateComponent } from './clock/clock-date/clock-date.component';
import { ClockDigitComponent } from './clock/clock-digit/clock-digit.component';
import { ClockPeriodComponent } from './clock/clock-period/clock-period.component';

import { ClockServiceService } from './shared/clock-service/clock.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    AnalogComponent,
    DigitalComponent,
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
  providers: [ClockServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
