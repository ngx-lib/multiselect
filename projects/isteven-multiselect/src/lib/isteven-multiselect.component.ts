import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

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
    'value': 'value'
  };
  _options = [];
  selectedOptions: any | any[] = null;

  @Input() isOpen: boolean = false;
  @Input() ofPrimitiveType: boolean = false;

  @Input() 
  set options(collection){
    if(this.ofPrimitiveType){
      this._options = collection.map((item: any, index: number) => ({id: index, value: item}))
    } else {
      let keys = Object.keys(this._propertyMap);
      this._options = collection.map((item: any, index: number) => {
        let obj = {};
        keys.reduce((a: any, b: string) => { obj[b] = item[b] }, obj)
        return obj;
      })
    }
  }

  @Input() set propertyMap(val){
    this._propertyMap = { ...this._propertyMap , ...val };
  }
  @Input()
  set multiple(value: boolean) {
    if (value) this.selectedOptions = [];
    this._multiple = value;
  }

  isMultiple() {
    return this._multiple;
  }

  ngOnInit() {
    console.log(this)
  }

  isValueSelected() {
    return this._multiple ? this.selectedOptions.length: this.selectedOptions; 
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
      !this.selectedOptions.includes(option) && this.selectedOptions.push(option)
    } else {
      this.selectedOptions = option;
      this.close();
    }
  }

}