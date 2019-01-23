import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoContainerComponent } from './demo-container.component';

describe('DemoContainerComponent', () => {
  let component: DemoContainerComponent;
  let fixture: ComponentFixture<DemoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
