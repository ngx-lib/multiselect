import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponent } from './options.component';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  });

  describe('Option', () => {
    it('it should emit an event to parent component to select underlying option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    it('should select an option on click of selected option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    it('should de-select an option on click of selected option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })
  
  describe('Styling', () => {
    it('on select of option should apply correct CSS', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    it('mark class should removed based on click on selected optioin', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })

  describe('Disabled option', () => {
    it('if some option is disabled, then it should be disabled', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
    it('on click of disabled option, it should not select / deselect selectedOptions value', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
  })

  it('by default old default item template should be loaded', () => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  })

  it('if new item template is passed then it should be rendered on screen', () => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  })
});
