import { InjectionToken, Type } from '@angular/core';

// Modules containing custom elements must be set up as lazy-loaded routes (loadChildren)
// TODO(andrewjs): This is a hack, Angular should have first-class support for preparing a module
// that contains custom elements.
 export const ELEMENT_MODULE_PATHS_AS_ROUTES = [
  {
    selector: 'aio-announcement-bar',
    loadChildren: './announcement-bar/announcement-bar.module#AnnouncementBarModule'
  },
  {
    selector: 'aio-api-list',
    loadChildren: './api/api-list.module#ApiListModule'
  },
  {
    selector: 'aio-contributor-list',
    loadChildren: './contributor/contributor-list.module#ContributorListModule'
  },
  {
    selector: 'aio-file-not-found-search',
    loadChildren: './search/file-not-found-search.module#FileNotFoundSearchModule'
  },
  {
    selector: 'aio-resource-list',
    loadChildren: './resource/resource-list.module#ResourceListModule'
  },
  {
    selector: 'aio-toc',
    loadChildren: './toc/toc.module#TocModule'
  },
  {
    selector: 'code-example',
    loadChildren: './code/code-example.module#CodeExampleModule'
  },
  {
    selector: 'code-tabs',
    loadChildren: './code/code-tabs.module#CodeTabsModule'
  },
  {
    selector: 'current-location',
    loadChildren: './current-location/current-location.module#CurrentLocationModule'
  },
  {
    selector: 'expandable-section',
    loadChildren: './expandable-section/expandable-section.module#ExpandableSectionModule'
  },
  {
    selector: 'live-example',
    loadChildren: './live-example/live-example.module#LiveExampleModule'
  },
  {
    selector: 'aio-operator-decision-tree',
    loadChildren: './operator-decision-tree/operator-decision-tree.module#OperatorDecisionTreeModule'
  },
  {
    selector: 'ms-single-select',
    loadChildren: './demo/single-select/single-select.module#SingleSelectModule'
  },
  {
    selector: 'ms-custom-template',
    loadChildren: './demo/custom-template/custom-template.module#CustomTemplateModule'
  },
  {
    selector: 'ms-enable-disable',
    loadChildren: './demo/enable-disable/enable-disable.module#EnableDisableModule'
  },
  {
    selector: 'ms-events',
    loadChildren: './demo/events/events.module#EventsModule'
  },{
    selector: 'ms-events-advanced',
    loadChildren: './demo/events-advanced/events-advanced.module#EventsAdvnacedModule'
  },
  {
    selector: 'ms-getting-started',
    loadChildren: './demo/getting-started/getting-started.module#GettingStartedModule'
  },
  {
    selector: 'ms-grouping',
    loadChildren: './demo/grouping/grouping.module#GroupingModule'
  },
  {
    selector: 'ms-model-driven',
    loadChildren: './demo/model-driven/model-driven.module#ModelDrivenModule'
  },{
    selector: 'ms-model-driven-form-group',
    loadChildren: './demo/model-driven-form-group/model-driven-form-group.module#ModelDrivenFormGroupModule'
  },{
    selector: 'ms-observable-async',
    loadChildren: './demo/observable-async/observable-async.module#ObservableAsyncModule'
  },
  {
    selector: 'ms-observable-dynamic-update',
    loadChildren: './demo/observable-dynamic-update/observable-dynamic-update.module#ObservableDynamicUpdateModule'
  },
  {
    selector: 'ms-observable-subscribe',
    loadChildren: './demo/observable-subscribe/observable-subscribe.module#ObservableSubscribeModule'
  },
  {
    selector: 'ms-observable-async-service',
    loadChildren: './demo/observable-async-service/observable-async-service.module#ObservableAsyncServiceModule'
  },
  {
    selector: 'ms-property-map',
    loadChildren: './demo/property-map/property-map.module#PropertyMapModule'
  },
  {
    selector: 'ms-template-driven',
    loadChildren: './demo/template-driven/template-driven.module#TemplateDrivenModule'
  },
  {
    selector: 'ms-large-volume-data',
    loadChildren: './demo/large-volume-data/large-volume-data.module#LargeVolumeDataModule'
  },
  {
    selector: 'ms-theme',
    loadChildren: './demo/theme/theme.module#ThemeModule'
  }
];

/**
 * Interface expected to be implemented by all modules that declare a component that can be used as
 * a custom element.
 */
export interface WithCustomElementComponent {
  customElementComponent: Type<any>;
}

/** Injection token to provide the element path modules. */
export const ELEMENT_MODULE_PATHS_TOKEN = new InjectionToken('aio/elements-map');

/** Map of possible custom element selectors to their lazy-loadable module paths. */
export const ELEMENT_MODULE_PATHS = new Map<string, string>();
ELEMENT_MODULE_PATHS_AS_ROUTES.forEach(route => {
  ELEMENT_MODULE_PATHS.set(route.selector, route.loadChildren);
});
