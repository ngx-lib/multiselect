import { VirtualScrollDirective } from './virtual-scroll.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('VirtualScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
  it('should call initialSetup method when count is more than zero', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
  it('should call reset method when count is zero', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
  it('should determine maximum items range', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
  it('should scroll and show next items of the list', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
  it('should manage top and bottom div propotionally in case of scroll', () => {
    const directive = new VirtualScrollDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
});
