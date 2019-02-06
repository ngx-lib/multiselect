import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectTemplateDrivenComponent } from './single-select-template-driven.component';

describe('SingleSelectComponent', () => {
  let component: SingleSelectTemplateDrivenComponent;
  let fixture: ComponentFixture<SingleSelectTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
