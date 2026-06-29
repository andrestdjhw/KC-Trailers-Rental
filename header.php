<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <!-- Marca el documento como "JS activo" ANTES del primer pintado, para que
         los bloques .reveal arranquen ocultos sin parpadeo. Sin JS, nunca se
         añade la clase y todo el contenido queda visible. -->
    <script>document.documentElement.classList.add('motion-on')</script>
  </head>
  <body <?php body_class('min-h-screen flex flex-col bg-white'); ?>>

    <!-- Navbar (componente React) -->
    <div id="render-navbar" data-logo="/wp-content/uploads/2026/06/KC_BrandLogo.png"></div>

    <!-- El contenido de cada página se renderiza aquí, entre navbar y footer.
         <main class="flex-1"> empuja el footer al fondo (sticky footer). -->
    <main class="flex-1">