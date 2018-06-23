import { Component } from '@angular/core';

@Component({
  selector: 'im-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-isteven-multiselect';
  options = [
    'a', 'b', 'c', 'd', 'e', 'f'
  ]

  propertyMap = {
    name: 'value'
  }

  objectOptions = [
    {id: 1, value: 'Test 1'},
    {id: 2, value: 'Test 2'},
    {id: 3, value: 'Test 3'},
    {id: 4, value: 'Test 4'},
    {id: 5, value: 'Test 5'}
  ]
}
