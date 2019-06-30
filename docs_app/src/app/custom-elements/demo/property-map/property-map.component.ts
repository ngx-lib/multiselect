import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-property-map',
  templateUrl: './property-map.component.html'
})
export class PropertyMapComponent implements OnInit {
  options;
  team;
  propertyMap = {
    "id" : "teamId",
    "name" : "teamName"
  }

  constructor() {}

  ngOnInit(): void {
    this.options = [{
      "teamId": 1,
      "teamName": "Manchester United"
    },
    {
      "teamId": 2,
      "teamName": "Liverpool F.C."
    },
    {
      "teamId": 3,
      "teamName": "Chelsea F.C."
    },
    {
      "teamId": 4,
      "teamName": "Arsenal F.C."
    },
    {
      "teamId": 5,
      "teamName": "FC Barcelona"
    }];
    // this.team = {
    //   "teamId": 1,
    //   "teamName": "Manchester United"
    // }
  }
}
