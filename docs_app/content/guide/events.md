
# Events:- 
Various event will be emitted on different action from user

## General Dropdown Events:-

1. `onOpen` - Event fired when the dropdown open up
    ```html
    <ngx-multiselect
    [multiple]="true"
    [formControl]="selectedOption"
    [options]="options"
    (onOpen)="onOpenFired()">
    </ngx-multiselect>
    ```

2. `onClose` - Event fired when the dropdown is closed
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onClose)="onCloseFired()">
    </ngx-multiselect>
    ```

3. `onItemClick` - Event fired when one of the item from dropdown is clicked/selected. The event will contain the clicked item data.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onItemClick)="onItemClickFired($event)">
    </ngx-multiselect>
    ```

## Filtering events

1. `onClear` - Event fired when the 'Clear' button is clicked on search input box
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption"
        [options]="options"
        (onClear)="onClearFired()">
    </ngx-multiselect>
    ```

2. `onSearchChange` - Event fired when the text is typed into a search input box to filter the options list
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption"
        [options]="options"
        (onSearchChange)="onSearchChangeFired($event)">
    </ngx-multiselect>
    ```

## Grouping events

1. `onGroupItemClick` - Event fired when the items group(i.e. the parent of all items in case of grouping) is selected/clicked. The event will contain whole group data and all possible values.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onGroupItemClick)="onGroupItemClickFired($event)">
    </ngx-multiselect>
    ```

### Demo:

<ms-events></ms-events>