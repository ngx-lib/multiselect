import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-enable-disable',
  templateUrl: './enable-disable.component.html'
})
export class EnableDisableComponent implements OnInit {
  options;
  selectedOptions;
  isDisabled = false;
  @ViewChild('multiSelect', { static: false })
  multiselectRef: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {
    this.options = [
      {
        id: 1,
        name: 'Paul Pogba',
        team: 'Manchester United'
      },
      {
        id: 2,
        name: 'Fred',
        team: 'Manchester United'
      },
      {
        id: 3,
        name: 'Eden Hazard',
        team: 'Chelsea FC'
      },
      {
        id: 4,
        name: 'Jorginho',
        team: 'Chelsea FC'
      },
      {
        id: 5,
        name: 'Leonel Messi',
        team: 'FC Barcelona'
      }
    ];
    this.selectedOptions = new FormControl([
      {
        id: 3,
        name: 'Eden Hazard',
        team: 'Chelsea FC'
      }
    ]);
  }

  disableWholeDropdown() {
    this.isDisabled = true;
  }

  disableWholeDropdownTempRefVariable() {
    //this.multiselectRef.disabled = true;
  }

  disableFirstOption() {
    this.options[0].disabled = true;
    this.options = [...this.options];
  }

  disableWholeGroup() {
    this.options = this.options.map(player => {
      if (player.team === 'Manchester United') player.disabled = true;
      return player;
    });
  }
}
