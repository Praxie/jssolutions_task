Template.main.helpers({
    mapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(35.72021049341737, 139.65289013283723),
                language: 'en',
                zoom: 13
            };
        }
    },
    showQueryDetails: function () {
        var id = Session.get("venues_id");
        return typeof (id) !== 'undefined';
    },

    showHistory: function () {

        var result = queryResultsDB.find().fetch();
        return result.length!=0;
    }
});

Template.main.onCreated(function () {
    GoogleMaps.ready('map', function (map) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': 'Tokyo, Japan' }, function (result, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                GoogleMaps.maps.map.instance.setCenter(result[0].geometry.location);
            }
        });
    });
    Session.set('venues_id', undefined);

    Meteor.setInterval(function() {
        var id=$("#history_table").children("tbody").children(".active").attr("id");
        typeof(id)!=="undefined" ? Session.set("venues_id",id):Session.set("venues_id",undefined);
    },1000);
});
