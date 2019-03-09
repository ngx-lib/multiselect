import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLazyLoadingComponent } from './options-lazy-loading.component';

describe('OptionsLazyLoadingComponent', () => {
  let component: OptionsLazyLoadingComponent;
  let fixture: ComponentFixture<OptionsLazyLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsLazyLoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
