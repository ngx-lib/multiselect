import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservableAsyncServiceComponent } from './observable-async-service.component';


@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ ObservableAsyncServiceComponent ],
  entryComponents: [ ObservableAsyncServiceComponent ]
})
export class ObservableAsyncServiceModule {
}
