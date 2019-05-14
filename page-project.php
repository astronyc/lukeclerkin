<?php 
/**
 * Template Name: New Project Page
 */

get_header(); ?>


<div class="project-page">
    <div id="content" class="page-wrap">
        <div class="image-wrap">

            <?php

// check if the repeater field has rows of data
if( have_rows('project_images') ):

 	// loop through the rows of data
    while ( have_rows('project_images') ) : the_row(); 

            // display a sub field value?>
            <img src="<?php the_sub_field('project_image'); ?>" />

            <?php 
    endwhile;

else :

    // no rows found

endif;

?>
            <button id="slide-left"> hello yes </button>
        </div>
    </div>
</div>





<?php get_footer (); ?>