---
layout: post
title: "Text Shadows"
tags: "css"
extra_css: 'text-shadows.css'
---

Text shadows are a simple and unique way to style text on your page without having to find different fonts. 

###Single Text-Shadow

{% highlight css %}
h2 {
	text-shadow:4px 3px 0 #c0c0c0;
}
{% endhighlight %}

<div class="example single-shadow">
	Single
</div>

Did you know you could do multiple text-shadows to create some really pretty font layers?

###Double Text-Shadow

{% highlight css %}
h2 {
	text-shadow:4px 3px 0 #fff, 9px 8px 0 #c0c0c0;
}
{% endhighlight %}

<div class="example double-shadow">
	Double
</div>

###Having some fun

<div class="example wow">
	WOW!
</div>

{% highlight css %}
h2 {
	color:#386890;
	text-shadow:4px 3px 0 #6a9bc3, 9px 8px 0 #90b4d2, 14px 13px 0 #b5cde1, 19px 18px 0 #ecf2f7;
}
{% endhighlight %}

You could even animate the text-shadow property by setting @keyframe animations to the element and bring back the dream of the 90's web designer. [Read more](http://cmaseattle.github.io/2014/03/11/css3-animation.html) about animations and @keyframes if you want to start adding some motion to your page.

<div class="example pow">
	Pow!
</div>