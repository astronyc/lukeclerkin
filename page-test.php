<?php 
/**
 * Template Name: Test
 */
$home_image = get_field('home_image'); 
get_header();
?>

<div class="horizontal-scroll">
    <div class="horizontal-scroll__block horizontal-scroll__block--purple">
        <div class="background" style="background-image: url(https://source.unsplash.com/category/nature/1024x758)"></div>
        <span class="letter">A</span>
    </div>
    <div class="horizontal-scroll__block horizontal-scroll__block--yellow">
        <div class="background" style="background-image: url(https://source.unsplash.com/category/technology/1024x758)"></div>
        <span class="letter">E</span>
    </div>
    <div class="horizontal-scroll__block horizontal-scroll__block--orange">
        <div class="background" style="background-image: url(https://source.unsplash.com/category/buildings/1024x758)"></div>
        <span class="letter">I</span>
    </div>
    <div class="horizontal-scroll__block horizontal-scroll__block--blue">
        <div class="background" style="background-image: url(https://source.unsplash.com/category/food/1024x758)"></div>
        <span class="letter">O</span>
    </div>
    <div class="horizontal-scroll__block horizontal-scroll__block--green">
        <div class="background" style="background-image: url(https://source.unsplash.com/category/people/1024x758)"></div>
        <span class="letter">U</span>
    </div>
    <div class="horizontal-scroll__block horizontal-scroll__block--pink">
        <div class="background" style="background-image: url(https://source.unsplash.com/category/objects/1024x758)"></div>
        <span class="letter">!</span>
    </div>
</div>
<?php get_footer();?>