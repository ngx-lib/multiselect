import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { GettingStartedComponent } from './getting-started.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ GettingStartedComponent ],
  entryComponents: [ GettingStartedComponent ]
})
export class GettingStartedModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = GettingStartedComponent;
}
