---
layout: post
title: "Categorical Loops"
cateogory: wordpress
---

Wordpress loves its data loops. They allow you to access much of your databse content on a very specific level. One of the most important nodes of content distribution comes in the form of "categories". Wordpress allows you to categorize posts so you can sort and distribute them over multiple dynamic locations in your site. For instance, your homepage may show only the three most recent posts categorized as **update** but another page shows only the most recent posts cateogorized as **testimonial**. 

In your PHP, you'll simply create a wordpress loop instance and build in specific parameters through an array that is use in the
{% highlight php %}WP_Query{% endhighlight %}
function.

{% highlight php linenos %}
<?php
// build your query
$query = new WP_Query( array('category_name' => 'category_slug', 'posts_per_page' => 5 ));

// execute the loop ONLY if there are posts associated to your query
if ( $query->have_posts() ) : ?>

      <!-- the loop -->

      <?php while ( $query->have_posts() ) : $query->the_post(); ?>
            <h1><?php the_title(); ?></h1>
            <?php the_date(); ?>
            <?php the_content(); ?>
      <?php endwhile; ?>

      <!-- end of the loop -->

      <?php wp_reset_postdata(); ?>

<?php else:  ?>
  <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
{% endhighlight %}

Of course there are many degrees of customization within the loop you can develop for. Every post has an abundance of meta data that is accessible within the above loop, allowing you to very specifically place content within custom HTML.

Happy looping!