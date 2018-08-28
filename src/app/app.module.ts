// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';

// Services
import { UtilService } from './shared/services/util/util.service';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [
    AppComponent
    , DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
