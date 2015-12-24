Template.query_details.helpers({
    venues: function () {
        var id = Session.get("query_venues");
        return id;
    },

    venuesNum: function () {
        return Session.get("query_venues").length;
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
        console.log(csv);
    }
});