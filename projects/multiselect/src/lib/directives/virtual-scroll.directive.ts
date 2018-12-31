import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[msVirtualScroll]'
})
export class VirtualScrollDirective {

  constructor() { }

  @HostListener('scroll', ['$event']) onscroll(event) {
    console.log(event)
  }

}
