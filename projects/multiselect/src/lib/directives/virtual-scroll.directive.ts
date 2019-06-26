import { Directive, HostListener, Input, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  private _totalCount: number;
  top: HTMLElement;
  bottom: HTMLElement;
  scrollOffset = 0;
  @Input() itemHeight: number = 40;
  @Input() set totalCount(count) {
    this._totalCount = count;
    count ? this.initialSetup() : this.reset();
  }
  get() {
    return this._totalCount;
  }
  @Output() rangeChanged = new EventEmitter<any>();
  private scrollTimer;
  private lastScrollFireTime = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  reset() {
    if (this.top && this.bottom) {
      this.renderer.setStyle(this.top, 'height', 0);
      this.renderer.setStyle(this.bottom, 'height', 0);
      this.renderer.setProperty(this.el.nativeElement, 'scrollTop', 0);
    }
  }

  throttleScroll(target) {
    const { scrollTop, clientHeight } = target;
    const totalHeight = this.itemHeight * this._totalCount + this.scrollOffset;

    // Step: 1 - Calculate the position
    const topSpacing = scrollTop;
    const maxItemsRange = (clientHeight - this.scrollOffset) / this.itemHeight;

    // Step: 2 - What are the possible collection that can be rendered
    const rangeOffset = topSpacing % this.itemHeight;
    const rangeStart = topSpacing - rangeOffset;
    const topNonVisible = topSpacing / this.itemHeight;
    const itemStartRange = Math.floor(topNonVisible);
    const rangeToBeIncreamented = rangeOffset ? maxItemsRange + 1 : maxItemsRange;
    const calculatedEndRange = itemStartRange + rangeToBeIncreamented;
    const itemEndRange = calculatedEndRange >= this._totalCount ? this._totalCount : calculatedEndRange;
    const bottomSpacing = totalHeight - (rangeStart + rangeToBeIncreamented * this.itemHeight);

    // Step: 3 - Pass the range to the child directive
    this.renderer.setStyle(this.top, 'height', `${rangeStart}px`);
    this.renderer.setStyle(this.bottom, 'height', `${bottomSpacing}px`);
    this.rangeChanged.emit({ start: itemStartRange, end: itemEndRange });
  }

  @HostListener('scroll', ['$event'])
  onscroll({ target }) {
    const minScrollTime = 50;
    const now = new Date().getTime();
    if (!this.scrollTimer) {
      if (now - this.lastScrollFireTime > minScrollTime) {
        this.lastScrollFireTime = now;
      }
      this.scrollTimer = setTimeout(() => {
        this.scrollTimer = null;
        this.lastScrollFireTime = new Date().getTime();
        this.throttleScroll(target);
      }, minScrollTime);
    }
  }

  initialSetup() {
    // TODO: later think of usng ViewChild, instead of direct DOM manipulation.
    const { scrollTop, clientHeight } = this.el.nativeElement;
    
    this.top = this.renderer.selectRootElement('.top');
    this.bottom = this.renderer.selectRootElement('.bottom');
    this.renderer.setStyle(this.top, 'height', `${scrollTop}px`);
    this.renderer.setStyle(this.bottom, 'height', `${this.itemHeight * this._totalCount + this.scrollOffset - clientHeight }px`);
    this.renderer.setProperty(this.el.nativeElement, 'scrollTop', 0);
  }
}
