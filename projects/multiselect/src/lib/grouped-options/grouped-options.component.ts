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

  groupedOptions = [];
  start: number = 0
  end: number = 5
  totalCount: number = 0
  filteredOptions

  @Input() groupedProperty: string;
  @Input() disabled = false;
  @Input() multiple = false;
  @Input() optionsTemplate: TemplateRef<any>;
  @Input() set options(value) {
    this.groupedOptions = this.multiselectService.optionsGrouping(value, this.groupedProperty);
    console.log(this.multiselectService.virtualOptionsGroupingFlatten(value, 'category'))
    this.totalCount = 0
    this.groupedOptions.forEach(g => ++this.totalCount && g.values.forEach(v => ++this.totalCount))
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

  trackByGroup(index) {
    return index
  }

  trackByOption(index) {
    return index;
  }

  updateRange({ start, end }) {
    console.log(start, end)
    const optionsToBeFiltered = []
    let index = -1
    let startInserted: boolean = false
    // Step 1: find out start
    // TODO: Vague logic fix it later
    let options = [...this.options]
    group:
    for (let i = 0; i < options.length; i++) {
      ++index
      const option = options[i]
      const { values } = option
      if (index === start) {
        startInserted = true
      }
      for (let j = 0; j < values.length; j++) {
        ++index
        if (index === start) {
          startInserted = true
        }
        const value = values[j]
        if (index > (end - 1)) break group
        if (startInserted) optionsToBeFiltered.push(value)
      }
    }

    // Step 2: push into the array until end is figured out

    // Step 3: there is need of prepending at least one or two elements inside group
    // for better visualisation and less UI flickering

    // Step 4: There might be a chance of end of the group might have empty values, we can add one if UI flickers
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

  select(groupOption, option) {
    this.selectOption.emit(option);
    // TODO: check, why below works after emit?
    if (this.multiple) {
      const allAreSelected = groupOption.values.every(v => v.ticked)
      groupOption.ticked = allAreSelected;
    }
  }

}
