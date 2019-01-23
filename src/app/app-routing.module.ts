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
import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'single-select-with-property-map', component: SingleSelectWithPropertyMapComponent , outlet: 'sidenav'},
      {path: 'single-select-template-driven', component: SingleSelectTemplateDrivenComponent , outlet: 'sidenav'},
      {path: 'model-driven', component: ModelDrivenComponent , outlet: 'sidenav'},
      {path: 'multiple-select-grouping', component: MultipleSelectGroupingComponent , outlet: 'sidenav'},
      {path: 'multiple-select-with-observable', component: MultipleSelectWithObservableComponent , outlet: 'sidenav'},
      {path: 'custom-template', component: CustomTemplateComponent , outlet: 'sidenav'},
      {path: 'options-lazy-loading', component: OptionsLazyLoadingComponent , outlet: 'sidenav'},
      {path: 'large-volume-data', component: LargeVolumeDataComponent , outlet: 'sidenav'},
      {path: 'home', component: HomeComponent },
      {path: 'docs', component: DocComponent },
      {path: '**', redirectTo: '/home'}
    ], {useHash: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
