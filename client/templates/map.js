GoogleMaps.init(
    {
        'language':'en'
    }, 
    function() {
        var mapOptions = {
            zoom: 13
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        var geocoder= new google.maps.Geocoder();
        geocoder.geocode({'address': 'Tokyo, Japan'} , function(result, status) {
            if(status==google.maps.GeocoderStatus.OK) {
                map.setCenter(result[0].geometry.location);
            }
        });
    }
);