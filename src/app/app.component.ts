import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'im-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  singleSelectOptions;
  multipleSelectOptions;
  groupingOptions;
  observableOptions;

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
    this.singleSelectOptions = this.appService.getSingleSelectOptions()
    this.multipleSelectOptions = this.appService.getMultipleSelectOptions()
    this.groupingOptions = this.appService.getGroupingOptions()
    setTimeout(() => {
      this.observableOptions = this.appService.getObservableOptions()
    }, 5000)
  }
}
