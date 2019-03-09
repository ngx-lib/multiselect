import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-layout-renderer',
  templateUrl: './layout-renderer.component.html',
  styleUrls: ['./layout-renderer.component.css']
})
export class LayoutRendererComponent implements OnInit {
  @Input()
  data: [any];

  constructor() {}

  ngOnInit() {}
}
