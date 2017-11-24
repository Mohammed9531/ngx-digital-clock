import { Component } from '@angular/core';
import { DAYS_SHORT } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public days: string[] = DAYS_SHORT;

  
}
