import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectWithObservableComponent } from './multiple-select-with-observable.component';

describe('MultipleSelectWithObservableComponent', () => {
  let component: MultipleSelectWithObservableComponent;
  let fixture: ComponentFixture<MultipleSelectWithObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSelectWithObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectWithObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
