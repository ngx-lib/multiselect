import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'im-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  singleSelect: any = {id: 1, name: 'a'}
  mutlipleSelect = new FormControl([
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'}
  ]);
  groupingSupport = new FormControl([
    {id: 1, name: 'Test 1'},
  ]);
  // options = [
  //   'a', 'b', 'c', 'd', 'e', 'f'
  // ]
  
  // propertyMap = {
  //   name: 'value'
  // }
  
  singleSelectOptions = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd', disabled: true},
    {id: 5, name: 'e'},
  ]

  multipleSelectOptions = [
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'},
    {id: 3, name: 'Test 3'},
    {id: 4, name: 'Test 4'},
    {id: 5, name: 'Test 5'}
  ]

  groupingOptions = [
    {id: 1, name: 'Test 1', category: 'Cat 1'},
    {id: 2, name: 'Test 2', category: 'Cat 1'},
    {id: 3, name: 'Test 3', category: 'Cat 2'},
    {id: 4, name: 'Test 4', category: 'Cat 2'},
    {id: 5, name: 'Test 5', category: 'Cat 3'}
  ]
}
