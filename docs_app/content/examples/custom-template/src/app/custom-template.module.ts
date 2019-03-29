// #docregion

import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTemplateComponent } from './custom-template.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ CustomTemplateComponent ],
  entryComponents: [ CustomTemplateComponent ]
})
export class CustomTemplateModule {
}
