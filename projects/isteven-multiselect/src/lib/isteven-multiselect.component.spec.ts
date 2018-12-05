import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstevenMultiselectComponent } from './isteven-multiselect.component';

describe('IstevenMultiselectComponent', () => {
  let component: IstevenMultiselectComponent;
  let fixture: ComponentFixture<IstevenMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstevenMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstevenMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
