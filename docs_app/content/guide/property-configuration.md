# Property Configuration:-

There are various property binding options are applicable, you can configure them as per your need.

## General:-

- `isOpen`: **Boolean?** - Use `isOpen` property if you want to programatically control multiselect dropdown behaviour. In case you haven't passed it multiselect dropdown internally manage `isOpen` flag internally to control dropdwon state. 

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [isOpen]=”true”>
  </ngx-multiselect>
  ```

- `disabled`: **Boolean?** -
  There are 3 ways to disable multiselect. 
  1. You can either disable option(s) from an array, on each item (or group) level you can set `disabled` property. This provides flexibility to get granular control over disabling options.
  2. You can set `disabled` property to be `true` for multiselect component, which makes thorough dropdown disabled. So it cannot be clicked and cannot be opened.
  3. In case of reactive(model driven) forms, disable input using `formControl.disable()` method.

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [disabled]="true”>
  </ngx-multiselect>
  ```

- `options`: **any[]** –
Its name clearly states that, this property serves datasource/collection to muliselect dropdown. There is a predefined format for data to be given as input to mutiselect which is expained in [simple multiselect guide](https://ngx-lib.github.io/multiselect/guide/simple-select), [grouping options guide](https://ngx-lib.github.io/multiselect/guide/grouping). In same cases datasource doesn't align with the expected format. No worries! we've already taken care of that situation. Such cases can be easily tackled by using[ `propertyMap`](https://ngx-lib.github.io/multiselect/guide/property-mapping).

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options">
  </ngx-multiselect>
  ```

- `optionsTemplate`: **TemplateRef< any >?** –
In you want to change the internal look and feel of the each option, you can create your own `ng-template` and passed the name of to this property. For example, while showing the list of countries, you can pass your own customized template which should display the name of country with its flag on right side. The below snippet demonstrate the usage of `customTemplate` option.
 
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
 
## Styling :-

- `showMaxLabels`: **number?** -
Set value here to configure how much selected values to be shown on dropdown. If selected values count exceeds `showMaxLabes`, dropdown will show ellipses(...) after text.

  ```html 
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    showMaxLables = "3">
  </ngx-multiselect>
  ```

- `theme`: **String?** -
We currently support two themes, namely they are ‘material’ and ‘bootstrap’. Theme is defaulted to `material`.

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
 
## Grouping Property Configuration :
	
- `groupedProperty`: **String** -
It accepts the property name that belongs to collection each object, by which elements to be grouped.

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
Multiselect `options` needs data in predefined format as below which includes keys like `id`, `name`, `disabled`, etc as below.  
  ```js
  {
    "id": 3,
    "name": "Test 3",
    "category": "Cat 2",
    "disabled": true
  }
  ```

  If the data is not present in the expected format, you could use `propertyMap` property binding and provide the desired object mapping. This will be used to map the key of your `json` to the key of each item of collection. For eg. the data is
  
  ```js
  {
    "empId": 3,
    "empName": "Test 3",
    "empCategory": "Cat 2",
    "empActive": true
  }
  ```
  `propertyMap` should look like below
  ```js
  propertyMap = {
    "empId" : "id",
    "empName" : "name",
    "empCategory" : "category",
    "empActive" : "disabled"
  }
  ```
  So, the multiselect converts the `propertyMap` to its own format as below
  ```js
  {
    "id": 3,
    "name": "Test 3",
    "category": "Cat 2",
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