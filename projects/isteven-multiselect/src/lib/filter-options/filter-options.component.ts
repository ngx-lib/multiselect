import { Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'im-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOptionsComponent implements OnInit, OnDestroy {

  filterName: FormControl;
  filterNameSubscription: Subscription;
  
  @Output() filterOptionsList = new EventEmitter<string>();

  constructor() { }
  
  clearText () {
    this.clearInputFilter();
    this.filterOptionsList.emit('')
  }

  clearInputFilter() {
    if (this.filterName.value) {
      this.filterName.setValue('');
    }
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
