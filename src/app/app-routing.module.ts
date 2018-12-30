import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SingleSelectWithPropertyMapComponent } from './single-select-with-property-map/single-select-with-property-map.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { MultipleSelectGroupingComponent } from './multiple-select-grouping/multiple-select-grouping.component';
import { MultipleSelectWithObservableComponent } from './multiple-select-with-observable/multiple-select-with-observable.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';
import { SingleSelectTemplateDrivenComponent } from './single-select-template-driven/single-select-template-driven.component';
import { OptionsLazyLoadingComponent } from './options-lazy-loading/options-lazy-loading.component';
import { LargeVolumeDataComponent } from './large-volume-data/large-volume-data.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'single-select-with-property-map', component: SingleSelectWithPropertyMapComponent },
      {path: 'single-select-template-driven', component: SingleSelectTemplateDrivenComponent },
      {path: 'model-driven', component: ModelDrivenComponent },
      {path: 'multiple-select-grouping', component: MultipleSelectGroupingComponent },
      {path: 'multiple-select-with-observable', component: MultipleSelectWithObservableComponent },
      {path: 'custom-template', component: CustomTemplateComponent },
      {path: 'options-lazy-loading', component: OptionsLazyLoadingComponent },
      {path: 'large-volume-data', component: LargeVolumeDataComponent },
      {path: '**', redirectTo: '/single-select-with-property-map'}
    ], {useHash: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
