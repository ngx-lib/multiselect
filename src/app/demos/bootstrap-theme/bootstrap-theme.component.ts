import { Component } from '@angular/core';

@Component({
  selector: 'ms-bootstrap-theme',
  templateUrl: './bootstrap-theme.component.html',
  styleUrls: ['./bootstrap-theme.component.css']
})
export class BootstrapThemeComponent {
  
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
