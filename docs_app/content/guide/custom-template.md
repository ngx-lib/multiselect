# Custom Template :

By default, multiselect is rendered using a simple div which displays the name of option using interpolation(--link to github source code line from our lib--).If we want to display the options in some other fashion, we need to pass our own custom template which multiselect will use to render the options one by one

```html
<ngx-multiselect ngDefaultCOntrol 
   [formControl]="selectedOption" 
   [options]="options"
   [propertyMap]="{ ‘img’: 'imgPropKey' }">
    	<ng-template let-option="option">
         <span>
            <img  src=“../path/to/img" />
            {{option.name}}
         </span>	
      </ng-template>
</ngx-multiselect>
```

In above example, we pass a template which contains span element which shows one fixed image and the name of option to be shown for each option.The use of let in this template is to pass a variable to be used inside a template.Notice the use of propertyMap here, it is used to specify which property from json should be used for image.When mapped correctly, we will have imag property ready to use in template as shown in following example

The best example suited for this will be the list of countries with its flag at right hand corner.Lets see how we can achieve this.


## Demo

<ms-custom-template></ms-custom-template>

<code-tabs>
  <code-pane title="app/custom-template.component.ts" path="custom-template/src/app/custom-template.component.ts"></code-pane>
  <code-pane title="app/custom-template.component.html" path="custom-template/src/app/custom-template.component.html"></code-pane>
</code-tabs>
