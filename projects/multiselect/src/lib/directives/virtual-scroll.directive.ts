import { Directive, HostListener, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  top: HTMLElement
  bottom: HTMLElement
  scrollOffset = 0
  @Input() itemHeight: number = 40
  @Input() totalCount: number
  @Output() rangeChanged = new EventEmitter<any>()
  private scrollTimer
  private lastScrollFireTime = 0
  constructor(private el: ElementRef) { }

  throttleScroll(target) {
    const { scrollTop, clientHeight, scrollHeight } = target;
    const totalHeight = this.itemHeight * this.totalCount + this.scrollOffset;
    
    // Step: 1 - Calculate the position
    const topSpacing = scrollTop;
    const maxItemsRange = (clientHeight - this.scrollOffset) / this.itemHeight

    // Step: 2 - What are the possible collection that can be rendered
    const rangeOffset = topSpacing % this.itemHeight
    const rangeStart = topSpacing - rangeOffset
    const topNonVisible = topSpacing / this.itemHeight
    const itemStartRange = Math.floor(topNonVisible)
    const rangeToBeIncreamented = rangeOffset ? maxItemsRange + 1: maxItemsRange
    const calculatedEndRange = itemStartRange + rangeToBeIncreamented
    const itemEndRange = calculatedEndRange >= this.totalCount ? this.totalCount : calculatedEndRange
    const bottomSpacing = totalHeight - (rangeStart + rangeToBeIncreamented * this.itemHeight)

    // Step: 3 - Pass the range to the child directive
    this.top.style.height = rangeStart + 'px';
    this.bottom.style.height = bottomSpacing + 'px';
    this.rangeChanged.emit({ start: itemStartRange, end: itemEndRange })
    this.el.nativeElement.scrollTop = scrollTop
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
        this.throttleScroll(target)
      }, minScrollTime);
    }
  }

  ngAfterViewInit() {
    // TODO: later think of usng ViewChild, instead of direct DOM manipulation.
    const {scrollTop, clientHeight} = this.el.nativeElement
    this.top = this.el.nativeElement.querySelector('.top')
    this.bottom = this.el.nativeElement.querySelector('.bottom')
    this.top.style.height = scrollTop + 'px';
    this.bottom.style.height = this.itemHeight * this.totalCount + this.scrollOffset - clientHeight + 'px';
    this.el.nativeElement.scrollTop = 0
  }

}
