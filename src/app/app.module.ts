import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { TitleComponent } from './title/title.component';
import { ContentComponent } from './content/content.component';
import { NoteComponent } from './note/note.component';
import { DocComponent } from './doc/doc.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoComponent } from './demo/demo.component';
import { CodeViewComponent } from './code-view/code-view.component';
import { LayoutRendererComponent } from './layout-renderer/layout-renderer.component';

import { MultipleSelectGroupingComponent } from './demos/multiple-select-grouping/multiple-select-grouping.component';
import { MultipleSelectWithObservableComponent } from './demos/multiple-select-with-observable/multiple-select-with-observable.component';
import { SingleSelectWithPropertyMapComponent } from './demos/single-select-with-property-map/single-select-with-property-map.component';
import { SingleSelectTemplateDrivenComponent } from './demos/single-select-template-driven/single-select-template-driven.component';
import { OptionsLazyLoadingComponent } from './demos/options-lazy-loading/options-lazy-loading.component';
import { LargeVolumeDataComponent } from './demos/large-volume-data/large-volume-data.component';
import { SimpleDemoComponent } from './demos/simple-demo/simple-demo.component';
import { EventsDemoComponent } from './demos/events-demo/events-demo.component';
import { BootstrapThemeComponent } from './demos/bootstrap-theme/bootstrap-theme.component';
import { GettingStartedComponent } from './demos/doc-demos/getting-started/getting-started.component';
import { SingleSelectComponent } from './demos/doc-demos/single-select/single-select.component';
import { TemplateDrivenComponent } from './demos/doc-demos/template-driven/template-driven.component';
import { ModelDrivenComponent } from './demos/doc-demos/model-driven/model-driven.component';
import { ObservableAsyncComponent } from './demos/doc-demos/observable-async/observable-async.component';
import { ObservableAsyncServiceComponent } from './demos/doc-demos/observable-async-service/observable-async-service.component';
import { ObservableSubscribeComponent } from './demos/doc-demos/observable-subscribe/observable-subscribe.component';
import { ObservableDynamicUpdateComponent } from './demos/doc-demos/observable-dynamic-update/observable-dynamic-update.component';
import { CustomTemplateComponent } from './demos/doc-demos/custom-template/custom-template.component';
import { GroupingComponent } from './demos/doc-demos/grouping/grouping.component';
import { GroupingCustomKeyComponent } from './demos/doc-demos/grouping-custom-key/grouping-custom-key.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleSelectTemplateDrivenComponent,
    MultipleSelectGroupingComponent,
    MultipleSelectWithObservableComponent,
    SingleSelectWithPropertyMapComponent,
    OptionsLazyLoadingComponent,
    LargeVolumeDataComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    SetupComponent,
    TitleComponent,
    ContentComponent,
    NoteComponent,
    DocComponent,
    DemoContainerComponent,
    DemoComponent,
    CodeViewComponent,
    LayoutRendererComponent,
    SimpleDemoComponent,
    EventsDemoComponent,
    BootstrapThemeComponent,
    GettingStartedComponent,
    SingleSelectComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ObservableAsyncComponent,
    ObservableAsyncServiceComponent,
    ObservableSubscribeComponent,
    ObservableDynamicUpdateComponent,
    CustomTemplateComponent,
    GroupingComponent,
    GroupingCustomKeyComponent
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
export class AppModule {}
