# Grouping

Multiselect supports grouping, similar as that of `select` controls `optgroup` option. Group a collection w.r.t. specific property of items, then you have to pass `groupedProperty` property value by which it should group result.

For eg. we've a list of football players from different contries. It will be great if we can show the football players grouped by their respective teams. This bifurcation of data is helpful in visualization.

## Grouping Demo

<ms-grouping></ms-grouping>

<code-tabs>
  <code-pane title="app/grouping.component.ts" path="grouping/src/app/grouping.component.ts"></code-pane>
  <code-pane title="app/grouping.component.html" path="grouping/src/app/grouping.component.html"></code-pane>
</code-tabs>

Notice the use of `groupedProperty` input binding; it is used to provide the key of JSON. It uses `groupedProperty` to bifurcate data in a grouped manner.

Rendering the options by using such grouping allows us to do some advanced functionalities in the simplest way.

Let's say in the same example above, what if the user wants to select all players from his favourite team? In that case, multiselect allows us to just click on team name (Group element) and Bingo! All the players from that team are selected.

![Grouping Gif](https://raw.githubusercontent.com/ngx-lib/multiselect/master/giffy/grouping.gif)

Another advanced functionality it provides is that when all the options related to a particular group are disabled or made disabled, then grouping shows it in a convincing way such that the whole category is disabled. This would not have looked good in case of multiselect without grouping.

<div class="l-sub-section">
  All other functions work as expected for grouping feature.
</div>
