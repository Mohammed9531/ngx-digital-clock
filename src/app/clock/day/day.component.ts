import { Component, OnInit, Input } from '@angular/core';
import { DAYS_SHORT, DAYS_LONG } from './../../app.constants';

@Component({
  selector: 'app-day',
  templateUrl: './app-day.component.html',
  styleUrls: ['./app-day.component.scss']
})
export class AppDayComponent implements OnInit {

  @Input()
  public today: string;
  public activeDay: string = null;
  private weekdays: string[] = DAYS_SHORT;

  constructor() { }

  ngOnInit() {
    if (!!this.today) {
      this.activeDay = this.weekdays[(+this.today) - 1];
    }
  }
}
