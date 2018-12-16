import { ControlValueAccessor } from '@angular/forms';
import { HostListener, ElementRef } from '@angular/core';
import { NgxMultiselectService } from './services/multiselect.service';

export abstract class NgxMultiselectBaseComponent implements ControlValueAccessor {
  
  private operationPendingQueue: any[] = [];
  abstract _options: any[];
  abstract isOpen: boolean;
  abstract close(): void;

  constructor(
    protected elementRef: ElementRef,
    protected multiselectService: NgxMultiselectService) {
  }

  // Adding pending operation in queue
  addOperation(item) {
    this.operationPendingQueue.push(item)
  }

  // Poping pending operation from queue sequentially
  popOperation() {
    return this.operationPendingQueue.pop()
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
    return this.operationPendingQueue.length
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
      this.initialValue = value
      if(!this._options) {
        this.addOperation(value) 
      } else {
        this.prepopulateOptions(value);
      }

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
    if (this.elementRef.nativeElement !== event && !this.multiselectService.closest(event, 'ngx-multiselect') && this.isOpen) {
      this.close();
    }
  }
}
