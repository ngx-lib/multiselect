import { NgModule, forwardRef } from '@angular/core';
import { IstevenMultiselectComponent } from './isteven-multiselect.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplaySelectedValuePipe } from './display-selected-value.pipe';
import { HelperElementsComponent } from './helper-elements/helper-elements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    IstevenMultiselectComponent, 
    DisplaySelectedValuePipe, 
    HelperElementsComponent
  ],
  exports: [IstevenMultiselectComponent]
})
export class IstevenMultiselectModule { }
