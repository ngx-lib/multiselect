## Template Driven:
Angular forms can be built in two ways either Template Driven or Model Driven(--link to model driven-- ).Multiselect supports both of these ways out of the box.

To use template driven approach for multiselect, just provide multiselect with options and selected option using ngModel. You are done.

```html
<ngx-multiselect 
  ngDefaultCOntrol 
  [(ngModel)]="selectedOption" 
  [options]="options" 
  [multiple]=true>
</ngx-multiselect>
```

Demo of template driven multiselect:-

/////////////////////////////////////////////////////////////////
  is the following  right ? need to check
Multiselect can have all functionalities like a normal standard html5 template input has like performing a validation, submitting a value of multiselect on (ngSubmit) etc.

```html
<ngx-multiselect required #name=”ngModel” ngDefaultCOntrol [(ngModel)]="selectedOption" [options]="options" [multiple]=true></ngx-multiselect>`
<div *ngIf=”name.pristine”>Pristine</div>
<div *ngIf=”name.touched”>Touched</div>
<div *ngIf=”name.untouched”>Untouched</div>
<div *ngIf=”name.dirty”>Dirty</div>
<div *ngIf=”name.valid”>Valid</div>
<div *ngIf=”name.invalid”>Invalid</div>
```

Demo of template driven form using form element and inside will be multiselect element and validation will be shown for multiselect , and form wiil be submiited on submit and its value will be shown below.

///////////////////////////////////////////////////////////////////
