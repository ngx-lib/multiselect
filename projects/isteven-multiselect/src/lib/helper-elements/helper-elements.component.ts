import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'im-helper-elements',
  templateUrl: './helper-elements.component.html',
  styleUrls: ['./helper-elements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelperElementsComponent {

  @Input() multiple: boolean = false;

  @Output() selectAllClicked = new EventEmitter();
  @Output() selectNoneClicked = new EventEmitter();
  @Output() resetClicked = new EventEmitter();

  constructor() { }

  selectAll() {
    this.selectAllClicked.emit();
  }

  selectNone() {
    this.selectNoneClicked.emit();
  }

  reset() {
    this.resetClicked.emit();
  }

}
