# Callbacks

Multiselect have various callback events associated with it. As described in [events](https://ngx-lib.github.io/multiselect/guide/events) section, multiselect has total 9 events availbale. The following example shows how to use simple events of multiselect opening and closing.

<ms-events></ms-events>

Okay, what if we want to perform some action based on click of some item? This can simply be achieved by using `onItemClick` event.

To make it more clear, let's assume you have dropdowns for country, state and city; and their values are interdependent on each other. Well, in such cases you can use events emitted by multiselect dropdown like `onItemClick`, `onOpen`, `onClose`, etc.

<ms-events-advanced></ms-events-advanced>

In case of searching something in textbox you can listen to `onSearchChange` and `onClear` events. While using grouping feature, you can use `onGroupItemClick` event to keep eyes on grouped options selection.
