import { VirtualScrollDirective } from './virtual-scroll.directive';
import { ElementRef } from '@angular/core';

describe('VirtualScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{});
    expect(directive).toBeTruthy();
  });
});
