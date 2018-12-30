import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeVolumeDataComponent } from './large-volume-data.component';

describe('SingleSelectComponent', () => {
  let component: LargeVolumeDataComponent;
  let fixture: ComponentFixture<LargeVolumeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeVolumeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeVolumeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
