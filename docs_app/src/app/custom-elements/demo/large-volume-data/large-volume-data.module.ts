import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { LargeVolumeDataComponent } from './large-volume-data.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ LargeVolumeDataComponent ],
  entryComponents: [ LargeVolumeDataComponent ]
})
export class LargeVolumeDataModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = LargeVolumeDataComponent;
}
