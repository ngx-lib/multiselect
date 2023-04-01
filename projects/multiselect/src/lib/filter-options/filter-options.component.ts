import { Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ms-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOptionsComponent implements OnInit, OnDestroy {
  filterName!: FormControl;
  filterNameSubscription!: Subscription;

  @Output() onSearchChange = new EventEmitter<string>();

  constructor() { }

  clearInputFilter() {
    this.filterName.setValue('');
  }

  ngOnInit() {
    this.filterName = new FormControl('');
    this.filterNameSubscription = this.filterName.valueChanges.subscribe(
      val => this.onSearchChange.emit(val)
    );
  }

  ngOnDestroy() {
    this.filterNameSubscription.unsubscribe();
  }
}
