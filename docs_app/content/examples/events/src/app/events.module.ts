import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsDemoComponent } from './events.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ EventsDemoComponent ],
  entryComponents: [ EventsDemoComponent ]
})
export class EventsDemoModule {
}
