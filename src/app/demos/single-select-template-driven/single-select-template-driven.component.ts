import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../app.service';

@Component({
  selector: 'ms-single-select',
  templateUrl: './single-select-template-driven.component.html',
  styleUrls: ['./single-select-template-driven.component.css']
})
export class SingleSelectTemplateDrivenComponent implements OnInit {

  singleSelectOptions;
  singleSelectOptionsSubscription: Subscription;

  constructor (private appService: AppService) {}

  singleSelect: any = {id: 1, name: 'a'}
  propertyMapValue: any = {id: 2, name: 'b'}
  
  ngOnInit(): void {
    // Retrieving data for dropdown
    this.singleSelectOptionsSubscription = this.appService.getSingleSelectOptions().subscribe(
      data => {
        this.singleSelectOptions = [...data]
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
