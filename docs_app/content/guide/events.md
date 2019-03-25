
# Events:

## General Dropdown Events:

1. `onOpen` - Event fired on opening the dropdown
    ```html
    <ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption"
    [options]="options"
    (onOpen)="onOpenFired()">
    </ngx-multiselect>
    ```

2. `onClose` - Event fired when the dropdown is closed
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption”
        [options]="options"
        (onClose)="onCloseFired()">
    </ngx-multiselect>
    ```

3. `onItemClick` - Event fired when one of the item from dropdown is clicked/selected. The event will contain the clicked item data.
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption”
        [options]="options"
        (onItemClick)="onItemClickFired($event)">
    </ngx-multiselect>
    ```

4. `onGroupItemClick` - Event fired when the items group(i.e. the parent of all items in case of grouping) is selected/clicked.The event will contain whole group data.
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption”
        [options]="options"
        (onGroupItemClick)="onGroupItemClickFired($event)">
    </ngx-multiselect>
    ```

## Filtering events

1. `onClear` - Event fired when the 'Clear' button is clicked
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption”
        [options]="options"
        (onClear)="onClearFired()">
    </ngx-multiselect>
    ```

2. `onSearchChange` - Event fired when the text is typed into a search box to filter the items
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption”
        [options]="options"
        (onSearchChange)="onSearchChangeFired($event)">
    </ngx-multiselect>
    ```
