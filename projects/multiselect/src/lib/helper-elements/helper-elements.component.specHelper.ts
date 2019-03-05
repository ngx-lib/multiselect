import { DebugElement } from '@angular/core';

export function checkElementForText(debugEle: DebugElement, text: string) {
  return debugEle.nativeElement.textContent.toLowerCase().indexOf(text) !== -1;
}
