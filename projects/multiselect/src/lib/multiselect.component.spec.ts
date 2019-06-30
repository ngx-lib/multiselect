import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { NgxMultiselectComponent } from './multiselect.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { GroupedOptionsComponent } from './grouped-options/grouped-options.component';
import { DisplaySelectedValuePipe } from './pipes/display-selected-value.pipe';
import { HelperElementsComponent } from './helper-elements/helper-elements.component';
import { OptionsComponent } from './options/options.component';
import { DebugElement, Component, ChangeDetectionStrategy } from '@angular/core';
import { VirtualScrollDirective } from './directives/virtual-scroll.directive';

describe('MultiselectComponent', () => {
  let component: NgxMultiselectComponent;
  let fixture: ComponentFixture<NgxMultiselectComponent>;
  let debugElement: DebugElement;
  let options;
  let groupOptions;

  function beforeEachSetup() {
    beforeEach(async(() => {
      TestBed.overrideComponent(NgxMultiselectComponent, {
        set: new Component({
          selector: 'ngx-multiselect',
          templateUrl: './multiselect.component.html',
          changeDetection: ChangeDetectionStrategy.Default
        })
      });
      TestBed.configureTestingModule({
        declarations: [
          NgxMultiselectComponent,
          FilterOptionsComponent,
          GroupedOptionsComponent,
          DisplaySelectedValuePipe,
          HelperElementsComponent,
          OptionsComponent,
          VirtualScrollDirective
        ],
        imports: [FormsModule, ReactiveFormsModule, BrowserModule]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NgxMultiselectComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      options = [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' },
        { id: 4, name: 'Test 4' },
        { id: 5, name: 'Test 5' },
        { id: 6, name: 'Test 6', disabled: true }
      ];
      groupOptions = [
        { id: 1, name: 'Test 1', category: 'Cat 1' },
        { id: 2, name: 'Test 2', category: 'Cat 1' },
        { id: 3, name: 'Test 3', category: 'Cat 2' },
        { id: 4, name: 'Test 4', category: 'Cat 2' },
        { id: 5, name: 'Test 5', category: 'Cat 3' },
        { id: 6, name: 'Test 6', category: 'Cat 3', disabled: true }
      ];
      component.options = [...options];
      fixture.detectChanges();
    });
  }

  function executeTests() {
    // isOpen flag
    describe('IsOpen flag', () => {
      it('By default the dropdown should be in closed state', () => {
        // assert
        expect(component.isOpen).toBe(false);
      });

      // This test will check if on click of dropdown, isOpen property will be toggled or not and the test below will test
      // on toggle of isOpen, dropdown is closed or not
      it('On click of dropdown button, isOpen property of component should be toggled ', () => {
        // arrange
        const dropdownBtn = debugElement.query(By.css('.dropdown-button'));
        // act
        dropdownBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        // assert
        expect(component.isOpen).toBe(true);
        // act
        dropdownBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        // assert
        expect(component.isOpen).toBe(false);
      });

      it('when isOpen is toggled, helper element, filter options and options should also be removed or added', () => {
        // component.isOpen = false;
        // component.isOpen will always be false by default checked in first test
        let helperEleComponent = debugElement.query(By.css('ms-helper-elements'));
        let filterOptionsComponent = debugElement.query(By.css('ms-filter-options'));
        let optionsComponent = debugElement.query(By.css('ms-options'));
        expect(helperEleComponent).toBeFalsy();
        expect(filterOptionsComponent).toBeFalsy();
        expect(optionsComponent).toBeFalsy();
        component.isOpen = true;
        fixture.detectChanges();
        helperEleComponent = debugElement.query(By.css('ms-helper-elements')).componentInstance;
        filterOptionsComponent = debugElement.query(By.css('ms-filter-options')).componentInstance;
        optionsComponent = debugElement.query(By.css('ms-options')).componentInstance;
        expect(helperEleComponent).toBeTruthy();
        expect(filterOptionsComponent).toBeTruthy();
        expect(optionsComponent).toBeTruthy();
      });

      // TODO: find a way to click outside the component and complete the test case
      it('On click outside drodown, it should close dropdown', () => {
        // arrange
        // act
        // assert
      });
    });

    // Template
    describe('Templating', () => {
      it('should render default template in ms-options component if none of the template is passed', () => {
        // arrange
        component.optionsTemplate = null;
        component.isOpen = true;
        fixture.detectChanges();
        const optionsComponentDebugEle = debugElement.query(By.css('ms-options'));
        const optionsComponent = optionsComponentDebugEle.componentInstance;
        // assert
        expect(optionsComponent.defaultOptionsTemplate).toBeTruthy();
      });

      // TODO: find a way to pass a template to component and same test should be completed for options component also
      it('should render newer template in ms-options component if the template is passed', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });

      it('for groupedOptions, should render default template in ms-grouped-options component if none of the template is passed', () => {
        // arrange
        component.groupedProperty = 'category';
        component.optionsTemplate = null;
        component.isOpen = true;
        fixture.detectChanges();
        const groupOptionsComponentDebugElement = debugElement.query(By.css('ms-grouped-options'));
        const groupOptionsComponent = groupOptionsComponentDebugElement.componentInstance;
        // assert
        expect(groupOptionsComponent.defaultOptionsTemplate).toBeTruthy();
      });

      // TODO: find a way to pass a template to grouped-options component and same test should be completed for options component also
      it('for groupedOptions, should render newer template in ms-grouped-options component if the template is passed', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });

    // on clear
    describe('on clear button', () => {
      it('should remove selected value from single select', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should remove selected values from multiple select', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });

    describe('Single Select', () => {
      it('When it has no value, should show "None Selected"', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should show "name" property of an selected value', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should show "name" property of an selected value', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should close the dropdwon affter selection on any option', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('on selecting of option, it should update options collection', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });
    describe('Multiple Select', () => {
      it('When it has no value selected, should show "None Selected"', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should show "name" property of an selected value', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('multiple selected value shown as comma separated', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('display selected value limit should not exceed more than maxLabelLimit', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should close the dropdwon affter selection on any option', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('on selecting of option, it should update options collection', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('on selecting of option, it should update options collection', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });

    describe('Callback', () => {
      it('When it has no value selected, should show "None Selected"', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should show "name" property of an selected value', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('multiple selected value shown as comma separated', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('display selected value limit should not exceed more than maxLabelLimit', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should close the dropdwon after selection on any option', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('on selecting of option, it should update options collection', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('on selecting of option, it should update options collection', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });
    describe('Property Map', () => {
      it('Default property map should work', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('modified property map should function properly', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });
    // TODO: add more test cases for lazy loading
    describe('Lazy loading', () => {
      it('Initially only 100 elements should be shown', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('Reaching to the bottom should fetch 100 more records', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should fetch 100 records for filtered string', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('on clear should fetch 100 records with filterText blank', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });

    // TODO: check where to keep this test case
    it('for empty input field, it should show all option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  }
  // without observable
  beforeEachSetup();
  executeTests();

  // TODO: with observable
  // beforeEachSetup();
  // executeTests();
  afterEach(() => {
    fixture.destroy();
  });
});
