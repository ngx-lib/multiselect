import { 
  Component, OnInit, Input, ChangeDetectionStrategy, Output, 
  EventEmitter, TemplateRef, ViewEncapsulation, ViewChild
} from '@angular/core';
import { NgxMultiselectService } from '../services/multiselect.service';

@Component({
  selector: 'ms-grouped-options',
  templateUrl: './grouped-options.component.html',
  styleUrls: ['./grouped-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // TODO: find better way, without encapsulation none thing
  encapsulation: ViewEncapsulation.None
})
export class GroupedOptionsComponent implements OnInit {

  groupedOptions = [];

  @Input() groupedProperty: string;
  @Input() disabled = false;
  @Input() optionsTemplate: TemplateRef<any>;
  @Input() set options (value) {
    this.groupedOptions = this.multiselectService.optionsGrouping(value, this.groupedProperty);
  }
  get options(){
    return this.groupedOptions;
  }
  @Output() selectOption = new EventEmitter<any>();
  @Output() selectGroup = new EventEmitter<any>();

  @ViewChild('defaultOptionsTemplate') defaultOptionsTemplate: TemplateRef<any>;

  constructor(private multiselectService: NgxMultiselectService) { }

  getOptionStyle(option: any) {
    return {'marked': option.ticked, disabled: (this.disabled || option.disabled)};
  }

  getGroupOptionStyle(group: any) {
    return {'marked': (group.ticked && group.values.every(v => v.ticked)), disabled: this.disabled};
  }

  trackByGroup (groupOption) {
    return groupOption.name
  }

  trackByOption (option) {
    return option.id
  }

  ngOnInit() {
    if(!this.optionsTemplate) {
      this.optionsTemplate = this.defaultOptionsTemplate;
    }
  }

  groupOptionClick(group: any) {
    group.ticked = !group.ticked;
    const { values } = group;
    values.forEach(val => val.ticked = group.ticked);
    this.selectGroup.emit(group);
  }

  select(groupOption, option) {
    this.selectOption.emit(option);
    const allAreSelected = groupOption.values.every(v => v.ticked)
    groupOption.ticked = allAreSelected;
  }

}
