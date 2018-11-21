import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IstevenMultiselectService } from '../services/isteven-multiselect.service';

@Component({
  selector: 'im-grouped-options',
  templateUrl: './grouped-options.component.html',
  styleUrls: ['./grouped-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedOptionsComponent implements OnInit {

  groupedOptions = [];

  @Input() groupedProperty: string;
  @Input() disabled: boolean = false;
  @Input() set options (value) {
    this.groupedOptions = this.istevenMultiselectService.optionsGrouping(value, this.groupedProperty);
  }
  get options(){
    return this.groupedOptions;
  }
  @Output() selectOption = new EventEmitter<any>();
  @Output() selectGroup = new EventEmitter<any>();

  constructor(private istevenMultiselectService: IstevenMultiselectService) { }

  getOptionStyle(option: any) {
    return {'marked': option.ticked, disabled: (this.disabled || option.disabled)};
  }

  ngOnInit() {
  }

  groupOptionClick(group: any) {
    group.ticked = !group.ticked;
    const { values } = group;
    values.forEach(val => val.ticked = group.ticked);
    this.selectGroup.emit(group);
  }

  select(option) {
    this.selectOption.emit(option);
  }

}
