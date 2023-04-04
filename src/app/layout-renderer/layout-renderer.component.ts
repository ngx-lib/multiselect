import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-layout-renderer',
  templateUrl: 'layout-renderer.component.html',
  styleUrls: ['./layout-renderer.component.css']
})
export class LayoutRendererComponent {
  @Input()
  data: [any];

}
