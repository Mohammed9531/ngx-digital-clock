import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDigitComponent } from './clock-digit.component';

describe('ClockDigitComponent', () => {
  let component: ClockDigitComponent;
  let fixture: ComponentFixture<ClockDigitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockDigitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
