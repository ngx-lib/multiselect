import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-model-driven',
  templateUrl: './model-driven.component.html'
})
export class ModelDrivenComponent implements OnInit {

  options;
  selectedOptions;

  constructor() {}

  ngOnInit(): void {
    this.options = [
      { "id": 1, "name": "Manchester United" },
      { "id": 2, "name": "Liverpool F.C." },
      { "id": 3, "name": "Chelsea F.C." },
      { "id": 4, "name": "Arsenal F.C." }, 
      { "id": 5, "name": "FC Barcelona" }
    ];
    this.selectedOptions = new FormControl([
      { "id": 2, "name": "Liverpool F.C." },
      { "id": 3, "name": "Chelsea F.C." }
    ]);
  }

}
