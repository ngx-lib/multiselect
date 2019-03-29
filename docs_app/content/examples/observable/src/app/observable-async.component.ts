import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-observable-async',
  templateUrl: './observable-async.component.html'
})
export class ObservableAsyncComponent implements OnInit {

  observableOptions;
  selectedOptions;

  constructor() {}

  ngOnInit(): void {
    this.selectedOptions = new FormControl([
      { "id": 2, "name": "Liverpool F.C." },
      { "id": 3, "name": "Chelsea F.C." }
    ]);

    this.observableOptions = new Observable((observer) => {
      observer.next([
        { "id": 1, "name": "Manchester United" }, 
        { "id": 2, "name": "Liverpool F.C." },
        { "id": 3, "name": "Chelsea F.C." },
        { "id": 4, "name": "Arsenal F.C." },
        { "id": 5, "name": "FC Barcelona" }
      ]);
    });

  }
}
