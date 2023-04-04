import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-content',
  templateUrl: 'content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  content: string;
}
