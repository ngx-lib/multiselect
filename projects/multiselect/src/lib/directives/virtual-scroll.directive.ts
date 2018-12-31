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
    const {scrollTop, scrollHeight, clientHeight} = target;

    // Step: 1 - Calculate the position
    const topSpacing = scrollTop;
    const remainingHeight = clientHeight - topSpacing;

    // Step: 2 - What are the possible collection that can be rendered
    const rangeStart = topSpacing
    const topNonVisible = topSpacing / this.itemHeight
    const rangeOffset = rangeStart % this.itemHeight
    const itemStartRange = topNonVisible + 1
    let itemEndRange = itemStartRange + (rangeOffset? 4: 5)

    console.log(itemStartRange, itemEndRange)

    // Step: 3 - Pass the range to the child directive (probably custom *ngFor)
  }

}
