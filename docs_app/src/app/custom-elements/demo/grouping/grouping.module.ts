import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { GroupingComponent } from './grouping.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
export class GroupingModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = GroupingComponent;
}
