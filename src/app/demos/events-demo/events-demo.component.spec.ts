import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDemoComponent } from './events-demo.component';

describe('EventsDemoComponent', () => {
  let component: EventsDemoComponent;
  let fixture: ComponentFixture<EventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
