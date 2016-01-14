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
        return !!id;
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
    Session.setDefault('venues_id', null);
});
