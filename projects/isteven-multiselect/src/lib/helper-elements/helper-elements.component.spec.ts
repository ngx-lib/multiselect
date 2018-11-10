import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperElementsComponent } from './helper-elements.component';

describe('HelperElementsComponent', () => {
  let component: HelperElementsComponent;
  let fixture: ComponentFixture<HelperElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
