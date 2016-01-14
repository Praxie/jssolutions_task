Template.history.helpers({
    queries: function () {
        
        var result=queryResultsDB.find().fetch();
        return result;
    },
    

});

Template.history.events({
    'click #history_table tr': function(event, template) {
        $("table#history_table tr").removeClass("active");
        $('table#history_table tr#'+event.currentTarget.id).addClass("active");
        Session.set("venues_id", event.currentTarget.id);
    }
});
