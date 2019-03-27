import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ TemplateDrivenComponent ],
  entryComponents: [ TemplateDrivenComponent ]
})
export class TemplateDrivenModule {
}
