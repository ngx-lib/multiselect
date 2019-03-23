import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'ms-observable-async-service',
  templateUrl: './observable-async-service.component.html'
})
export class ObservableAsyncServiceComponent implements OnInit {

  selectedOptions;
  options;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.selectedOptions = [{
      "id": 2,
      "name": "Liverpool F.C."
    },
    {
      "id": 3,
      "name": "Chelsea F.C."
    }];
    this.options = this._appService.getObservableOptions();
  }

}
