<?php
/**
 * Template Name: Trailer — Enclosed 14x7
 * Página individual del remolque (URL sugerida: /enclosed-14x7).
 * Asignar en: editor de la página → Atributos de página → Plantilla.
 * SEO (configurar en el plugin SEO o ajustes de la página):
 *   Title: Enclosed Cargo Trailer Rental 14' | Duluth, GA | KC Trailer Rentals
 *   Meta:  Rent a 14' enclosed cargo trailer (7,000 lb GVWR, winch, E-track) in
 *          Duluth, GA. Protect your load from the weather. Hourly & 24h rates.
 */

get_header();

$phone_display = '770 708 8749';
$phone_href    = 'tel:+17707088749';

// Imágenes del remolque (2). Cambia las rutas por las reales de Medios.
$trailer_image   = '/wp-content/uploads/2026/07/EnclosedTrailers.webp';   // 1 → hero
$trailer_image_2 = '/wp-content/uploads/2026/07/Enclosed14x7About.webp'; // 2 → bloque "About"

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";
$hero_pattern = "background-color:#1B2127;"
  . "background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);"
  . "background-position:-50px 0;background-size:40px 40px;";

$best_for = array(
  'Small and mid-size moves',
  'Furniture and appliances',
  'Tools and equipment',
  'Weather-sensitive cargo',
);

$included = array(
  'Wall & floor E-track',
  '5,000 lb winch',
  'Dollies & blankets',
  'Hitch-ready (fully equipped)',
);

$check = '<svg viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
?>

<!-- ============================== HERO ============================== -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">
          Enclosed Trailer · Duluth, GA
        </span>
        <h1 class="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
          Enclosed 14'<br>— Keep Your Load Protected.
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-[#C7CDD3]">
          Weatherproof transport for moves and sensitive cargo. E-track, winch, dollies
          and blankets included.
        </p>
        <div class="mt-7 flex flex-wrap items-center gap-4">
          <a href="#reserve" class="rounded-md bg-[#D7282F] px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-[#EE3A41]">
            Reserve this trailer
          </a>
          <a href="<?php echo esc_attr($phone_href); ?>" class="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:border-[#D7282F] hover:text-[#D7282F]">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
            Call <?php echo esc_html($phone_display); ?>
          </a>
        </div>
        <div class="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-semibold uppercase tracking-wide text-[#9AA4AE]">
          <span>7,000 lb GVWR</span>
          <span class="text-[#D7282F]">·</span>
          <span>14' × 7' × 7'</span>
        </div>
      </div>

      <div class="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#11161B] bg-cover bg-center shadow-2xl"
           style="background-image:url('<?php echo esc_url($trailer_image); ?>');"
           role="img" aria-label="14' enclosed cargo trailer"></div>
    </div>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ========================= ABOUT THIS TRAILER ===================== -->
<section class="bg-[#F4F2ED] py-20">
  <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
    <!-- Imagen 2 (con fallback al patrón hazard si aún no existe) -->
    <div class="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#1B2127]/10 shadow-xl">
      <div class="absolute inset-0" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
      <img src="<?php echo esc_url($trailer_image_2); ?>" alt="14' enclosed cargo trailer detail" loading="lazy"
        onerror="this.style.display='none'"
        class="absolute inset-0 h-full w-full object-cover" />
    </div>

    <div>
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">About this trailer</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Dry, secure, ready to move
      </h2>
      <p class="mt-5 text-lg leading-relaxed text-[#5B6670]">
        Rain or shine, your cargo stays dry and secure. This 14' enclosed trailer comes ready to
        move with E-track on the walls and floor, a 5,000 lb winch, plus dollies and moving
        blankets — perfect for small-to-mid moves and protected transport.
      </p>
    </div>
  </div>
</section>

<!-- =================== BEST FOR / WHAT'S INCLUDED =================== -->
<section class="bg-white py-20">
  <div class="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
    <div>
      <h3 class="font-display text-[14px] font-bold uppercase tracking-[0.2em] text-[#1B2127]">Best for</h3>
      <span class="mt-2 block h-0.5 w-12 bg-[#D7282F]"></span>
      <ul class="mt-6 space-y-3">
        <?php foreach ($best_for as $item) : ?>
          <li class="flex items-start gap-3 text-[16px] text-[#3A434C]">
            <span class="mt-0.5 h-5 w-5 shrink-0 text-[#D7282F]"><?php echo $check; ?></span>
            <?php echo esc_html($item); ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
    <div>
      <h3 class="font-display text-[14px] font-bold uppercase tracking-[0.2em] text-[#1B2127]">What's included</h3>
      <span class="mt-2 block h-0.5 w-12 bg-[#D7282F]"></span>
      <ul class="mt-6 space-y-3">
        <?php foreach ($included as $item) : ?>
          <li class="flex items-start gap-3 text-[16px] text-[#3A434C]">
            <span class="mt-0.5 h-5 w-5 shrink-0 text-[#D7282F]"><?php echo $check; ?></span>
            <?php echo esc_html($item); ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>

<!-- ===================== SPECS & PRICING ============================ -->
<section class="bg-[#1B2127] py-20">
  <div class="mx-auto max-w-3xl px-6 text-center">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Specs &amp; pricing</span>
    <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
      7,000 lb GVWR · 14' × 7' × 7'
    </h2>
    <p class="mt-3 text-[15px] text-[#9AA4AE]">5,000 lb winch · E-track · dollies &amp; blankets</p>
    <div class="mx-auto mt-10 grid max-w-xl gap-5 sm:grid-cols-2">
      <div class="rounded-lg border border-white/10 bg-[#11161B] p-6">
        <div class="font-display text-4xl font-bold text-[#D7282F]">$20</div>
        <div class="mt-1 text-[14px] font-semibold uppercase tracking-wide text-[#C7CDD3]">Per hour</div>
      </div>
      <div class="rounded-lg border border-white/10 bg-[#11161B] p-6">
        <div class="font-display text-4xl font-bold text-[#D7282F]">$90</div>
        <div class="mt-1 text-[14px] font-semibold uppercase tracking-wide text-[#C7CDD3]">24 hours</div>
      </div>
    </div>
  </div>
</section>

<!-- ================= REQUIREMENTS + RESERVE (Booqable) ============== -->
<section id="reserve" class="relative bg-[#11161B] py-20">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
    <div>
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Reserve now</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
        Ready to move?
      </h2>
      <p class="mt-5 max-w-lg text-[16px] leading-relaxed text-[#C7CDD3]">
        To rent, you'll need a valid Georgia driver's license, auto insurance, a credit card
        for the deposit, and a vehicle capable of towing.
      </p>
      <a href="/rental-info" class="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F] hover:underline">
        See full Rental Info
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>

    <!-- Booqable: reserva real — elige fechas y agrega al carrito. El checkout se completa en Booqable. -->
    <div class="w-full rounded-xl bg-white p-6 shadow-2xl sm:p-8">
      <h3 class="font-display text-lg font-bold uppercase tracking-tight text-[#1B2127]">Check availability</h3>
      <p class="mt-1 text-[14px] leading-relaxed text-[#5B6670]">Pick your rental dates, then add this trailer to your cart to reserve it.</p>
      <div class="mt-5 booqable-datepicker"></div>
      <div class="mt-4 booqable-product-button" data-id="enclosed-14-x-7-x-7"></div>
      <p class="mt-4 text-[12px] leading-relaxed text-[#9AA4AE]">Bring your Georgia license, insurance and a tow-capable vehicle at pickup.</p>
    </div>
  </div>
</section>

<?php get_footer();