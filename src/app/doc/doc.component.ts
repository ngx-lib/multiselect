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

  constructor(private router: Router, private _activatedRoute: ActivatedRoute, private _docService: DocService) {}

  apiLinks = [
    { link: ['/docs', 'getting-started'], text: 'Getting Started' },
    { link: ['/docs', 'property-configuration'], text: 'Property Configuration' },
    { link: ['/docs', 'events'], text: 'Events' }
  ];

  navLinks = [
    { link: ['/docs', 'simple-select'], text: 'Simple Select' },
    { link: ['/docs', 'template-driven'], text: 'Template Driven' },
    { link: ['/docs', 'model-driven'], text: 'Model Driven' },
    { link: ['/docs', 'observable-data'], text: 'Observable' },
    { link: ['/docs', 'custom-template'], text: 'Custom Template' },
    { link: ['/docs', 'grouping'], text: 'Grouping' },
    { link: ['/docs', 'disable-option'], text: 'Enable / Disable' },
    { link: ['/docs', 'property-map'], text: 'Property Maping' },
    { link: ['/docs', 'callbacks'], text: 'Callbacks' },
    { link: ['/docs', 'helper-elements'], text: 'Helper Elements' },
    { link: ['/docs', 'theming'], text: 'Theming' },
    { link: ['/docs', 'virtual-list'], text: 'Virtual List' },
    { link: ['/docs', 'bootstrap-theme'], text: 'Bootstrap Theme' }
  ];

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
