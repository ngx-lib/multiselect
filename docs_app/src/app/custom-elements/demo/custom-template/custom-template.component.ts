import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-custom-template',
  templateUrl: './custom-template.component.html'
})
export class CustomTemplateComponent implements OnInit {

  options;
  selectedOptions;

  constructor() { }

  ngOnInit() {
    this.options = [
      {
        "id": 1,
        "name": "India",
        "flag": "https://www.countryflags.io/in/flat/64.png"
      },
      {
        "id": 2,
        "name": "Japan",
        "flag": "https://www.countryflags.io/jp/flat/64.png"
      },
      {
        "id": 3,
        "name": "China",
        "flag": "https://www.countryflags.io/cn/flat/64.png"
      },
      {
        "id": 4,
        "name": "Australia",
        "flag": "https://www.countryflags.io/au/flat/64.png"
      },
      {
        "id": 5,
        "name": "Paris",
        "flag": "https://www.countryflags.io/fr/flat/64.png"
      }
    ];
  }
}
