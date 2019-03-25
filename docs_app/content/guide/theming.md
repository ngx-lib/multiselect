# Theming

Multiselect currently supports two themes out of the box. These are   
1. Bootstrap
2. Material

If we want to use any of the theme while rendering, just pass the value of the theme as input to multiselect using theme input as shown below.

--- Demo showing bootstrap theme.

# Demo

<ms-theme></ms-theme>

<code-tabs>
  <code-pane title="app/app.component.ts" path="attribute-directives/src/app/app.component.ts"></code-pane>
  <code-pane title="app/app.component.html" path="attribute-directives/src/app/app.component.html"></code-pane>
</code-tabs>

If you select material theme, you can also specify the color for mutiselect from the angular material theme or any valid  css color.

--- Demo showing material theme and color used

# Demo

<ms-theme></ms-theme>

<code-tabs>
  <code-pane title="app/app.component.ts" path="attribute-directives/src/app/app.component.ts"></code-pane>
  <code-pane title="app/app.component.html" path="attribute-directives/src/app/app.component.html"></code-pane>
</code-tabs>