import { Injectable } from '@angular/core';

const matchSelectors = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'];

@Injectable({
  providedIn: 'root'
})
export class NgxMultiselectService {
  constructor() { }

  pseudoClassExist(node, selector) {
    const nativeMatches = ( node.matches || node.msMatchesSelector );
    try {
      return (nativeMatches.call(node, selector));
    } catch (error) {
      return (false);
    }
  }

  closest(el, selector): boolean {
    let matchesFn;
    // find vendor prefix
    matchSelectors.some(function (fn) {
      if (typeof document.body[fn] === 'function') {
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

  optionsGrouping(options, groupByProperty): any[] {
    const getAllUniqueGroupByPropertyValue = [...Array.from(new Set(options.map(item => item[groupByProperty])))]
    const result = getAllUniqueGroupByPropertyValue.map(
      group => {
        const groupedValues = options.filter(o => o[groupByProperty] === group)
        return {
          name: group,
          values: groupedValues,
          ticked: groupedValues.every(o => o.ticked),
          disabled: groupedValues.every(o => o.disabled),
        }
      }
    )
    return result;
  }

  mapDatasourceToFields (collection: any[], propertyMap, groupedProperty?) {
    let keys = Object.keys(propertyMap);
    return collection.map((item: any) => {
      let obj = groupedProperty ? { [groupedProperty]: item[groupedProperty] }: {}
      keys.reduce((a: any, b: string) => { obj[b] = item[propertyMap[b]] }, obj);
      return obj;
    })
  }
}
