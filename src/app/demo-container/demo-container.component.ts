import { Component, OnInit } from '@angular/core';
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

  tsCode: string;
  htmlCode: string;
  cssCode: string;

  constructor() { }

  ngOnInit() {
    this.tsCode = `import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'ms-demo-container',
      templateUrl: './demo-container.component.html',
      styleUrls: ['./demo-container.component.css']
    })
    export class DemoContainerComponent implements OnInit {
    
      tsCode: string;
      htmlCode: string;
      cssCode: string;
    
      constructor() { }
    
      ngOnInit() {
        this.cssCode = '';
      }
    
    }`;
    this.cssCode = `
    .text-indent{
      text-indent: 5rem;
    }`;
    this.htmlCode = `
    <h2>Custom Template</h2>
    `;

  }

}
