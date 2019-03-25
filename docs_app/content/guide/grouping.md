## Grouping:

If u have data in which each options falls into some category then if it can be good to render it in groups/categroy. The simplest example would be list of football players and users needed to select best three players. So, it will be good if we show the names of football team in dropdown and on click of any team name show the player belonging to that team as shown below.

Demo: Grouping simplest demo with football team players.

Notice the use of groupedProperty input which is used to provide the key of json which when accessed gives the category of option to which it belongs and it also acts as indicator for multiselect to render the dropdown in grouping format.

Rendering options by using such grouping allows us to do some advanced functionalities in the simplest way.

For example, in above example, what if the user wants to select all players from his favourite team, In this case, multiselect allows us to just click on team name and bingo, all the players from that team are selected as favourite.

#Demo

<ms-grouping></ms-grouping>

<code-tabs>
  <code-pane title="app/app.component.ts" path="attribute-directives/src/app/app.component.ts"></code-pane>
  <code-pane title="app/app.component.html" path="attribute-directives/src/app/app.component.html"></code-pane>
</code-tabs>

Gif Showing clicking on category selects all players of that team

Another such advanced functionality is when all the options related to a particular property are disabled or made disabled, In that case grouping shows it in nice and convincing way the whole category is disabled which does not look good in case of multiselect without using grouping

Gif showing disabling the last element is made disbaled by clicking on button first without using grouping and then using grouping.

Note: All other functions work the same as it works in case of without grouping multiiselect.
