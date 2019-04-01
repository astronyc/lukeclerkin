<?php 
/**
 * Template Name: Interiors
 */

get_header(); ?>


<div class="project-page">
    <div class="page-wrap">
        <div class="image-wrap">

            <?php

// check if the repeater field has rows of data
if( have_rows('interiors') ):

 	// loop through the rows of data
    while ( have_rows('interiors') ) : the_row(); 

            // display a sub field value?>
            <img src="<?php the_sub_field('interior_image'); ?>" />

            <?php 
    endwhile;

else :

    // no rows found

endif;

?>
        </div>
    </div>
</div>
</div>




<?php get_footer (); ?>