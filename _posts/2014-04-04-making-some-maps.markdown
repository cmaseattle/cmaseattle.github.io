---
layout: post
title: "Let's Make a Map"
tags: ['maps', 'javascript']
extra_css: 'maps.css'
extra_js: 'maps.js'
---

Every once in a while we'll find the need for a nice looking map. Since our websites each have their own unique look it's nice to have a map that fits the style. Google map embeds can get redundant ... so we look to Mapbox.

Mapbox has done some really neat things, allowing users to customize the base tiles of their maps and use them in their own websites via the [Mapbox.js API](https://www.mapbox.com/mapbox.js/api/v1.6.2/). Mapbox.js is built on the very popular Leaflet library, which gives us the necessary functionality for building tile-based web maps.

<div id="map1">&nbsp;</div>

All you need is a bit of simple javascript, which can be easily put together via the [various examples](https://www.mapbox.com/mapbox.js/example/v1.0.0/) Mapbox has put together for the more common tasks.

First thing's first, the mapbox.js library. You can link directly to their servers for this or you can download a copy to have stored locally. Put them before your javascript and css files.

{% highlight html %}
<script src='https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox.css' rel='stylesheet' />
{% endhighlight %}

To initiate a map space, you have to do two things. **First**, set your HTML and CSS to define where the map will go and how it will look.

{% highlight html %}
<div id="map"></div>
{% endhighlight %}

{% highlight css %}
#map {
	position:absolute;
	width:400px;
	height:300px;
}
{% endhighlight %}

**Second**, you will set the map via javascript and the Mapbox.js library functions. The following code will add a specified set of tiles (basemap) to your #map container and will look like the above example. Remember, you'll need to sign into your account and create a basemap for your project and then retrieve the ID of that basemap and add it below where you see "examples.map-9ijuk24y".

{% highlight javascript %}
var map = L.mapbox.map('map', 'examples.map-9ijuk24y');
{% endhighlight %}

###Adding a marker

You can easily add a marker to the map with the 'featureLayer' action, which provides you with some extra properties that Mapbox has set up in order to customize the marker to your needs. If you're interested in how this geographic marker is created, we suggest reading [more about the GeoJSON object](http://geojson.org/) type in javascript, which is an extension of JSON for spatial data.

<div id="map2">&nbsp;</div>

{% highlight javascript %}
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
}).addTo(map);
{% endhighlight %}

There are many ways to incorporate a map into your website. We urge you to consider trying out something beyond the standard Google embeds, to support geographic innovation, and incorporate all aspects of your website's functionality into your design.

You can create an account for free at mapbox.com and start customizing the basemap you need. They even have built-in tools to help you with your data and other needs, so you can even avoid using javascript for you

![Screenshot of Mapbox editor screen](/images/posts/mapbox-basemap-styles.png)

Their service is free under 3000 views / month, which is great for simple websites. They also have a bunch of other services such as [Tilemill](https://www.mapbox.com/tilemill/) that allow you to dig even deeper into the makings if your map tiles. If you're interested in the core of mapbox.js, take a look at [Leaflet](http://leafletjs.com/), the library that it is built on and is the largest *open-source Javascript library for mobile-friendly interactive maps.*

Happy Mapping!