import { Subscription, timer } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from './../shared/services/util/util.service';
import { DAYS_SHORT, CLASS_LIST } from './../shared/constants/calendar.constants';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  /**
   * @public
   * @type: string[]
   */
  public days: string[] = DAYS_SHORT;
  /**
   * @public
   * @type: string[]
   */
  public timeFormatList: string[] = [];
  /**
   * @public
   * @type: Subscription[]
   */
  public subscriptions: Subscription[] = [];

  /**
   * @constructor
   * @param: {util<UtilService>}
   */
  constructor(private util: UtilService) {
    this._init();
  }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnInit(): void {
    this.subscriptions.push(
      timer(0, 1000)
        .subscribe((t) => {
          this._init();
        })
    );
  }

  /**
   * @private
   * @return: void
   * @description: a helper method that initializes
   * the digital clock.
   */
  private _init(): void {
    const now: Date = new Date();
    const d: string[] = now.toDateString().split(' ');
    const t: string[] = now.toLocaleTimeString().split(' ');

    if (Array.isArray(t) && t[0]) {
      let digits: any = t[0]
        .split(':')
        .map(v => this.util.to2Digit(v))
        .join(':')
        .split('');

      this.timeFormatList = [];
      for (const i of digits) {
        this.timeFormatList.push(CLASS_LIST[i]);
      }
    }
  }

  /**
   * @public
   * @type: method<life cycle hook>
   * @return: void
   * @description: N/A
   */
  public ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      if (!!subscription) {
        subscription.unsubscribe();
      }
    }
  }
}

