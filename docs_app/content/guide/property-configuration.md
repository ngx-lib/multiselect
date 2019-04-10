# Property Configuration:-

There are various property binding options that are applicable, you can configure them as you need.

## General:-

- `isOpen`: **Boolean?** - Use `isOpen` property if you want to programatically control multiselect dropdown behaviour. In case you haven't passed it we manage `isOpen` flag internally to control multiselect state. 

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [isOpen]=”true”>
  </ngx-multiselect>
  ```

- `disabled`: **Boolean?** -
  There are two ways to disable multiselect. You can either disable option(s) from an array or you can set disabled property to be true for multiselect component, which makes thorough dropdown disabled. So it cannot be clicked and cannot be opened.
  To disable particular option or group, place `disabled: true` option on desired element or group.

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [disabled]="true”>
  </ngx-multiselect>
  ```

- `options`: **any[]** –
This property serves as options/datasource to muliselect which being rendered by mulitiselect. There is a predefined format for data to be given as input to mutiselect which is expained in simple multiselect guide, grouping options guide. And if the data is not in specified format, you can also pass `propertyMap` which links the input data to muliselect format data which is explained here:                     

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options">
  </ngx-multiselect>
  ```

- `optionsTemplate`: **TemplateRef< any >?** –
Use this property binding to pass the custom template to displayed by multiselect while rendering options. For example, while showing the list of countries, you can pass your own customize template which should display the name of country with its flag on right side. The below snippet demonstrate the usage of customTemplate option.
 
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
Set value to configure how much selected values to be shown on dropdown. If selected values count exceeds `showMaxLabes`, dropdown will show ellipses(...) after text.

  ```html 
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    showMaxLables = "3">
  </ngx-multiselect>
  ```

- `theme`: **String?** -
Use this property to specify the theme for multiselect. There are two themes currently supported ‘material’ and ‘bootstrap’. If u select `material` you can also specify the color for mutiselect from the angular material theme or any valid css color.

*Available Values*: ‘material’ | ‘bootstrap’  

```html 
<ngx-multiselect 
  [(ngModel)]="selectedOption"
  [options]="options"
  theme=”material”>
</ngx-multiselect>
```

- `color`: **String?** -
Use this property to specify the color for multiselect if you selected material theme. You can specify the color from angular material theme or any valid  css color.

*Available Values*: any valid css color

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
Use this property to specify property name by which multiselect should create the groups.  

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
Multiselect options needs data in predefined format as below which should have keys like id, name, category, disabled etc as below.  

  ```js
  {
    "id": 3,
    "name": "Test 3",
    "category": "Cat 2",
    "disabled": true
  }
  ```
  If  the data is not present in the expected format, use `propertyMap` property binding and provide the desired `propertyMap` collection. This will be used to map the key of your `json` to the key of each item of collection. For eg. the data is
  ```js
  {
    "empId": 3,
    "empName": "Test 3",
    "empCategory": "Cat 2",
    "empActive": true
  }
  ```
  The propertyMap should be
  ```js
  propertyMap = {
    "empId" : "id",
    "empName" : "name",
    "empCategory" : "category",
    "empActive" : "disabled"
  }
  ```
  So, the multiselect converts the propertyMap to its own format as 
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