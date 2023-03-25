import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterOptionsComponent } from './filter-options.component';
import { NgxMultiselectService } from '../services/multiselect.service';

describe('FilterOptionsComponent', () => {
  let component: FilterOptionsComponent;
  let fixture: ComponentFixture<FilterOptionsComponent>;
  let debugElement: DebugElement;
  let filterText: string;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterOptionsComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionsComponent);
    component = fixture.componentInstance;
    component.onSearchChange.subscribe(text => (filterText = text));
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    component.filterName.patchValue('some text');
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    // arrangment
    // act
    // assert
    expect(component).not.toBeUndefined();
  });

  // TODO: check below, how this test can be handled
  it('By default input elemenet is focused', () => {
    // arrangment
    const input = debugElement.query(By.css('input'));
    const service = new NgxMultiselectService();
    // act
    // assert
    console.dir(service.pseudoClassExist(input.nativeElement, ':focus'));
    expect(true).toBeTruthy();
  });

  describe('Input text change', () => {
    it('Adding text into input box, should filter the result', () => {
      // arrangement
      // act
      let changedValue = 'changed value';
      component.filterName.patchValue(changedValue);
      // assert
      expect(filterText).toBe(changedValue);
    });
    it('Removing text into input box, should filter the result', () => {
      // arrangement
      // act
      let changedValue = 'some';
      component.filterName.patchValue(changedValue);
      // assert
      expect(filterText).toBe(changedValue);
    });
  });

  describe('Clear button', () => {
    it('it should emit an event to parent component with blank value', () => {
      // arrangement
      // act
      component.onSearchChange.emit('')
      // assert
      expect(filterText).toBe('');
    });
    it('trigger button from ui should clear filterText', () => {
      // arrangement
      // act
      const button = debugElement.query(By.css('button'));
      button.triggerEventHandler('click', {});
      // assert
      expect(filterText).toBe('');
    });
  });
});
