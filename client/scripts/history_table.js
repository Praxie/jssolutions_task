Template.history_table.events({
    "click #remove_query": function(event, template) {
        var parentId=$(event.target).parent().parent().attr("id");
        Meteor.call("deleteQuery", {_id:parentId});
        
    }
});
