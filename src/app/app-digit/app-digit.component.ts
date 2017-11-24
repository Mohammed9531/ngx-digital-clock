import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './app-digit.component.html',
  styleUrls: ['./app-digit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppDigitComponent implements OnInit {

  @Input()
  public isDot: boolean;

  @Input()
  public digit: string;

  public displayDots: boolean;

  public borders: string[] = 'd1 d2 d3 d4 d5 d6 d7'.split(' ');

  constructor() {}

  ngOnInit() {
    if (!!this.isDot) {
      this.triggerToggling();
    }
  }

  public triggerToggling(): void {
    this.displayDots = false;

    setInterval(() => {
      this.displayDots = !this.displayDots;
    }, 1000)
  }

}
