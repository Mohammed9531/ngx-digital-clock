import { UtilService } from './shared/services/util/util.service';
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
import { DigitalClockComponent } from './digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ClockDayComponent,
    ClockDateComponent,
    ClockDigitComponent,
    ClockPeriodComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
