import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservableAsyncComponent } from '../observable-async/observable-async.component';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ ObservableAsyncComponent ],
  entryComponents: [ ObservableAsyncComponent ]
})
export class ObservableAsyncServiceModule {
}
