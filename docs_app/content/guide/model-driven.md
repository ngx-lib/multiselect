# Model Driven (Reactive Forms)

Multiselect can be used with reactive forms as well. Just create a simple `FormControl` variable and set it on `formControl` attribute. You can apply all kinds of validation that are applicable for Reactive Forms.

```html
<ngx-multiselect
  ngDefaultControl
  [formControl]="selectedOption"
  [options]="options">
</ngx-multiselect>
```

### Model Driven with ngModel

<ms-model-driven></ms-model-driven>

<code-tabs>
  <code-pane title="app/model-driven.component.html" path="model-driven/src/app/model-driven.component.html"></code-pane>
  <code-pane title="app/model-driven.component.ts" path="model-driven/src/app/model-driven.component.ts"></code-pane>
</code-tabs>

We can also use multiselect `formControl` inside `formGroup`/`formArray`.
Demonstration of `formGroup` consists of inputs, button, checkbox, etc.

### Model Driven with Form Group

<ms-model-driven-form-group></ms-model-driven-form-group>
