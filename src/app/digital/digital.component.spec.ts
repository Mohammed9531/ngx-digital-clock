import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalComponent } from './digital.component';

describe('DigitalComponent', () => {
  let component: DigitalComponent;
  let fixture: ComponentFixture<DigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
