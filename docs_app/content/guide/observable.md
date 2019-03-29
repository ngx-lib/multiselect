# Observable

Multiselect works pretty well with observables as it does with general data.
There are two ways to use observable data in angular.
1. Subscribing manually in ngOnInit and collecting all data into member variable and unsubcribe on ngOnDestroy.
2. Using async pipe and let the multiselect subscribe and unsubscribe.

<ms-observable-async></ms-observable-async>

<code-tabs>
  <code-pane title="app/observable-async.component.ts" path="observable/src/app/observable-async.component.ts"></code-pane>
  <code-pane title="app/observable-async.component.html" path="observable/src/app/observable-async.component.html"></code-pane>
</code-tabs>

## 1. Manual subscription: 
This is the easiest way to to use observable data in multiselect .Just subscribe to an observable, collect data from it and pass the collected data as input to multiselect. All other functionalities will work the same because we have used observable to subscribe to it and collect all the data required for multiselect.

Demo showing multiselect data fetched from observable and rendered.

<ms-observable-async-update></ms-observable-async-update>

<code-tabs>
  <code-pane title="app/observable-dynamic-update.component.ts" path="observable/src/app/observable-dynamic-update.component.ts"></code-pane>
  <code-pane title="app/observable-dynamic-update.component.html" path="observable/src/app/observable-dynamic-update.component.html"></code-pane>
</code-tabs>

## 2. Using async pipe
Multiselect works perfectly with observable instance itself, just pass the observable data with async pipe. The task of subscribing and unsubscribing will be taken care by multiselect.

Demo showing multiselect data fetched from service and directly passing observable instance as input.

<ms-observable-async-service></ms-observable-async-service>

<code-tabs>
  <code-pane title="app/observable-async-service.component.ts" path="observable/src/app/observable-async-service.component.ts"></code-pane>
  <code-pane title="app/observable-async-service.component.html" path="observable/src/app/observable-async-service.component.html"></code-pane>
</code-tabs>

Changing the state in case of observable:
If you want to dynamically update the multiselct, you can do it just by creating the whole new copy of json array and pass the whole array to observer next function as shown below.

Demo showing dynamic update of multiselct and disable example side by side
