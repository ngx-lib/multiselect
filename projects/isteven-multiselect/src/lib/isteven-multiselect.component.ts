import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, HostListener, forwardRef, Injector } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, DefaultValueAccessor } from '@angular/forms';
import { IstevenMultiselectBaseComponent } from './isteven-multiselect-base.component';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};

@Component({
  selector: 'ngx-isteven-multiselect',
  templateUrl: './isteven-multiselect.component.html',
  styleUrls: ['./isteven-multiselect.component.css'],
  providers: [DEFAULT_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IstevenMultiselectComponent extends IstevenMultiselectBaseComponent implements OnInit, ControlValueAccessor {

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

  // public variables
  _options = [];
  selectedOptions: any | any[] = null;

  // Input bindings
  @Input() isOpen: boolean = false;
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
  set multiple(value: boolean) {
    if (value) this.selectedOptions = [];
    this._multiple = value;
  }
  get() {
    return this._multiple;
  }

  ngOnInit() {
  }

  setOptions() {
    this._options = [...this._optionsCopy]
  }

  isValueSelected() {
    return this._multiple ? this.selectedOptions.length : this.selectedOptions;
  }

  close() {
    this.isOpen = false;
  }

  clear() {
    this.selectedOptions = this._multiple ? [] : null;
    this.close();
  }

  removeItem(item) {
    item.ticked = false;
    let index = this.selectedOptions.findIndex(o => o.id === item.id);
    this.selectedOptions.splice(index, 1);
  }

  select(option) {
    if (this._multiple) {
      let selectedIds = this.selectedOptions.map(i => i.id);
      if (selectedIds.indexOf(option.id) === -1) {
        option.ticked = !option.ticked;
        this.selectedOptions.push(option);
      } else {
        option.ticked = false;
        this.removeItem(option)
      }
    } else {
      // TODO: find optimized way to do below
      this._options.forEach(o => o.ticked = false);
      option.ticked = true;
      this.selectedOptions = option;
      this.close();
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

  selectAll() {
    this.selectedOptions = this._options.map(o => {
      o.ticked = true;
      return o;
    });
  }

  selectNone() {
    this._options.forEach(o => o.ticked = false);
    this.selectedOptions = [];
  }

  reset() {
    //TODO: Rever selectOptions value to older value
  }

}