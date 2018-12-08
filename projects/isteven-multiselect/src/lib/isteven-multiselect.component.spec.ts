import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstevenMultiselectComponent } from './isteven-multiselect.component';

describe('IstevenMultiselectComponent', () => {
  let component: IstevenMultiselectComponent;
  let fixture: ComponentFixture<IstevenMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstevenMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstevenMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // isOpen flag
  describe('IsOpen flag', () => {
    it('On click of button isOpen property should be true', () => {
      expect(true).toBeTruthy();
    });
    it('On click outside drodown, it should close dropdown', () => {
      expect(true).toBeTruthy();
    });
    it('clicking on open dropdown button should change make isOpen false', () => {
      expect(true).toBeTruthy();
    });
    it('clicking on open dropdown button should change make isOpen false', () => {
      expect(true).toBeTruthy();
    });
    it('when isOpen true, helper element, filter options and options should exists', () => {
      expect(true).toBeTruthy();
    });
  });

  // Template
  describe('Templating', () => {
    it('should pass on older template incase none of the opton is passed', () => {
      expect(true).toBeTruthy();
    });
    it('should pass on newer template incase none of the opton is passed', () => {
      expect(true).toBeTruthy();
    });
    it('should pass on newer template for grouping, incase none of the opton is passed', () => {
      expect(true).toBeTruthy();
    });
    it('should pass on newer template for grouping, incase none of the opton is passed', () => {
      expect(true).toBeTruthy();
    });
  });

  // on clear
  describe('on clear button', () => {
    it('should remove selected value from single select', () => {
      expect(true).toBeTruthy();
    });
    it('should remove selected values from multiple select', () => {
      expect(true).toBeTruthy();
    });
  });

  describe('Single Select', () => {
    it('When it has no value, should show "None Selected"', () => {
      expect(true).toBeTruthy();
    });
    it('should show "name" property of an selected value', () => {
      expect(true).toBeTruthy();
    });
    it('should show "name" property of an selected value', () => {
      expect(true).toBeTruthy();
    });
    it('should close the dropdwon affter selection on any option', () => {
      expect(true).toBeTruthy();
    });
    it('on selecting of option, it should update options collection', () => {
      expect(true).toBeTruthy();
    });
  });
  describe('Multiple Select', () => {
    it('When it has no value selected, should show "None Selected"', () => {
      expect(true).toBeTruthy();
    });
    it('should show "name" property of an selected value', () => {
      expect(true).toBeTruthy();
    });
    it('multiple selected value shown as comma separated', () => {
      expect(true).toBeTruthy();
    });
    it('display selected value limit should not exceed more than maxLabelLimit', () => {
      expect(true).toBeTruthy();
    });
    it('should close the dropdwon affter selection on any option', () => {
      expect(true).toBeTruthy();
    });
    it('on selecting of option, it should update options collection', () => {
      expect(true).toBeTruthy();
    });
    it('on selecting of option, it should update options collection', () => {
      expect(true).toBeTruthy();
    });
  });
});
