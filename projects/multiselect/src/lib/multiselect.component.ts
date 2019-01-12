import {
  Component, Input, ChangeDetectionStrategy, ElementRef,
  ContentChild, TemplateRef, Output, EventEmitter, ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgxMultiselectService } from './services/multiselect.service';
import { NgxMultiselectBaseComponent } from './multiselect-base.component';
import { forwardRef } from '@angular/core';
import { FilterOptionsComponent } from './filter-options/filter-options.component';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxMultiselectComponent),
  multi: true
}

@Component({
  selector: 'ngx-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css'],
  providers: [DEFAULT_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMultiselectComponent extends NgxMultiselectBaseComponent {

  constructor(
    protected elementRef: ElementRef,
    protected multiselectService: NgxMultiselectService) {
    super(elementRef, multiselectService);
  }

  // private variables
  private _multiple = false;
  private _optionsCopy; //TODO: in future this will be master list
  private _isOpen: boolean = false;
  
  // public variables
  _selectedOptions: any | any[] = null;
  _options; //TODO: this will be local list

  // Input bindings
  @Input() disabled: boolean = false;
  @Input() groupedProperty: string;
  @Input() showMaxLabels: number = 3;
  @Input() optionsLimit: number = 100;
  @Input() lazyLoading: boolean = false;
  @ContentChild(TemplateRef)
  @Input() optionsTemplate: TemplateRef<any>;
  
  // Input binding with getter / setter
  @Input() set isOpen(value) {
    this._isOpen = value;
    if (value) {
      this.onTouched();
      this.onOpen.emit()
    }
  }
  get isOpen() { return this._isOpen; }
  @Input() set propertyMap(val) {
    this._defaultPropertyMap = { ...this._defaultPropertyMap, ...val };
  }
  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: boolean) {
    if(value) this.viewToModel([]);
    this._multiple = value;
  }

  @Input()
  set options(collection) {
    if(!collection) return;
    this._optionsCopy = this.multiselectService.mapDatasourceToFields(collection, this._defaultPropertyMap, this.groupedProperty);
    const options = this.getOptionsCopy();
    this.setOptions(options);
    if(this.isOperationPending()) this.finishPendingOperations();
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

  @ViewChild('filterOptions', {read: FilterOptionsComponent}) filterOptions

  // All update to options should happen from below method.
  setOptions(options) {
    this._options = options;
  }

  getOptions() {
    return this._options ? [...this._options]: []
  }

  getOptionsCopy() {
    return this._optionsCopy ? [...this._optionsCopy]: []
  }
  filterOptionsList = (val: string) => {
    const optionsCopy = this.getOptionsCopy();
    let result = optionsCopy
    if (val) {
      result = optionsCopy.filter(i => i.name && i.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    }
    this.setOptions(result);
    this.prepopulateOptions(this._selectedOptions);
  }

  isValueSelected() {
    return this._multiple ? this._selectedOptions.length : this._selectedOptions;
  }
  
  searchChange (val: string) {
    this.filterOptionsList(val);
    this.onSearchChange.emit(val);
  }

  filterClear () {
    this.filterOptionsList('');
    this.onClear.emit();
  }

  close() {
    this.isOpen = false;
    this.onClose.emit();
  }

  removeItem(collection, item) {
    item.ticked = false;
    const index = collection.findIndex(o => o.id === item.id);
    collection.splice(index, 1);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen
    if(!this.onOpen) this.onClose.emit();
  }

  prepopulateOptions(selected: any) {
    let selectedIds = [];
    selectedIds = this._multiple ? (selected || []).map(i => i.id)
      : selected ? [selected.id]: [];
    this.setOptions(this.getOptions().map(o => ({...o, ticked: selectedIds.indexOf(o.id) !== -1})));
    //TODO: do we really need this reassignment?
    this.viewToModel(selected);
  }

  select(option) {
    let selectedOptions;
    option.ticked = !option.ticked;
    if (this._multiple) {
      selectedOptions = [...this._selectedOptions]
      let selectedIds = selectedOptions.map(i => i.id);
      if (selectedIds.indexOf(option.id) === -1) {
        // if selected item not exist in collection, push it
        selectedOptions.push(option);
      } else {
        // if selected item exist in collection, post it
        this.removeItem(selectedOptions, option);
      }
      this.setOptions(this.getOptions().map(o => ({...o, ticked: selectedIds.indexOf(o.id) !== -1})));
    } else {
      // TODO: find optimized way to do below
      let val = option && option.id;
      let changedOptions = this.getOptions().map(o => ({...o, ticked: o.id == val}));
      selectedOptions = changedOptions.find(i => i.ticked);
      this.setOptions(changedOptions);
      this.close();
    }
    this.viewToModel(selectedOptions);
    this.onItemClick.emit(option);
  }

  selectAll() {
    let allSelectedOptions = this.getOptions().map(o => ({ ...o, ticked: true}))
    this.setOptions(allSelectedOptions);
    this.viewToModel(allSelectedOptions);
    this.onSelectAll.emit();
  }

  selectNone () {
    this.setOptions(this.getOptions().map(o => ({ ...o, ticked: false})))
    this.viewToModel([]);
    this.onSelectNone.emit();
  }

  //TODO: Optimized below logic, it can be done in lesser steps
  selectGroup (group: any) {
    const { ticked, values } = group
    const options = this.getOptions()
    let selectedValues = [...this._selectedOptions];
    let selectedIds = selectedValues.map(s=>s.id);
    const allGroupOptionIds = values.map(v=> v.id);
    // Get all ticked options
    // concat with selected options
    selectedValues = ticked ? selectedValues.concat(values): selectedValues.filter(o => allGroupOptionIds.indexOf(o.id) === -1);
    // Find unique out of them
    selectedIds = this.multiselectService.findUnique(selectedValues.map(item => item.id))
    // build selectedOptions array again
    selectedValues = options.filter(o=> selectedIds.indexOf(o.id) !== -1);
    this.viewToModel(selectedValues);
    this.setOptions(options.map(o => ({...o, ticked: selectedIds.indexOf(o.id) !== -1})));
    this.onGroupItemClick.emit(group);
  }

  reset() {
    this.viewToModel(this.initialValue);
    this.prepopulateOptions(this.initialValue);
    this.onReset.emit();
  }

  // Responsible for updating value from view to model
  viewToModel(selected) {
    this._selectedOptions = selected;
    this.onChange(selected);
  }
}
