Template.add_form.events({
    'submit form': function (event) {
        event.preventDefault();
        var map = GoogleMaps.maps.map.instance;
        var bounds = map.getBounds();
        var center = bounds.getCenter();
        var ne = bounds.getNorthEast();
        var dis = google.maps.geometry.spherical.computeDistanceBetween(center, ne);
        var query = event.target.getElementsByTagName("input")[0].value;
        var query = {
            ll: center.lat() + ',' + center.lng(),
            radius: dis,
            query: query
        };
        Foursquare.find(query, function (error, result) {
            if (typeof result != 'undefined') {
                var ret = {
                    _id:Meteor.userId(),
                    query: query.query,
                    radius:query.radius,
                    lat: center.lat(),
                    lng: center.lng(),
                    date:Date.now(),
                    venues: function () {
                        var ven=[];
                        result.response.venues.forEach(function(item,i,arr) {
                            ven.push({
                                name:item.name,
                                city:item.location.city,
                                address:item.location.address,
                                lat:item.location.lat,
                                lng:item.location.lng
                            });
                        });
                        return ven;
                    }()
                };
                var cookie=EJSON.stringify(ret);
                Cookie.set("a","b");
                console.log(cookie);
                Cookie.set("query_list2", cookie);
            }
        });
        /*
        service = new google.maps.places.PlacesService(map);
        var request = {
            query: event.target.getElementsByTagName("input")[0].value
        };
        console.log(request);
        service.textSearch(request, function (results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
            } else {
                console.log("error");
            }
        });
*/
    }
});