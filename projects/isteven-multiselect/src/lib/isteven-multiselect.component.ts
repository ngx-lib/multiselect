import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-isteven-multiselect',
  templateUrl: './isteven-multiselect.component.html',
  styles: ['./isteven-multiselect.component.css']
})
export class IstevenMultiselectComponent implements OnInit {

  @Input() options: any[];
  @Input() isOpen: Boolean = false;

  selectedOptions: any | any[];

  ngOnInit() {
  }

  close() {
    this.isOpen = false;
  }

  clear(value?) {
    this.selectedOptions = value;
    this.close();
  }

  select(option) {
    this.selectedOptions = option;
    this.close();
  }

}