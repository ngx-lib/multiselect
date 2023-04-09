import { GroupByMultiselectOption, MultiselectOption } from './models/multiselect-option.model';

const matchSelectors = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector'
];

export function pseudoClassExist(node: HTMLElement, selector: string) {
    const nativeMatches = node.matches || (node as any).msMatchesSelector;
    try {
        return nativeMatches.call(node, selector);
    } catch (error) {
        return false;
    }
}

export function closest(el: HTMLElement | null, selector: string): boolean {
    let matchesFn;
    // find vendor prefix
    matchSelectors.some(function (fn) {
        if (typeof (document as any).body[fn] === 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    });

    let parent: HTMLElement | null;

    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && matchesFn && (parent[matchesFn] as any)(selector)) {
            return !!parent;
        }
        el = parent;
    }

    return false;
}

// TODO: make this logic to work to find all descendant groups
export function collectAllDescendants(collection: GroupByMultiselectOption[], groupProperty: string, groupName: string) {
    const allDescendants = collection.filter(
        (item) => item[groupProperty] as string === groupName
    );
    allDescendants.concat(
        collection.filter(item => item.parent == groupName)
    );
    return allDescendants;
}

function allDescendantsAreTicked(collection: GroupByMultiselectOption[], groupProperty: string, groupName: string) {
    const allDescendants = collectAllDescendants(collection, groupProperty, groupName);
    const allAreTicked = allDescendants.every(d => d.ticked);
    return allAreTicked;
}
function allDescendantsAreDisabled(collection: GroupByMultiselectOption[], groupProperty: string, groupName: string) {
    const allDescendants = collectAllDescendants(collection, groupProperty, groupName);
    const allAreDisabled = allDescendants.every(d => d.disabled);
    return allAreDisabled;
}

export function optionsGrouping(options: GroupByMultiselectOption[], groupByProperty: string): GroupByMultiselectOption[] {
    const getAllUniqueGroupByPropertyValue = findUnique(
        options.map((item) => item[groupByProperty] as string)
    );
    const result = getAllUniqueGroupByPropertyValue.map(group => {
        const groupedValues = options.filter(o => o[groupByProperty] === group);
        return {
            name: group,
            values: groupedValues,
            ticked: groupedValues.every(o => o.ticked),
            disabled: groupedValues.every(o => o.disabled),
            isGroup: true,
        };
    });
    return result as GroupByMultiselectOption[];
}

export function findUnique<T>(expression: T[]) {
    return [...Array.from(new Set(expression))];
}

export function virtualOptionsGroupingFlatten(options: GroupByMultiselectOption[], groupByProperty: string): GroupByMultiselectOption[] {
    const allParentGroupedValues = findUnique(
        options.filter((o) => !(o.parent))
            .map((item) => item[groupByProperty])
    );
    const subGroupedValues = options.filter(o => o.parent)
        .map((item) => ({
            name: item.name,
            parent: item.parent,
        }));
    let result: GroupByMultiselectOption[] = [];
    allParentGroupedValues.forEach(group => {
        result.push({
            name: group,
            isGroup: true,
            ticked: allDescendantsAreTicked(options, groupByProperty, group),
            disabled: allDescendantsAreDisabled(options, groupByProperty, group)
        });
        const groupedValues = options
            .filter(o => o[groupByProperty] === group && !o.parent)
            .map(v => ({ ...v, depth: 1 }));
        result = [...result].concat(groupedValues);
        const childGroupedValues = subGroupedValues.filter((s) => s.parent! === group);
        childGroupedValues.forEach(c => {
            result.push({ name: c.name, parent: group, isGroup: true });
            const values = options.filter(o => o[groupByProperty] === c).map(v => ({ ...v, depth: 2 }));
            result.concat(values);
        });
    });
    return result;
}

export function mirrorObject(json: Record<string, string>) {
    const ret: Record<string, string> = {};
    for (const key in json) {
        ret[json[key] as string] = key;
    }
    return ret;
}

export function mapDatasourceToFields(collection: MultiselectOption[], propertyMap: Record<string, string>, groupedProperty?: string) {
    const keys = Object.keys(propertyMap);
    return collection.map((item) => {
        const obj = groupedProperty ? { [groupedProperty]: item[groupedProperty] } : {};
        keys.reduce((a, b: string) => {
            a[b] = item[propertyMap[b] as string];
            return a;
        }, obj);
        return obj;
    }) as MultiselectOption[];
}