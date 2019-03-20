## Callbacks: 

Multiselect has various callbacks/events associated with it as described in events section(evnets section link).The following example shows how to use simple event of multiselect opening and closing.


//demo showing how to use multiselect onOpen and onOnclose event 

Ok, what if I want to change the content of another dropdown on click of previous dropdown.For example, I want to change the list of States on the basis of country selected. We can easily achieve this by listening to onItemClick event of multiselect.

Demo: Two dropdowns one showing list of countries and on selecting the option from first dropdown the states are getting chnaged from second dropdown.

In case of events changing the state of multiselect such as search changed, itemclicked etc multiselect also provieds extra parameter as the target of event.
For example, in case of itemSelect event, the selected item is provided by multiselect as its event target as shown below in example.
Demo showing itemSelect event with $event

Same is the case when rather than selecting item, if the whole group is selected by clicking on its category, multiselct gives us this event also with selected category as its category.
Demo showing onGroupItemClick with $event.

Multiselct in total has 9 events availbale with. Play with the following example to get overview of it.

Demo: Example showing all events
