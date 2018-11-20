import { ElementRef, Injector } from '@angular/core';
import { IstevenMultiselectService } from './services/isteven-multiselect.service';
import { ControlValueAccessor } from '@angular/forms';

export abstract class IstevenMultiselectBaseComponent implements ControlValueAccessor {
  private _istevenMultiselectService: IstevenMultiselectService;
  private _elementRef: ElementRef;

  constructor(
    protected injector: Injector) {
      this._elementRef = injector.get(ElementRef);
      this._istevenMultiselectService = injector.get(IstevenMultiselectService);
  }

  private _initialValue: any;
  abstract prepopulateOptions(selected: any): void;
  set initialValue(value: any) {
    this._initialValue = value;
  }
  get initialValue() {
    return this._initialValue;
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value) {
    if(value) this.initialValue = value
    // Set selected value for initial load of value
    this.prepopulateOptions(value);
  }

  registerOnChange(fn: (value: any) => any): void { 
    this.onChange = fn; 
  }

  registerOnTouched(fn: () => any): void { 
    this.onTouched = fn;
  }
}