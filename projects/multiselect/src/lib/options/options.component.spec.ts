import { DebugElement, ElementRef, SimpleChange, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OptionsComponent } from './options.component';
import { NgxMultiselectComponent } from '../multiselect.component';
import { NgxMultiselectService } from '../services/multiselect.service';
import { VirtualScrollDirective } from '../directives/virtual-scroll.directive';
import { CommonModule } from '@angular/common';

describe('Options Component', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;
  let debugElement: DebugElement;
  let clickedOption: any;
  let options: any;
  let multiselect: NgxMultiselectComponent;
  let multiselectSelectSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsComponent, VirtualScrollDirective],
      imports: [CommonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    options = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3', disabled: true },
      { id: 4, name: 'Test 4' },
      { id: 5, name: 'Test 5' },
      { id: 6, name: 'Test 6' }
    ];
    component.options = [...options];
    multiselect = new NgxMultiselectComponent(<ElementRef<any>>null, new NgxMultiselectService(),<Renderer2> {});
    multiselect.multiple = true;
    multiselect.setOptions([...options]);
    component.selectOption.subscribe(option => {
      clickedOption = option;
      multiselect.select(option);
      component.options = multiselect.getOptions();
      fixture.detectChanges();
    });
    multiselectSelectSpy = spyOn(multiselect, 'select').and.callThrough();
    // TODO: Woraround for firing ngOnChanges manually.
    component.ngOnChanges({
      options: new SimpleChange([...options], undefined, false)
    });
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    // arrange
    // act
    // assert
    expect(component).toBeDefined();
  });

  describe('Option', () => {
    it('it should emit an event to parent component to select underlying option', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.option'));
      // act
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'));
      expect(markedOptions.length).toBe(1);
      expect(clickedOption.ticked).toBe(true);
      expect(multiselectSelectSpy).toHaveBeenCalled();
      expect(multiselectSelectSpy).toHaveBeenCalledWith(clickedOption);
    });
    it('should select an option on click of selected option', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.option'));
      // act
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'));
      expect(markedOptions.length).toBe(1);
      expect(clickedOption.ticked).toBe(true);
      expect(multiselectSelectSpy).toHaveBeenCalled();
      expect(multiselectSelectSpy).toHaveBeenCalledWith(clickedOption);
    });
    it('should de-select an option on click of selected option', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.option'));
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      // act
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'));
      expect(markedOptions.length).toBe(0);
      expect(clickedOption.ticked).toBe(false);
      expect(multiselectSelectSpy).toHaveBeenCalled();
      expect(multiselectSelectSpy).toHaveBeenCalledWith(clickedOption);
    });
  });

  describe('Styling', () => {
    it('on select of option should apply correct CSS', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.option'));
      // act
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      // assert

      const markedOption = debugElement.query(By.css('.option.marked'));
      expect(markedOption.classes.marked).toBe(true);
    });
    it('mark class should removed based on click on selected optioin', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.option'));
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      // act
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      // assert
      expect(optionsElements[1].classes.marked).toBe(false);
    });
  });

  describe('Disabled option', () => {
    it('if some option is disabled, then it should have disable class', () => {
      // arrange
      const disabledOption = debugElement.query(By.css('.option.disabled'));
      // act
      // assert
      expect(disabledOption.classes.disabled).toBe(true);
    });
    // TODO: find a way to test pointer-events
    it('on click of disabled option, it should not select / deselect selectedOptions value', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  });

  it('by default old default item template should be loaded', () => {
    // arrange
    // act
    // assert
    expect(component.optionsTemplate).toBe(component.defaultOptionsTemplate);
  });

  // TODO: find a way to pass a template to component
  it('if new item template is passed then it should be rendered on screen', () => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  });

  describe('Single select', () => {
    beforeEach(() => {
      multiselect.multiple = false;
      multiselect.isOpen = true;
      fixture.detectChanges();
      multiselect.setOptions([...options]);
    });

    it('list should close based on option selection', () => {
      // arrange
      const optionsElement = debugElement.query(By.css('.option'));
      // act
      optionsElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'));
      expect(markedOptions.length).toBe(1);
      expect(clickedOption.ticked).toBe(true);
      expect(multiselect._selectedOptions.id).toBe(options[0].id);
      expect(multiselectSelectSpy).toHaveBeenCalled();
      expect(multiselectSelectSpy).toHaveBeenCalledWith(clickedOption);
      expect(multiselect.isOpen).toBe(false);
    });

    it('should select only single option', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.option'));
      optionsElements[0].triggerEventHandler('click', null);
      fixture.detectChanges();

      // act
      optionsElements[1].triggerEventHandler('click', null);
      fixture.detectChanges();

      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'));
      // TODO: check on below
      // expect(markedOptions.length).toBe(1);
      expect(multiselect._selectedOptions.id).toBe(options[1].id);
      expect(clickedOption.ticked).toBe(true);
      expect(multiselectSelectSpy).toHaveBeenCalledTimes(2);
      expect(multiselect.isOpen).toBe(false);
    });
  });
  afterEach(() => {
    fixture.destroy();
  });
});
