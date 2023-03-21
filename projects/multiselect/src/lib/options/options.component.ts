import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { GroupByMultiselectOption, MultiselectOption } from '../models/multiselect-option.model';

@Component({
  selector: 'ms-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsComponent implements OnInit, OnChanges {
  _options: MultiselectOption[] | GroupByMultiselectOption[] = [];

  @Input() disabled: boolean = false;
  @Input() set options(value: MultiselectOption[] | GroupByMultiselectOption[]) {
    this._options = value;
  }
  get() {
    return this._options;
  }
  @Input() optionsTemplate!: TemplateRef<any>;
  @Output() selectOption = new EventEmitter<any>();

  start: number = 0;
  end: number = 5;
  filteredOptions!: MultiselectOption[] | GroupByMultiselectOption[];

  @ViewChild('defaultOptionsTemplate', { static: true } as any) defaultOptionsTemplate!: TemplateRef<any>;

  constructor() {}

  getOptionStyle(option: MultiselectOption | GroupByMultiselectOption) {
    return { marked: option.ticked, disabled: this.disabled || option.disabled };
  }

  select(option: MultiselectOption | GroupByMultiselectOption) {
    this.selectOption.emit(option);
  }

  updateRange({ start, end }: Record<string, number>) {
    this.filteredOptions = [...this._options].slice(start, end) as MultiselectOption[] | GroupByMultiselectOption[];
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { options } = changes;
    if (!this.optionsTemplate) {
      this.optionsTemplate = this.defaultOptionsTemplate;
    }
    if (options.currentValue !== options.previousValue) {
      this.updateRange({ start: this.start, end: this.end });
    }
  }
}
