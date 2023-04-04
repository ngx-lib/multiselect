import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';

@Component({
  selector: 'ms-code-view',
  templateUrl: 'code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {
  @Input()
  code: string;
  @Input()
  language: string;
  @ViewChild('code')
  codeElement: ElementRef;

  ngOnInit() {
    this.codeElement.nativeElement.textContent = window.atob(this.code);
    hljs.highlightBlock(this.codeElement.nativeElement);
  }
}
