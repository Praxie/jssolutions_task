Meteor.methods({
    insertQuery: function(row) {
        queryResultsDB.insert(row);
    },
    
    deleteQuery: function(row) {
        queryResultsDB.remove(row);
    }
});