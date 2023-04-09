import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent implements OnInit {

  options;
  selectedOptions = new FormControl({
    "id": 1,
    "name": "India"
  });

  ngOnInit() {
    this.options = [
      {
        "id": 1,
        "name": "India"
      },
      {
        "id": 2,
        "name": "Japan"
      },
      {
        "id": 3,
        "name": "China"
      },
      {
        "id": 4,
        "name": "Australia"
      },
      {
        "id": 5,
        "name": "Paris"
      }
    ];
  }
}
