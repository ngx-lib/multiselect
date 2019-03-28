import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeVolumeDataComponent } from './virtual-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

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
export class VirtualListModule {
}
