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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
