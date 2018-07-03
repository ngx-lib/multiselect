import { NgModule, forwardRef } from '@angular/core';
import { IstevenMultiselectComponent } from './isteven-multiselect.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplaySelectedValuePipe } from './display-selected-value.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IstevenMultiselectComponent, DisplaySelectedValuePipe],
  exports: [IstevenMultiselectComponent]
})
export class IstevenMultiselectModule { }
