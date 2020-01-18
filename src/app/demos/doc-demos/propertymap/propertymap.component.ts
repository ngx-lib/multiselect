import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-property-map',
  templateUrl: './propertymap.component.html'
})
export class PropertyMapComponent implements OnInit {
  options;
  control: FormControl;
  propertyMap = {
    id: 'teamId',
    name: 'teamName'
  };

  constructor() {}

  disableForm() {
    this.control.disable();
  }

  ngOnInit(): void {
    this.options = [
      {
        teamId: 1,
        teamName: 'Manchester United'
      },
      {
        teamId: 2,
        teamName: 'Liverpool F.C.'
      },
      {
        teamId: 3,
        teamName: 'Chelsea F.C.'
      },
      {
        teamId: 4,
        teamName: 'Arsenal F.C.'
      },
      {
        teamId: 5,
        teamName: 'FC Barcelona'
      }
    ];
    this.control = new FormControl();
  }
}
