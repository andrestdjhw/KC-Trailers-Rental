<?php
/**
 * Template Name: Contact
 * Página Contact / Reserve (URL sugerida: /contact).
 * Asignar en: editor de la página → Atributos de página → Plantilla.
 * SEO (configurar en el plugin SEO o ajustes de la página):
 *   Title: Contact KC Trailer Rentals | Duluth, GA | 770 708 8749
 *   Meta:  Contact KC Trailer Rentals in Duluth, GA. Call 770 708 8749 or email
 *          info@kctrailersrental.com. Open 24/7. Hablamos Español.
 *
 * PENDIENTE: dirección exacta de recogida ($maps_query / $pickup_address) y la
 * URL real de Facebook ($facebook_url).
 */

get_header();

$phone_display   = '770 708 8749';
$phone_href      = 'tel:+17707088749';
$email           = 'info@kctrailersrental.com';
$facebook_url    = '#'; // TODO: URL real de la página de Facebook

// Placeholder: reemplazar por la dirección exacta de recogida.
$pickup_address  = 'Duluth, GA';
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
  <div class="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Contact</span>
    <h1 class="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
      Contact Us
    </h1>
    <p class="mt-5 text-lg leading-relaxed text-[#C7CDD3]">
      Questions or ready to reserve? We're here 24/7.
    </p>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ===================== CONTACT DETAILS + FORM ==================== -->
<section class="bg-[#11161B] py-20">
  <div class="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
    <!-- Details -->
    <div>
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Get in touch</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
        Reach us anytime
      </h2>

      <ul class="mt-8 space-y-5">
        <li class="flex items-start gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/15 text-[#D7282F]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <div class="font-display text-[13px] font-bold uppercase tracking-wide text-[#9AA4AE]">Phone</div>
            <a href="<?php echo esc_attr($phone_href); ?>" class="mt-0.5 block text-[17px] font-semibold text-white transition-colors hover:text-[#D7282F]"><?php echo esc_html($phone_display); ?></a>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/15 text-[#D7282F]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <div class="font-display text-[13px] font-bold uppercase tracking-wide text-[#9AA4AE]">Email</div>
            <a href="mailto:<?php echo esc_attr($email); ?>" class="mt-0.5 block break-all text-[17px] font-semibold text-white transition-colors hover:text-[#D7282F]"><?php echo esc_html($email); ?></a>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/15 text-[#D7282F]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>
          </span>
          <div>
            <div class="font-display text-[13px] font-bold uppercase tracking-wide text-[#9AA4AE]">Address</div>
            <div class="mt-0.5 text-[17px] font-semibold text-white"><?php echo esc_html($pickup_address); ?></div>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#D7282F]/15 text-[#D7282F]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          <div>
            <div class="font-display text-[13px] font-bold uppercase tracking-wide text-[#9AA4AE]">Hours</div>
            <div class="mt-0.5 text-[17px] font-semibold text-white">Open 24/7 — 24-hour service</div>
          </div>
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a href="<?php echo esc_attr($phone_href); ?>" class="inline-flex items-center gap-2 rounded-md bg-[#D7282F] px-6 py-3 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#EE3A41]">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
          Call now
        </a>
        <a href="<?php echo esc_url($facebook_url); ?>" aria-label="Facebook"
           class="inline-grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-[#D7282F] hover:bg-[#D7282F]">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.3 1.3-1.3h1.5V5.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7v2.1H8.2V14h2.5v7h2.8z"/></svg>
        </a>
        <span class="inline-flex items-center gap-1.5 text-[14px] font-semibold uppercase tracking-wide text-[#D7282F]">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" stroke-width="1.8"/></svg>
          Hablamos Español
        </span>
      </div>
    </div>

    <!-- Reservation form -->
    <div class="render-contact-form w-full"></div>
  </div>
</section>

<!-- ============================== MAP ============================== -->
<section class="bg-[#F4F2ED] py-20">
  <div class="mx-auto max-w-6xl px-6">
    <div class="mb-10 text-center">
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Find us</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Pickup location
      </h2>
    </div>
    <div class="overflow-hidden rounded-xl border border-[#1B2127]/10 shadow-lg">
      <div class="aspect-[16/7] w-full">
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
    <div class="mt-8 text-center">
      <a href="<?php echo esc_url($maps_directions); ?>" target="_blank" rel="noopener noreferrer"
         class="inline-flex items-center gap-2 rounded-md bg-[#D7282F] px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#EE3A41]">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>
        Get directions
      </a>
    </div>
  </div>
</section>

<?php get_footer();