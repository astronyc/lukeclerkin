<?php
/**
 * This is the home page template file
 */

$home_image = get_field('home_image'); 

get_header(); ?>

<div class="landing-page">
    <div class="title-wrap">
        <h1>Luke Clerkin</h1>
    </div>
    <div class="button-wrap">
        <button class>Enter Site</button>
    </div>
</div>

<div class="home-page">
    <div class="page-wrap">
        <div class="image-wrap">
            <img src="<?php echo $home_image; ?>" />
        </div>
    </div>
</div>



<?php get_footer(); ?>