import { NgModule, forwardRef } from '@angular/core';
import { IstevenMultiselectComponent } from './isteven-multiselect.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DisplaySelectedValuePipe } from './display-selected-value.pipe';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IstevenMultiselectComponent),
  multi: true
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IstevenMultiselectComponent, DisplaySelectedValuePipe],
  providers: [DEFAULT_VALUE_ACCESSOR],
  exports: [IstevenMultiselectComponent]
})
export class IstevenMultiselectModule { }
