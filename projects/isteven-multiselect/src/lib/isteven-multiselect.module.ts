import { NgModule } from '@angular/core';
import { IstevenMultiselectComponent } from './isteven-multiselect.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplaySelectedValuePipe } from './pipes/display-selected-value.pipe';
import { HelperElementsComponent } from './helper-elements/helper-elements.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { OptionsComponent } from './options/options.component';
import { GroupedOptionsComponent } from './grouped-options/grouped-options.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    IstevenMultiselectComponent,
    DisplaySelectedValuePipe,
    HelperElementsComponent,
    FilterOptionsComponent,
    OptionsComponent,
    GroupedOptionsComponent
  ],
  exports: [
    IstevenMultiselectComponent,
    DisplaySelectedValuePipe
  ]
})
export class IstevenMultiselectModule { }
