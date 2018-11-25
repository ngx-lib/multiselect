import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AppService } from './app.service';

@Component({
  selector: 'im-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  singleSelectOptions;
  multipleSelectOptions;
  groupingOptions;
  observableOptions;
  singleSelectOptionsSubscription: Subscription;
  multipleSelectOptionsSubscription: Subscription;
  groupingOptionsSubscription: Subscription;

  constructor (private appService: AppService) {}

  singleSelect: any = {id: 1, name: 'a'}
  mutlipleSelect = new FormControl([
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'}
  ]);
  groupingSupport = new FormControl([
    {id: 1, name: 'Test 1'},
  ]);
  withObservable = new FormControl([
    {id: 1, name: 'Test 1'},
  ]);

  ngOnInit(): void {
    // Retrieving data for dropdown
    this.singleSelectOptionsSubscription = this.appService.getSingleSelectOptions().subscribe(
      data => this.singleSelectOptions = data
    )
    this.multipleSelectOptionsSubscription = this.appService.getMultipleSelectOptions().subscribe(
      data => this.multipleSelectOptions = data
    )
    this.groupingOptionsSubscription = this.appService.getGroupingOptions().subscribe(
      data => this.groupingOptions = data
    )
    setTimeout(() => {
      this.observableOptions = this.appService.getObservableOptions()
    }, 5000)
  }

  ngOnDestroy () {
    this.singleSelectOptionsSubscription.unsubscribe();
    this.multipleSelectOptionsSubscription.unsubscribe();
    this.groupingOptionsSubscription.unsubscribe();
  }
}
