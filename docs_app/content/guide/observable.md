# Observable

Multiselect works pretty well with observables as it does with data collection. There are two ways to use observable data in angular.
1. Manual Subscription
2. Async Pipe

<ms-observable-async></ms-observable-async>

<code-tabs>
  <code-pane title="app/observable-async.component.ts" path="observable/src/app/observable-async.component.ts"></code-pane>
  <code-pane title="app/observable-async.component.html" path="observable/src/app/observable-async.component.html"></code-pane>
</code-tabs>

## 1. Manual subscription:
You can retrieve a data from observable but when its come to providing that dataset to multiselect, you would give it directly once you recieved its value. That can happen by subscribing to an observable, collect data from it and pass the collected data as `Input` binding to multiselect. 

### Demo

<ms-observable-async-update></ms-observable-async-update>

<code-tabs>
  <code-pane title="app/observable-dynamic-update.component.ts" path="observable/src/app/observable-dynamic-update.component.ts"></code-pane>
  <code-pane title="app/observable-dynamic-update.component.html" path="observable/src/app/observable-dynamic-update.component.html"></code-pane>
</code-tabs>

## 2. Using async pipe
Sometimes it could happen dataset would be an observable itself, that time you can directly pass Input binding data as an observable with `async` pipe. The task of subscribing and unsubscribing will be taken care by Angular framework.

### Demo

<ms-observable-async-service></ms-observable-async-service>

<code-tabs>
  <code-pane title="app/observable-async-service.component.ts" path="observable/src/app/observable-async-service.component.ts"></code-pane>
  <code-pane title="app/observable-async-service.component.html" path="observable/src/app/observable-async-service.component.html"></code-pane>
</code-tabs>

## TLDR;

Changing the data collection value in between would reflect directly inside options. If you want to dynamically update the multiselct, you can do it just by creating the whole new copy of json array and pass the whole array to observer next function as shown below.

### Demo:- Pending
