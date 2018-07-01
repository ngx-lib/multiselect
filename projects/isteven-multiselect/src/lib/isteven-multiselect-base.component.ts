import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, HostListener, forwardRef } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, DefaultValueAccessor } from '@angular/forms';

export class IstevenMultiselectBaseComponent {

  // constructor(
  //   private elementRef: ElementRef,
  //   private istevenMultiselectService: IstevenMultiselectService) {
  // }

  writeValue(value) { }
  registerOnChange(fn) { }
  registerOnTouched(fn) { }
}