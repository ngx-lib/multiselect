import { Component, OnInit, Host, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IstevenMultiselectComponent } from '../isteven-multiselect.component';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'im-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit, OnDestroy {

  filterName: FormControl;
  filterNameSubscription: Subscription;
  
  @Output() filterOptionsList = new EventEmitter<string>();

  constructor(@Host() private host: IstevenMultiselectComponent) { }
  
  clearText () {
    this.clearInputFilter();
    this.host.filterOptionsList('');
  }

  clearInputFilter() {
    if (this.filterName.value) this.filterName.setValue('');
  }

  ngOnInit() {
    this.filterName = new FormControl('')
    this.filterNameSubscription = this.filterName.valueChanges.subscribe(
      val => this.filterOptionsList.emit(val)
    );
  }

  ngOnDestroy () {
    this.clearInputFilter();
    this.filterNameSubscription.unsubscribe();
  }
}
