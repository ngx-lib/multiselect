import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild,
  OnChanges
} from '@angular/core';
import { NgxMultiselectService } from '../services/multiselect.service';

@Component({
  selector: 'ms-grouped-options',
  templateUrl: './grouped-options.component.html',
  styleUrls: ['./grouped-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupedOptionsComponent implements OnInit, OnChanges {
  _options = [];
  _selectedOptions = [];
  groupedOptions = [];
  start: number = 0;
  end: number = 5;
  filteredOptions;

  @Input() groupedProperty: string;
  @Input() disabled = false;
  @Input() multiple = false;
  @Input() set selectedOptions(value) {
    this._selectedOptions = value;
    this.formGroupOptions(this._options, this._selectedOptions);
  }
  @Input() optionsTemplate: TemplateRef<any>;
  @Input() set options(value) {
    this._options = value;
    this.formGroupOptions(value, this._selectedOptions);
  }
  get options() {
    return this.groupedOptions;
  }

  @Output() selectGroup = new EventEmitter<any>();
  @Output() selectOption = new EventEmitter<any>();

  @ViewChild('defaultOptionsTemplate', { static: true }) defaultOptionsTemplate: TemplateRef<any>;

  constructor(public multiselectService: NgxMultiselectService) {}

  // TODO: Refactor below logic
  formGroupOptions(collection, selectedOptions) {
    let selectedIds = this.multiple ? 
      (selectedOptions || []).map(s => s.id) : 
        selectedOptions ? [selectedOptions.id]
        :[];
    const values = collection.map(v => ({ 
      ...v, 
      ticked: !v.isGroup ? selectedIds.indexOf(v.id) !== -1 : v.ticked
     }));
    this.groupedOptions = this.multiselectService.virtualOptionsGroupingFlatten(values, this.groupedProperty);
    this.updateRange({ start: this.start, end: this.end });
  }

  getOptionStyle(option: any) {
    return {
      group: option.isGroup,
      marked: option.ticked,
      disabled: this.disabled || option.disabled
    };
  }

  trackByFn(_, option) {
    return option.id;
  }

  updateRange({ start, end }) {
    this.start = start;
    this.end = end;
    this.filteredOptions = [...this.options].slice(start, end);
  }

  select(option) {
    if (!option.isGroup) {
      this.selectOption.emit(option);
    } else {
      option.ticked = !option.ticked;
      const values = this.multiselectService.collectAllDescendants(this.options, this.groupedProperty, option.name);
      this.selectGroup.emit({ 
        ...option,
        values: values
      });
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.optionsTemplate) {
      this.optionsTemplate = this.defaultOptionsTemplate;
    }
  }
}
