import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement, TemplateRef, ElementRef } from '@angular/core';

import { GroupedOptionsComponent } from './grouped-options.component';
import { NgxMultiselectComponent } from '../multiselect.component';
import { NgxMultiselectService } from '../services/multiselect.service';
import { VirtualScrollDirective } from '../directives/virtual-scroll.directive';

describe('GroupedOptionsComponent', () => {
  let component: GroupedOptionsComponent;
  let multiselect: NgxMultiselectComponent;
  let fixture: ComponentFixture<GroupedOptionsComponent>;
  let debugElement: DebugElement;
  let option: any;
  let group: any;
  let multiselectSelectSpy;
  let multiselectSelectGroupSpy;
  let selectedFirstOption: any[];
  let options: any[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedOptionsComponent, VirtualScrollDirective],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedOptionsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.groupedProperty = 'category';
    options = [
      { "id": 1, "name": "Test 1", "category": "Cat 1" },
      { "id": 2, "name": "Test 2", "category": "Cat 1" },
      { "id": 3, "name": "Test 3", "category": "Cat 2" },
      { "id": 4, "name": "Test 4", "category": "Cat 2" },
      { "id": 5, "name": "Test 5", "category": "Cat 3" },
      { "id": 6, "name": "Test 6", "category": "Cat 3", disabled: true }
    ];
    selectedFirstOption = options.filter(o => o.id)
    component.multiple = true;
    component.selectedOptions = [];
    component.options = [...options]
    multiselect = new NgxMultiselectComponent(<ElementRef<any>>null, new NgxMultiselectService())
    multiselect.multiple = true;
    multiselect.setOptions(options);
    multiselect._selectedOptions = [];
    // TODO: can we find more better way to call parent components method?
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
    multiselectSelectSpy = spyOn(multiselect, 'select').and.callThrough();
    multiselectSelectGroupSpy = spyOn(multiselect, 'selectGroup').and.callThrough();
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    expect(component).toBeDefined();
  });

  it('It should make groupedOptions property to prepopulate', () => {
    // arrange
    // act
    // assert
    expect(component.groupedOptions.length).toBe(9)
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
    component.optionsTemplate = <TemplateRef<any>>null;

    // assert
    expect(component.optionsTemplate).not.toBe(component.defaultOptionsTemplate);
  })

  describe('Group option', () => {
    it('on click on group options, it should select all underlying options', () => {
      // arrange
      const group = debugElement.query(By.css('.group:first-child .option:first-child'))

      // act
      group.triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'))
      const groupElement = debugElement.query(By.css('.group .option.marked'))
      expect(markedOptions.length).toBe(3)
      expect(groupElement).toBeDefined()
      expect(groupElement.nativeElement.className).toBe('option marked')
    });
    it('on click of selected group options should de-select all underlying options', () => {
      // arrange
      const group = debugElement.query(By.css('.group .option'))
      group.triggerEventHandler('click', null)

      // act
      group.triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'))
      const groupElement = debugElement.query(By.css('.group:first-child .option.marked'))
      expect(markedOptions.length).toBe(0)
      expect(groupElement).toBeNull();
    });
    it('when all the options of group were selected, then it should tick the group option automatically', () => {
      // arrange
      const group = debugElement.queryAll(By.css('.group .option'))
      group[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // act
      group[2].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'))
      const groupElement = debugElement.query(By.css('.group:first-child .option.marked'))
      expect(markedOptions.length).toBe(3)
      expect(groupElement).toBeDefined()
      expect(groupElement.nativeElement.className).toBe('option marked')
    });
    it('initially all group options selected, removal any of them should unmark group option', () => {
      // arrange
      const options = debugElement.queryAll(By.css('.group:first-child .option'))
      // select 1st group
      options[0].triggerEventHandler('click', null)
      fixture.detectChanges()

      // act
      options[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'))
      const groupElement = debugElement.query(By.css('.group:first-child .option:first-child.marked'))
      expect(markedOptions.length).toBe(1)
      expect(groupElement).toBeNull()
    });
  })

  describe('Option', () => {
    it('it should emit an event to parent component to select current option', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.group:first-child .option'))

      // act
      optionsElements[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOptions = debugElement.queryAll(By.css('.option.marked'))
      expect(markedOptions.length).toBe(1)
      expect(multiselectSelectSpy).toHaveBeenCalledWith(option);
      expect(multiselectSelectSpy).toHaveBeenCalledTimes(1);
      expect(option.ticked).toBe(true)
    });
    it('should de-select an option on click of selected option', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.group:first-child .option'))
      optionsElements[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // act
      optionsElements[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOtionsElements = debugElement.queryAll(By.css('.option.marked'))
      expect(markedOtionsElements.length).toBe(0)
      expect(multiselectSelectSpy).toHaveBeenCalledWith(option);
      expect(multiselectSelectSpy).toHaveBeenCalledTimes(2);
      expect(option.ticked).toBe(false)
    });
    it('should select option should change the selectedOptions of multiselect component', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.group:first-child .option'))

      // act
      optionsElements[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOtionsElements = debugElement.queryAll(By.css('.option.marked'))
      expect(markedOtionsElements.length).toBe(1)
      expect(multiselectSelectSpy).toHaveBeenCalledWith(option);
      expect(multiselectSelectSpy).toHaveBeenCalledTimes(1);
      expect(option.ticked).toBe(true)
      expect(multiselect._selectedOptions.length).toBe(1)
    });
    it('should de-select option should change the selectedOptions of multiselect component', () => {
      // arrange
      const optionsElements = debugElement.queryAll(By.css('.group:first-child .option'))
      optionsElements[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // act
      optionsElements[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOtionsElements = debugElement.queryAll(By.css('.option.marked'))
      expect(markedOtionsElements.length).toBe(0)
      expect(multiselectSelectSpy).toHaveBeenCalledWith(option);
      expect(multiselectSelectSpy).toHaveBeenCalledTimes(2);
      expect(option.ticked).toBe(false)
      expect(multiselect._selectedOptions.length).toBe(0)
    });
    it('should allow to select multiple group options', () => {
      // arrange
      const groupOptionsElements = debugElement.queryAll(By.css('.group .option:first-child'))

      // act
      groupOptionsElements[0].triggerEventHandler('click', null)
      groupOptionsElements[1].triggerEventHandler('click', null)
      groupOptionsElements[2].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOtionsElements = debugElement.queryAll(By.css('.option.marked'))
      const markedGroup = groupOptionsElements.filter((g) => ~g.nativeElement.className.indexOf('marked'))
      expect(markedOtionsElements.length).toBe(9)
      expect(markedGroup.length).toBe(3)
      expect(multiselectSelectGroupSpy).toHaveBeenCalledTimes(3);
      expect(multiselect._selectedOptions.length).toBe(multiselect.getOptions().length)
    });
  })

  describe('Styling', () => {
    it('on select of option should apply correct CSS to option', () => {
      // arrange
      let firstGroupOptions = debugElement.query(By.css('.group:first-child .option:not(:first-child)'))

      // act
      firstGroupOptions.triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      firstGroupOptions = debugElement.query(By.css('.option.marked'))
      expect(firstGroupOptions.classes.marked).toBe(true)
    });
    it('mark class should removed based on click on selected optioin', () => {
      // arrange
      multiselect._selectedOptions = selectedFirstOption;
      fixture.detectChanges()

      // act
      const firstGroup = debugElement.query(By.css('.group:first-child .option:first-child'))
      firstGroup.triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      expect(firstGroup.nativeElement.className).toBe('option marked')
    });
    it('on select of groupOption should apply correct CSS to option', () => {
      // arrange
      const firstGroup = debugElement.query(By.css('.group:first-child .option:first-child'))

      // act
      firstGroup.triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      expect(firstGroup.nativeElement.className).toBe('option marked')
    });
    it('mark class should removed based on click on selected groupOption', () => {
      // arrange
      const firstGroup = debugElement.query(By.css('.group:first-child .option:first-child'))
      firstGroup.triggerEventHandler('click', null)
      fixture.detectChanges()

      // act
      firstGroup.triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      expect(firstGroup.nativeElement.className).toBe('option')
    });
  })

  describe('Disabled option', () => {
    it('disabled flag should passon all the way from options to grouptions', () => {
      // arrange
      const group = debugElement.query(By.css('.group:first-child .option:first-child'))
      group.triggerEventHandler('click', null)
      fixture.detectChanges()

      // act
      group.triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      expect(group.nativeElement.className).toBe('option')
    })
    // TODO: check how to restrict event on pointer-events: none? Alternative create event propagation directive.
    it('if some option is disabled, then toggle disabled flag of option', () => {
      // arrange
      // act
      // assert
      const firstOption = debugElement.query(By.css('.group .option.disabled'))
      expect(firstOption.classes.disabled).toBe(true);
      // expect(multiselect._selectedOptions.length).toBe(0);
    })
    // TODO: check how to restrict event on pointer-events: none? Alternative create event propagation directive.
    it('on click of disabled option, it should not select / deselect element', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    })
  })

  describe('Single select', () => {
    beforeEach(() => {
      multiselect.multiple = false;
      multiselect.isOpen = true;
      fixture.detectChanges();
    })
    it('list should close based on option selection', () => {
      // arrange
      // act
      const firstGroupOptions = debugElement.queryAll(By.css('.group .option'))
      firstGroupOptions[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOptions = debugElement.queryAll(By.css('.group .option.marked'))
      expect(multiselect.isOpen).toBe(false)
      expect(multiselect._selectedOptions.id).toBe(options[0].id)
      expect(markedOptions.length).toBe(1)
    })
    it('should select onlt single option', () => {
      // arrange
      let firstGroupOptions = debugElement.queryAll(By.css('.group .option'))
      firstGroupOptions[1].triggerEventHandler('click', null)
      fixture.detectChanges()

      // act
      firstGroupOptions[2].triggerEventHandler('click', null)
      fixture.detectChanges()

      // assert
      const markedOptions = debugElement.queryAll(By.css('.group .option.marked'))
      expect(multiselect.isOpen).toBe(false)
      expect(multiselect._selectedOptions.id).toBe(options[1].id)
      expect(markedOptions.length).toBe(1)
    })
  })
});
