import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-getting-started',
  templateUrl: './getting-started.component.html'
})
export class GettingStartedComponent implements OnInit {

  options;
  selectedOption;

  constructor() { }

  ngOnInit() {
    this.options = [
      {
        "id": 1,
        "name": "Manchester United"
      },
      {
        "id": 2,
        "name": "Liverpool F.C."
      },
      {
        "id": 3,
        "name": "Chelsea F.C."
      },
      {
        "id": 4,
        "name": "Arsenal F.C."
      },
      {
        "id": 5,
        "name": "FC Barcelona"
      }
    ];
    this.selectedOption = {
      "id": 1,
      "name": "Manchester United"
    };
  }

}
