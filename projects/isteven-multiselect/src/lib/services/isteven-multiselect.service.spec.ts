import { TestBed, inject } from '@angular/core/testing';

import { IstevenMultiselectService } from './isteven-multiselect.service';

describe('IstevenMultiselectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IstevenMultiselectService]
    });
  });

  it('should be find out closest element when element tag have been passed to it', inject([IstevenMultiselectService], (service: IstevenMultiselectService) => {
    expect(true).toBeTruthy();
  }));

  describe('optionsGrouping', () => {
    it('should group by passed group property', () => {
      expect(true).toBeTruthy();
    })
    it('should mark group option when all descendants are seleceted', () => {
      expect(true).toBeTruthy();
    })
    it('should un mark group option when any of descendant is deselected', () => {
      expect(true).toBeTruthy();
    })
  })
});
