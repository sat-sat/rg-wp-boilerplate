<?php

function load_scripts() {
	wp_enqueue_script( 'main-scripts', get_template_directory_uri() . '/static/javascripts/main.js', array(), '1.0.0', true );
	wp_enqueue_style('main-styles', get_template_directory_uri() . '/static/css/main.css', array(), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', 'load_scripts');

function google_fonts() {
	$query_args = array(
		'family' => 'Source+Sans+Pro:300,400,500,600,700'
	);
	wp_enqueue_style( 'google_fonts', add_query_arg( $query_args, "//fonts.googleapis.com/css" ), array(), null );
            }
            
add_action('wp_enqueue_scripts', 'google_fonts');