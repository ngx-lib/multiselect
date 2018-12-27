import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'ms-single-select',
  templateUrl: './single-select-with-property-map.component.html',
  styleUrls: ['./single-select-with-property-map.component.css']
})
export class SingleSelectWithPropertyMapComponent implements OnInit {

  propertyMapOptions;
  singleSelectOptionsSubscription: Subscription;

  constructor (private appService: AppService) {}

  propertyMapValue: any = {"EmpId": 3, "EmpName": "c"};

  propertyMap = {
    'EmpId': 'id',
    'EmpName': 'name'
  };
  
  ngOnInit(): void {
    // Retrieving data for dropdown
    this.singleSelectOptionsSubscription = this.appService.getSingleSelectOptions().subscribe(
      data => {
        this.propertyMapOptions = [...data]
      }
    )
  }

  genericEvent($event, eventName) {
    console.log('Event fired '+ eventName, $event)
  }

  ngOnDestroy () {
    this.singleSelectOptionsSubscription.unsubscribe();
  }
}
