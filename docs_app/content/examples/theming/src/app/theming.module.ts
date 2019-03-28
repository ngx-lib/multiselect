import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theming.component';
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
export class ThemeModule {
}
