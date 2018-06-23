import { NgModule } from '@angular/core';
import { IstevenMultiselectComponent } from './isteven-multiselect.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IstevenMultiselectComponent],
  exports: [IstevenMultiselectComponent]
})
export class IstevenMultiselectModule { }
