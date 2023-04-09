import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input()
  title: string;
}
