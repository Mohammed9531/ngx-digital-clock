import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDateComponent } from './clock-date.component';

describe('ClockDateComponent', () => {
  let component: ClockDateComponent;
  let fixture: ComponentFixture<ClockDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
