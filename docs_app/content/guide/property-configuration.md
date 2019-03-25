# Property Configuration:

## General  Propertiy Configuration :

- `isOpen`: **Boolean?** -
Use this property if you want multiselect dropdown to be open by default.  

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [isOpen]=”true”>
  </ngx-multiselect>
  ```

- `disabled`: **Boolean?** -
  There are two ways to disable multiselect. You can disable options from array of options to be disabled or you can set disabled property to be true for multiselect which makes it disabled so it cannot be clicked and cannot be opened.
  	Set disabled property to true if you want to disable whole dropdown.  

  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [disabled]="true”>
  </ngx-multiselect>
  ```

- `options`: **any[]** –
This property serves as input to muliselect which specifies options to be rendered by mulitiselect.There is a predefined format for data to be given as input to mutiselect which is expained in simple multiselect guide, grouping options guide for grouping and if the data is not in specified in format you can also pass propertyMap which links the input data to muliselect format data which is explained here:                     
  
  ```html
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options">
  </ngx-multiselect>
  ```

- `optionsTemplate`: **TemplateRef<any>?** –
Use this property to pass the custom template to displayed by multiselect while rendering options.For example, while showing the list of countries, you can pass the template which should display the name of country with its flag on right side as shown here. The example below displayes a fixed image before the actual name of option.  
 
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
 
## Styling Property Configuration :

- `showMaxLabels`: **number?** -
Use this property to configure how much selected values to be shown on dropdown.If the value line becomes long it will be cut to match the width of dropdown and ellipses are shown to indicate cut values.

  ```html 
  <ngx-multiselect
    [(ngModel)]="selectedOption"
    [options]="options"
    showMaxLables = 3>
  </ngx-multiselect>
  ```

- `theme`: **String?** -
Use this property to specify the theme for multiselect. There are two themes currently supported ‘material’ and ‘bootstrap’.If u select material you can also specify the color for mutiselect from the angular material theme or any valid  css color.

  Available Values: ‘material’ | ‘bootstrap’  

```html 
<ngx-multiselect 
  [(ngModel)]="selectedOption"
  [options]="options"
  [theme]=” ‘material’ ”>
</ngx-multiselect>
```

- `color`: **String?** -
Use this property to specify the color for multiselect if you selected material theme. You can specify the color from angular material theme or any valid  css color.  

  Available Values: material theme color | valid css color  


  ```html 
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [theme]=” ‘material’ ”
    [color]=” ‘primary’ ”>
  </ngx-multiselect>
  ```
	
 
## Grouping Property Configuration :
	
- `groupedProperty`: **String** -
Use this property to specify which key to use from option json which when accessed gives the group to which that option belongs.  

  ``` html  
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [groupedProperty]=” ’category’ ”>
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
    - "category": "Cat 1"
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
  If  the data is not present in the exact format, use this property to provide propertyMap which will be used to map the key of your json to the key of json format used by multiselect. For example, the data is
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
    "empId” : "id”,
    "empName” : "name”,
    "empCategory” : "category”,
    "empActive” : "disabled”,
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
    Type: any  
    Example:  
  ```html 
  <ngx-multiselect 
    [(ngModel)]="selectedOption"
    [options]="options"
    [propertyMap]=”propertyMap”>
  </ngx-multiselect>
  ```