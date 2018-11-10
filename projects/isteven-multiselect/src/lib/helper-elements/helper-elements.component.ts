import { Component, OnInit, Input, Host } from '@angular/core';
import { IstevenMultiselectComponent } from '../isteven-multiselect.component';

@Component({
  selector: 'im-helper-elements',
  templateUrl: './helper-elements.component.html',
  styleUrls: ['./helper-elements.component.css']
})
export class HelperElementsComponent implements OnInit {
  @Input() multiple: boolean = false;

  constructor(@Host() private host: IstevenMultiselectComponent) { }
  // TODO: is this implementation is making to much tight copuling between the host and consumer component
  selectAll() {
    let allSelectedOptions = this.host._options.map((o: any) => {
      o.ticked = true;
      return o;
    })
    this.host.viewToModel(allSelectedOptions);
  }

  selectNone() {
    this.host._options.forEach(o => o.ticked = false);
    this.host.viewToModel([]);
  }

  reset() {
    this.host.viewToModel(this.host.initialValue);
    this.host.prepopulateOptions(this.host.initialValue);
  }

  ngOnInit() {
  }

}
