import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, HostListener, forwardRef, Injector } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, DefaultValueAccessor } from '@angular/forms';

export class IstevenMultiselectBaseComponent {
  private _istevenMultiselectService: IstevenMultiselectService;
  private _elementRef: ElementRef;

  constructor(
    protected injector: Injector) {
      this._elementRef = injector.get(ElementRef);
      this._istevenMultiselectService = injector.get(IstevenMultiselectService);
  }

  writeValue(value) { }
  registerOnChange(fn) { }
  registerOnTouched(fn) { }
}