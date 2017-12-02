import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitComponent } from './digit.component';

describe('DigitComponent', () => {
  let component: DigitComponent;
  let fixture: ComponentFixture<DigitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
