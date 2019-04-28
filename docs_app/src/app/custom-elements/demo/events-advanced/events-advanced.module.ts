import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../../element-registry';
import { EventsAdvnacedComponent } from './events-advanced.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ EventsAdvnacedComponent ],
  entryComponents: [ EventsAdvnacedComponent ]
})
export class EventsAdvnacedModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = EventsAdvnacedComponent;
}
