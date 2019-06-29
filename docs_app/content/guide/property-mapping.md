# Property Mapping

Multiselect options list requires data in a predefined format, format looks like below.
```js
{
  "id": 3,
  "name": "Test 3",
  "disabled": true
}
```
If the data is not present in the exact format, you can use `propertyMap` which will be used to transform your current dataset to the expected object structure. For example, the data appears as below:
```js
{
  "empId": 3,
  "empName": "Test 3",
  "empActive": true
}
```
The `propertyMap` should look like below
```js
propertyMap = {
  "empId" : "id",
  "empName" : "name",
  "empActive" : "disabled"
}
```

So, the multiselect API internally takes care of converting the collection to the desired format based on `propertyMap` mapping.

```js
{
  "id": 3,
  "name": "Test 3",
  "disabled": true
}
```

### Property Mapping Demo

<ms-property-map></ms-property-map>

<code-tabs>
  <code-pane title="app/property-map.component.html" path="property-map/src/app/property-map.component.html"></code-pane>
  <code-pane title="app/property-map.component.ts" path="property-map/src/app/property-map.component.ts"></code-pane>
</code-tabs>
