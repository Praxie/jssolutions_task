Template.query_details.helpers({
    venues: function () {
        var id = Session.get("venues_id");
        var venues=queryResultsDB.findOne({_id:id}).venues;
        return venues;
    },

    venuesNum: function () {
        var id = Session.get("venues_id");
        var venues=queryResultsDB.findOne({_id:id});
        return venues.venues.length;
    }

});


Template.query_details.events({
    'click #download':function(event) {
        var csv=Papa.unparse(Session.get("query_venues"), {
            delimiter:";"
        });
        csv="sep=;\n"+csv;
        var blob=new Blob([csv], {type: "text/csv;charset=utf-8"});
        saveAs(blob, "export.csv");
    }
});