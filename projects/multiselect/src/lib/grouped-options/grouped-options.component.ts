import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild,
  OnChanges
} from '@angular/core';
import { GroupByMultiselectOption, MultiselectOption } from '../models/multiselect-option.model';
import { collectAllDescendants, virtualOptionsGroupingFlatten } from '../utils';

@Component({
  selector: 'ms-grouped-options',
  templateUrl: './grouped-options.component.html',
  styleUrls: ['./grouped-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupedOptionsComponent implements OnChanges {
  _options: GroupByMultiselectOption[] = [];
  _selectedOptions: GroupByMultiselectOption[] = [];
  groupedOptions: GroupByMultiselectOption[] = [];
  start = 0;
  end = 5;
  filteredOptions!: GroupByMultiselectOption[];

  @Input() groupedProperty!: string;
  @Input() disabled = false;
  @Input() multiple = false;
  @Input() set selectedOptions(value: GroupByMultiselectOption[]) {
    this._selectedOptions = value;
    this.formGroupOptions(this._options, this._selectedOptions);
  }
  @Input() optionsTemplate!: TemplateRef<any>;
  @Input() set options(value) {
    this._options = value;
    this.formGroupOptions(value, this._selectedOptions);
  }
  get options() {
    return this.groupedOptions;
  }

  @Output() selectGroup = new EventEmitter<any>();
  @Output() selectOption = new EventEmitter<any>();

  @ViewChild('defaultOptionsTemplate', { static: true }) defaultOptionsTemplate!: TemplateRef<any>;

  // TODO: Refactor below logic
  formGroupOptions(collection: GroupByMultiselectOption[], selectedOptions: GroupByMultiselectOption[]) {
    let selectedIds = this.multiple
      ? (selectedOptions || []).map(s => s.id)
      : selectedOptions
        ? [(selectedOptions as any).id]
        : [];
    const values = collection.map(v => ({
      ...v,
      ticked: !v.isGroup ? selectedIds.indexOf(v.id) !== -1 : v.ticked
    }));
    this.groupedOptions = virtualOptionsGroupingFlatten(values, this.groupedProperty);
    this.updateRange({ start: this.start, end: this.end });
  }

  getOptionStyle(option: GroupByMultiselectOption) {
    return {
      group: option.isGroup,
      marked: option.ticked,
      disabled: this.disabled || option.disabled
    };
  }

  trackByFn(_, option: MultiselectOption | GroupByMultiselectOption) {
    return option.id;
  }

  updateRange({ start, end }: any) {
    this.start = start;
    this.end = end;
    this.filteredOptions = [...this.options].slice(start, end);
  }

  select(option: GroupByMultiselectOption) {
    if (!option.isGroup) {
      this.selectOption.emit(option);
    } else {
      option.ticked = !option.ticked;
      const values = collectAllDescendants(this.options, this.groupedProperty, option.name);
      this.selectGroup.emit({
        ...option,
        values: values
      });
    }
  }

  ngOnChanges() {
    if (!this.optionsTemplate) {
      this.optionsTemplate = this.defaultOptionsTemplate;
    }
  }
}
