import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocService } from '../doc.service';

@Component({
  selector: 'ms-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  data: any;

  constructor(private _activatedRoute: ActivatedRoute, private _docService: DocService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log(params['topic']);
      this._docService.getDocData(params['topic']).subscribe(data => {
        console.log(data);
        this.data = data;
      });
    });
  }

}
