import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'ms-observable-subscribe',
  templateUrl: './observable-subscribe.component.html'
})
export class ObservableSubscribeComponent implements OnInit {

  selectedOptions;
  options;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.options = this._appService.getObservableOptions().subscribe((data) => {
      this.options = data;
      this.selectedOptions = [this.options[0], this.options[1]];
    });
  }
}
