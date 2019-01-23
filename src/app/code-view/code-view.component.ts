import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  @Input()
  code: string;

  constructor() { }

  ngOnInit() {
  }

}
