import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapThemeComponent } from './bootstrap-theme.component';

describe('BootstrapThemeComponent', () => {
  let component: BootstrapThemeComponent;
  let fixture: ComponentFixture<BootstrapThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
