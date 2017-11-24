import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWatchComponent } from './app-watch.component';

describe('AppWatchComponent', () => {
  let component: AppWatchComponent;
  let fixture: ComponentFixture<AppWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
