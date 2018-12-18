import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMultiselectModule } from 'multiselect';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { MultipleSelectGroupingComponent } from './multiple-select-grouping/multiple-select-grouping.component';
import { MultipleSelectWithObservableComponent } from './multiple-select-with-observable/multiple-select-with-observable.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';
import { SingleSelectWithPropertyMapComponent } from './single-select-with-property-map/single-select-with-property-map.component';
import { SingleSelectTemplateDrivenComponent } from './single-select-template-driven/single-select-template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleSelectTemplateDrivenComponent,
    ModelDrivenComponent,
    MultipleSelectGroupingComponent,
    MultipleSelectWithObservableComponent,
    CustomTemplateComponent,
    SingleSelectWithPropertyMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMultiselectModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
