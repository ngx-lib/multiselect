import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {
  scrollOffset = 16
  defualtHeight = 40

  constructor() { }

  @HostListener('scroll', ['$event']) onscroll({target}) {
    const {scrollToTop, scrollToBottom, scrollHeight, clientHeight} = target;
    console.log(event)
  }

}
