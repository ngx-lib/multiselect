[![https://nodei.co/npm/@ngx-lib/multiselect.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@ngx-lib/multiselect.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@ngx-lib/multiselect) [![HitCount](http://hits.dwyl.com/ngx-lib/multiselect.svg)](http://hits.dwyl.com/ngx-lib/multiselect.svg) [![Known Vulnerabilities](https://snyk.io/test/github/ngx-lib/multiselect/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ngx-lib/multiselect?targetFile=package.json) [![Build Status](https://travis-ci.com/ngx-lib/multiselect.svg?branch=master)](https://travis-ci.com/ngx-lib/multiselect)

# Multiselect

This project focuses on serving an intuitive select control. This look and feel of the component has been inspired by AngularJS [isteven-multiselect](http://isteven.github.io/angular-multi-select) directive, but from coding perspective, this may not be architectured in the similar way. 
It supports ultimate features like
- 🖱️Virtual scroll
- 📃Forms
- 🎨Theming (bootstrap/material)
- 👀Observable
- 🅰️@angular 6+
- 👨‍👧‍👧Grouping
- etc...

[visit docs](https://ngx-lib.github.io/multiselect/)

# Getting Started

<ms-single-select></ms-single-select>

It's super easy to get started with Angular multiselect dropdown. Only three steps are required:

1.  Install `@ngx-lib/multiselect` package

    <code-example language="sh" class="code-shell">
    npm install -S @ngx-lib/multiselect
    </code-example>

2.  Import module `NgxMultiselectModule` into your `app.module.ts`
    ```js
    import { NgxMultiselectModule } from '@ngx-lib/multiselect';

    @NgModule({
        imports: [
            ...,
            NgxMultiselectModule // <-- add module in imports
        ],
        bootstrap: [AppComponent],
        providers: [...],
        declarations: [...]
    })
    export class AppModule {

    }
    ```


3.  Use `ngx-multiselect` on HTML

    ```html
    <ngx-multiselect
        [(ngModel)]="selectedCountry"
        [options]="countries"
        ngDefaultControl>
    </ngx-multiselect>
    ```

    ```js
    import { Component, OnInit } from '@angular/core';

    @Component({...})
    export class AppComponent implements OnInit {
        countries;
        selectedCountry;

        ngOnInit() {
            this.countries = [
                { id: 1, name: "India"},
                { id: 2, name: "USA" },
                { id: 3, name: "China" },
                { id: 4, name: "Japan" }
            ];

            this.selectedCountry = [{
                id: 1,
                name: "India"
            }];
        }
    }
    ```

## [**Stackblitz Demo**](https://stackblitz.com/edit/ngx-multilselect)


# Developer tasks

We use `npm` to manage the dependencies and to run build tasks.
You should run all these tasks from the `multiselect/docs_app` folder.
Here are the most important tasks you might need to use:

* `npm install` - install all the dependencies.
* `npm run setup` - install all the dependencies and run dgeni on the docs.

* `npm run build` - create a production build of the application (after installing dependencies, etc).

* `npm start` - run a development web server that watches the files; then builds the doc-viewer and reloads the page, as necessary.
* `npm run serve-and-sync` - run both the `docs-watch` and `start` in the same console.
* `npm run lint` - check that the doc-viewer code follows our style rules.
* `npm test` - watch all the source files, for the doc-viewer, and run all the unit tests when any change.
* `npm test -- --watch=false` - run all the unit tests once.
* `npm run e2e` - run all the e2e tests for the doc-viewer.

* `npm run docs` - generate all the docs from the source files.
* `npm run docs-watch` - watch the multiselect source and the docs files and run a short-circuited doc-gen for the docs that changed (don't work properly at the moment).
* `npm run docs-lint` - check that the doc gen code follows our style rules.
* `npm run docs-test` - run the unit tests for the doc generation code.

* `npm run build-ie-polyfills` - generates a js file of polyfills that can be loaded in Internet Explorer.


# Running unit tests

## Run test cases

`ng test --project='multiselect'`

## Check code coverage

1. `ng test --project='multiselect' --code-coverage`
2. `npx http-server -c-1 -o -p 9875 ./coverage`

![alt text](https://raw.githubusercontent.com/ngx-lib/multiselect/master/code-coverage.png)