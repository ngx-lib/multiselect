import { VirtualScrollDirective } from './virtual-scroll.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('VirtualScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
});
