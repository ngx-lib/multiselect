import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { ModelDrivenFormGroupComponent } from './model-driven-form-group.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ ModelDrivenFormGroupComponent ],
  entryComponents: [ ModelDrivenFormGroupComponent ]
})
export class ModelDrivenFormGroupModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ModelDrivenFormGroupComponent;
}
