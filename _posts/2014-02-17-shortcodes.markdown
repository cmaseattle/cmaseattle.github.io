---
layout: post
title: "Creating Shortcodes"
subtitle: "Building helper functions that can be used directly in the content editor."
category: 'wordpress'
---

WordPress shortcodes are handy bits of code that you can reuse across your website. They are particularly powerful because of a user's ability to [use a shortcode](http://codex.wordpress.org/Function_Reference/add_shortcode) within post or page content. Instead of relying on processing specific PHP in page templates, you can build shortcodes to process that PHP within your content and HTML, providing you an extra degree of freedom for unique content placement.

Many plugins come with shortcodes, allowing you to place the plugin content anywhere you wish on the site. They allow you to run general functions and even give you the ability to add different variables to interact with the functions differently.

>For instance, if you are using a form plugin you can use the form plugin's shortcode to render a specific form on a post. You would use the plugin's base shortcode call, plus other variables to call specific forms and even set the tab index of that form.

To set up a shortcode within your theme, you'll have to work within the functinos.php file. Create a function with a unique name and make sure that function has a return statement to send the information back to the location where the shortcode is called. 

{% highlight php %}
<?php
function my_shortcode() {
	$data;
	// necessary code for populating the $data variable
	return $data;
}
?>
{% endhighlight %}

Then you'll want to add a shortcode to the wordpress registrar, with the following function:

{% highlight php %}
<?php add_shortcode('shortcode', 'my_shortcode'); ?>
{% endhighlight %}

where 'shortcode' is the name of the shortcode you'll call, and 'my_shortcode' is the name of the function from above. Now you can use this shortcode in your posts by simply calling it with the standard Wordpress shortcode syntax:

{% highlight html %}
[shortcode]
{% endhighlight %}

###Today's Date - example

Below is the code necessary for creating a shortcode that inserts the date in your post content.

**functions.php**

{% highlight php %}
<?php
function date_shortcode() {
	$date = date("F jS, Y");
	return $date;
}
add_shortcode('date', 'date_shortcode');
?>
{% endhighlight %}

To call the shortcode, simply add [date] anywhere in your content and it will render in the syntax specified above (learn more about [PHP date syntax](http://ca3.php.net/manual/en/function.date.php)). 

![Screenshot of adding a shortcode to the wordpress editor](/images/posts/wordpress-using-shortcode.png)