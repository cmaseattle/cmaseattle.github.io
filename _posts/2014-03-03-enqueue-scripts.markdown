---
layout: post
title: "Enqueue Scripts"
subtitle: "Ensuring your scripts and stylesheets are loaded in the appropriate order."
category: 'wordpress'
---

Wordpress can get a bit confusing when it comes to adding scripts to your page. Whether it's your custom javascript file or a library, it's likely that you'll have scripts that are dependent on others, which requires you to load them in the correct order. When you start adding plugins to your site, this can add a whole new dimension to dependencies.

For all intensive purposes, the standard way of linking a script to your page is typically safe:

{% highlight html %}
<script type="text/javascript" src="/js/site.js"></script>
{% endhighlight %}

or if you want to be extra safe, use the Wordpress function *bloginfo()* to get your theme's URL:

{% highlight html %}
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/site.js"></script>
{% endhighlight %}

For a simple site, there's no reason to get out of control - using the above is totally acceptable. When you start bringing in dependencies, though (i.e. jQuery, D3, etc.) you could run into errors of your custom scripts not working properly - or even bringing in the incorrect versions of scripts.

###wp_enqueue_script()

Wordpress gives you the ability to present your scripts and style sheets in dependency order through your functions file. First you will queue up a script, name its dependencies in it's arguments, and then register those scripts via the wordpress hook provided.

{% highlight php %}
<?php
function your_theme_scripts() {
	// wp_enqueue_script( $script_handle, $source, $dependencies, $version, $footer );
	wp_enqueue_script( 'script-name', get_template_directory_uri() . '/path/to/scripts.js', array( 'dependecies' ), '1.0.0', false );
}

add_action( 'wp_enqueue_scripts', 'your_theme_scripts' );
?>
{% endhighlight %}

Of the arguments in the enqueue_script function, only your script name is required, but the other options allow you to build your dependencies, version contorl your scripts, and allow you to place them in the appropriate spot on your page's front-end. Read more about the [wp_enqueue_scripts function](http://codex.wordpress.org/Function_Reference/wp_enqueue_script) in the WordPress codex.

###with jQuery

jQuery comes standard with WordPress core, which is pretty neat (but remember it will only be as up to date as your wordpress version!). This is particularly useful for plugins that require jQuery but you have not specifically loaded it into your theme. If you have a custom javascript file using jQuery you can load it and build the dependency using the argument stated above:

{% highlight php %}
<?php
function your_theme_scripts() {
	wp_enqueue_script( 'script-name', get_stylesheet_directory_uri() . '/js/script-name.js', array( 'jquery' ) );
}

add_action( 'wp_enqueue_scripts', 'your_theme_scripts' );
?>
{% endhighlight %}

Notice how jquery is already built into WordPress core and you can use its handle to have it be a dependency for your custom script.