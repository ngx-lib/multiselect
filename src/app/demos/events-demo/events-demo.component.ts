import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ms-events-demo',
  templateUrl: './events-demo.component.html',
  styleUrls: ['./events-demo.component.css']
})
export class EventsDemoComponent implements OnInit {

  groupingOptions;
  message: string;

  constructor (private appService: AppService) {}

  grouping = new FormControl([
    {id: 1, name: 'Test 1'},
  ]);

  ngOnInit(): void {
    // Retrieving data for dropdown
    this.appService.getGroupingOptions().subscribe(
      data => this.groupingOptions = data
    );
  }

  onOpenFired() {
    this.message = 'I am open now, you can now click on any of my items ';
  }

  onCloseFired() {
    this.message = 'Oops, I am closed';
  }

  onItemClickFired($event: any) {
    this.message = `Yaay, u selected an item ${$event.name}`;
  }

  onGroupItemClickFired($event: any) {
    this.message = `Ohh, you are a pro. U selected a group '${$event.name}' containing '${$event.values.length}' names`;
  }

  onSelectAllFired() {
    this.message = 'You have selected all the items of list';
  }

  onSelectNoneFired() {
    this.message = 'Hmm, You dont want any selection';
  }

  onResetFired() {
    this.message = 'Look like you want to reset the component to initial state';
  }

  onClearFired() {
    this.message = 'You have cleared the text from input box. Now its empty';
  }

  onSearchChangeFired($event: any) {
    this.message = 'You have changed the search input for filtering. The new input is ' + $event;
  }
}
