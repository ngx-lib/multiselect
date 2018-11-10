import { 
  Component, OnInit, Input, ChangeDetectionStrategy,  
  Injector, forwardRef, ElementRef, HostListener
} from '@angular/core';
import { IstevenMultiselectService } from './services/isteven-multiselect.service';
import { IstevenMultiselectBaseComponent } from './isteven-multiselect-base.component';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

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
  private _defaultPropertyMap = {
    'id': 'id',
    'name': 'name',
    'disabled': 'disabled'
  };
  private _optionsCopy = []; //TODO: in future this will be master list
  private _isOpen: boolean = false;
  filterName: FormControl;
  // public variables
  _selectedOptions: any | any[] = null;
  _options = []; //TODO: this will be local list

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
      this._optionsCopy = collection.map((item: any, index: number) => ({ id: index, name: item }));
    } else {
      let keys = Object.keys(this._defaultPropertyMap);
      this._optionsCopy = collection.map((item: any, index: number) => {
        let obj = {};
        keys.reduce((a: any, b: string) => { obj[b] = item[this._defaultPropertyMap[b]] }, obj);
        return obj;
      })
    }
    this.setOptions([...this._optionsCopy]);
  }

  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: boolean) {
    if(value) this.viewToModel([]);
    this._multiple = value;
  }

  filterOptionsList = (val) => {
    if(!val) return this.setOptions([...this._optionsCopy]);
    const options = this._optionsCopy.filter(i=> i.name && i.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    this.setOptions(options);
  }

  clearText () {
    this.filterName.setValue('');
    this.filterOptionsList('');
  }

  ngOnInit() {
    this.filterName = new FormControl('')
    // TODO: unsubscribe subscription
    this.filterName.valueChanges.subscribe(this.filterOptionsList);
  }

  getOptionStyle(option) {
    return {'marked': option.ticked, disabled: (this.disabled || option.disabled)};
  }

  setOptions(options) {
    this._options = options;
  }

  isValueSelected() {
    return this._multiple ? this._selectedOptions.length : this._selectedOptions;
  }

  close() {
    this.isOpen = false;
  }

  clear() {
    this._options.forEach(i=> i.ticked = false);
    let values = this._multiple ? [] : null;
    this.viewToModel(values);
    this.close();
  }

  removeItem(collection, item) {
    item.ticked = false;
    let index = collection.findIndex(o => o.id === item.id);
    collection.splice(index, 1);
  }

  prepopulateOptions(selected: any) {
    let selectedIds = [];
    selectedIds = this._multiple ? (selected || []).map(i => i.id)
      : selected ? [selected.id]: [];
    this._options.map(o => o.ticked = selectedIds.indexOf(o.id) !== -1);
    //TODO: do we really need this reassignment?
    this.viewToModel(selected);
  }

  select(option) {
    let selectedOptions;
    option.ticked = !option.ticked;
    if (this._multiple) {
      selectedOptions = [...this._selectedOptions]
      let selectedIds = selectedOptions.map(i => i.id);
      // select option & push inside collection
      if (selectedIds.indexOf(option.id) === -1) {
        selectedOptions.push(this._options.find(i => i.id == option.id));
      } else {
        // de-select option and remove from the collection
        this.removeItem(selectedOptions, option);
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

  viewToModel(options) {
    this._selectedOptions = options;
    this.onChange(options);
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