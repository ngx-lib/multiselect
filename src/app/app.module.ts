import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IstevenMultiselectModule } from 'isteven-multiselect';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IstevenMultiselectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
