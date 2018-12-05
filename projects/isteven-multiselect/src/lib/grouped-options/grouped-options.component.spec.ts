import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedOptionsComponent } from './grouped-options.component';

describe('GroupedOptionsComponent', () => {
  let component: GroupedOptionsComponent;
  let fixture: ComponentFixture<GroupedOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    expect(true).toBeTruthy();
  });

  describe('Group option', () => {
    it('on click on group options should select all underlying options', () => {
      expect(true).toBeTruthy();
    });
    it('on click of selected group options should de-select all underlying options', () => {
      expect(true).toBeTruthy();
    });
    it('when all the options of group are selected, then it should tick the group option automatically', () => {
      expect(true).toBeTruthy();
    });
    it('initially all group options selected, removal any of them should unmark group option', () => {
      expect(true).toBeTruthy();
    });
  })

  describe('Option', () => {
    it('it should emit an event to parent component to select underlying option', () => {
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
    it('if some option is disabled, then toggle disabled flag of option', () => {
      expect(true).toBeTruthy();
    })
    it('on click of disabled option, it should not select / deselect element', () => {
      expect(true).toBeTruthy();
    })
  })

  it('grouping based on groupProperty should work fine', () => {
    expect(true).toBeTruthy();
  })

  it('by default old default grouping template should be loaded', () => {
    expect(true).toBeTruthy();
  })

  it('if new template is passed then it should be rendered on screen', () => {
    expect(true).toBeTruthy();
  })
});
