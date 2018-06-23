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
}
