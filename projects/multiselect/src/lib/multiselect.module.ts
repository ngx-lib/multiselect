import { NgModule } from '@angular/core';
import { NgxMultiselectComponent as NgxMultiselectComponent } from './multiselect.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplaySelectedValuePipe } from './pipes/display-selected-value.pipe';
import { HelperElementsComponent } from './helper-elements/helper-elements.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { OptionsComponent } from './options/options.component';
import { GroupedOptionsComponent } from './grouped-options/grouped-options.component';
import { BottomReachedDirective } from './directives/bottom-reached.directive';
import { VirtualScrollDirective } from './directives/virtual-scroll.directive'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NgxMultiselectComponent,
    DisplaySelectedValuePipe,
    HelperElementsComponent,
    FilterOptionsComponent,
    OptionsComponent,
    GroupedOptionsComponent,
    BottomReachedDirective,
    VirtualScrollDirective
  ],
  exports: [
    NgxMultiselectComponent,
    DisplaySelectedValuePipe
  ]
})
export class NgxMultiselectModule { }
