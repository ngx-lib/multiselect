# Template Driven

To use multiselect dropdown control with template driven forms, just provide multiselect with `options` and selected option using `ngModel` directive. That's it!

```html
<ngx-multiselect
  ngDefaultControl
  [(ngModel)]="selectedOption"
  [options]="options">
</ngx-multiselect>
```

### Template Driven Form

<ms-template-driven></ms-template-driven>

<code-tabs>
  <code-pane title="app/template-driven.component.html" path="template-driven/src/app/template-driven.component.html"></code-pane>
  <code-pane title="app/template-driven.component.ts" path="template-driven/src/app/template-driven.component.ts"></code-pane>
</code-tabs>
