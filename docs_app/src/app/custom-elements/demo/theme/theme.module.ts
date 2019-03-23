import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { ThemeComponent } from './theme.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ ThemeComponent ],
  entryComponents: [ ThemeComponent ]
})
export class ThemeModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ThemeComponent;
}
