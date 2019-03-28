import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-observable-dynamic-update',
  templateUrl: './observable-dynamic-update.component.html'
})
export class ObservableDynamicUpdateComponent implements OnInit {

  observableOptions;
  observableOptionsObserver;

  constructor() {}

  ngOnInit(): void {
    this.observableOptions = new Observable((observer) => {
      this.observableOptionsObserver = observer;
    });
  }

  populateDropdown(){
    this.observableOptionsObserver.next([
      { "id": 1, "name": "Manchester United" },
      { "id": 2, "name": "Liverpool F.C." },
      { "id": 3, "name": "Chelsea F.C." },
      { "id": 4, "name": "Arsenal F.C."},
      { "id": 5, "name": "FC Barcelona" }
  ]);
  }
}
