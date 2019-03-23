import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { ObservableSubscribeComponent } from './observable-subscribe.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ ObservableSubscribeComponent ],
  entryComponents: [ ObservableSubscribeComponent ]
})
export class ObservableSubscribeModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ObservableSubscribeComponent;
}
