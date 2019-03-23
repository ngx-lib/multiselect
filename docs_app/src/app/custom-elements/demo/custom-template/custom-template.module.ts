import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { CustomTemplateComponent } from './custom-template.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ CustomTemplateComponent ],
  entryComponents: [ CustomTemplateComponent ]
})
export class CustomTemplateModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = CustomTemplateComponent;
}
