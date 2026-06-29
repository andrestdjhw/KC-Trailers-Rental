<?php
/**
 * Template Name: Locations
 * Página Locations rediseñada — macroestructura MAP-LED (el mapa es el
 * protagonista; la info de recogida queda anclada en una columna ficha).
 * SEO:
 *   Title: Trailer Rental Service Area | Duluth, GA | KC Trailer Rentals
 *   Meta:  KC Trailer Rentals serves Duluth, GA and the surrounding area. See our
 *          location, hours and how pickup works. Open 24/7.
 * PENDIENTE (cliente): dirección exacta ($maps_query/$pickup_address); ciudades/
 * condados del área de servicio, radio y si hay delivery → ajustar "Service area".
 */

get_header();

$phone_display   = '770 708 8749';
$phone_href      = 'tel:+17707088749';
$pickup_address  = 'Duluth, Georgia, USA';
$maps_query      = 'Duluth, Georgia';
$maps_embed      = 'https://www.google.com/maps?q=' . rawurlencode($maps_query) . '&output=embed';
$maps_directions = 'https://www.google.com/maps/dir/?api=1&destination=' . rawurlencode($maps_query);

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";
$hero_pattern = "background-color:#1B2127;background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);background-position:-50px 0;background-size:40px 40px;";

$info = array(
  array('label' => 'Address', 'value' => $pickup_address, 'icon' => '<path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/>'),
  array('label' => 'Hours', 'value' => 'Open 24/7 — 24-hour service', 'icon' => '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'),
  array('label' => 'Phone', 'value' => $phone_display, 'icon' => '<path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'),
);
?>

<!-- ============================== HERO (compacto) ================== -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
    <div class="reveal max-w-3xl">
      <div class="flex items-center gap-3">
        <span class="h-5 w-1 rule-hazard-v" aria-hidden="true"></span>
        <span class="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Service area</span>
      </div>
      <h1 class="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">Where we serve</h1>
      <p class="mt-4 max-w-xl text-lg leading-relaxed text-[#C7CDD3]">
        Based in Duluth, Georgia — serving customers throughout the surrounding area. Pick up your trailer and you're ready to haul.
      </p>
    </div>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ===================== MAP-LED: mapa grande + ficha ============== -->
<section class="bg-[#11161B] py-16 lg:py-20">
  <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:items-stretch">
    <!-- Ficha de recogida (anclada) -->
    <div class="reveal lg:col-span-4">
      <div class="flex gap-5">
        <span class="rule-hazard-v shrink-0 self-stretch" aria-hidden="true"></span>
        <div>
          <span class="block font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Pickup</span>
          <h2 class="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">Pick up and go</h2>
        </div>
      </div>
      <ul class="mt-8 divide-y divide-white/10 border-y border-white/10">
        <?php foreach ($info as $it) : ?>
          <li class="flex items-center gap-4 py-4">
            <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/15 text-[#D7282F]">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><?php echo $it['icon']; ?></svg>
            </span>
            <div>
              <div class="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-[#9AA4AE]"><?php echo esc_html($it['label']); ?></div>
              <div class="mt-0.5 text-[16px] font-semibold text-white"><?php echo esc_html($it['value']); ?></div>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
      <a href="<?php echo esc_url($maps_directions); ?>" target="_blank" rel="noopener noreferrer" class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#D7282F] px-6 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:bg-[#EE3A41]">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>
        Get directions
      </a>
    </div>

    <!-- Mapa protagonista -->
    <div class="reveal lg:col-span-8" style="--i:1">
      <div class="h-[420px] overflow-hidden rounded-xl border border-white/10 shadow-2xl lg:h-full lg:min-h-[520px]">
        <iframe src="<?php echo esc_url($maps_embed); ?>" class="h-full w-full" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="KC Trailer Rentals pickup location" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

<!-- ============================ CTA FINAL =========================== -->
<section class="bg-[#D7282F]">
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
  <div class="reveal mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">Come pick up your trailer</h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="<?php echo esc_url($maps_directions); ?>" target="_blank" rel="noopener noreferrer" class="rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors duration-[120ms] hover:bg-[#1B2127] hover:text-white">Get directions</a>
      <a href="/contact" class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:bg-white hover:text-[#1B2127]">Reserve a trailer</a>
    </div>
  </div>
</section>

<?php get_footer();