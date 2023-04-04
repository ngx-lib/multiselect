import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AppService } from './app.service';

@Component({
  selector: 'ms-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  singleSelectOptions;
  propertyMapOptions;
  multipleSelectOptions;
  groupingOptions;
  observableOptions;
  customTemplateOptions;
  singleSelectOptionsSubscription: Subscription;
  multipleSelectOptionsSubscription: Subscription;
  groupingOptionsSubscription: Subscription;
  bigData: any[] = [];
  largeDatasetValue;

  constructor(private appService: AppService) { }

  singleSelect: any = { id: 1, name: 'a' };
  propertyMapValue: any = { id: 2, name: 'b' };
  mutlipleSelect = new FormControl([{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }]);
  groupingSupport = new FormControl([{ id: 1, name: 'Test 1' }]);
  withObservable = new FormControl([{ id: 1, name: 'Test 1' }]);
  customTemplateSelect: any = new FormControl([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);

  propertyMap = {
    EmpId: 'id',
    EmpName: 'name'
  };

  ngOnInit(): void {
    this.singleSelectOptionsSubscription = this.appService.getSingleSelectOptions().subscribe(data => {
      this.propertyMapOptions = [...data];
      this.singleSelectOptions = [...data];
      this.customTemplateOptions = [...data];
    });
    this.multipleSelectOptionsSubscription = this.appService
      .getMultipleSelectOptions()
      .subscribe(data => (this.multipleSelectOptions = data));
    this.groupingOptionsSubscription = this.appService
      .getGroupingOptions()
      .subscribe(data => (this.groupingOptions = data));
    this.observableOptions = this.appService.getObservableOptions();
    this.appService.getLargeDataset().subscribe(
      (data: any[]) => this.bigData = data
    );
  }

  genericEvent($event, eventName) {
    console.log('Event fired ' + eventName, $event);
  }

  ngOnDestroy() {
    this.singleSelectOptionsSubscription.unsubscribe();
    this.multipleSelectOptionsSubscription.unsubscribe();
    this.groupingOptionsSubscription.unsubscribe();
  }
}
