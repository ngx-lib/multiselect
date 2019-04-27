import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aio-events-advanced',
  templateUrl: './events-advanced.component.html',
  styles: []
})
export class EventsAdvnacedComponent implements OnInit {

  countries;
  country;
  state;
  statesForSelectedCountry;

  data = [{
    id: 1,
    name : 'India',
    states : [{
      id: 1,
      name: 'Uttar Pradesh'
    },{
      id: 2,
      name: 'Bihar'
    },{
      id: 3,
      name: 'Rajasthan'
    }]
  },{
    id: 2,
    name: 'USA',
    states: [{
      id : 1,
      name: 'New York'
    },{
      id: 2,
      name: 'Arizona'
    }],
  }];

  constructor() { }

  ngOnInit() {
    this.countries = this.data;
  }

  onCountryClear () {
    this.country = null;
    this.state = null;
  }

  onCountrySelection(selectedCountry) {
    const country = this.data.find(country => country.name === selectedCountry.name)
    this.statesForSelectedCountry = country ? country.states: [];
    this.state = null;
  }

}
