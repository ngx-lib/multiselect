import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectGroupingComponent } from './multiple-select-grouping.component';

describe('MultipleSelectGroupingComponent', () => {
  let component: MultipleSelectGroupingComponent;
  let fixture: ComponentFixture<MultipleSelectGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleSelectGroupingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
