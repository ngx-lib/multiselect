# Template Driven:

To use multiselect dropdown control with template driven forms, just provide multiselect with `options` and selected option using `ngModel` directive. That's it!

```html
<ngx-multiselect 
  ngDefaultCOntrol 
  [(ngModel)]="selectedOption" 
  [options]="options">
</ngx-multiselect>
```

## Demo

<ms-template-driven></ms-template-driven>

<code-tabs>
  <code-pane title="app/template-driven.component.html" path="template-driven/src/app/template-driven.component.html"></code-pane>
  <code-pane title="app/template-driven.component.ts" path="template-driven/src/app/template-driven.component.ts"></code-pane>
</code-tabs>

---

Multiselect can have all kind of validations that are applicable on both form and form fields. 

<ngx-multiselect required 
  #name="ngModel" ngDefaultCOntrol 
  [(ngModel)]="selectedOption" [options]="options">
</ngx-multiselect>
<div *ngIf=”name.pristine”>Pristine</div>
<div *ngIf=”name.touched”>Touched</div>
<div *ngIf=”name.untouched”>Untouched</div>
<div *ngIf=”name.dirty”>Dirty</div>
<div *ngIf=”name.valid”>Valid</div>
<div *ngIf=”name.invalid”>Invalid</div>

Demo of template driven form using form element and inside will be multiselect element and validation will be shown for multiselect , and form wiil be submiited on submit and its value will be shown below.

///////////////////////////////////////////////////////////////////
