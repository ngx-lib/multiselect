
# Events
Various events are emitted when user interacts with multiselect dropdown. We have categorized them into 3 types, namely General, Filtering and Grouping.

## Events Demo:

<ms-events></ms-events>

## General Dropdown Events

1. `onOpen` - This event is triggered when the dropdown opens up.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onOpen)="onOpenFired()">
    </ngx-multiselect>
    ```

2. `onClose` - This event is triggered when the dropdown is closed.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onClose)="onCloseFired()">
    </ngx-multiselect>
    ```

3. `onItemClick` - This event is triggered when one of the item from dropdown is clicked. It carries clicked item data.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onItemClick)="onItemClickFired($event)">
    </ngx-multiselect>
    ```

## Filtering events

1. `onClear` - This event is triggered when the 'Clear' button of search input box is clicked.
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption"
        [options]="options"
        (onClear)="onClearFired()">
    </ngx-multiselect>
    ```

2. `onSearchChange` - This event is triggered when some search keyword is typed into the search input box to refine the options list.
    ```html
    <ngx-multiselect
        [multiple] = true
        [formControl]="selectedOption"
        [options]="options"
        (onSearchChange)="onSearchChangeFired($event)">
    </ngx-multiselect>
    ```

## Grouping events

1. `onGroupItemClick` - This event is triggered when a group of items (i.e. the parent of all items, in case of grouping) is clicked. It carries whole group data.
    ```html
    <ngx-multiselect
        [multiple]="true"
        [formControl]="selectedOption"
        [options]="options"
        (onGroupItemClick)="onGroupItemClickFired($event)">
    </ngx-multiselect>
    ```