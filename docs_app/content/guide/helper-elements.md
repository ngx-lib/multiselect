
# Helper Elements

These are the helper buttons available for fast forward actions
- *Select All*
- *Select None*
- *Reset*

When above events are triggered on button click, it emits below events where you can hook in for listning to particular event.

1. `onSelectAll` Event fired when the 'Select All' is clicked to select all items.
    ```html
    <ngx-multiselect
      [multiple] = "true"
      [formControl]="selectedOption"
      [options]="options"
      (onSelectAll)="onSelectAllFired()">
    </ngx-multiselect>
    ```

2. `onSelectNone` - Event fired when the 'Select None' is clicked to deselect all items.
    ```html
    <ngx-multiselect
      [multiple] = true
      [formControl]="selectedOption"
      [options]="options"
      (onSelectNone)="onSelectNoneFired()">
    </ngx-multiselect>
    ```

3. `onReset` - Event fired when the 'Reset' button is clicked to reset selection back to user provided default state) helper element is clicked
    ```html
    <ngx-multiselect
      [multiple] = true
      [formControl]="selectedOption"
      [options]="options"
      (onReset)="onResetFired()">
    </ngx-multiselect>
    ```
