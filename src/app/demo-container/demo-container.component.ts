import { Component, OnInit, Input } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('typescript', typescript);

@Component({
  selector: 'ms-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.css']
})
export class DemoContainerComponent implements OnInit {

  @Input()
  data;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
