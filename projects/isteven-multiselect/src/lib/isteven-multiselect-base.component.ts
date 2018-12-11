import { ControlValueAccessor } from '@angular/forms';

export abstract class IstevenMultiselectBaseComponent implements ControlValueAccessor {
  
  private operationPendingQueue: any[] = [];
  abstract _options: any[];

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
}
