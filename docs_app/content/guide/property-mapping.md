# Property Mapping:

Multiselect options needs data in predefined format as below which should have keys like id, name, category, disabled etc as below.
```js	
{
  "id": 3,
  "name": "Test 3",
  "category": "Cat 2",
  "disabled": true
}
```
If  the data is not present in the exact format,we can pass  propertyMap which will be used to map the key of custom json object to the key of json format used by multiselect. For example, the data is
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
            
Demo showing multiselect using property map.

But sometimes it may happen you have data in exact format as shown below but only the key to access category is different, in that case passing the key string to groupedProperty input will also work fine.

Demo showing passing only grouped property to array of json of teams bcoz teams will have `team` key which will act as category for the particular team.

#Demo

<ms-property-map></ms-property-map>

<code-tabs>
  <code-pane title="app/app.component.ts" path="attribute-directives/src/app/app.component.ts"></code-pane>
  <code-pane title="app/app.component.html" path="attribute-directives/src/app/app.component.html"></code-pane>
</code-tabs>
