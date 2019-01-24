import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input()
  demoName: string;
  
  constructor() { }

  ngOnInit() {
  }

}
