# Custom Template

By default, multiselect is rendered using its inbuilt default template. For customizing the typical format, we could pass our own custom template (`ng-template`). Internally custom template gets projected to the multiselect dropdown for each option.

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

In above example, we pass a custom template which contains `span` element that consist of `img` tag and some text. The use of `let` in this template is to pass a variable to be used inside a template. Notice the use of `propertyMap` here is to specify which property from JSON should be used for image. When mapped correctly, we will have image property ready to use in template as shown in following example

### Custom Template Demo

<ms-custom-template></ms-custom-template>

<code-tabs>
  <code-pane title="app/custom-template.component.html" path="custom-template/src/app/custom-template.component.html"></code-pane>
  <code-pane title="app/custom-template.component.ts" path="custom-template/src/app/custom-template.component.ts"></code-pane>
</code-tabs>
