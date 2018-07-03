import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IstevenMultiselectModule } from 'isteven-multiselect';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IstevenMultiselectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
