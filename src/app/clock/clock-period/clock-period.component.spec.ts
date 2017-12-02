import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockPeriodComponent } from './clock-period.component';

describe('ClockPeriodComponent', () => {
  let component: ClockPeriodComponent;
  let fixture: ComponentFixture<ClockPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
