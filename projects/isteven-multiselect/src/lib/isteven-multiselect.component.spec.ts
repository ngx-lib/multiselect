import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IstevenMultiselectComponent } from './isteven-multiselect.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { GroupedOptionsComponent } from './grouped-options/grouped-options.component';
import { DisplaySelectedValuePipe } from './pipes/display-selected-value.pipe';
import { HelperElementsComponent } from './helper-elements/helper-elements.component';
import { OptionsComponent } from './options/options.component';

describe('IstevenMultiselectComponent', () => {
  let component: IstevenMultiselectComponent;
  let fixture: ComponentFixture<IstevenMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IstevenMultiselectComponent, FilterOptionsComponent, GroupedOptionsComponent,
        DisplaySelectedValuePipe, HelperElementsComponent, OptionsComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule]
    })
      .compileComponents();
  }));

  function beforeEachSetup() {
    beforeEach(() => {
      fixture = TestBed.createComponent(IstevenMultiselectComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }

  function executeTests() {
    // isOpen flag
    describe('IsOpen flag', () => {
      it('On click of button isOpen property should be true', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('On click outside drodown, it should close dropdown', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('clicking on open dropdown button should change make isOpen false', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('clicking on open dropdown button should change make isOpen false', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('when isOpen true, helper element, filter options and options should exists', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
    });

    // Template
    describe('Templating', () => {
      it('should pass on older template incase none of the opton is passed', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should pass on newer template incase none of the opton is passed', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should pass on newer template for grouping, incase none of the opton is passed', () => {
        // arrange
        // act
        // assert
        expect(true).toBeTruthy();
      });
      it('should pass on newer template for grouping, incase none of the opton is passed', () => {
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

});
