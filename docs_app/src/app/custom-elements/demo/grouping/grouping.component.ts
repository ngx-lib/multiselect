import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-grouping',
  templateUrl: './grouping.component.html'
})
export class GroupingComponent implements OnInit {

  footBallPlayers;
  selectedFootBallPlayers;

  constructor() {
    this.footBallPlayers = [{
      "id": 1,
      "name": "Paul Pogba",
      "team": "Manchester United"
    },
    {
      "id": 2,
      "name": "Fred",
      "team": "Manchester United"
    },
    {
      "id": 3,
      "name": "Eden Hazard",
      "team": "Chelsea FC"
    },
    {
      "id": 4,
      "name": "Jorginho",
      "team": "Chelsea FC"
    },
    {
      "id": 5,
      "name": "Leonel Messi",
      "team": "FC Barcelona"
    }];
    this.selectedFootBallPlayers = new FormControl([{
      "id": 3,
      "name": "Eden Hazard",
      "team": "Chelsea FC"
    }]);
  }

  ngOnInit() {
  }

}
