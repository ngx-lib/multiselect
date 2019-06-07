# Model Driven (Reactive Forms):

Multiselect can be used with reactive forms as well. Just create a simple `FormControl` variable and use it inside. You can apply all kind of validation that are applicable for Reactive Forms.

```html
<ngx-multiselect 
  ngDefaultControl 
  [formControl]="selectedOption" 
  [options]="options">
</ngx-multiselect>
```

## Demo

<ms-model-driven></ms-model-driven>

<code-tabs>
  <code-pane title="app/model-driven.component.html" path="model-driven/src/app/model-driven.component.html"></code-pane>
  <code-pane title="app/model-driven.component.ts" path="model-driven/src/app/model-driven.component.ts"></code-pane>
</code-tabs>

We can also use multiselect `formControl` inside `formGroup`/`formArray`.
Demonstration of `formGroup` consist of inputs, button, checkbox, etc. 

## Demo

<ms-model-driven-form-group></ms-model-driven-form-group>
