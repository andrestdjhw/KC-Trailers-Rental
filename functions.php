<?php

function boilerplate_load_assets() {
  // Google Fonts: Oswald (display / condensada)
  wp_enqueue_style(
    'oswald-font',
    'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap',
    array(),
    null
  );

  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element', 'react-jsx-runtime'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

// Preconnect a los servidores de Google Fonts (mejora el tiempo de carga)
function boilerplate_resource_hints($hints, $relation_type) {
  if ('preconnect' === $relation_type) {
    $hints[] = 'https://fonts.googleapis.com';
    $hints[] = array('href' => 'https://fonts.gstatic.com', 'crossorigin');
  }
  return $hints;
}

add_filter('wp_resource_hints', 'boilerplate_resource_hints', 10, 2);

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');