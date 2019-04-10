# Enable/Disable

There are two ways to disable multiselect.
1. Disable single option / Group element
2. Disable whole multiselect dropdown

---

## 1. Disable single option / Group element

Just clone the array passed to function and set the disabled property to be `true` for a specific option that you would want to disable.

### Demo :- Pending showing disabling first option on the fly

In case of disabling the whole group on the fly, just iterate through the collection and filter it on the basis of category you want to disable and set the disabled property of all items in that group to be true. Voila! the group is disabled.

### Demo:- Pending showing disabling group on the fly

### Demo

<ms-enable-disable></ms-enable-disable>

<code-tabs>
  <code-pane title="app/enable-disable.component.ts" path="enable-disable/src/app/enable-disable.component.ts"></code-pane>
  <code-pane title="app/enable-disable.component.html" path="enable-disable/src/app/enable-disable.component.html"></code-pane>
</code-tabs>

## 2. Disable whole multiselect dropdown

In order to disable whole dropdown just pass the `disabled` property to be `true` and the whole dropdown is `disabled` with the selected option.

Demo showing disabling dropdown on the fly with one button click.

We can do the same thing using template reference variable also.

### Demo :- Pending showing disabling dropdown using template ref variable

### Demo

<ms-enable-disable></ms-enable-disable>

<code-tabs>
  <code-pane title="app/enable-disable.component.ts" path="enable-disable/src/app/enable-disable.component.ts"></code-pane>
  <code-pane title="app/enable-disable.component.html" path="enable-disable/src/app/enable-disable.component.html"></code-pane>
</code-tabs>