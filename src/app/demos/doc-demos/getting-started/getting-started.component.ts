import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-getting-started',
  templateUrl: './getting-started.component.html'
})
export class GettingStartedComponent implements OnInit {

  options;
  selectedOptions;

  constructor() { }

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
        "name": "France"
      }
    ];
    this.selectedOptions = [{
      "id": 1,
      "name": "India"
    }];
  }

}
