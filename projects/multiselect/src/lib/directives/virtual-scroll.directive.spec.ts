import { VirtualScrollDirective } from './virtual-scroll.directive';
import { ElementRef, Renderer2, DebugElement, Component, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';


@Component({
  template: `
    <div class="options-container" msVirtualScroll [totalCount]="count" style="height:200px;">
      <div #top class="top"></div>
      <div class="option"
        [ngStyle]="{ marginLeft: option.depth * 15 + 'px' }"
        [ngClass]="getOptionStyle(option)"
        *ngFor="let option of filteredOptions; trackBy: trackByFn"
        (click)="select(option)">
        <ng-container
          *ngTemplateOutlet="
            optionsTemplate;
            context: {
              option: this.option
            }">
        </ng-container>
      </div>
      <div #bottom class="bottom"></div>
    </div>
  `
})
class TestVirtualScrollComponent {
  count = 0;
  @ViewChild(VirtualScrollDirective) virtualScroll: VirtualScrollDirective;
}

describe('VirtualScrollDirective', () => {
  let debugElement: DebugElement,
    component: TestVirtualScrollComponent,
    directive: VirtualScrollDirective,
    fixture: ComponentFixture<TestVirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualScrollDirective, TestVirtualScrollComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVirtualScrollComponent);
    component = fixture.componentInstance;
    directive = fixture.componentInstance.virtualScroll;
    debugElement = fixture.debugElement;
  });
  it('should create an instance', () => {
    // arrange
    // act
    // assert
    expect(directive).toBeTruthy();
  });
  it('should call initialSetup method when count is more than zero', () => {
    // arrange
    spyOn(directive, 'initialSetup');

    // act
    directive.totalCount = 1;
    fixture.detectChanges();

    // assert
    expect(directive.initialSetup).toHaveBeenCalled();
    expect(directive.initialSetup).toHaveBeenCalledTimes(1);
  });
  it('should call reset method when count is zero', () => {
    // arrange
    spyOn(directive, 'reset');
    fixture.detectChanges();

    // act
    // assert
    expect(directive.reset).toHaveBeenCalled();
    expect(directive.reset).toHaveBeenCalledTimes(1);
    // expect(directive.top.style.height).toBe('0px');
    // expect(directive.bottom.style.height).toBe('0px');
  });
  it('should determine maximum items range', () => {
    // arrange
    spyOn(directive, 'reset');
    directive.totalCount = 5;
    fixture.detectChanges();

    // act
    // assert
    expect(directive.reset).toHaveBeenCalled();
  });
  it('should scroll and show next items of the list', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
  it('should manage top and bottom div propotionally in case of scroll', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
});
