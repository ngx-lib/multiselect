import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { FilterOptionsComponent } from './filter-options.component';

describe('FilterOptionsComponent', () => {
  let component: FilterOptionsComponent;
  let fixture: ComponentFixture<FilterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOptionsComponent ],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    expect(true).toBeTruthy();
  });

  it('By default input elemenet is focused', () => {
    expect(true).toBeTruthy();
  });

  describe('Input text change', () => {
    it('Adding text into input box, should filter the result', () => {
      expect(true).toBeTruthy();
    });
    it('Removing text into input box, should filter the result', () => {
      expect(true).toBeTruthy();
    });
    it('for empty input field, it should show all optoin', () => {
      expect(true).toBeTruthy();
    });
    it('initially all group options selected, removal any of them should unmark group option', () => {
      expect(true).toBeTruthy();
    });
  })

  describe('Clear button', () => {
    it('it should emit an event to parent component', () => {
      expect(true).toBeTruthy();
    });
    it('it should clear all selected options', () => {
      expect(true).toBeTruthy();
    });
  })
  
});
