import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter,
  ViewChild,
  HostBinding,
  HostListener
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgxMultiselectService } from './services/multiselect.service';
import { forwardRef } from '@angular/core';
import { FilterOptionsComponent } from './filter-options/filter-options.component';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxMultiselectComponent),
  multi: true
};

@Component({
  selector: 'ngx-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css'],
  providers: [DEFAULT_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMultiselectComponent implements ControlValueAccessor {
  constructor(
    private elementRef: ElementRef,
    private multiselectService: NgxMultiselectService
  ) { }

  // private variables
  private _multiple;
  private _theme: string = 'material';
  private _optionsCopy;
  private _isOpen: boolean = false;
  private operationPendingQueue: any[] = [];

  // public variables
  _selectedOptions: any | any[] = null;
  _defaultPropertyMap = {
    id: 'id',
    name: 'name',
    disabled: 'disabled'
  };
  _defaultPropertyMapLength = Object.keys(this._defaultPropertyMap).length;
  _options;

  @HostBinding('class.mat-multiselect') matMultiselect: boolean = true;
  @HostBinding('class.bs-multiselect') bsMultiselect: boolean = false;

  // Input bindings
  @Input() disabled: boolean = false;
  @Input() color: string = 'blue';
  @Input() groupedProperty: string;
  @Input() showHelperElements: boolean = true;
  @Input() showSearchFilter: boolean = true;
  @Input() showMaxLabels: number = 3;
  @ContentChild(TemplateRef) _optionsTemplate: TemplateRef<any>;
  @Input()
  get optionsTemplate() {
    return this._optionsTemplate;
  }
  set optionsTemplate(template) {
    this._optionsTemplate = template;
  }
  @Input()
  public get theme(): string {
    return this._theme;
  }
  public set theme(val: string) {
    this._theme = val;
    this.matMultiselect = val === 'material';
    this.bsMultiselect = val === 'bootstrap';
  }

  // Input binding with getter / setter
  @Input() set isOpen(value) {
    this._isOpen = value;
    // onOpen and onClose event will be fired by isOpen setter
    if (value) {
      // list populate, based on empty value
      this.filterOptionsList('');
      this.onTouched();
      this.onOpen.emit();
    } else {
      this.onClose.emit();
    }
  }
  get isOpen() {
    return this._isOpen;
  }
  @Input() set propertyMap(val) {
    this._defaultPropertyMap = { ...this._defaultPropertyMap, ...val };
  }
  @Input()
  get multiple() {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this.viewToModel(value ? []: null);
    this._multiple = value;
  }

  @Input()
  set options(collection) {
    if (!collection) return;
    this._optionsCopy = this.multiselectService.mapDatasourceToFields(
      collection,
      this._defaultPropertyMap,
      this.groupedProperty
    );
    const options = this.getOptionsCopy();
    this.setOptions(options);
    // Sometimes binding can happens lazily, 
    // so `finishPendingOperations` helps to execute such operations
    if (this.isOperationPending()) this.finishPendingOperations();
  }

  // Output bindings
  @Output() onOpen: EventEmitter<any> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<void>();
  @Output() onItemClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGroupItemClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelectAll: EventEmitter<any> = new EventEmitter<void>();
  @Output() onSelectNone: EventEmitter<any> = new EventEmitter<void>();
  @Output() onReset: EventEmitter<any> = new EventEmitter<void>();
  @Output() onClear: EventEmitter<any> = new EventEmitter<void>();
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter<string>();

  @ViewChild('filterOptions', { read: FilterOptionsComponent }) filterOptions;

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

  // All update to options should happen from below method.
  setOptions(options) {
    this._options = options;
  }

  getOptions() {
    return this._options ? [...this._options] : [];
  }

  getOptionsCopy() {
    return this._optionsCopy ? [...this._optionsCopy] : [];
  }

  filterOptionsList = (val: string) => {
    const optionsCopy = this.getOptionsCopy();
    let result = optionsCopy;
    if (val) {
      result = optionsCopy.filter(i => i.name && i.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    }
    this.setOptions(result);
    this.prepopulateOptions(this._selectedOptions);
  };

  isValueSelected() {
    return this._selectedOptions && this._multiple ? 
      this._selectedOptions.length :
      this._selectedOptions;
  }

  searchChange(val: string) {
    this.filterOptionsList(val);
    this.onSearchChange.emit(val);
  }

  close() {
    this.isOpen = false;
  }

  removeItem(collection, item) {
    item.ticked = false;
    const index = collection.findIndex(o => o.id === item.id);
    collection.splice(index, 1);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  prepopulateOptions(selected: any) {
    let selectedIds = [];
    selectedIds = this._multiple ? 
      (selected || []).map(i => i.id):
      selected ? [selected.id]: [];
    this.setOptions(
      this.getOptions()
        .map(o => ({ 
            ...o, 
            ticked: selectedIds.indexOf(o.id) !== -1 
          })
        )
      );
    // TODO: do we really need this reassignment?
    this.viewToModel(selected);
  }

  select(option) {
    let selectedOptions;
    option.ticked = !option.ticked;
    // TODO: Refactor below logic
    if (this._multiple) {
      selectedOptions = [...this._selectedOptions];
      let selectedIds = selectedOptions.map(i => i.id);
      if (selectedIds.indexOf(option.id) === -1) {
        // if selected item not exist in collection, push it
        selectedOptions.push(option);
      } else {
        // if selected item exist in collection, post it
        this.removeItem(selectedOptions, option);
      }
      selectedIds = selectedOptions.map(i => i.id);
    } else {
      // TODO: find optimized way to do below
      let val = option && option.id;
      let changedOptions = this.getOptions()
        .map(
          o => ({ 
            ...o,
            ticked: o.id == val 
          })
        );
      selectedOptions = changedOptions.find(i => i.ticked);
      this.setOptions(changedOptions);
      this.close();
    }
    this.viewToModel(selectedOptions);
    this.onItemClick.emit(option);
  }

  selectAll() {
    let allSelectedOptions = this.getOptions()
      .map(
        o => ({
          ...o,
          ticked: true
        })
      );
    this.setOptions(allSelectedOptions);
    this.viewToModel(allSelectedOptions);
    this.onSelectAll.emit();
  }

  selectNone() {
    const options = this.getOptions().map(o => ({
      ...o,
      ticked: false
    }))
    this.setOptions(options);
    this.viewToModel([]);
    this.onSelectNone.emit();
  }

  borderBottom() {
    return this._isOpen ? { borderBottom: `1px solid ${this.matMultiselect ? this.color : 'transperant'}` } : {};
  }

  //TODO: Optimized below logic, it can be done in lesser steps
  selectGroup(group: any) {
    const { ticked, values } = group;
    const options = this.getOptions();
    let selectedValues = [...this._selectedOptions];
    let selectedIds = selectedValues.map(s => s.id);
    const allGroupOptionIds = values.map(v => v.id);
    // Get all ticked options
    // concat with selected options
    selectedValues = ticked
      ? selectedValues.concat(values)
      : selectedValues.filter(o => allGroupOptionIds.indexOf(o.id) === -1);
    // Find unique out of them
    selectedIds = this.multiselectService.findUnique(selectedValues.map(item => item.id));
    // build selectedOptions array again
    selectedValues = options.filter(o => selectedIds.indexOf(o.id) !== -1);
    this.viewToModel(selectedValues);
    this.onGroupItemClick.emit(group);
  }

  reset() {
    this.viewToModel(this.initialValue);
    this.prepopulateOptions(this.initialValue);
    this.onReset.emit();
  }

  // Responsible for updating value from view to model
  viewToModel(selected) {
    if (this._selectedOptions !== selected) {
      this._selectedOptions = selected;
      this.onChange(selected);
    }
  }

  clear(event){
    let changedOptions = this.getOptions().map(o => ({...o, ticked: false}));
    this.setOptions(changedOptions);
    // no value is selected so passing null
    this.viewToModel(null);
    this.onClear.emit();
    this.close();
    event.stopPropagation();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit () {
    // Check if value have not been assigned then default to true
    if (typeof this._multiple === 'undefined') {
      this.multiple = true;
    }
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
