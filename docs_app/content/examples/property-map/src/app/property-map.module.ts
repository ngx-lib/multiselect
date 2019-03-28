import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyMapComponent } from './property-map.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ PropertyMapComponent ],
  entryComponents: [ PropertyMapComponent ]
})
export class PropertyMapModule {
}
