# Grouping:

Multiselect supports display an options in grouped manner. If you want to group a data w.r.t. specific property then if it easily doable with multiselect. Just pass on flatten data collection to multiselect and with that pass `groupedProperty` property value by which it should group result. The simplest example would be list of football players and user should select best three players from it. So, it will be great if we can show the football players grouped by their respective team. This bifurcation of data is helpful in visualization.

## Demo:- Pending - Grouping simplest demo with football team players.

Notice the use of `groupedProperty` input binding used to provide the key of JSON, It use `groupedProperty` to categories/bifurcate data in grouped manner.

Rendering options by using such grouping allows us to do some advanced functionalities in the simplest way.

For example, in above example, what if the user wants to select all players from his favourite team? In that case, multiselect allows us to just click on team name (Group element) and Bingo! All the players from that team are selected.

## Demo

<ms-grouping></ms-grouping>

<code-tabs>
  <code-pane title="app/grouping.component.ts" path="grouping/src/app/grouping.component.ts"></code-pane>
  <code-pane title="app/grouping.component.html" path="grouping/src/app/grouping.component.html"></code-pane>
</code-tabs>

### Gif :- Pending Showing clicking on category selects all players of that team

Another such advanced functionality is when all the options related to a particular property are disabled or made disabled, In that case grouping shows it in nice and convincing way the whole category is disabled which does not look good in case of multiselect without using grouping

### Gif :- Pending showing disabling the last element is made disbaled by clicking on button first without using grouping and then using grouping.

<div class="l-sub-section">
  All other functions work the same as it works in case of without grouping multiiselect.
</div>