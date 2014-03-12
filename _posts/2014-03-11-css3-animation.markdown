---
layout: post
title: "CSS3 Animations"
tags: "css"
extra_css: 'css-animations.css'
---

CSS is becoming more and more powerful in the modern web. It is quickly starting to take on action-based roles like javascript that allow you to interact with the DOM in ways that previously were not possible. 

One of the more exciting movements in CSS's evolution is the introduction of @keyframes and animations. Very much like video editing where you would change an element over the course a set amount of time, keyframes allow you to set specific css properties over percentages of completion (i.e. 0% to 20% to 100% completion). In order for this to properly work you have to have set three components:

1. set an **ID** to the element you wish to animate
2. set your **animation properties** on that element
3. define your animation's **keyframes** with @keyframes

###1. Animation Element

Once you know which element you wish to animate, give it a unique ID to access within your css

{% highlight html %}
<div id="circle"></div>
{% endhighlight %}

###2. Properties

There are a ton of variables used in css animations but you'll need to initialize the properties of your animation with the standard "animation:" css3 property. This is extended per the usual css3 extensions with -o-, -moz-, and -webkit- for browser compatibility.

{% highlight css %}
#yourID {
	-webkit-animation: /* animation-properties ... */
	-moz-animation: /* animation-properties ... */
	-o-animation: /* animation-properties ... */
	animation: /* animation-properties ... */
}
{% endhighlight %}

Your anmation properties can be as followed (from [w3schools](http://www.w3schools.com/css/css3_animations.asp)). Remember you can use the shorthand "animation" to concatenate all of these properties instead of listing them all out.

Property | Description
--- | ---
@keyframes | specifies the animation
animation | A shorthand property for setting all the animation properties, except the animation-play-state and the animation-fill-mode property
animation-delay | Specifies when the animation will start
animation-direction | Specifies whether or not the animation should play in reverse on alternate cycles
animation-duration | Specifies how many seconds or milliseconds an animation takes to complete one cycle
animation-fill-mode | Specifies what styles will apply for the element when the animation is not playing (when it is finished, or when it has a "delay")
animation-iteration-count | Specifies the number of times an animation should be played
animation-name | Specifies the name of the @keyframes animation
animation-play-state | Specifies whether the animation is running or paused
animation-timing-function | Specifies the speed curve of the animation

###3. Keyframes

The @keyframes property specifies the motion and style changes to your element during the specified animation and its properties. These are set up similar to @media queries, but also require you to specify browser specific leads.

{% highlight css %}
@keyframes animation-name {
	0% {
	/* css styles */
	}
	50% {
	/* css styles */
	}
	100% {
	/* css styles */
	}
}
{% endhighlight %}

You can set your keyframe percentages to anything you want and use as many as you like:

{% highlight css %}
@keyframes animation-name {
	0% { /* css styles */ }
	5% { /* css styles */ }
	27% { /* css styles */ }
	50% { /* css styles */ }
	67% { /* css styles */ }
	98% { /* css styles */ }
	100% { /* css styles */ }
}
{% endhighlight %}

###Example: Grey Square to Blue Circle

<section class="example">
	<div id="circle"></div>
</section>

{% highlight html %}
<div id="circle"></div>
{% endhighlight %}

{% highlight css %}
#circle {
	width:100px;
	height:100px;
	background-color:#c0c0c0;
	-webkit-animation: becomeCircle 4s linear infinite;
	-moz-animation: becomeCircle 4s linear infinite;
	-o-animation: becomeCircle 4s linear infinite;
	animation: becomeCircle 4s linear infinite;
}
{% endhighlight %}

{% highlight css %}
@-webkit-keyframes becomeCircle {
	0% { border-radius:0%; background-color:#c0c0c0;}
	50% { border-radius:50%; background-color:#4682B4;}
	100% { border-radius:0%; background-color:#c0c0c0;}
}
@-moz-keyframes becomeCircle {
	0% { border-radius:0%; background-color:#c0c0c0;}
	50% { border-radius:50%; background-color:#4682B4;}
	100% { border-radius:0%; background-color:#c0c0c0;}
}
@-o-keyframes becomeCircle {
	0% { border-radius:0%; background-color:#c0c0c0;}
	50% { border-radius:50%; background-color:#4682B4;}
	100% { border-radius:0%; background-color:#c0c0c0;}
}
@keyframes becomeCircle {
	0% { border-radius:0%; background-color:#c0c0c0;}
	50% { border-radius:50%; background-color:#4682B4;}
	100% { border-radius:0%; background-color:#c0c0c0;}
}
{% endhighlight %}

###Compatibility

![Browser Compatibility](/images/posts/css3-animations-compatibility.png)
