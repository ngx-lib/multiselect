import { TestBed, inject } from '@angular/core/testing';

import { NgxMultiselectService } from './multiselect.service';

describe('IstevenMultiselectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxMultiselectService]
    });
  });

  it('should be find out closest element when element tag have been passed to it', inject([NgxMultiselectService], (service: NgxMultiselectService) => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  }));

  describe('optionsGrouping', () => {
    it('should group by passed group property', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
    it('should mark group option when all descendants are seleceted', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
    it('should un mark group option when any of descendant is deselected', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
  })
});
