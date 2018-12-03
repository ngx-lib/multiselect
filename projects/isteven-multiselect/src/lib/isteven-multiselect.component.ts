import { 
  Component, Input, ChangeDetectionStrategy,  
  Injector, forwardRef, ElementRef, HostListener, ContentChild, TemplateRef, AfterContentInit, ViewChild
} from '@angular/core';
import { IstevenMultiselectService } from './services/isteven-multiselect.service';
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
export class IstevenMultiselectComponent extends IstevenMultiselectBaseComponent implements AfterContentInit {

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
  private _optionsCopy; //TODO: in future this will be master list
  private _isOpen: boolean = false;
  
  // public variables
  _selectedOptions: any | any[] = null;
  _options; //TODO: this will be local list

  // Input bindings
  @Input() set isOpen(value) {
    this._isOpen = value;
    if (value) this.onTouched();
  }
  get isOpen() { return this._isOpen; }
  @Input() disabled: boolean = false;
  @Input() groupedProperty: string;
  @Input() ofPrimitiveType: boolean = false;
  @Input() showMaxLabels: number = 3;
  @Input() set propertyMap(val) {
    this._defaultPropertyMap = { ...this._defaultPropertyMap, ...val };
  }
  @Input()
  set options(collection) {
    if(!collection) return;
    if (this.ofPrimitiveType) {
      this._optionsCopy = collection.map((item: any, index: number) => ({ id: index, name: item }));
    } else {
      let keys = Object.keys(this._defaultPropertyMap);
      this._optionsCopy = collection.map((item: any, index: number) => {
        let obj = { [this.groupedProperty]: item[this.groupedProperty] };
        keys.reduce((a: any, b: string) => { obj[b] = item[this._defaultPropertyMap[b]] }, obj);
        return obj;
      })
    }
    this.setOptions([...this._optionsCopy]);
    if(this.isOperationPending()) this.finishPendingOperations();
  }

  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: boolean) {
    if(value) this.viewToModel([]);
    this._multiple = value;
  }

  @ContentChild(TemplateRef)
  @Input() itemTemplate: TemplateRef<any>;

  @ViewChild('defaultItemTemplate', {read: TemplateRef})defaultItemTemplate: TemplateRef<any>;
  @ViewChild('defaultGroupItemTemplate', {read: TemplateRef})defaultGroupItemTemplate: TemplateRef<any>;

  filterOptionsList = (val) => {
    if(!val) return this.setOptions([...this._optionsCopy]);
    const options = this._optionsCopy.filter(i=> i.name && i.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    this.setOptions(options);
  }

  // All update to options should happen from below method.
  setOptions(options) {
    this._options = options;
  }

  getOptions() {
    return this._options ? [...this._options]: []
  }

  isValueSelected() {
    return this._multiple ? this._selectedOptions.length : this._selectedOptions;
  }

  close() {
    this.isOpen = false;
  }

  clear() {
    this.setOptions(this.getOptions().map(o=> ({...o, ticked: false})));
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
        selectedOptions.push(this.getOptions().find(i => i.id == option.id));
      } else {
        // if selected item exist in collection, post it
        this.removeItem(selectedOptions, option);
      }
    } else {
      // TODO: find optimized way to do below
      let val = option && option.id;
      let changedOptions = this.getOptions().map(o => ({...o, ticked: o.id == val}));
      selectedOptions = changedOptions.find(i => i.ticked);
      this.setOptions(changedOptions);
      this.close();
    }
    this.viewToModel(selectedOptions);
  }

  selectAll() {
    let allSelectedOptions = this.getOptions().map(o => ({ ...o, ticked: true}))
    this.setOptions(allSelectedOptions);
    this.viewToModel(allSelectedOptions);
  }

  selectNone () {
    this.setOptions(this.getOptions().map(o => ({ ...o, ticked: false})))
    this.viewToModel([]);
  }

  //TODO: Optimized below logic, it can be done in lesser steps
  selectGroup (group: any) {
    const { values, ticked } = group;
    let selectedValues = [...this._selectedOptions]
    let selectedIds = selectedValues.map(s=>s.id)
    let allGroupOptionIds = values.map(v=> v.id)
    // Get all ticked options
    // concat with selected options
    selectedValues = ticked ? selectedValues.concat(values): selectedValues.filter(o => allGroupOptionIds.indexOf(o.id) === -1);
    // Find unique out of them
    selectedIds = [...Array.from(new Set(selectedValues.map(item => item.id)))]
    // build selectedOptions array again
    selectedValues = this.getOptions().filter(o=> selectedIds.indexOf(o.id) !== -1)
    this.viewToModel(selectedValues);
    this.setOptions(this.getOptions().map(o => ({...o, ticked: selectedIds.indexOf(o.id) !== -1})))
  }

  reset() {
    this.viewToModel(this.initialValue);
    this.prepopulateOptions(this.initialValue);
  }

  // Responsible for updating value from view to model
  viewToModel(options) {
    this._selectedOptions = options;
    this.onChange(options);
  }

  ngAfterContentInit () {
    if (!this.itemTemplate) {
      this.itemTemplate = !this.groupedProperty ? this.defaultItemTemplate: this.defaultGroupItemTemplate;
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