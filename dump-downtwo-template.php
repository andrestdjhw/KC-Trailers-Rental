<?php
/**
 * Template Name: Trailer — 16' Dump Down 2 Earth
 * Página individual del remolque (URL sugerida: /16-dump-down-2-earth).
 * Asignar en: editor de la página → Atributos de página → Plantilla.
 * SEO (configurar en el plugin SEO o ajustes de la página):
 *   Title: 16' Dump Trailer Rental in Duluth, GA | KC Trailer Rentals
 *   Meta:  Rent a 16' Down 2 Earth dump trailer (14,000 lb GVWR) in Duluth, GA.
 *          Hourly and daily rates, fully equipped, 24/7. Reserve today.
 */

get_header();

$phone_display = '770 708 8749';
$phone_href    = 'tel:+17707088749';

// Imágenes del remolque (2). Cambia las rutas por las reales de Medios.
$trailer_image   = '/wp-content/uploads/2026/07/16DumpTrailer.webp'; // 1 → hero
$trailer_image_2 = '/wp-content/uploads/2026/07/16DumpTrailerAbout.webp'; // 2 → bloque "About"

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
  'Construction debris and demolition',
  'Dirt, gravel and landscaping material',
  'Roofing tear-off',
  'Yard and property cleanups',
);

$included = array(
  'Hydraulic dump',
  'Rear ramps',
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
          Dump Trailer · Duluth, GA
        </span>
        <h1 class="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
          16' Dump Trailer<br>— Built to Haul.
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-[#C7CDD3]">
          Move dirt, debris and construction material the easy way. Hydraulic dump,
          14,000 lb capacity, ready 24/7.
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
          <span>14,000 lb GVWR</span>
          <span class="text-[#D7282F]">·</span>
          <span>16' × 7' × 4' walls</span>
        </div>
      </div>

      <div class="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#11161B] bg-cover bg-center shadow-2xl"
           style="background-image:url('<?php echo esc_url($trailer_image); ?>');"
           role="img" aria-label="16' Down 2 Earth dump trailer"></div>
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
      <img src="<?php echo esc_url($trailer_image_2); ?>" alt="16' Down 2 Earth dump trailer detail" loading="lazy"
        onerror="this.style.display='none'"
        class="absolute inset-0 h-full w-full object-cover" />
    </div>

    <div>
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">About this trailer</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Heavy loads, made simple
      </h2>
      <p class="mt-5 text-lg leading-relaxed text-[#5B6670]">
        This 16' Down 2 Earth dump trailer is our go-to for heavy, messy loads. With 4-foot walls
        and a 14,000 lb GVWR, it handles everything from a backyard cleanup to a full construction
        haul — and the hydraulic lift does the unloading for you.
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
  <div class="mx-auto max-w-5xl px-6 text-center">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Specs &amp; pricing</span>
    <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
      14,000 lb GVWR · 16' × 7' × 4' walls
    </h2>
    <div class="mt-10 grid gap-5 sm:grid-cols-3">
      <div class="rounded-lg border border-white/10 bg-[#11161B] p-6">
        <div class="font-display text-4xl font-bold text-[#D7282F]">$150</div>
        <div class="mt-1 text-[14px] font-semibold uppercase tracking-wide text-[#C7CDD3]">Mon–Thu (24h)</div>
      </div>
      <div class="rounded-lg border border-white/10 bg-[#11161B] p-6">
        <div class="font-display text-4xl font-bold text-[#D7282F]">$160</div>
        <div class="mt-1 text-[14px] font-semibold uppercase tracking-wide text-[#C7CDD3]">Fri–Sun (24h)</div>
      </div>
      <div class="rounded-lg border border-white/10 bg-[#11161B] p-6">
        <div class="font-display text-4xl font-bold text-[#D7282F]">$30</div>
        <div class="mt-1 text-[14px] font-semibold uppercase tracking-wide text-[#C7CDD3]">Per hour</div>
      </div>
    </div>
  </div>
</section>

<!-- ================= REQUIREMENTS + RESERVE (FORM) ================== -->
<section id="reserve" class="relative bg-[#11161B] py-20">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
    <div>
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Reserve now</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
        Ready to haul?
      </h2>
      <p class="mt-5 max-w-lg text-[16px] leading-relaxed text-[#C7CDD3]">
        To rent, you'll need a valid Georgia driver's license, auto insurance, a credit card
        for the deposit, and a vehicle capable of towing. A $45 non-refundable booking fee
        reserves your trailer.
      </p>
      <a href="/rental-info" class="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F] hover:underline">
        See full Rental Info
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>

    <div class="render-contact-form w-full" data-trailer="16' Dump — Down 2 Earth"></div>
  </div>
</section>

<?php get_footer();