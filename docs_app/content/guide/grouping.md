# Grouping:

Multiselect supports grouping, similar as that of `select` controls `optgroup` option. Group a collection w.r.t. specific property of items, then you have to pass `groupedProperty` property value by which it should group result. 

For eg. We've list, that have football players cotains from different contries. It will be great if we can show the football players grouped by their respective teams. This bifurcation of data is helpful in visualization.

## Demo

<ms-grouping></ms-grouping>

<code-tabs>
  <code-pane title="app/grouping.component.ts" path="grouping/src/app/grouping.component.ts"></code-pane>
  <code-pane title="app/grouping.component.html" path="grouping/src/app/grouping.component.html"></code-pane>
</code-tabs>

Notice the use of `groupedProperty` input binding used to provide the key of JSON, it uses `groupedProperty` to categories/bifurcate data in grouped manner.

Rendering options by using such grouping allows us to do some advanced functionalities in the simplest way.

For example, in above example, what if the user wants to select all players from his favourite team? In that case, multiselect allows us to just click on team name (Group element) and Bingo! All the players from that team are selected.

![Grouping Gif](https://raw.githubusercontent.com/ngx-lib/multiselect/master/giffy/grouping.gif)

Another such advanced functionality is when all the options related to a particular property are disabled or made disabled, In that case grouping shows it in convincing way the whole category is disabled. This would not looks good in case of multiselect without using grouping.

<div class="l-sub-section">
  All other functions works as expected for grouping feature.
</div>