define([
    "core/js/adapt",
    "core/js/models/itemsComponentModel",
    "./StackListView"
], function(Adapt, ItemsComponentModel, StackListView) {

    return Adapt.register("stacklist", {
        view: StackListView,
        model: ItemsComponentModel
    });

});
