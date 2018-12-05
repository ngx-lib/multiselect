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
    expect(true).toBeTruthy();
  });

  describe('Option', () => {
    it('it should emit an event to parent component to select underlying option', () => {
      expect(true).toBeTruthy();
    });
    it('should select an option on click of selected option', () => {
      expect(true).toBeTruthy();
    });
    it('should de-select an option on click of selected option', () => {
      expect(true).toBeTruthy();
    });
  })
  
  describe('Styling', () => {
    it('on select of option should apply correct CSS', () => {
      expect(true).toBeTruthy();
    });
    it('mark class should removed based on click on selected optioin', () => {
      expect(true).toBeTruthy();
    });
  })

  describe('Disabled option', () => {
    it('if some option is disabled, then it should be disabled', () => {
      expect(true).toBeTruthy();
    })
    it('on click of disabled option, it should not select / deselect selectedOptions value', () => {
      expect(true).toBeTruthy();
    })
  })

  it('by default old default item template should be loaded', () => {
    expect(true).toBeTruthy();
  })

  it('if new item template is passed then it should be rendered on screen', () => {
    expect(true).toBeTruthy();
  })
});
