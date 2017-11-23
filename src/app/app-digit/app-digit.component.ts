import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './app-digit.component.html',
  styleUrls: ['./app-digit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppDigitComponent implements OnInit {

  @Input()
  public digit: string;

  constructor() { }

  ngOnInit() {}
}
