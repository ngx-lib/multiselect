import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent implements OnInit {

  options;
  selectedOptions;

  constructor() { }

  ngOnInit() {
    this.options = [
      { "id": 1, "name": "India" },
      { "id": 2, "name": "Japan" },
      { "id": 3, "name": "China" },
      { "id": 4, "name": "Australia" },
      { "id": 5, "name": "Paris" }
    ];
    this.selectedOptions = [{
      "id": 1,
      "name": "India"
    }];
  }
}
