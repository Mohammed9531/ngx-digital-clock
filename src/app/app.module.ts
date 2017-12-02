import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppDigitComponent } from './app-digit/app-digit.component';
import { AppWatchComponent } from './app-watch/app-watch.component';
import { AppDayComponent } from './app-day/app-day.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDigitComponent,
    AppWatchComponent,
    AppDayComponent
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
