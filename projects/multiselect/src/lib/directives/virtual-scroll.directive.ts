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
    const topPadding = scrollToTop;
    const remainingHeight = clientHeight - topPadding;

    // Step: 2 - What are the possible collection that can be rendered
    const rangeStart = topPadding
    const rangeEnd = topPadding + clientHeight

    // Step: 3 - Pass the range to the child directive (probably custom *ngFor)
  }

}
