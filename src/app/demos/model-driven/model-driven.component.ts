import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  multipleSelectOptions;
  multipleSelectOptionsSubscription: Subscription;

  constructor (private appService: AppService) {}

  mutlipleSelect = new FormControl([
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'}
  ]);
  
  ngOnInit(): void {
    // Retrieving data for dropdown
    this.multipleSelectOptionsSubscription = this.appService.getMultipleSelectOptions().subscribe(
      data => this.multipleSelectOptions = data
    )
  }

  genericEvent($event, eventName) {
    console.log('Event fired '+ eventName, $event)
  }

  ngOnDestroy () {
    this.multipleSelectOptionsSubscription.unsubscribe();
  }
}
