import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[msBottomReached]'
})
export class BottomReachedDirective {

  constructor(private elementRef: ElementRef) { }

  @Output()
  bottomReached = new EventEmitter<void>();

  @HostListener('scroll')
  onScroll() {
    const { nativeElement: {scrollTop, clientHeight, scrollHeight } } = this.elementRef;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.bottomReached.emit();
    }
  }
}
