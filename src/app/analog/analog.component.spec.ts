import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogComponent } from './analog.component';

describe('AnalogComponent', () => {
  let component: AnalogComponent;
  let fixture: ComponentFixture<AnalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
