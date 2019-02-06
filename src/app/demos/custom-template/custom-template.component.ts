import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
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
    {id: 1, name: 'Pankaj Parkar'},
    {id: 2, name: 'Nitin Kale'}
  ]);
  
  ngOnInit(): void {
    // Retrieving data for dropdown
    this.customTemplateOptionsSubscription = this.appService.getSingleSelectOptions().subscribe(
      data => {
        this.customTemplateOptions = [
          {id: 1, name: 'Pankaj Parkar', img: 'https://avatars3.githubusercontent.com/u/5320044?s=400&v=4'},
          {id: 2, name: 'Nitin Kale', img: 'https://avatars0.githubusercontent.com/u/19928610?s=460&v=4'},
          {id: 3, name: 'Srashti Jain', img: 'https://scontent.fnag1-1.fna.fbcdn.net/v/t1.0-1/c0.21.160.160a/p160x160/49442914_2219064881490014_6898018301180379136_n.jpg?_nc_cat=102&_nc_ht=scontent.fnag1-1.fna&oh=3b2e26bf7c67755475a739e7a2cb79a7&oe=5CD5DB38'}
        ]
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
