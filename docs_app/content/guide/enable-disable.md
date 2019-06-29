# Enable/Disable

There are two ways to disable multiselect.
  1. Disable single / group option
  2. Disable whole multiselect dropdown

---

## 1. Disable single / group option

Clone an array passed to function and set the disabled property to be `true` for a specific option that you would want to disable.

```js
disableFirstOption(){
  let options = [...this.options]
  // disabled first element
  options[0].disabled = true;
  this.options = options;
}
```

In case of disabling the whole group on the fly, just iterate through the collection and filter it on the basis of category you want to disable and set the disabled property of all items in that group to be true. Voila! the group is disabled.

```js
disableWholeGroup(){
  this.options = this.options.map((player) => {
    if(player.team === 'Manchester United') {
      player.disabled = true;
    }
    return player;
  });
}
```

## 2. Disable whole multiselect dropdown

In order to disable whole dropdown, just set the `disabled` property to `true` and the whole dropdown becomes `disabled` with the selected option. We can also do the same thing using reactive form as well like shown below.

```js
disableWholeDropdown() {
  this.form.controls['selectedOptions'].disable();
}
```

### Enable Disable Multiselect Demo

<ms-enable-disable></ms-enable-disable>

<code-tabs>
  <code-pane title="app/enable-disable.component.html" path="enable-disable/src/app/enable-disable.component.html"></code-pane>
  <code-pane title="app/enable-disable.component.ts" path="enable-disable/src/app/enable-disable.component.ts"></code-pane>
</code-tabs>
