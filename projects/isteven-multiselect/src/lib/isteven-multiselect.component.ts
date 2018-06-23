import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-isteven-multiselect',
  templateUrl: './isteven-multiselect.component.html',
  styles: ['./isteven-multiselect.component.css']
})
export class IstevenMultiselectComponent implements OnInit {

  @Input() options: any[];
  @Input() isOpen: Boolean = false;

  selectedValues: any;
  
  ngOnInit() {
  }

  dropdownClose(){
    this.isOpen = false;
  }

  select(option){
    this.selectedValues = option;
    this.dropdownClose();
  }

}