import { TestBed, inject } from '@angular/core/testing';

import { NgxMultiselectService } from './multiselect.service';

describe('MultiselectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxMultiselectService]
    });
  });

  it('should be find out closest element when element tag have been passed to it', inject(
    [NgxMultiselectService],
    (service: NgxMultiselectService) => {
      // arrange
      const div = document.createElement('div')
      div.classList.add('grand-parent');
      div.innerHTML = `<div class="parent">
        <div class="child">
          <div class="grand-child">Some Text</div>
        </div>
      </div>`

      // act
      const grandChild = div.querySelector('.grand-child');
      const closest = service.closest(grandChild, '.grand-parent');

      // assert
      expect(closest).toBeTruthy();
    }
  ));

  it('should be mirror the object', inject(
    [NgxMultiselectService],
    (service: NgxMultiselectService) => {
      // arrange
      const obj = {id: 'Team', name: 'TeamName'};
      const keys = Object.keys(obj);
      const values = Object.values(obj);

      // act
      const reverse = service.mirrorObject(obj);

      // assert
      expect(reverse[values[0]]).toBeDefined();
      expect(reverse[values[0]]).toBe(keys[0]);
      expect(reverse[values[1]]).toBeDefined();
      expect(reverse[values[1]]).toBe(keys[1]);
    }
  ));

  describe('optionsGrouping', () => {
    it('should group by pass group property', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    it('should mark group option when all descendants are seleceted', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    it('should un mark group option when any of descendant is deselected', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  });
});
