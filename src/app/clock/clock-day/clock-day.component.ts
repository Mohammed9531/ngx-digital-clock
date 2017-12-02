import { Component, OnInit, Input } from '@angular/core';
import { DAYS_SHORT, DAYS_LONG } from './../../app.constants';

@Component({
  selector: 'clock-day',
  templateUrl: './clock-day.component.html',
  styleUrls: ['./clock-day.component.scss']
})
export class ClockDayComponent implements OnInit {

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
