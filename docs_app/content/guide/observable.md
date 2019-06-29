# Observable

Multiselect dropdown works pretty well with observables as it does with data collection.
There are two ways to use observable with multiselect.
  1. Manual Subscription
  2. Async Pipe

## 1. Manual subscription:

You can use traditional way to retrieve a data from a stream inside `.subscribe` method and assign it to a local component variable and then you can pass that variable to `options` binding of multiselect dropdown.

### Observable Async Demo

<ms-observable-async></ms-observable-async>

<code-tabs>
  <code-pane title="app/observable-async.component.html" path="observable/src/app/observable-async.component.html"></code-pane>
  <code-pane title="app/observable-async.component.ts" path="observable/src/app/observable-async.component.ts"></code-pane>
</code-tabs>

## 2. Using async pipe

You can directly assign the observable data stream (with async pipe) to multiselect `options` binding. `Async` pipe helps here to unwrap the data from stream.

###  Observable with AsyncPipe

<ms-observable-async-service></ms-observable-async-service>

<code-tabs>
  <code-pane title="app/observable-async-service.component.ts" path="observable/src/app/observable-async-service.component.ts"></code-pane>
  <code-pane title="app/observable-async-service.component.html" path="observable/src/app/observable-async-service.component.html"></code-pane>
</code-tabs>

### TL;DR

If you want to dynamically update the multiselect datasource, you can do it just by creating the whole new copy of json array and pass that array to `observer.next` function as shown below. Changing the data collection value in between would directly reflect on to the screen.

<ms-observable-dynamic-update></ms-observable-dynamic-update>

<code-tabs>
  <code-pane title="app/observable-dynamic-update.component.ts" path="observable/src/app/observable-dynamic-update.component.ts"></code-pane>
  <code-pane title="app/observable-dynamic-update.component.html" path="observable/src/app/observable-dynamic-update.component.html"></code-pane>
</code-tabs>
