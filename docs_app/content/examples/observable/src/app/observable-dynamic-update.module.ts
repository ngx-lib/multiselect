import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableDynamicUpdateComponent } from './observable-dynamic-update.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ ObservableDynamicUpdateComponent ],
  entryComponents: [ ObservableDynamicUpdateComponent ]
})
export class ObservableDynamicUpdateModule {
}
