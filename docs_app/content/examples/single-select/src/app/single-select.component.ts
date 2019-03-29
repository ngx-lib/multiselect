import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-single-select',
  templateUrl: './single-select.component.html',
})
export class SingleSelectComponent implements OnInit {

  countries;
  selectedCountry;

  constructor() { }

  ngOnInit() {
    this.countries = [{ id: 1, name: "India"},
      { id: 2, name: "USA" },
      { id: 3, name: "China" },
      { id: 4, name: "Japan" },
      { id: 5, name: "Australia" },
      { id: 6, name: "Brazil" }
    ];

    this.selectedCountry = {
      id: 1,
      name: "India"
    };
  }

}
