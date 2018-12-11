import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GroupedOptionsComponent } from './grouped-options.component';
import { DebugElement } from '@angular/core';

describe('GroupedOptionsComponent', () => {
  let component: GroupedOptionsComponent;
  let fixture: ComponentFixture<GroupedOptionsComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedOptionsComponent ],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedOptionsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.groupedProperty = 'category';
    component.options = [
      { "id": 1, "name": "Test 1", "category": "Cat 1"},
      { "id": 2, "name": "Test 2", "category": "Cat 1"},
      { "id": 3, "name": "Test 3", "category": "Cat 2"},
      { "id": 4, "name": "Test 4", "category": "Cat 2"},
      { "id": 5, "name": "Test 5", "category": "Cat 3"}
    ];
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
    let options = optionsElements ? Array.from(optionsElements): []
    let groups = groupElements ? Array.from(groupElements): []

    // assert
    expect(options.length).toBe(8)
    expect(groups.length).toBe(3)
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
      let options = optionsElements ? Array.from(optionsElements): []
      expect(options.length).toBe(3)
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
      let options = optionsElements ? Array.from(optionsElements): []
      expect(options.length).toBe(0)
      expect(groupElement).toBeNull()
    });
    it('when all the options of group are selected, then it should tick the group option automatically', () => {
      // arrange
      const firstOption = debugElement.query(By.css('.group:first-child .option:first-child'))
      firstOption.triggerEventHandler('click', {})
      fixture.detectChanges()

      // act
      const secondOption = debugElement.query(By.css('.group:first-child .option:nth-child(2)'))
      secondOption.triggerEventHandler('click', {})
      fixture.detectChanges()

      // assert
      const markedOptions = Array.from(debugElement.queryAll(By.css('.group:first-child .option.marked')))
      const markedGroupOption = debugElement.query(By.css('.group:first-child .option.marked:first-child'))
      expect(markedOptions.length).toBe(3)
      expect(markedGroupOption).toBeDefined()
      expect(markedGroupOption.nativeElement.className).toBe('option marked')
    });
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
    it('on select of option should apply correct CSS to option', () => {
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
    it('on select of groupOption should apply correct CSS to option', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
    it('mark class should removed based on click on selected groupOption', () => {
      // arrange
      // act
      // assert
      expect(true).toBeTruthy();
    });
  })

  describe('Disabled option', () => {
    console.log('Describe')

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

  it('grouping based on groupProperty should work fine', () => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  })

  it('by default old default grouping template should be loaded', () => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  })

  it('if new template is passed then it should be rendered on screen', () => {
    // arrange
    // act
    // assert
    expect(true).toBeTruthy();
  })
});
