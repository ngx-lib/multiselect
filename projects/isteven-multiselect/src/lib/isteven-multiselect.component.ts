import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, HostListener, Injector, forwardRef, SimpleChanges } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';
import { IstevenMultiselectBaseComponent } from './isteven-multiselect-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IstevenMultiselectComponent),
  multi: true
}

@Component({
  selector: 'ngx-isteven-multiselect',
  templateUrl: './isteven-multiselect.component.html',
  styleUrls: ['./isteven-multiselect.component.css'],
  providers: [DEFAULT_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IstevenMultiselectComponent extends IstevenMultiselectBaseComponent implements OnInit {

  constructor(
    protected elementRef: ElementRef,
    protected istevenMultiselectService: IstevenMultiselectService,
    protected injector: Injector) {
    super(injector);
  }

  // private variables
  private _multiple = false;
  private _propertyMap = {
    'id': 'id',
    'name': 'name'
  };
  private _optionsCopy = [];
  private _isOpen: boolean = false;
  _selectedOptions: any | any[] = null;

  // public variables
  _options = [];
  @Input() set selectedOptions (value){
    this._selectedOptions = value;
  }
  get selectedOptions() { return this._selectedOptions; }

  // Input bindings
  @Input() set isOpen (value) { 
    this._isOpen = value;
    if(value) this.onTouched();
  }
  get isOpen() { return this._isOpen; } 
  @Input() disabled: boolean = false;
  @Input() ofPrimitiveType: boolean = false;
  @Input() showMaxLabels: number = 3;

  @Input() set propertyMap(val) {
    this._propertyMap = { ...this._propertyMap, ...val };
  }
  @Input()
  set options(collection) {
    if (this.ofPrimitiveType) {
      this._optionsCopy = collection.map((item: any, index: number) => ({ id: index, name: item }))
    } else {
      let keys = Object.keys(this._propertyMap);
      this._optionsCopy = collection.map((item: any, index: number) => {
        let obj = {};
        keys.reduce((a: any, b: string) => { obj[b] = item[this._propertyMap[b]] }, obj)
        return obj;
      })
    }
    this.setOptions();
  }

  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: boolean) {
    // TODO: remove belove line
    if (value) this._selectedOptions = [];
    this._multiple = value;
  }

  ngOnInit() {
  }

  setOptions() {
    this._options = [...this._optionsCopy]
  }

  isValueSelected() {
    return this._multiple ? this._selectedOptions.length : this._selectedOptions;
  }

  close() {
    this.isOpen = false;
  }

  clear() {
    this._selectedOptions = this._multiple ? [] : null;
    this.close();
    this.viewToModel(this._selectedOptions);
  }

  removeItem(item) {
    item.ticked = false;
    let index = this._selectedOptions.findIndex(o => o.id === item.id);
    this._selectedOptions.splice(index, 1);
  }

  select(option) {
    if (this._multiple) {
      let selectedIds = this._selectedOptions.map(i => i.id);
      if (selectedIds.indexOf(option.id) === -1) {
        option.ticked = !option.ticked;
        this._selectedOptions.push(option);
      } else {
        option.ticked = false;
        this.removeItem(option)
      }
    } else {
      // TODO: find optimized way to do below
      this._options.forEach(o => o.ticked = false);
      option.ticked = true;
      this._selectedOptions = option;
      this.close();
    }
    this.viewToModel(this._selectedOptions);
  }

  // TODO: Consider creating a directive for this.
  // TODO: Also convert below to be work for element specific
  @HostListener('document:click', ['$event.target'])
  clickOutSide(event) {
    if (this.elementRef.nativeElement !== event && !this.istevenMultiselectService.closest(event, 'ngx-isteven-multiselect') && this.isOpen) {
      this.close();
    }
  }

  selectAll() {
    this._selectedOptions = this._options.map(o => {
      o.ticked = true;
      return o;
    });
    this.viewToModel(this._selectedOptions);
  }

  selectNone() {
    this._options.forEach(o => o.ticked = false);
    this._selectedOptions = [];
    this.viewToModel([]);
  }

  viewToModel(options) {
    this.onChange(options);
  }

  reset() {
    //TODO: Rever selectOptions value to older value
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.selectedOptions && (changes.selectedOptions.currentValue !== changes.selectedOptions.previousValue)) {
      this.viewToModel([]);
    }
  }

}