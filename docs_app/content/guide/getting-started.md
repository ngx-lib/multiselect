# Getting Started

Its super easy to get started with Angular multiselct dropdown

Only three steps required.

1.  Install `@ngx-lib/multiselect` package

    <code-example language="sh" class="code-shell">
    npm install -g @angular/cli
    </code-example>

2.  Import module into your `app.module.ts`
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
    export class SingleSelectComponent implements OnInit {
        countries;
        selectedCountry;
        
        ngOnInit() {
            this.countries = [
                { id: 1, name: "India"},
                { id: 2, name: "USA" },
                { id: 3, name: "China" },
                { id: 4, name: "Japan" }
            ];
        
            this.selectedCountry = {
                id: 1,
                name: "India"
            };
        }
    }
    ```

## Demo

<ms-single-select></ms-single-select>
