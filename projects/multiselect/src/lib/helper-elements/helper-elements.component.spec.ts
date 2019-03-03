import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelperElementsComponent } from './helper-elements.component';
import { DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { checkElementForText } from './helper-elements.component.specHelper';

describe('HelperElementsComponent', () => {
  let component: HelperElementsComponent;
  let fixture: ComponentFixture<HelperElementsComponent>;
  let debugElement: DebugElement;
  const SELECT_ALL = 'select all';
  const SELECT_NONE = 'select none';
  const RESET = 'reset';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelperElementsComponent]
    })
      .overrideComponent(HelperElementsComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default
        }
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
      component.multiple = true;
      fixture.detectChanges();
      let selectAllBtnClicked = false;
      component.selectAllClicked.subscribe(event => {
        selectAllBtnClicked = true;
      });
      // act
      const selectAllBtn = debugElement
        .queryAll(By.css('button.helper-button'))
        .find(btn => checkElementForText(btn, SELECT_ALL));
      selectAllBtn.triggerEventHandler('click', {});
      // assert
      expect(selectAllBtnClicked).toBe(true);
    });
    // TODO: to be tesetd in parent component
    it('it should select all options', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  });

  describe('× Select None', () => {
    it('it should emit an event to parent component', () => {
      // arrange
      component.multiple = true;
      fixture.detectChanges();
      let selectNoneBtnClicked = false;
      component.selectNoneClicked.subscribe(event => {
        selectNoneBtnClicked = true;
      });
      // act
      const selectNoneBtn = debugElement
        .queryAll(By.css('button.helper-button'))
        .find(btn => checkElementForText(btn, SELECT_NONE));
      selectNoneBtn.triggerEventHandler('click', {});
      // assert
      expect(selectNoneBtnClicked).toBe(true);
    });
    // TODO: to be tesetd in parent component
    it('button should de-select all options', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  });

  describe('↶ Reset', () => {
    it('it should emit an event to parent component', () => {
      // arrange
      component.multiple = true;
      fixture.detectChanges();
      let resetBtnClicked = false;
      component.resetClicked.subscribe(event => {
        resetBtnClicked = true;
      });
      // act
      const resetBtn = debugElement
        .queryAll(By.css('button.helper-button'))
        .find(btn => checkElementForText(btn, RESET));
      resetBtn.triggerEventHandler('click', {});
      // assert
      expect(resetBtnClicked).toBe(true);
    });
    // TODO: to be tesetd in parent component
    it('It should reset dropdown value to older state', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  });

  describe('Select all and select none button should be', () => {
    it('visible only in case of multiple select', () => {
      // arrange
      component.multiple = true;
      fixture.detectChanges();
      const buttons = debugElement.queryAll(By.css('button.helper-button'));
      const selectAllBtn = buttons.filter(btn => checkElementForText(btn, SELECT_ALL));
      const selectNoneBtn = buttons.filter(btn => checkElementForText(btn, SELECT_NONE));
      // act
      // assert
      expect(selectAllBtn.length).toBe(1);
      expect(selectNoneBtn.length).toBe(1);
    });

    it('invisible incase of single select', () => {
      // arrange
      component.multiple = false;
      fixture.detectChanges();
      const buttons = debugElement.queryAll(By.css('button.helper-button'));
      const selectAllBtn = buttons.filter(btn => checkElementForText(btn, SELECT_ALL));
      const selectNoneBtn = buttons.filter(btn => checkElementForText(btn, SELECT_NONE));
      // act
      // assert
      expect(selectAllBtn.length).toBe(0);
      expect(selectNoneBtn.length).toBe(0);
    });
  });

  describe('Reset button should be', () => {
    it('visible in case of multiple select and single select', () => {
      // arrange
      component.multiple = false;
      fixture.detectChanges();
      const buttons = debugElement.queryAll(By.css('button.helper-button'));
      let resetBtn = buttons.filter(btn => checkElementForText(btn, RESET));
      // act
      // assert
      expect(resetBtn.length).toBe(1);
      component.multiple = true;
      fixture.detectChanges();
      resetBtn = buttons.filter(btn => checkElementForText(btn, RESET));
      expect(resetBtn.length).toBe(1);
    });
  });
});
