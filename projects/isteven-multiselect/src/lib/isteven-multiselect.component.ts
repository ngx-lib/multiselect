import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, HostListener } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';

@Component({
  selector: 'ngx-isteven-multiselect',
  templateUrl: './isteven-multiselect.component.html',
  styles: ['./isteven-multiselect.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IstevenMultiselectComponent implements OnInit {

  private _multiple = false;
  private _propertyMap = {
    'id': 'id',
    'name': 'name'
  };
  _options = [];
  selectedOptions: any | any[] = null;

  constructor(private elementRef: ElementRef, private istevenMultiselectService: IstevenMultiselectService) {
  }

  @Input() isOpen: boolean = false;
  @Input() ofPrimitiveType: boolean = false;

  @Input() set propertyMap(val) {
    this._propertyMap = { ...this._propertyMap, ...val };
  }
  @Input()
  set options(collection) {
    if (this.ofPrimitiveType) {
      this._options = collection.map((item: any, index: number) => ({ id: index, name: item }))
    } else {
      let keys = Object.keys(this._propertyMap);
      this._options = collection.map((item: any, index: number) => {
        let obj = {};
        keys.reduce((a: any, b: string) => { obj[b] = item[this._propertyMap[b]] }, obj)
        return obj;
      })
    }
  }

  @Input()
  set multiple(value: boolean) {
    if (value) this.selectedOptions = [];
    this._multiple = value;
  }

  ngOnInit() {
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

  select(option) {
    if (this._multiple) {
      let selectedIds = this.selectedOptions.map(i => i.id);
      selectedIds.indexOf(option.id) === -1 && this.selectedOptions.push(option)
    } else {
      this.selectedOptions = option;
      this.close();
    }
  }

  // TODO: Consider creating a directive for this.
  // TODO: Also convert below to be work for element specific
  @HostListener('document:click', ['$event.target'])
  clickOutSide(event) {
    if(this.elementRef.nativeElement !== event && !this.istevenMultiselectService.closest(event, 'ngx-isteven-multiselect') && this.isOpen){
      this.close();
    }
  }

}