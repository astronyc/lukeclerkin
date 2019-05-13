<?php 
/**
* Template Name: Contact
*/
get_header(); ?>

<div class="contact-page">
    <div class="page-wrap">
        <div class="section-wrap">
            <?php

// check if the repeater field has rows of data
if( have_rows('list_repeater') ):

 	// loop through the rows of data
    while ( have_rows('list_repeater') ) : the_row(); 

            // display a sub field value?>
            <h4><?php the_sub_field('list_item'); ?></h4>
            <h5>
                <p><?php the_sub_field('item_description'); ?></p>
            </h5>
            <?php 
                endwhile;

            else :

                // no rows found

            endif;

            ?>
        </div>

    </div>
</div>
<?php get_footer(); ?>