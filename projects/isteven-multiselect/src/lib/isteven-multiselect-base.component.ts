import { ElementRef, Injector } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';
import { ControlValueAccessor } from '@angular/forms';

export class IstevenMultiselectBaseComponent {
  private _istevenMultiselectService: IstevenMultiselectService;
  private _elementRef: ElementRef;

  constructor(
    protected injector: Injector) {
      this._elementRef = injector.get(ElementRef);
      this._istevenMultiselectService = injector.get(IstevenMultiselectService);
  }

  onChange = (_: any) => {};
  onTouched = () => {};

}