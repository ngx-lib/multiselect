import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectWithPropertyMapComponent } from './single-select-with-property-map.component';

describe('SingleSelectComponent', () => {
  let component: SingleSelectWithPropertyMapComponent;
  let fixture: ComponentFixture<SingleSelectWithPropertyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectWithPropertyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectWithPropertyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
