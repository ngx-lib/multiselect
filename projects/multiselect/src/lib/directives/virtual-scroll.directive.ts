import { Directive, HostListener, Input, ElementRef, ViewChild } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  scrollOffset = 16
  @Input() itemHeight: number = 40
  @Input() totalCount: number
  @ViewChild('top', {read: ElementRef}) top;
  @ViewChild('bottom', {read: ElementRef}) bottom;

  constructor() { }

  @HostListener('scroll', ['$event']) onscroll({target}) {
    const {scrollTop, scrollHeight, clientHeight} = target;

    // Step: 1 - Calculate the position
    const topSpacing = scrollTop;
    const totalHeight = this.itemHeight * this.totalCount + this.scrollOffset;

    // Step: 2 - What are the possible collection that can be rendered
    const rangeStart = topSpacing
    const topNonVisible = topSpacing / this.itemHeight
    const rangeOffset = rangeStart % this.itemHeight
    const itemStartRange = Math.floor(topNonVisible + 1)
    const itemEndRange = Math.ceil(itemStartRange) + (rangeOffset? 4: 5)
    const bottomSpacing = totalHeight - (rangeStart + clientHeight)

    console.log(itemStartRange, itemEndRange, bottomSpacing)

    // Step: 3 - Pass the range to the child directive (probably custom *ngFor)
  }

}
