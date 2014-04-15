$(document).ready(function() {
	// first map - nothing else
	var map1 = L.mapbox.map('map1', 'cmaseattle.i04nl3im')
    	.setView([47.6097, -122.3331], 9);

    // second map with marker
    var map2 = L.mapbox.map('map2', 'cmaseattle.i04o304o')
    	.setView([44.9833, -93.2667], 14);
    L.mapbox.featureLayer({
	    type: 'Feature',
	    geometry: {
	        type: 'Point',
	        coordinates: [-93.2667, 44.9833]
	    },
	    properties: {
	        title: 'Minneapolis, MN',
	        description: 'The history and economic growth of Minneapolis are tied to water, the city\'s defining physical characteristic, which was brought to the region during the last ice age ten thousand years ago.',
	        'marker-size': 'large',
	        'marker-color': '#222'
	    }
	}).addTo(map2);


});