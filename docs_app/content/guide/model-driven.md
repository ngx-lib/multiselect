# Model Driven (Reactive Forms):

Multiselect can be used with reactive forms as well. Just create a simple `formControl` form variable and use it on form, you can apply all kind of validations over it.

```html
<ngx-multiselect 
  ngDefaultCOntrol 
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
<!-- <code-tabs>
  <code-pane title="app/model-driven-form-group.component.html"></code-pane>
  <code-pane title="app/model-driven-form-group.component.ts"></code-pane>
</code-tabs> -->

