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
      {path: 'home', component: HomeComponent },
      {path: 'docs/:topic', component: DocComponent },
      {path: 'docs', redirectTo: 'docs/gettingStarted' },
      {path: '**', redirectTo: '/home'}
    ], {useHash: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
