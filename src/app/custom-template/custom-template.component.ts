import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ms-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent implements OnInit {
  customTemplateOptions;
  customTemplateOptionsSubscription: Subscription;

  constructor (private appService: AppService) {}

  customTemplateSelect: any = new FormControl([
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
  ]);
  
  ngOnInit(): void {
    // Retrieving data for dropdown
    this.customTemplateOptionsSubscription = this.appService.getSingleSelectOptions().subscribe(
      data => {
        this.customTemplateOptions = [...data]
      }
    )
  }

  genericEvent($event, eventName) {
    console.log('Event fired '+ eventName, $event)
  }

  ngOnDestroy () {
    this.customTemplateOptionsSubscription.unsubscribe();
  }

}
