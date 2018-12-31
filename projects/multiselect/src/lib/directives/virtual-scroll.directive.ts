import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  scrollOffset = 16

  constructor() { }

  @HostListener('scroll', ['$event']) onscroll(event) {
    const {scrollToTop, scrollToBottom, scrollHeight} = event
  }

}
