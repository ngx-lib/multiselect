import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { ModelDrivenComponent } from './model-driven.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ ModelDrivenComponent ],
  entryComponents: [ ModelDrivenComponent ]
})
export class ModelDrivenModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ModelDrivenComponent;
}
