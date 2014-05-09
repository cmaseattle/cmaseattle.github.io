---
layout: post
title: "SVG & CSS"
tags: ['css', 'svg']
extra_css: 'svg.css'
---

SVG is on the rise in the web these days. SVG (Scalable Vector Graphics) is technically an image format that follows the XML standard and is vector-based, meaning the image is comprised of points (nodes) that can scale to an size relative to a "plain" of space the points originate from.

Vector graphics don't degrade, making SVG objects look fantastic on the web - all of the time. Besides the scalability of SVG, the image format has become popular because of it's small file-size (compared to standard .png or .jpg images) and the ability to lock into specific components of the image and style them accordingly.

SVG images can be used in two important ways:

1) Inserted exactly like an image with the standard image tag.

{% highlight html %}
<img src="images/your-image.svg">
{% endhighlight %}

2) Inline SVG object that sits directly in your HTML, rather than linked.

{% highlight html %}
<div class="container">
    <svg id="svg-id"> <!-- svg content --> </svg>
</div>
{% endhighlight %}

You can see from the examples above that these two options present different capabilities. The standard image source will bring in the SVG with all of its colors and styles pre-defined, and will scale exactly how you set it. The second option, inline, will actually allow you to access pieces of the SVG with your CSS or javascript so you can change parts of the object or image on the fly - without having to pre-define styles. The rest of this post will focus on the second option and we'll share how to change styles.

###Saving an SVG

You can save vector work as SVG straight from Illustrator or InkScape (inkscape is purely in SVG). You don't need to do anything else, and you'll be ready to use the object in your site.

![Saving an SVG](/images/posts/saving-svg.png)

Here's the SVG we'll work with, imported exactly like you would an image. You'll notice if you view the source of this page that the SVG is only an image tag, and nothing more that you can access. The colors are pre-defined in the svg file.

![Shapes SVG](/images/posts/shapes.svg)

###Inline SVG

Now we'll bring the SVG object inline. Here is what the svg file code looks like:

{% highlight xml %}
<svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>Layer 1</title>
  <ellipse fill="#000000" stroke="#000000" stroke-width="0" cx="45.5" cy="49.5" id="svg_1" rx="36.5" ry="36.5"/>
  <rect fill="#000000" stroke="#000000" stroke-linejoin="null" stroke-linecap="null" x="173" y="17" width="68" height="68" id="svg_2" stroke-width="0"/>
  <path fill="#000000" stroke="#000000" stroke-linejoin="null" stroke-linecap="null" d="m163,84l-40.25748,-67.41916l-40.74252,67.41916l81,0z" id="svg_3" stroke-width="0"/>
 </g>
</svg>
{% endhighlight %}

Notice you can click and drag the above image, but you cannot click and drag the image below.

<svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>SVG Shapes</title>
  <ellipse fill="#000000" stroke="#000000" stroke-width="0" cx="45.5" cy="49.5" id="svg_1" rx="36.5" ry="36.5"/>
  <rect fill="#000000" stroke="#000000" stroke-linejoin="null" stroke-linecap="null" x="173" y="17" width="68" height="68" id="svg_2" stroke-width="0"/>
  <path fill="#000000" stroke="#000000" stroke-linejoin="null" stroke-linecap="null" d="m163,84l-40.25748,-67.41916l-40.74252,67.41916l81,0z" id="svg_3" stroke-width="0"/>
 </g>
</svg>

###Editing SVG Elements

Once you have an inline SVG object, you can add IDs to the elements so you can access them in your CSS files. Don't hesitate to clean up the files too, they can geta little messy.

{% highlight xml %}
<svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>Shapes with IDs</title>
  <ellipse id="circle" cx="45.5" cy="49.5"rx="36.5" ry="36.5"/>
  <rect id="square" x="173" y="17" width="68" height="68"/>
  <path id="triangle" d="m163,84l-40.25748,-67.41916l-40.74252,67.41916l81,0z"/>
 </g>
</svg>
{% endhighlight %}

{% highlight css %}
#circle { fill:#4682b4; }
#triangle { fill:#b44682; }
#square { fill:#82b446; }
{% endhighlight %}

Now we have some color!

<svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>SVG Shapes with color</title>
  <ellipse id="circle" cx="45.5" cy="49.5" rx="36.5" ry="36.5"/>
  <rect id="square" x="173" y="17" width="68" height="68"/>
  <path id="triangle" d="m163,84l-40.25748,-67.41916l-40.74252,67.41916l81,0z"/>
 </g>
