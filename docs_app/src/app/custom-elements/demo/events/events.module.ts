import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { EventsDemoComponent } from './events.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
export class EventsModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = EventsDemoComponent;
}
