import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-simple-demo',
  templateUrl: './simple-demo.component.html',
  styleUrls: ['./simple-demo.component.css']
})
export class SimpleDemoComponent{

  selectedCountry = {
    id: 1,
    name: 'India'
  };

  countries = [{
    id: 1,
    name: 'Australia'
  }, {
    id: 2,
    name: 'Brazil'
  }, {
    id: 3,
    name: 'China'
  }, {
    id: 4,
    name: 'India'
  }, {
    id: 5,
    name: 'Japan'
  }, {
    id: 6,
    name: 'USA'
  }];
}
