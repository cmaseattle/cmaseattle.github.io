---
layout: post
title: "Custom Post Types"
tags: ['wordpress']
---

Many projects we work on require much more than basic wordpress core settings. That being said, it's easy to reach for plugins before even digging into what more advanced wordpress core functions could help do the same thing. One of the more important wordpress capabilities allows developers to create different post types. These become very important when you start adding content via posts that aren't necessarily part of the blog roll.

###Post Power

The power of Wordpress Posts extend far beyond updates and blogging. In fact, the phrasing "post" is very misleading. Thinking of these posts as "items" is much more descriptive of their nature. Wordpress allows you to create [custom post types](http://codex.wordpress.org/Post_Types) for whatever items you may be thinking. For instance, say you are creating a website that has "sponsors" but you don't want to add these sponsors manually in HTML, but would rather create sponsor items in the admin section without having to define categories to posts. Wordpress custom posts are perfect for this.

![Screenshot of Sponsors post type in Wordpress Admin screen](/images/posts/wordpress-custom-post-sponsors.png)

In order to build this functionality into wordpress, you'll have to edit your **functions.php** file to register this post type. One thing to note is that you can register a post with very different functionality than what you're used to. You have posts that don't have featured images, don't allow for categories, and only have a title. There are many options for creating post types, so please look at the [codex function reference for post_type_supports();](http://codex.wordpress.org/Function_Reference/post_type_supports).

{% highlight php %}
<?php

add_action( 'init', 'create_sponsor_post_type' );
function create_sponsor_post_type() {
  register_post_type( 'sponsor',
    array(
      'labels' => array(
        'name' => __( 'Sponsors' ),
        'singular_name' => __( 'Sponsor' )
      ),
    'public' => true,
    'has_archive' => true,
    'supports' => array( 'title', 'editor', 'thumbnail' ) //specific support of posts
    )
  );
}

?>
{% endhighlight %}

Ensure you have the post action wrapped in the **init** function to avoid an problems. These post types should now be available in your admin screen to be created. To call these post types in your theme templates, reference **post_type** in your arguments array for the **WP_Query** ...

{% highlight php %}
<?php

$args = array( 'post_type' => 'product' );
$query = new WP_Query( $args );
// the loop

?>
{% endhighlight %}

See our [previous post on wordpress loops](/2014/01/22/looping-post-categories.html) for specific post categories to see the full loop.