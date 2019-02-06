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
    name: 'India'
  }, {
    id: 2,
    name: 'USA'
  }, {
    id: 3,
    name: 'Japan'
  }, {
    id: 4,
    name: 'China'
  }, {
    id: 5,
    name: 'Brazil'
  }, {
    id: 6,
    name: 'Australia'
  }];

}
