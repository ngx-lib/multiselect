import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-multiple-select-grouping',
  templateUrl: './multiple-select-grouping.component.html',
  styleUrls: ['./multiple-select-grouping.component.css']
})
export class MultipleSelectGroupingComponent implements OnInit {

  groupingOptions;
  groupingOptionsSubscription: Subscription;

  constructor (private appService: AppService) {}

  groupingSupport = new FormControl([
    {id: 1, name: 'Test 1'},
  ]);
  
  ngOnInit(): void {
    // Retrieving data for dropdown
    this.groupingOptionsSubscription = this.appService.getGroupingOptions().subscribe(
      data => this.groupingOptions = data
    )
  }

  genericEvent($event, eventName) {
    console.log('Event fired '+ eventName, $event)
  }

  ngOnDestroy () {
    this.groupingOptionsSubscription.unsubscribe();
  }

}
