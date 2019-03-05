import { BottomReachedDirective } from './bottom-reached.directive';
import { ElementRef } from '@angular/core';

describe('BottomReachedDirective', () => {
  it('should create an instance', () => {
    const directive = new BottomReachedDirective(<ElementRef>{});
    expect(directive).toBeTruthy();
  });
});
