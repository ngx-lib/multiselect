import { Component } from '@angular/core';

@Component({
  selector: 'ms-theme',
  templateUrl: './theme.component.html'
})
export class ThemeComponent {
  selectedCountry = {
    id: 1,
    name: 'India'
  };

  countries = [
    {
      id: 1,
      name: 'Australia'
    },
    {
      id: 2,
      name: 'Brazil'
    },
    {
      id: 3,
      name: 'China'
    },
    {
      id: 4,
      name: 'India'
    },
    {
      id: 5,
      name: 'Japan'
    },
    {
      id: 6,
      name: 'USA'
    }
  ];
}
