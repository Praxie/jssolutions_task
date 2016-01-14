Template.history_table.events({
    "click #remove_query": function(event, template) {
    	event.stopImmediatePropagation();
        var parentId=$(event.target).parent().parent().attr("id");
        Meteor.call("deleteQuery", {_id:parentId});

        Session.set("venues_id", null);
    }
});
