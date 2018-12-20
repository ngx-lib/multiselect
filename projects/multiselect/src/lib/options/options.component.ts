import { 
  Component, OnInit, Input, EventEmitter, Output,
  ChangeDetectionStrategy, TemplateRef, ViewEncapsulation, ViewChild
} from '@angular/core';

@Component({
  selector: 'ms-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // TODO: find better way, without encapsulation none thing
  encapsulation: ViewEncapsulation.None
})
export class OptionsComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() options: any[];
  @Input() optionsTemplate: TemplateRef<any>;
  @Output() selectOption = new EventEmitter<any>();
  @Output() loadMoreOptions = new EventEmitter<any>();

  @ViewChild('defaultOptionsTemplate') defaultOptionsTemplate: TemplateRef<any>;

  constructor() { }

  getOptionStyle(option: any) {
    return {'marked': option.ticked, disabled: (this.disabled || option.disabled)};
  }

  select (option) {
    this.selectOption.emit(option);
  }

  trackByOption (index) {
    return index
  }

  ngOnInit() {
    if(!this.optionsTemplate) {
      this.optionsTemplate = this.defaultOptionsTemplate;
    }
  }

  bottomReached() {
    this.loadMoreOptions.emit();
  }

}
