import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../element-registry';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { SingleSelectComponent } from './single-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule ],
  declarations: [ SingleSelectComponent ],
  entryComponents: [ SingleSelectComponent ]
})
export class SingleSelectModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = SingleSelectComponent;
}
