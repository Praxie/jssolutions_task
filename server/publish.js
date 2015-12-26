Meteor.publish("queryResults", function() {
   return  queryResultsDB.find({ user_id: this.userId });
});
