import { Directive, HostListener, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

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

  constructor(private el: ElementRef) { }

  @HostListener('scroll', ['$event']) onscroll({target}) {
    const {scrollTop, clientHeight} = target;
    const totalHeight = this.itemHeight * this.totalCount + this.scrollOffset;
    // TODO: remove below number conversion
    if(Number(scrollTo) === totalHeight) return;
    // Step: 1 - Calculate the position
    const topSpacing = scrollTop;
    const maxItemsRange = clientHeight / this.itemHeight

    // Step: 2 - What are the possible collection that can be rendered
    const rangeStart = topSpacing
    const topNonVisible = topSpacing / this.itemHeight
    const rangeOffset = rangeStart % this.itemHeight
    const itemStartRange = Math.floor(topNonVisible + 1)
    const itemEndRange = Math.ceil(itemStartRange) + (rangeOffset? maxItemsRange - 1: maxItemsRange)
    const bottomSpacing = totalHeight - (rangeStart + clientHeight)

    console.log(itemStartRange, itemEndRange, bottomSpacing)

    // Step: 3 - Pass the range to the child directive (probably custom *ngFor)
    this.top.style.height = topSpacing + 'px';
    this.bottom.style.height = bottomSpacing + 'px';
    this.rangeChanged.emit({start: itemStartRange, end: itemEndRange})
  }

  ngAfterViewInit() {
    // TODO: later think of usng ViewChild, instead of direct DOM manipulation.
    this.top = this.el.nativeElement.querySelector('.top')
    this.bottom = this.el.nativeElement.querySelector('.bottom')
    this.top.style.height = this.el.nativeElement.scrollTop + 'px';
    this.bottom.style.height = this.itemHeight * this.totalCount + this.scrollOffset + 'px';
  }

}
