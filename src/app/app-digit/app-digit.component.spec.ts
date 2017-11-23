import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDigitComponent } from './app-digit.component';

describe('AppDigitComponent', () => {
  let component: AppDigitComponent;
  let fixture: ComponentFixture<AppDigitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDigitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
