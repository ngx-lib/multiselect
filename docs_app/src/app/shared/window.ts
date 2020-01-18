import { InjectionToken } from '@angular/core';

declare var window: any;

export const WindowToken = new InjectionToken('Window');
export function windowProvider() {
  return window;
}
