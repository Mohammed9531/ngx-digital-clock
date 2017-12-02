import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DigitComponent implements OnInit, OnDestroy {

  @Input()
  public isDot: boolean;

  @Input()
  public digitName: string;

  public displayDots: boolean;

  public subscriptions: Subscription[] = [];

  public borders: string[] = 'd1 d2 d3 d4 d5 d6 d7'.split(' ');

  constructor() {}

  ngOnInit() {
    if (!!this.isDot) {
      this.triggerToggling();
    }
  }

  public triggerToggling(): void {
    this.displayDots = false;

    this.subscriptions.push(
      Observable.timer(0, 1000)
      .subscribe((t) => {
        this.displayDots = !this.displayDots;
      })
    );
  }

  public ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      if (!!subscription) {
        subscription.unsubscribe();
      }
    }
  }
}
