# Model Driven (Reactive Forms):

Multiselect can be rendered using reactive forms also.Just create a simple formControl same as we do for other input types like checkbox, text input, radio etc and attach that formControl with multiselect as follows.

```html
<ngx-multiselect 
  	ngDefaultCOntrol 
	[formControl]="selectedOption" 
	[options]="options">
</ngx-multiselect>
```

Demo of multiseselct using model driven approach.
	Form control will contain two values which are to be selected by default on rendering.

## Demo

<ms-model-driven></ms-model-driven>

<code-tabs>
  <code-pane title="app/model-driven.component.ts" path="model-driven/src/app/model-driven.component.ts"></code-pane>
  <code-pane title="app/model-driven.component.html" path="model-driven/src/app/model-driven.component.html"></code-pane>
</code-tabs>

We can also use multiselect formControl inside formGroup with any of standard html5 inputs.
Demo of formGroup froming a group of text input type and multislect in which submit button will be disbaled by default and enabled only on required validation satisfacation.

Just by specifying formControl to the multiselect, it allows us all features to be used out of the box same as any other input types because it implements .
// Show the gif showing console.log(this.selectedOption) which will show properties for that variable.
For example (Demo Shown below):- 
We can get its value using value variable
We can set the value dynamically using setValue or patchValue
We can also subscribe to formControl using valueChanges

A demo showing all three examples which are written above..
