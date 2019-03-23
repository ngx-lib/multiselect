import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { PropertyMapComponent } from './property-map.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
export class PropertyMapModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = PropertyMapComponent;
}
