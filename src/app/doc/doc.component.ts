import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  data: any = {
    title : 'Sample Title',
    content : 'Sample content to describe title',
    note: 'Sample note in case needed'
  };

  constructor() { }

  ngOnInit() {
  }

}
