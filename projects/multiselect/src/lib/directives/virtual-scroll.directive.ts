import { Directive, HostListener, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  top: HTMLElement
  bottom: HTMLElement
  scrollOffset = 16
  @Input() itemHeight: number = 40
  @Input() totalCount: number
  @Output() rangeChanged = new EventEmitter<any>()
  private scrollTimer
  private lastScrollFireTime = 0
  constructor(private el: ElementRef) { }

  throttleScroll(target) {
    const { scrollTop, clientHeight } = target;
    const totalHeight = this.itemHeight * this.totalCount + this.scrollOffset;
    // TODO: remove below number conversion
    if (Number(scrollTo) === totalHeight) return;
    // Step: 1 - Calculate the position
    const topSpacing = scrollTop;
    const maxItemsRange = (clientHeight - this.scrollOffset) / this.itemHeight

    // Step: 2 - What are the possible collection that can be rendered
    const rangeStart = topSpacing
    const topNonVisible = topSpacing / this.itemHeight
    const rangeOffset = rangeStart % this.itemHeight
    const itemStartRange = Math.floor(topNonVisible + 1)
    const calculatedEndRange = Math.ceil(itemStartRange) + (rangeOffset ? maxItemsRange - 1 : maxItemsRange)
    const itemEndRange = calculatedEndRange > this.totalCount ? this.totalCount : calculatedEndRange
    const bottomSpacing = totalHeight - (rangeStart + clientHeight)

    console.log(itemStartRange, itemEndRange, bottomSpacing)

    // Step: 3 - Pass the range to the child directive (probably custom *ngFor)
    this.top.style.height = topSpacing + 'px';
    this.bottom.style.height = bottomSpacing + 'px';
    this.rangeChanged.emit({ start: itemStartRange - 1, end: itemEndRange - 1 })
  }

  @HostListener('scroll', ['$event']) 
  onscroll({ target }) {
    console.log('target scroll', Date.now())
    const minScrollTime = 100;
    const now = new Date().getTime();

    if (!this.scrollTimer) {
      if (now - this.lastScrollFireTime > (3 * minScrollTime)) {
        this.lastScrollFireTime = now;
      }
      this.scrollTimer = setTimeout(() => {
        this.scrollTimer = null;
        this.lastScrollFireTime = new Date().getTime();
        console.log('target scroll fired', Date.now())
        this.throttleScroll(target) 
      }, minScrollTime);
    }
  }

  ngAfterViewInit() {
    // TODO: later think of usng ViewChild, instead of direct DOM manipulation.
    this.top = this.el.nativeElement.querySelector('.top')
    this.bottom = this.el.nativeElement.querySelector('.bottom')
    this.top.style.height = this.el.nativeElement.scrollTop + 'px';
    this.bottom.style.height = this.itemHeight * this.totalCount + this.scrollOffset + 'px';
  }

}
