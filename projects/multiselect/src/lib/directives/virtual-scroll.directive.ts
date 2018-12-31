import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  scrollOffset = 16
  @Input() itemHeight: number = 40
  @Input() totalCount: number

  constructor() { }

  @HostListener('scroll', ['$event']) onscroll({target}) {
    const {scrollToTop, scrollToBottom, scrollHeight, clientHeight} = target;
    console.log(event)
    // Step: 1 - Calculate the position
    const topSpacing = scrollToTop;
    const remainingHeight = clientHeight - topSpacing;

    // Step: 2 - What are the possible collection that can be rendered
    const rangeStart = topSpacing
    const rangeEnd = topSpacing + clientHeight
    const difference = topSpacing % this.itemHeight
    const topNonVisible = topSpacing / this.itemHeight

    // Step: 3 - Pass the range to the child directive (probably custom *ngFor)
  }

}
