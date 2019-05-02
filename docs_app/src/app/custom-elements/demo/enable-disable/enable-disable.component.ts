import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ms-enable-disable',
  templateUrl: './enable-disable.component.html'
})
export class EnableDisableComponent implements OnInit {

  options;
  selectedOptions;
  form: FormGroup;
  @ViewChild('multiSelect')
  multiselectRef: any;

  constructor() {}

  ngOnInit(): void {
    this.options = [{
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
    this.form = new FormGroup({
      selectedOptions: new FormControl([{
        "id": 3,
        "name": "Eden Hazard",
        "team": "Chelsea FC"
      }])
    })
  }

  disableWholeDropdown() {
    this.form.controls['selectedOptions'].disable();
  }

  disableWholeDropdownTempRefVariable(){
    this.multiselectRef.disabled = true;
  }

  disableFirstOption(){
    this.options[0].disabled = true;
    this.options = [...this.options];
  }

  disableWholeGroup(){
    this.options = this.options.map((player) => {
      if(player.team === 'Manchester United')
        player.disabled = true;
      return player;
    });
  }

}
