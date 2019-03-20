## Property Configuration:
### General  Propertiy Configuration :

### isOpen -
Use this property if you want multiselect dropdown to be open by default.  
Type : Boolean  
Default Value: false  
Example : 

```html
<ngx-multiselect 
  [(ngModel)]="selectedOption"
  [options]="options"
  [isOpen]=”true”>
</ngx-multiselect>
```

### disabled – 
  There are two ways to disable multiselect. You can disable options from array of options to be disabled or you can set disabled property to be true for multiselect which makes it disabled so it cannot be clicked and cannot be opened.
  	Set disabled property to true if you want to disable whole dropdown.  
            Type : Boolean  
        	Default Value: false  
        	Example :   
```html
<ngx-multiselect 
  [(ngModel)]="selectedOption"
  [options]="options"
  [disabled]="true”>
</ngx-multiselect>
```


### options (required) –
This property serves as input to muliselect which specifies options to be rendered by mulitiselect.There is a predefined format for data to be given as input to mutiselect which is expained in simple multiselect guide, grouping options guide for grouping and if the data is not in specified in format you can also pass propertyMap which links the input data to muliselect format data which is explained here:                     
        	Type : [Option] | [any]  
        	Example : 
```html
<ngx-multiselect 
  [(ngModel)]="selectedOption"
  [options]="options">
</ngx-multiselect>
```



### optionsTemplate –
Use this property to pass the custom template to displayed by multiselect while rendering options.For example, while showing the list of countries, you can pass the template which should display the name of country with its flag on right side as shown here. The example below displayes a fixed image before the actual name of option.  
            Type : TemplateRef<any>;  
        	Default Value: null  
        	Example :   
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

### showMaxLabels -
Use this property to configure how much selected values to be shown on dropdown.If the value line becomes long it will be cut to match the width of dropdown and ellipses are shown to indicate cut values.
	Type: number  
	Default Value : 3  
	Example:  
```html 
<ngx-multiselect
  [(ngModel)]="selectedOption"
  [options]="options"
  showMaxLables = 3>
</ngx-multiselect>	
```

### theme -
Use this property to specify the theme for multiselect. There are two themes currently supported ‘material’ and ‘bootstrap’.If u select material you can also specify the color for mutiselect from the angular material theme or any valid  css color.

Type: String  
	Available Values: ‘material’ | ‘bootstrap’  
	Example:  
```html 
<ngx-multiselect 
  [(ngModel)]="selectedOption"
  [options]="options"
  [theme]=” ‘material’ ”>
</ngx-multiselect>
```

### color -
Use this property to specify the color for multiselect if you selected material theme. You can specify the color from angular material theme or any valid  css color.  
	Type: String  
	Available Values: material theme color | valid css color  
	Example:  
```html 
<ngx-multiselect 
  [(ngModel)]="selectedOption"
  [options]="options"
  [theme]=” ‘material’ ”
  [color]=” ‘primary’ ”>
</ngx-multiselect>
```
	
 
## Grouping Property Configuration :
	
### groupedProperty -
Use this property to specify which key to use from option json which when accessed gives the group to which that option belongs.  
	Type: String  
	Example:  
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

### propertyMap -
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
## Events:

### General Dropdown Events:
### 1. onOpen
Event fired on opening the dropdown
```html
<ngx-multiselect
  [multiple] = true
  [formControl]="selectedOption"
  [options]="options"
  (onOpen)="onOpenFired()">
</ngx-multiselect>
```

### 2. onClose
Event fired when the dropdown is closed
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onClose)="onCloseFired()">
  </ngx-multiselect>
```

### 3. onItemClick
Event fired when one of the item from dropdown is clicked/selected. The event will contain the clicked item data.
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onItemClick)="onItemClickFired($event)">
  </ngx-multiselect>
```

### 4. onGroupItemClick
Event fired when the items group(i.e. the parent of all items in case of grouping) is selected/clicked.The event will contain whole group data.
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onGroupItemClick)="onGroupItemClickFired($event)">
  </ngx-multiselect>
```


## Helper Elements Events
### 1. onSelectAll
Event fired when the 'Select All' (to select all items clicked) helper element is clicked
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onSelectAll)="onSelectAllFired()">
  </ngx-multiselect>
```

### 2. onSelectNone
Event fired when the 'Select None' (to deselect all selected items) helper element is clicked
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onSelectNone)="onSelectNoneFired()">
  </ngx-multiselect>
```

### 3. onReset
Event fired when the 'Reset' (to reset selection back to user provided default state) helper element is clicked
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onReset)="onResetFired()">
  </ngx-multiselect>
```

## Filtering events
### 1. onClear
Event fired when the 'Clear' button is clicked
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onClear)="onClearFired()">
  </ngx-multiselect>
```

### 2. onSearchChange
Event fired when the text is typed into a search box to filter the items
```html
<ngx-multiselect
    [multiple] = true
    [formControl]="selectedOption”
    [options]="options"
    (onSearchChange)="onSearchChangeFired($event)">
  </ngx-multiselect>
```
