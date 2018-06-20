import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-isteven-multiselect',
  template: './isteven-multiselect.component.html',
  styles: ['./isteven-multiselect.component.html']
})
export class IstevenMultiselectComponent implements OnInit {

  @Input() options: any[];

  constructor() { }

  ngOnInit() {
  }

}