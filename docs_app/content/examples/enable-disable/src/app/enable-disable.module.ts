import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnableDisableComponent } from './enable-disable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ EnableDisableComponent ],
  entryComponents: [ EnableDisableComponent ]
})
export class EnableDisableModule {
}
