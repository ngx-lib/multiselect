import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { ObservableAsyncComponent } from './observable-async.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
export class ObservableAsyncModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ObservableAsyncComponent;
}
