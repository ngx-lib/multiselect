import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { EnableDisableComponent } from './enable-disable.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule ,
    MatButtonModule
  ],
  declarations: [ EnableDisableComponent ],
  entryComponents: [ EnableDisableComponent ]
})
export class EnableDisableModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = EnableDisableComponent;
}
