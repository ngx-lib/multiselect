import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocService } from '../doc.service';

@Component({
  selector: 'ms-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  data: any;

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private _docService: DocService
  ) { }

  isActive(instruction: any[]): boolean {
    // Set the second parameter to true if you want to require an exact match.
    return this.router.isActive(this.router.createUrlTree(instruction), false);
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this._docService.getDocData(params['topic']).subscribe(data => {
        this.data = data;
      });
    });
  }

}
