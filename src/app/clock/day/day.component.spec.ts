import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDayComponent } from './app-day.component';

describe('AppDayComponent', () => {
  let component: AppDayComponent;
  let fixture: ComponentFixture<AppDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
