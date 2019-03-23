import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-events',
  templateUrl: './events.component.html'
})
export class EventsDemoComponent implements OnInit {
  options;
  message: string;

  constructor() {}

  ngOnInit(): void {
    // Retrieving data for dropdown
    this.options = [{
      "id": 1,
      "name": "Manchester United"
    },
    {
      "id": 2,
      "name": "Liverpool F.C."
    },
    {
      "id": 3,
      "name": "Chelsea F.C."
    },
    {
      "id": 4,
      "name": "Arsenal F.C."
    },
    {
      "id": 5,
      "name": "FC Barcelona"
    }];
  }

  onOpenFired() {
    this.message = 'I am open now, you can now click on any of my items ';
  }

  onCloseFired() {
    this.message = 'Oops, I am closed';
  }

  onItemClickFired($event: any) {
    this.message = `Yaay, u selected an item ${$event.name}`;
  }

  onGroupItemClickFired($event: any) {
    this.message = `Ohh, you are a pro. U selected a group '${$event.name}' containing '${$event.values.length}' names`;
  }

  onSelectAllFired() {
    this.message = 'You have selected all the items of list';
  }

  onSelectNoneFired() {
    this.message = 'Hmm, You dont want any selection';
  }

  onResetFired() {
    this.message = 'Look like you want to reset the component to initial state';
  }

  onClearFired() {
    this.message = 'You have cleared the text from input box. Now its empty';
  }

  onSearchChangeFired($event: any) {
    this.message = 'You have changed the search input for filtering. The new input is ' + $event;
  }
}
