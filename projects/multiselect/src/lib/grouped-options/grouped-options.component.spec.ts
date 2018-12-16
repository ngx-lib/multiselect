import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement, TemplateRef, ElementRef } from '@angular/core';

import { GroupedOptionsComponent } from './grouped-options.component';
import { NgxMultiselectComponent } from '../multiselect.component';
import { NgxMultiselectService } from '../services/multiselect.service';

describe('GroupedOptionsComponent', () => {
  let component: GroupedOptionsComponent;
  let fixture: ComponentFixture<GroupedOptionsComponent>;
  let debugElement: DebugElement;
  let option: string;
  let group: string;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedOptionsComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedOptionsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.groupedProperty = 'category';
    component.multiple = true;
    const options = [
      { "id": 1, "name": "Test 1", "category": "Cat 1" },
      { "id": 2, "name": "Test 2", "category": "Cat 1" },
      { "id": 3, "name": "Test 3", "category": "Cat 2" },
      { "id": 4, "name": "Test 4", "category": "Cat 2" },
      { "id": 5, "name": "Test 5", "category": "Cat 3" },
      { "id": 6, "name": "Test 6", "category": "Cat 3" }
    ];
    component.options = [...options]
    const multiselect = new NgxMultiselectComponent(<ElementRef<any>>{}, new NgxMultiselectService())
    multiselect.multiple = true;
    multiselect.setOptions(options);
    multiselect._selectedOptions = [];
    component.selectOption.subscribe(selected => {
      option = selected;
      multiselect.select(option);
      component.options = multiselect.getOptions();
      fixture.detectChanges();
    })
    component.selectGroup.subscribe(groupSelected => {
      group = groupSelected;
      multiselect.selectGroup(group);
      component.options = multiselect.getOptions();
      fixture.detectChanges();
    });
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    expect(component).toBeDefined();
  });

  it('It should make groupedOptions property to prepopulate', () => {
    // arrange
    // act
    // assert
    expect(component.groupedOptions.length).toBe(3)
  });

  it('It should have 8 options and 3 group', () => {
    // arrange
    // act
    const optionsElements = debugElement.queryAll(By.css('.option'))
    const groupElements = debugElement.queryAll(By.css('.group'))

    // assert
    expect(optionsElements.length).toBe(9)
    expect(groupElements.length).toBe(3)
  });

  describe('Group option', () => {
    it('on click on group options, it should select all underlying options', () => {
      // arrange
      const group = debugElement.query(By.css('.group:first-child .option:first-child'))

      // act
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // assert
      const optionsElements = debugElement.queryAll(By.css('.option.marked'))
      const groupElement = debugElement.query(By.css('.group .option.marked'))
      expect(optionsElements.length).toBe(3)
      expect(groupElement).toBeDefined()
      expect(groupElement.nativeElement.className).toBe('option marked')
    });
    it('on click of selected group options should de-select all underlying options', () => {
      // arrange
      const group = debugElement.query(By.css('.group .option'))
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // act
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // assert
      const optionsElements = debugElement.queryAll(By.css('.option.marked'))
      const groupElement = debugElement.query(By.css('.group:first-child .option.marked'))
      expect(optionsElements.length).toBe(0)
      expect(groupElement).toBeNull();
    });
    it('when all the options of group were selected, then it should tick the group option automatically', () => {
      // arrange
      const group = debugElement.queryAll(By.css('.group .option'))
      group[1].triggerEventHandler('click', {})
      fixture.detectChanges()

      // act
      group[2].triggerEventHandler('click', {})
      fixture.detectChanges()

      // assert
      const optionsElements = debugElement.queryAll(By.css('.option.marked'))
      const groupElement = debugElement.query(By.css('.group:first-child .option.marked'))
      expect(optionsElements.length).toBe(3)
      expect(groupElement).toBeDefined()
      expect(groupElement.nativeElement.className).toBe('option marked')
    });
    // TODO: How to test this, we can test this in multiselect smart component?
    it('initially all group options selected, removal any of them should unmark group option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })

  describe('Option', () => {
    it('it should emit an event to parent component to select underlying option', () => {
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
    it('should select / de-select option should change the selectedOptions', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })

  describe('Styling', () => {
    // TODO: Moved out to multiselect?
    it('on select of option should apply correct CSS to option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    // TODO: Moved out to multiselect?
    it('mark class should removed based on click on selected optioin', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    it('on select of groupOption should apply correct CSS to option', () => {
      // arrange
      const group = debugElement.query(By.css('.group:first-child .option:first-child'))

      // act
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // assert
      expect(group.nativeElement.className).toBe('option marked')
    });
    it('mark class should removed based on click on selected groupOption', () => {
      // arrange
      const group = debugElement.query(By.css('.group:first-child .option:first-child'))
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // act
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // assert
      expect(group.nativeElement.className).toBe('option')
    });
  })

  describe('Disabled option', () => {
    it('disabled flag should passon all the way from options to grouptions', () => {
      // arrange
      const group = debugElement.query(By.css('.group:first-child .option:first-child'))
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // act
      group.triggerEventHandler('click', {})
      fixture.detectChanges()

      // assert
      expect(group.nativeElement.className).toBe('option')
    })
    it('if some option is disabled, then toggle disabled flag of option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
    it('on click of disabled option, it should not select / deselect element', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
  })

  describe('Single select', () => {
    beforeEach(() => {
      component.multiple = false;
    })
    it('Should select single option, in case of single select', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
    it('should close on selecting an option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
  })

  it('grouping based on groupProperty should work fine', () => {
    // arrange
    // act
    // assert
    expect(component.groupedOptions).toBeDefined();
    expect(component.groupedOptions.length).toBe(3);
    // all categories should be covered
    expect(component.groupedOptions.map(g => g.name).length).toBe(3);
    // each groupOption should have to elements
    component.groupedOptions.forEach(g => {
      expect(g.values.length).toBe(2);
    })
  })

  it('by default old default grouping template should be loaded', () => {
    // arrange
    // act
    // assert
    expect(component.defaultOptionsTemplate).toBe(component.optionsTemplate);
  })

  it('if new template is passed then it should be rendered on screen', () => {
    // arrange
    // act
    component.optionsTemplate = <TemplateRef<any>>{};

    // assert
    expect(component.optionsTemplate).not.toBe(component.defaultOptionsTemplate);
  })
});
