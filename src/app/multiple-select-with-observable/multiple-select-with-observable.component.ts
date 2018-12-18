import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-multiple-select-with-observable',
  templateUrl: './multiple-select-with-observable.component.html',
  styleUrls: ['./multiple-select-with-observable.component.css']
})
export class MultipleSelectWithObservableComponent implements OnInit {

  observableOptions;

  constructor (private appService: AppService) {}

  withObservable = new FormControl([
    {id: 1, name: 'Test 1'},
  ]);

  propertyMap = {
    'EmpId': 'id',
    'EmpName': 'name'
  };
  
  ngOnInit(): void {
    // Retrieving data for dropdown
    this.observableOptions = this.appService.getObservableOptions();
  }

  genericEvent($event, eventName) {
    console.log('Event fired '+ eventName, $event)
  }

  ngOnDestroy () {
  }
}
