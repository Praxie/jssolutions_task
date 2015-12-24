
Template.history.helpers({
    queries: function () {
        var result=db.find({ id: Meteor.userId() }).fetch();
        return result;
    }
});

Template.query_input.events ({
    'change .select_query': function(event, template) {
        $("table#query_table tr").removeClass("active");
        $('table#query_table tr#'+event.target.value).addClass("active")
    }
});