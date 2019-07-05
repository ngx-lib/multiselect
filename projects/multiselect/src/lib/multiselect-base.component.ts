import { ControlValueAccessor } from '@angular/forms';
import { HostListener, ElementRef } from '@angular/core';
import { NgxMultiselectService } from './services/multiselect.service';

export abstract class NgxMultiselectBaseComponent implements ControlValueAccessor {
  private operationPendingQueue: any[] = [];
  protected _defaultPropertyMap = {
    id: 'id',
    name: 'name',
    disabled: 'disabled'
  };
  protected _defaultPropertyMapLength = Object.keys(this._defaultPropertyMap).length;
  abstract _options: any[];
  abstract isOpen: boolean;
  abstract multiple: boolean;
  abstract close(): void;

  constructor(protected elementRef: ElementRef, protected multiselectService: NgxMultiselectService) {}

  // Adding pending operation in queue
  addOperation(item) {
    this.operationPendingQueue.push(item);
  }

  // Poping pending operation from queue sequentially
  popOperation() {
    return this.operationPendingQueue.pop();
  }

  /* 
    In future this code is going to resides inside different Service,
    This pendingOperation feature is fine grained in future, 
    and can be used for multiple purpose like model update, collection update, etc.
  */
  // Extracting and finishing all pending operation
  finishPendingOperations() {
    const operation = this.popOperation();
    this.prepopulateOptions(operation);
  }

  // Check pending operation queue status
  isOperationPending() {
    return this.operationPendingQueue.length;
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
    // Set selected value for initial load of value
    if (value) {
      this.initialValue = value;
      this._options ? this.prepopulateOptions(value) : this.addOperation(value);
      this.formatPrepopulatedValues(value);
    }
  }
  private formatPrepopulatedValues(value): any {
    let options = value;
    // TODO: can we improve below logic?
    if (Object.keys(this._defaultPropertyMap).length == this._defaultPropertyMapLength) return;
    const swappedPropertyMap: any = this.multiselectService.mirrorObject(this._defaultPropertyMap);
    if (this.multiple) {
      options.forEach(o => {
        o.id = o[swappedPropertyMap.id];
        o.name = o[swappedPropertyMap.name];
      });
    } else {
      value.id = value[swappedPropertyMap.id];
      value.name = value[swappedPropertyMap.name];
      options = value;
    }
  }

  registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  // TODO: Consider creating a directive for this.
  // TODO: Also convert below to be work for element specific
  @HostListener('document:click', ['$event.target'])
  clickOutSide(event) {
    if (
      this.isOpen &&
      this.elementRef.nativeElement !== event &&
      !this.multiselectService.closest(event, 'ngx-multiselect')
    ) {
      this.close();
    }
  }
}
