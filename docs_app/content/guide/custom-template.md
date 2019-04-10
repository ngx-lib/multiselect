# Custom Template :

By default, multiselect is rendered using a simple default template which displays the name of option using simple bindings. If we want to display the options list in different format, then we could pass  to pass our own custom template which would passed as an `ng-template` directive. Internally it will projected on options list.

```html
<ngx-multiselect ngDefaultCOntrol 
   [formControl]="selectedOption" 
   [options]="options"
   [propertyMap]="{ ‘img’: 'imgPropKey' }">
    	<ng-template let-option="option">
         <span>
            <img  src="../path/to/img" />
            {{option.name}}
         </span>	
      </ng-template>
</ngx-multiselect>
```

In above example, we pass a template which contains `span` element that consist of `img` tag and some text. The use of `let` in this template is to pass a variable to be used inside a template. Notice the use of `propertyMap` here is used to specify which property from JSON should be used for image. When mapped correctly, we will have image property ready to use in template as shown in following example

## Demo

<ms-custom-template></ms-custom-template>

<code-tabs>
  <code-pane title="app/custom-template.component.ts" path="custom-template/src/app/custom-template.component.ts"></code-pane>
  <code-pane title="app/custom-template.component.html" path="custom-template/src/app/custom-template.component.html"></code-pane>
</code-tabs>
