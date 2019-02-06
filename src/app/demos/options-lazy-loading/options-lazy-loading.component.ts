import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../app.service';

@Component({
  selector: 'ms-options-lazy-loading',
  templateUrl: './options-lazy-loading.component.html',
  styleUrls: ['./options-lazy-loading.component.css']
})
export class OptionsLazyLoadingComponent implements OnInit {
  
  persons;
  personsSubscription: Subscription;

  constructor (private appService: AppService) {}

  person: any = {id: 2, name: 'Person 1'}
  
  ngOnInit(): void {
    this.personsSubscription = this.appService.getPersons().subscribe(
      data => {
        this.persons = [...data]
      }
    )
  }

  ngOnDestroy () {
    this.personsSubscription.unsubscribe();
  }

}