</svg>

###Extending SVG with CSS3

Now that we have the possibility to statically add color to these shapes, we can start changing them dynamically. You can do this with javascript, but here we'll do it with some [CSS keyframes](http://cmaseattle.github.io/2014/03/11/css3-animation.html), which allow us to set CSS styles based on animation time.

<svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>SVG Shapes with color</title>
  <ellipse id="circle1" cx="45.5" cy="49.5" rx="36.5" ry="36.5"/>
  <rect id="square1" x="173" y="17" width="68" height="68"/>
  <path id="triangle1" d="m163,84l-40.25748,-67.41916l-40.74252,67.41916l81,0z"/>
 </g>
</svg>

<br>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="250px" height="214.576px" viewBox="0 0 250 214.576" enable-background="new 0 0 250 214.576" xml:space="preserve">
<g>
    <path fill="#F04B2A" d="M247.369,92.194c0-23.246-35.781-42.093-79.922-42.093c-25.58,0-48.335,6.337-62.964,16.184l-16.44-10.902
        c6.561-5.496,10.494-12.46,10.494-20.045c0-17.741-21.469-32.124-47.952-32.124S2.631,17.598,2.631,35.339
        c0,17.742,21.47,32.124,47.953,32.124c13.817,0,26.261-3.92,35.012-10.185l16.329,10.826c-9.065,6.827-14.4,15.128-14.4,24.09
        c0,22.953,34.889,41.6,78.258,42.068v18.871c-25.878,0.43-46.644,13.528-46.644,29.638c0,16.383,21.468,29.66,47.953,29.66
        c26.482,0,47.953-13.277,47.953-29.66c0-16.045-20.602-29.104-46.332-29.633v-18.87
        C212.268,133.911,247.369,115.217,247.369,92.194z M8.721,35.339c0-15.488,18.743-28.044,41.863-28.044
        c23.119,0,41.862,12.556,41.862,28.044c0,15.489-18.743,28.045-41.862,28.045C27.464,63.384,8.721,50.828,8.721,35.339z
         M97.675,92.194c0-20.294,31.239-36.746,69.772-36.746s69.771,16.452,69.771,36.746c0,20.295-31.238,36.747-69.771,36.747
        S97.675,112.49,97.675,92.194z M208.953,182.771c0,14.301-18.742,25.895-41.861,25.895s-41.864-11.594-41.864-25.895
        c0-14.299,18.745-25.893,41.864-25.893S208.953,168.472,208.953,182.771z"/>
    <g>
        <path class="cma-letter" fill="#F04B2A" d="M120.915,69.195h33.417l12.859,27.272l12.807-27.272h33.359v44.845h-20.781V79.815l-16.07,34.225h-18.797
            l-16.016-34.225v34.225h-20.779V69.195z"/>
    </g>
    <g>
        <path class="cma-letter" fill="#F04B2A" d="M177.623,191.384h-21.859l-3.014,5.418h-19.668l23.371-32.9h21.037l23.391,32.9H180.74L177.623,191.384z
             M173.592,184.283l-6.834-11.844l-6.809,11.844H173.592z"/>
    </g>
    <g>
        <path class="cma-letter" fill="#F04B2A" d="M65.415,39.179l18.914,3.253c-1.27,3.022-3.269,5.548-5.996,7.574c-2.728,2.028-6.113,3.557-10.157,4.587
            c-4.044,1.032-9.19,1.548-15.438,1.548c-7.582,0-13.774-0.63-18.58-1.891c-4.805-1.262-8.952-3.479-12.439-6.656
            c-3.489-3.175-5.234-7.24-5.234-12.194c0-6.605,3.071-11.681,9.212-15.229c6.142-3.548,14.83-5.323,26.066-5.323
            c8.792,0,15.7,1.018,20.732,3.05c5.031,2.034,8.768,5.153,11.212,9.363l-19.004,2.417c-0.668-1.212-1.369-2.099-2.1-2.661
            c-1.21-0.94-2.69-1.665-4.44-2.173c-1.752-0.506-3.707-0.761-5.872-0.761c-4.901,0-8.658,1.128-11.269,3.377
            c-1.973,1.672-2.959,4.296-2.959,7.87c0,4.432,1.173,7.469,3.521,9.111c2.347,1.643,5.644,2.464,9.892,2.464
            c4.124,0,7.24-0.659,9.35-1.979C62.933,43.608,64.461,41.692,65.415,39.179z"/>
    </g>
</g>
</svg>

Enjoy!
