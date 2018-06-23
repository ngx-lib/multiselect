import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IstevenMultiselectService {
  constructor() { }
  closest(el, selector) {
    let matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
      if (typeof document.body[fn] == 'function') {
        matchesFn = fn;
        return true;
      }
      return false;
    })

    let parent;

    // traverse parents
    while (el) {
      parent = el.parentElement;
      if (parent && parent[matchesFn](selector)) {
        return parent;
      }
      el = parent;
    }

    return false;
  }
}
