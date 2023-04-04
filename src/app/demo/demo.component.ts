import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-demo',
  templateUrl: 'demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input()
  component: string;

}
