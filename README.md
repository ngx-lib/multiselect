[![https://nodei.co/npm/@ngx-lib/multiselect.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@ngx-lib/multiselect.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@ngx-lib/multiselect) [![HitCount](http://hits.dwyl.com/ngx-lib/multiselect.svg)](http://hits.dwyl.com/ngx-lib/multiselect.svg) [![Known Vulnerabilities](https://snyk.io/test/github/ngx-lib/multiselect/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ngx-lib/multiselect?targetFile=package.json) [![Build Status](https://travis-ci.com/ngx-lib/multiselect.svg?branch=master)](https://travis-ci.com/ngx-lib/multiselect)


# Multiselect

This project focuses on serving an alternative and intutive select control. This UI component has been inspired by AngularJS [isteven-multiselect](http://isteven.github.io/angular-multi-select) directives. In terms of UI it might look somewhat similar to isteven multiselect, but in terms of code it may not exactly architectured in the same way.

# Roadmap

check [Roadmap.md](https://github.com/ngx-lib/multiselect/blob/master/ROADMAP.md)

**Note:** If you're willing to contribute please ping me on pankajparkar@outlook.com. 

# Development server

Before start everything make sure you've latest version of angular-cli, if not then run below command
```
npm i -g @angular/cli@latest
```
To play around with this repository you have to run below two commands
1. `npm run multiselect-watch` - This command will help to build multiselect library everytime when you change any file from it.  
2. `npm start` - To run application, it will consume live multiselect library

# Running unit tests

## Run test cases

`ng test --project='multiselect'`

## Check code coverage

1. `ng test --project='multiselect' --code-coverage`
2. `npx http-server -c-1 -o -p 9875 ./coverage`

![alt text](https://raw.githubusercontent.com/ngx-lib/multiselect/master/code-coverage.png)