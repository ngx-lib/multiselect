import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../../app.service';

@Component({
  selector: 'ms-large-volume-data',
  templateUrl: './large-volume-data.component.html'
})
export class LargeVolumeDataComponent implements OnInit {
  largeDatasetOptions;
  largeDatasetOptionsSubscription: Subscription;

  constructor(private appService: AppService) {}
  largeDatasetValue: any = [{ id: '5c28b4be6156fe5c09330e0e', name: 'Wilkerson Roy' }];

  ngOnInit(): void {
    // Retrieving data for dropdown
    this.largeDatasetOptionsSubscription = this.appService
      .getLargeDataset()
      .subscribe((data: any) => (this.largeDatasetOptions = [...data]));
  }

  ngOnDestroy() {
    this.largeDatasetOptionsSubscription.unsubscribe();
  }
}
