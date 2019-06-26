# Property Configuration

There are various property binding options available, so you can configure them as per your need.

## General

- `isOpen`: **Boolean?** - Use `isOpen` property when you want to programatically control the behaviour of multiselect dropdown. If you haven't passed any value to it, then multiselect dropdown will internally manage `isOpen` flag to control dropdwon state.

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    [isOpen]=”true”>
  </ngx-multiselect>
  ```

- `disabled`: **Boolean?** -
  There are 3 ways to disable multiselect dropdown.
  1. You can disable option(s) from an array i.e. on each item (or group) level, you can set `disabled` property. This provides flexibility for granular control over disabling options.
  2. You can set `disabled` property to `true` for the multiselect component itself, which disables the entire dropdown. So it cannot be clicked and opened.
  3. In case of reactive (model driven) forms, you can disable input using `formControl.disable()` method.

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    [disabled]="true”>
  </ngx-multiselect>
  ```

- `options`: **any[]** –
Its name clearly states that this property serves as a data source/collection to muliselect dropdown. There is a predefined format for data to be given as input to the mutiselect which is explained in [simple multiselect guide](https://ngx-lib.github.io/multiselect/guide/simple-select), [grouping options guide](https://ngx-lib.github.io/multiselect/guide/grouping). In some cases, data source doesn't align with the expected format. No worries! we've already taken care of that situation. Such cases can be easily tackled by using[ `propertyMap`](https://ngx-lib.github.io/multiselect/guide/property-mapping).

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options">
  </ngx-multiselect>
  ```

- `optionsTemplate`: **TemplateRef< any >?** –
If you want to change the internal look and feel of each option, you can create your own `ng-template` and pass the name of its template variable to this property. Alternatively, you can put your `ng-template` inside opening and closing tags of `ngx-multiselect`. For example, while showing the list of countries, you can pass your own customized template which should display name of countries with their flag on right side. The below snippet demonstrates the usage of `customTemplate` option.

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options">
      <ng-template let-option="option">
        <span>
          <img  src="../path/to/img" />
          {{option.name}}
        </span>
      </ng-template>
  </ngx-multiselect>
  ```

## Add / Remove features

- `multiple`: **Boolean?** - 
Use `multiple` property binding, when you want to allow user to select multiple values from the dropdown. By default `multiple` property value is `false`.

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOptions"
    [options]="options"
    [multiple]="true"
    [isOpen]=”true”>
  </ngx-multiselect>
  ```

- `showHelperElements`: **Boolean?** –
This options hide all the buttons from helper element buttons like *Select All*, *Select None* and *Reset*. Its default value is `true`.

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [showHelperElements]="false"
    [options]="options">
  </ngx-multiselect>
  ```

- `showSearchFilter`: **Boolean?** –
This options hide search input box where you can seek for option from the collection. Its default value is `true`.

  ```html
  <ngx-multiselect
    [showSearchFilter]="false"
    [(ngModel)]="selectedOption"
    [options]="options">
  </ngx-multiselect>
  ```

## Styling

- `showMaxLabels`: **number?** -
Set value here to configure how many selected values should appear on dropdown. If the count of selected values' exceeds `showMaxLabels`, then dropdown will show ellipses(...) to indicate that more items are selected.

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    showMaxLables = "3">
  </ngx-multiselect>
  ```

- `theme`: **String?** -
It currently supports two themes, namely they are ‘material’ and ‘bootstrap’. `material` is the default theme.

*Available Values*: ‘material’ | ‘bootstrap’

```html
<ngx-multiselect
  [(ngModel)]="selectedOption"
  [options]="options"
  theme=”material”>
</ngx-multiselect>
```

- `color`: **String?** -
Pass on your current theme color.

*Available Values*: any valid CSS color

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    theme=”material”
    color="blue">
  </ngx-multiselect>
  ```

## Grouping Property Configuration

- `groupedProperty`: **String** -
It accepts a property name that belongs to each object, using which options can be grouped.

  ``` html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    [groupedProperty]=”’category’”>
  </ngx-multiselect>
  ```

  ```js
  options = [{
      "id": 1,
      "name": "Test 1",
      "category": "Cat 1"
    },
    {
      "id": 2,
      "name": "Test 2",
      "category": "Cat 1"
    },
    {
      "id": 3,
      "name": "Test 3",
      "category": "Cat 2",
      "disabled": true
    }
  ];
  ```

- `propertyMap`: **any** -
Multiselect `options` needs data in a predefined format. It includes keys like `id`, `name`, `disabled` etc., as shown below.
  ```js
  {
    "id": 3,
    "name": "Test 3",
    "category": "Cat 2",
    "disabled": true
  }
  ```

  If the data is not present in the expected format, you could use `propertyMap` property binding and provide the desired object mapping. This will be used to map the keys of your `json` to the keys of each item in collection. For eg. the data looks like this:

  ```js
  {
    "empId": 3,
    "empName": "John Smith",
    "empCategory": "Team Lead",
    "empActive": true
  }
  ```
  then `propertyMap` should look like below:
  ```js
  propertyMap = {
    "empId" : "id",
    "empName" : "name",
    "empCategory" : "category",
    "empActive" : "disabled"
  }
  ```
  So the multiselect converts the `propertyMap` to its own format as below
  ```js
  {
    "id": 3,
    "name": "John Smith",
    "category": "Team Lead",
    "disabled": true
  }
  ```

  ```html
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    [propertyMap]=”propertyMap”>
  </ngx-multiselect>
  ```
