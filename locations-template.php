<?php
/**
 * Template Name: Locations
 * Página Locations (URL sugerida: /locations).
 * Asignar en: editor de la página → Atributos de página → Plantilla.
 * SEO (configurar en el plugin SEO o ajustes de la página):
 *   Title: Trailer Rental Service Area | Duluth, GA | KC Trailer Rentals
 *   Meta:  KC Trailer Rentals serves Duluth, GA and the surrounding area. See our
 *          location, hours and how pickup works. Open 24/7. Reserve today.
 *
 * PENDIENTE (confirmar con el cliente):
 *   - Dirección exacta de recogida  →  cambiar $maps_query y $pickup_address
 *   - Ciudades/condados del área de servicio (p. ej. Gwinnett County, metro Atlanta),
 *     radio, y si ofrecen delivery o solo pickup  →  ajustar el párrafo de "Service area"
 */

get_header();

$phone_display   = '770 708 8749';
$phone_href      = 'tel:+17707088749';

// Placeholder: reemplazar por la dirección exacta de recogida.
$pickup_address  = 'Duluth, Georgia, USA';
$maps_query      = 'Duluth, Georgia';
$maps_embed      = 'https://www.google.com/maps?q=' . rawurlencode($maps_query) . '&output=embed';
$maps_directions = 'https://www.google.com/maps/dir/?api=1&destination=' . rawurlencode($maps_query);

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";
$hero_pattern = "background-color:#1B2127;"
  . "background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);"
  . "background-position:-50px 0;background-size:40px 40px;";
?>

<!-- ============================== HERO ============================== -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Service area</span>
    <h1 class="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
      Where We Serve
    </h1>
    <p class="mt-5 text-lg leading-relaxed text-[#C7CDD3]">
      Based in Duluth, Georgia — serving the surrounding area.
    </p>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ========================== SERVICE AREA ========================= -->
<section class="bg-[#F4F2ED] py-20">
  <div class="mx-auto max-w-3xl px-6 text-center">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Service area</span>
    <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
      Duluth and the surrounding area
    </h2>
    <p class="mt-5 text-lg leading-relaxed text-[#5B6670]">
      KC Trailer Rentals is based in Duluth, Georgia and serves customers throughout the
      surrounding area. Pick up your trailer at our location and you're ready to haul.
    </p>
  </div>
</section>

<!-- ==================== LOCATION, HOURS & PICKUP ==================== -->
<section class="bg-white py-20">
  <div class="mx-auto grid max-w-6xl items-stretch gap-12 px-6 lg:grid-cols-2">
    <!-- Info -->
    <div>
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Location, hours &amp; pickup</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Pick up and go
      </h2>

      <ul class="mt-8 space-y-6">
        <li class="flex items-start gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/10 text-[#D7282F]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>
          </span>
          <div>
            <div class="font-display text-[14px] font-bold uppercase tracking-wide text-[#1B2127]">Address</div>
            <div class="mt-0.5 text-[15px] text-[#5B6670]"><?php echo esc_html($pickup_address); ?></div>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/10 text-[#D7282F]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <div class="font-display text-[14px] font-bold uppercase tracking-wide text-[#1B2127]">Hours</div>
            <div class="mt-0.5 text-[15px] text-[#5B6670]">Open 24/7 — 24-hour service</div>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/10 text-[#D7282F]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <div class="font-display text-[14px] font-bold uppercase tracking-wide text-[#1B2127]">Phone</div>
            <a href="<?php echo esc_attr($phone_href); ?>" class="mt-0.5 block text-[15px] font-semibold text-[#1B2127] transition-colors hover:text-[#D7282F]"><?php echo esc_html($phone_display); ?></a>
          </div>
        </li>
      </ul>

      <a href="<?php echo esc_url($maps_directions); ?>" target="_blank" rel="noopener noreferrer"
         class="mt-8 inline-flex items-center gap-2 rounded-md bg-[#D7282F] px-6 py-3 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#EE3A41]">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>
        Get directions
      </a>
    </div>

    <!-- Map -->
    <div class="overflow-hidden rounded-xl border border-[#1B2127]/10 shadow-lg">
      <div class="aspect-[4/3] w-full lg:h-full">
        <iframe
          src="<?php echo esc_url($maps_embed); ?>"
          class="h-full w-full"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="KC Trailer Rentals pickup location"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

<!-- ============================ CTA FINAL =========================== -->
<section class="bg-[#D7282F]">
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
  <div class="mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
      Come pick up your trailer
    </h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="<?php echo esc_url($maps_directions); ?>" target="_blank" rel="noopener noreferrer"
         class="rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors hover:bg-[#1B2127] hover:text-white">
        Get directions
      </a>
      <a href="/contact" class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1B2127]">
        Reserve a trailer
      </a>
    </div>
  </div>
</section>

<?php get_footer();