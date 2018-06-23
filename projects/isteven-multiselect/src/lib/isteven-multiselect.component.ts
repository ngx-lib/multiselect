import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-isteven-multiselect',
  templateUrl: './isteven-multiselect.component.html',
  styles: ['./isteven-multiselect.component.css']
})
export class IstevenMultiselectComponent implements OnInit {

  private _multiple = false;
  selectedOptions: any | any[] = null;

  @Input() options: any[];
  @Input() isOpen: boolean = false;
  @Input()
  set multiple(value: boolean) {
    if (value) this.selectedOptions = [];
    this._multiple = value;
  }

  isMultiple() {
    return this._multiple;
  }

  ngOnInit() {
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