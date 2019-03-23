import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { SingleSelectComponent } from './single-select.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ SingleSelectComponent ],
  entryComponents: [ SingleSelectComponent ]
})
export class SingleSelectModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = SingleSelectComponent;
}
