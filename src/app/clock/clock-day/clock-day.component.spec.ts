import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDayComponent } from './clock-day.component';

describe('ClockDayComponent', () => {
  let component: ClockDayComponent;
  let fixture: ComponentFixture<ClockDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
