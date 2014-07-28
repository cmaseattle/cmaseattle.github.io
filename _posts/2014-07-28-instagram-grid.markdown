---
layout: post
title: "Instagram Grid Library"
subtitle: "CMA's very own JavaScript library for accessing the Instagram API"
tags: 'wordpress'
extra_css:
  - instagram-grid.min.css
  - instagram.css
extra_js:
  - instagram-grid.min.js
  - instagram.js
---

Instagram is a huge part of our social media department's work, and therefore makes up a significant portion of client's social media programs. Despite the social network being image-focused, many do not take advantage of that imagery across other channels. Being that our web work involves connecting many of client's channels together, we've done enough work with Instagram to have developed our own internal library, **Instagram Grid**.

Instagram's API is ultimately quite accessible, but sometimes they make things a bit more complicated than what developers and their websites require. Most, if not all of the API documentation is written from an "Application" or "GET and POST" perspective, which require significant authentication protocols for data retrieval and posting. But we find ourselves in need of one thing with our websites usually, and that is to retreive images from the client's Instagram account and simply show them on their website.

Surprisingly, this is rather difficult in the eyes of how simple "GET" processes can be. The setup is for another conversaion, but please [read a quick article](https://github.com/svmatthews/instagram-access-token-generation) on how to retrieve the simple *Client ID* for running Instagram Grid.

<div id="instagram-one"></div>

Instagram Grid provides a quick and simple means of extracting user image data from the Instagram API, parsing it, and appending it to the DOM according to several required and numerous optional parameters. It currently *requires jQuery*, though that dependency is expected to be removed in due time. Once the javascript and CSS are loaded into your page, you can initialize the library as follows with the required parameters:

{% highlight javascript %}
igrid.init({
  container: 'CONTAINER-ID',
  client_id: 'YOUR-CLIENT-ID', //obtained from article above
  userID: 'USER-ID',
});
{% endhighlight %}

The optional parameters build in a ton more functionality, though. Here's an example with hover effects, popups on click, and even showing the user's appended text to the image when you view the larger image.

<div id="instagram-two"></div>

The extended parameters are as follows:

{% highlight javascript %}
igrid.init({
  container: 'CONTAINER-ID',
  client_id: 'YOUR-CLIENT-ID', //obtained from article above
  userID: 'USER-ID',
  width: 4,
  height: 2, 
  link: true,
  caption: true,
  likes: true,
  likesHover: true,
  clearfix: true
});
{% endhighlight %}

As you can see, the library requires very little javascript writeup. The provided *instagram-grid.min.css* file can also optionally be included if you wish to style the images yourself - simply load them with the main javascript file and add your own class styles.

The Instagram Grid project is [hosted on github](https://github.com/cmaseattle/instagram-grid) where you can download the package and read the documentation. Instagram Grid an open project; we happily accept input from the community!