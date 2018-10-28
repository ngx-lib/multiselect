import { ElementRef, Injector } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';
import { ControlValueAccessor } from '@angular/forms';

export class IstevenMultiselectBaseComponent implements ControlValueAccessor {
  private _istevenMultiselectService: IstevenMultiselectService;
  private _elementRef: ElementRef;

  constructor(
    protected injector: Injector) {
      this._elementRef = injector.get(ElementRef);
      this._istevenMultiselectService = injector.get(IstevenMultiselectService);
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value) { 
    console.log(value, this)
    // Set selected value for initial load of value
  }

  registerOnChange(fn: (value: any) => any): void { 
    this.onChange = fn; 
  }

  registerOnTouched(fn: () => any): void { 
    this.onTouched = fn; 
  }
}