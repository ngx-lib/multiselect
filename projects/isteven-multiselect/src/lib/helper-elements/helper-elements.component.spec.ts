import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperElementsComponent } from './helper-elements.component';
import { DebugElement } from '@angular/core';

describe('HelperElementsComponent', () => {
  let component: HelperElementsComponent;
  let fixture: ComponentFixture<HelperElementsComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperElementsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    // arrange
    // act
    // assert
    expect(component).not.toBeUndefined();
  });

  describe('✓ Select All', () => {
    it('it should emit an event to parent component', () => {
      // arrange
      let selectAllBtnClicked = false;
      component.selectAllClicked.subscribe(event => {
        selectAllBtnClicked = true;
      });
      // act
      component.selectAll();
      // assert
      expect(selectAllBtnClicked).toBe(true);
    });
    it('it should select all options', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })

  describe('× Select None', () => {
    it('it should emit an event to parent component', () => {
      // arrange
      let selectNoneBtnClicked = false;
      component.selectNoneClicked.subscribe(event => {
        selectNoneBtnClicked = true;
      });
      // act
      component.selectNone();
      // assert
      expect(selectNoneBtnClicked).toBe(true);
    });
    it('button should de-select all options', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })

  describe('↶ Reset', () => {
    it('it should emit an event to parent component', () => {
     // arrange
     let resetBtnClicked = false;
     component.resetClicked.subscribe(event => {
       resetBtnClicked = true;
     });
     // act
     component.reset();
     // assert
     expect(resetBtnClicked).toBe(true);
    });
    it('It should reset dropdown value to older state', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })

  describe('Select all and select none button should be', () => {
    it('visible only in case of multiple select', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
    it('invisible incase of single select', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
  })

});
