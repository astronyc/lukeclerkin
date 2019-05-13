<?php
/**
 * This is the home page template file
 */

$home_image = get_field('home_image'); 

get_header(); ?>


<div class="home-page">
    <div class="page-wrap">
        <div class="image-wrap">
            <img src="<?php echo $home_image; ?>" />
        </div>
    </div>
</div>



<?php get_footer(); ?>