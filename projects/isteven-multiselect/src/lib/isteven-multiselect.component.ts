import { 
  Component, OnInit, Input, ChangeDetectionStrategy, HostListener, 
  Injector, forwardRef, SimpleChanges, ElementRef
} from '@angular/core';
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
    private el: ElementRef,
    protected injector: Injector) {
    super(injector);
  }

  // private variables
  private _multiple = false;
  private _defaultPropertyMap = {
    'id': 'id',
    'name': 'name',
    'disabled': 'disabled'
  };
  private _optionsCopy = [];
  private _isOpen: boolean = false;

  // public variables
  _selectedOptions: any | any[] = null;
  _options = [];

  // Input bindings
  @Input() set isOpen(value) {
    this._isOpen = value;
    if (value) this.onTouched();
  }
  get isOpen() { return this._isOpen; }
  @Input() disabled: boolean = false;
  @Input() ofPrimitiveType: boolean = false;
  @Input() showMaxLabels: number = 3;
  @Input() set propertyMap(val) {
    this._defaultPropertyMap = { ...this._defaultPropertyMap, ...val };
  }
  @Input()
  set options(collection) {
    if (this.ofPrimitiveType) {
      this._optionsCopy = collection.map((item: any, index: number) => ({ id: index, name: item }))
    } else {
      let keys = Object.keys(this._defaultPropertyMap);
      this._optionsCopy = collection.map((item: any, index: number) => {
        let obj = {};
        keys.reduce((a: any, b: string) => { obj[b] = item[this._defaultPropertyMap[b]] }, obj)
        return obj;
      })
    }
    this.setOptions();
  }

  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: boolean) {
    if(value) this.viewToModel([])
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
    let values = this._multiple ? [] : null;
    this.close();
    this.viewToModel(values);
  }

  removeItem(collection, item) {
    item.ticked = false;
    let index = collection.findIndex(o => o.id === item.id);
    collection.splice(index, 1);
  }

  prepopulateOptions(selected: any) {
    let selectedIds = []
    selectedIds = this._multiple ? (selected || []).map(i => i.id)
      : selected ? [selected.id]: [];
    this._options.map(o => o.ticked = selectedIds.indexOf(o.id) !== -1);
    //TODO: do we really need this reassignment?
    this.viewToModel(selected);
  }

  select(option) {
    let selectedOptions = [...this._selectedOptions]
    option.ticked = !option.ticked;
    if (this._multiple) {
      let selectedIds = selectedOptions.map(i => i.id);
      // select option & push inside collection
      if (selectedIds.indexOf(option.id) === -1) {
        selectedOptions.push(this._options.find(i => i.id == option.id));
      } else {
        // de-select option and remove from the collection
        this.removeItem(selectedOptions, option)
      }
    } else {
      // TODO: find optimized way to do below
      let val = option && option.id;
      this._options.forEach(o => o.ticked = o.id == val);
      selectedOptions = this._options.find(i => i.id == val);
      this.close();
    }
    this.viewToModel(selectedOptions);
  }

  selectAll() {
    let allSelectedOptions = this._options.map(o => {
      o.ticked = true;
      return o;
    });
    this.viewToModel(allSelectedOptions);
  }

  selectNone() {
    this._options.forEach(o => o.ticked = false);
    this.viewToModel([]);
  }

  viewToModel(options) {
    this._selectedOptions = options;
    this.onChange(options);
    //console.log(this.el.nativeElement.classList)
  }

  reset() {
    //TODO: Revert selectOptions value to older value
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedOptions && (changes.selectedOptions.currentValue !== changes.selectedOptions.previousValue)) {
      this.viewToModel(this._multiple ? []: null);
    }
  }

  // TODO: Consider creating a directive for this.
  // TODO: Also convert below to be work for element specific
  @HostListener('document:click', ['$event.target'])
  clickOutSide(event) {
    if (this.elementRef.nativeElement !== event && !this.istevenMultiselectService.closest(event, 'ngx-isteven-multiselect') && this.isOpen) {
      this.close();
    }
  }
}