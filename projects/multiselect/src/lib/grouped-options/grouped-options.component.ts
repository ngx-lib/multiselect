import {
  Component, OnInit, Input, ChangeDetectionStrategy, Output, SimpleChanges,
  EventEmitter, TemplateRef, ViewEncapsulation, ViewChild, OnChanges
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
export class GroupedOptionsComponent implements OnInit, OnChanges {

  groupedOptions = []
  start: number = 0
  end: number = 5
  totalCount: number = 0
  filteredOptions

  @Input() groupedProperty: string;
  @Input() disabled = false;
  @Input() multiple = false;
  @Input() optionsTemplate: TemplateRef<any>;
  @Input() set options(value) {
    this.groupedOptions = this.multiselectService.virtualOptionsGroupingFlatten(value, this.groupedProperty);
    this.totalCount = this.groupedOptions.length
  }
  get options() {
    return this.groupedOptions;
  }
  @Output() selectOption = new EventEmitter<any>();
  @Output() selectGroup = new EventEmitter<any>();

  @ViewChild('defaultOptionsTemplate') defaultOptionsTemplate: TemplateRef<any>;

  constructor(private multiselectService: NgxMultiselectService) { }

  getOptionStyle(option: any) {
    return { 'marked': option.ticked, disabled: (this.disabled || option.disabled) };
  }

  getGroupOptionStyle(group: any) {
    return { 'marked': group.ticked, disabled: (!this.multiple || group.disabled) };
  }

  updateRange({ start, end }) {
    this.filteredOptions = [...this.groupedOptions].slice(start, end)
  }

  ngOnInit() {
    if (!this.optionsTemplate) {
      this.optionsTemplate = this.defaultOptionsTemplate;
    }
  }

  ngOnChanges({ options }: SimpleChanges) {
    if (options.currentValue !== options.previousValue) {
      this.updateRange({ start: this.start, end: this.end })
    }
  }

  groupOptionClick(group: any) {
    this.selectGroup.emit({ values: group.values, ticked: !group.ticked });
  }

  select(option) {
    this.selectOption.emit(option);
    // // TODO: check, why below works after emit?
    // if (this.multiple) {
    //   const allAreSelected = groupOption.values.every(v => v.ticked)
    //   groupOption.ticked = allAreSelected;
    // }
  }

}
