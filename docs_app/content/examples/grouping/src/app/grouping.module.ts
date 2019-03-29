import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupingComponent } from './grouping.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ GroupingComponent ],
  entryComponents: [ GroupingComponent ]
})
export class GroupingModule {
}
