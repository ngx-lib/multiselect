import { Injectable } from '@angular/core';

const matchSelectors = [
  'matches',
  'webkitMatchesSelector',
  'mozMatchesSelector',
  'msMatchesSelector',
  'oMatchesSelector'
];

@Injectable({
  providedIn: 'root'
})
export class NgxMultiselectService {
  constructor() {}

  pseudoClassExist(node, selector) {
    const nativeMatches = node.matches || node.msMatchesSelector;
    try {
      return nativeMatches.call(node, selector);
    } catch (error) {
      return false;
    }
  }

  closest(el, selector): boolean {
    let matchesFn;
    // find vendor prefix
    matchSelectors.some(function(fn) {
      if (typeof document.body[fn] === 'function') {
        matchesFn = fn;
        return true;
      }
      return false;
    });

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

  // TODO: make this logic to work to find all descendant groups
  collectAllDescendants(collection, groupProperty, groupName) {
    const allDescendants = collection.filter(item => item[groupProperty] == groupName);
    allDescendants.concat(collection.filter(item => item.parent == groupName));
    return allDescendants;
  }

  private allDescendantsAreTicked(collection, groupProperty, groupName) {
    const allDescendants = this.collectAllDescendants(collection, groupProperty, groupName);
    const allAreTicked = allDescendants.every(d => d.ticked);
    return allAreTicked;
  }
  private allDescendantsAreDisabled(collection, groupProperty, groupName) {
    const allDescendants = this.collectAllDescendants(collection, groupProperty, groupName);
    const allAreDisabled = allDescendants.every(d => d.disabled);
    return allAreDisabled;
  }

  optionsGrouping(options, groupByProperty): any[] {
    const getAllUniqueGroupByPropertyValue = this.findUnique(options.map(item => item[groupByProperty]));
    const result = getAllUniqueGroupByPropertyValue.map(group => {
      const groupedValues = options.filter(o => o[groupByProperty] === group);
      return {
        name: group,
        values: groupedValues,
        ticked: groupedValues.every(o => o.ticked),
        disabled: groupedValues.every(o => o.disabled)
      };
    });
    return result;
  }

  findUnique(expression) {
    return [...Array.from(new Set(expression))];
  }

  virtualOptionsGroupingFlatten(options, groupByProperty): any[] {
    const allParentGroupedValues = this.findUnique(options.filter(o => !o.parent).map(item => item[groupByProperty]));
    const subGroupedValues = this.findUnique(
      options.filter(o => o.parent).map(({ name, parent }) => ({ name, parent }))
    );
    let result = [];
    allParentGroupedValues.forEach(group => {
      result.push({
        name: group,
        isGroup: true,
        ticked: this.allDescendantsAreTicked(options, groupByProperty, group),
        disabled: this.allDescendantsAreDisabled(options, groupByProperty, group)
      });
      const groupedValues = options
        .filter(o => o[groupByProperty] === group && !o.parent)
        .map(v => ({ ...v, depth: 1 }));
      result = [...result].concat(groupedValues);
      const childGroupedValues = subGroupedValues.filter((s: any) => s.parent === group);
      childGroupedValues.forEach(c => {
        result.push({ name: c, parent: group, isGroup: true });
        const values = options.filter(o => o[groupByProperty] === c).map(v => ({ ...v, depth: 2 }));
        result.concat(values);
      });
    });
    return result;
  }

  mirrorObject(json) {
    const ret = {};
    for (var key in json) {
      ret[json[key]] = key;
    }
    return ret;
  }

  mapDatasourceToFields(collection: any[], propertyMap, groupedProperty?) {
    let keys = Object.keys(propertyMap);
    return collection.map((item: any) => {
      let obj = groupedProperty ? { [groupedProperty]: item[groupedProperty] } : {};
      keys.reduce((a: any, b: string) => {
        obj[b] = item[propertyMap[b]];
      }, obj);
      return obj;
    });
  }
}
