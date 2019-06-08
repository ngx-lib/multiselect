
# Events:- 
Various events are emitted when user interacts with multiselect dropdown. In general we have categories them into 3 parts namely General, Filtering and Grouping.

## General Dropdown Events:-

1. `onOpen` - This event triggers when the dropdown open up.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onOpen)="onOpenFired()">
    </ngx-multiselect>
    ```

2. `onClose` - This event triggers when the dropdown is closed.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onClose)="onCloseFired()">
    </ngx-multiselect>
    ```

3. `onItemClick` - This event triggers when one of the item from dropdown is clicked. This event carries clicked item data.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onItemClick)="onItemClickFired($event)">
    </ngx-multiselect>
    ```

## Filtering events

1. `onClear` - This event triggers when search input box's 'Clear' button is clicked. 
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption"
        [options]="options"
        (onClear)="onClearFired()">
    </ngx-multiselect>
    ```

2. `onSearchChange` - This event triggers when the text is typed into a search input box to refine the options list.
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption"
        [options]="options"
        (onSearchChange)="onSearchChangeFired($event)">
    </ngx-multiselect>
    ```

## Grouping events

1. `onGroupItemClick` - This event triggers when the items group(i.e. the parent of all items in case of grouping) is clicked. This event carries whole group data.
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