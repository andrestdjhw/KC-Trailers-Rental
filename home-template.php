<?php
/**
 * Template Name: Home
 * Plantilla personalizada de la portada — KC Trailer Rentals.
 * Asignar en: editor de la página Home → Atributos de página → Plantilla → "Home".
 * El contenido va dentro del <main class="flex-1"> que abre header.php.
 */

get_header();

/* -------------------------------------------------------------------------
 * Datos
 * ---------------------------------------------------------------------- */

$phone_display = '770 708 8749';
$phone_href    = 'tel:+17707088749';
$email         = 'info@kctrailersrental.com';

// Imagen del hero (súbela a Medios con este nombre o cambia la ruta).
// Si no existe, el degradado oscuro de fondo mantiene el hero presentable.
$hero_image = '/wp-content/uploads/2026/06/hero-trailer.jpg';

// Íconos por tipo de remolque (SVG, heredan el color con currentColor).
$trailer_icons = array(
  'dump'   => '<svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21 L31 21 L36 8 L15 12 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M5 24 H43" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="27" r="3" stroke="currentColor" stroke-width="2"/><circle cx="34" cy="27" r="3" stroke="currentColor" stroke-width="2"/></svg>',
  'enclosed' => '<svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="7" width="29" height="15" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M5 16 H9 M38 14 h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="17" cy="26" r="3" stroke="currentColor" stroke-width="2"/><circle cx="31" cy="26" r="3" stroke="currentColor" stroke-width="2"/></svg>',
  'hauler' => '<svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 19 H38 L44 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 19 V15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="24" r="3" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="24" r="3" stroke="currentColor" stroke-width="2"/></svg>',
);

// Las 6 tarjetas agrupadas en 3 categorías.
$trailer_categories = array(
  array(
    'category' => 'Dump Trailers',
    'icon'     => 'dump',
    'cards'    => array(
      array(
        'name'  => "16' Dump Trailer — Down 2 Earth",
        'desc'  => 'For debris, dirt, and construction material. Heavy-duty bed with hydraulic dump.',
        'price' => 'From $150 / 24h',
        'href'  => '/16-dump-down-2-earth',
      ),
      array(
        'name'  => 'Load Trail Dump Trailer',
        'desc'  => "Greater capacity with 2' walls and extensions. Ideal for large loads.",
        'price' => 'From $150 / 24h',
        'href'  => '/load-trail-dump',
      ),
    ),
  ),
  array(
    'category' => 'Enclosed Trailers',
    'icon'     => 'enclosed',
    'cards'    => array(
      array(
        'name'  => "Enclosed Trailer 14' x 7' x 7'",
        'desc'  => 'Protect your cargo from the weather. Great for moves — E-track, winch, dollies and blankets.',
        'price' => 'From $90 / 24h',
        'href'  => '/enclosed-14x7',
      ),
      array(
        'name'  => 'Spartan Cargo Enclosed',
        'desc'  => "Our largest: 24' + nose. Ramps and a 12k lb winch for heavy loads.",
        'price' => 'From $160 / 24h',
        'href'  => '/spartan-cargo-enclosed',
      ),
    ),
  ),
  array(
    'category' => 'Car Hauler Trailers',
    'icon'     => 'hauler',
    'cards'    => array(
      array(
        'name'  => 'Load Trail 87" x 20\'',
        'desc'  => 'Haul cars safely. 12k lb winch and ramp extension for low vehicles.',
        'price' => 'From $100 / 24h',
        'href'  => '/car-hauler-87',
      ),
      array(
        'name'  => 'Load Trail 102" x 20\'',
        'desc'  => 'Wider, with drive-over fenders. For larger vehicles.',
        'price' => 'From $110 / 24h',
        'href'  => '/car-hauler-102',
      ),
    ),
  ),
);

// Barra de confianza (5.2)
$trust_items = array(
  array('label' => '24-hour service', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
  array('label' => 'Fully equipped', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V7l8-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
  array('label' => 'Hablamos Español', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" stroke-width="1.8"/></svg>'),
  array('label' => 'Fair rates', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v10M9.5 9.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.6-2.5 1.6-2.5.7-2.5 1.7 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'),
  array('label' => 'Duluth, Georgia', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>'),
);

// Por qué KC (5.4)
$why_items = array(
  array(
    'title' => 'All included, no surprises',
    'text'  => 'Every trailer comes fully equipped: straps, dollies, blankets, ramps and winch depending on the model.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ),
  array(
    'title' => 'Available when you need it',
    'text'  => '24-hour service with hourly and daily options to fit your schedule.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ),
  array(
    'title' => 'Fair, clear pricing',
    'text'  => 'Transparent rates with no hidden fees — you know what you pay before you book.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  ),
  array(
    'title' => 'Bilingual support',
    'text'  => 'We help you in both English and Spanish.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" stroke-width="1.8"/></svg>',
  ),
);

// Cómo funciona (5.5)
$steps = array(
  array('n' => '01', 'title' => 'Choose your trailer', 'text' => 'Open the model page and check the specs and price.'),
  array('n' => '02', 'title' => 'Reserve', 'text' => 'Call us or use the form, and pay the $45 booking fee.'),
  array('n' => '03', 'title' => 'Pick up and haul', 'text' => 'Bring your license, insurance and a capable vehicle. Done.'),
);

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";

// Estampado del hero (adaptado de Uiverse a la paleta del sitio: charcoal).
$hero_pattern = "background-color:#1B2127;"
  . "background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);"
  . "background-position:-50px 0;background-size:40px 40px;";
?>

<style>
  /* Scroll reveal — solo se activa con JS (sin JS, todo queda visible) */
  body { overflow-x: hidden; }
  .reveal-on .reveal {
    opacity: 0;
    transition: opacity .7s ease-out, transform .7s ease-out;
    will-change: opacity, transform;
  }
  .reveal-on .reveal-left  { transform: translateX(-48px); }
  .reveal-on .reveal-right { transform: translateX(48px); }
  .reveal-on .reveal.is-visible { opacity: 1; transform: translateX(0); }
  @media (prefers-reduced-motion: reduce) {
    .reveal-on .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  }

  /* Trust bar — cinta en movimiento continuo */
  @keyframes trust-scroll { to { transform: translateX(-50%); } }
  .trust-track { animation: trust-scroll 30s linear infinite; }
  .trust-marquee:hover .trust-track { animation-play-state: paused; }
  @media (prefers-reduced-motion: reduce) {
    .trust-track { animation: none; }
  }

  /* Hero headline — destello dorado que recorre el texto */
  .hero-shine { color: #fff; }
  @supports ((-webkit-background-clip: text) or (background-clip: text)) {
    .hero-shine {
      background-image: linear-gradient(110deg,
        #ffffff 0%, #ffffff 40%,
        #AAB2BB 46%, #6B7480 50%, #AAB2BB 54%,
        #ffffff 60%, #ffffff 100%);
      background-size: 220% auto;
      background-position: 180% center;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      animation: hero-shine 6s ease-in-out infinite;
    }
  }
  @keyframes hero-shine {
    0%   { background-position: 180% center; }
    55%  { background-position: -80% center; }
    100% { background-position: -80% center; }
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-shine { animation: none; }
  }

  /* Hero — levitación del bloque (headline + subheadline + CTAs) y sombra proyectada */
  @keyframes hero-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }
  .hero-float {
    animation: hero-float 5s ease-in-out infinite;
    filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.6));
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-float { animation: none; }
  }
</style>
<script>document.documentElement.classList.add('reveal-on');</script>

<!-- ============================ 5.1 HERO ============================ -->
<section class="relative bg-[#1B2127] reveal reveal-left">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image:linear-gradient(90deg,rgba(17,22,27,0.94) 0%,rgba(17,22,27,0.78) 45%,rgba(17,22,27,0.35) 100%),url('<?php echo esc_url($hero_image); ?>');"
    aria-hidden="true"></div>

  <div class="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div class="hero-float max-w-2xl">
      <span class="inline-block text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">
        Trailer Rentals · Duluth, GA
      </span>
      <h1 class="hero-shine mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        Haul with confidence.<br>Rent from us.
      </h1>
      <p class="mt-5 max-w-xl text-lg leading-relaxed text-[#C7CDD3]">
        Dump, enclosed and car hauler trailers — fully equipped and ready 24/7 in Duluth, GA. Reserve in minutes.
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a href="/contact"
           class="rounded-md bg-[#D7282F] px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-[#EE3A41]">
          Reserve Now
        </a>
        <a href="<?php echo esc_attr($phone_href); ?>"
           class="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:border-[#D7282F] hover:text-[#D7282F]">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
          Call <?php echo esc_html($phone_display); ?>
        </a>
      </div>
      </div>
      <div class="render-contact-form w-full max-w-md lg:justify-self-end"></div>
    </div>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ====================== 5.2 BARRA DE CONFIANZA ===================== -->
<section class="bg-[#11161B] reveal reveal-right">
  <div class="trust-marquee relative overflow-hidden py-5">
    <div class="trust-track flex w-max">
      <?php for ($g = 0; $g < 2; $g++) : ?>
        <ul class="flex min-w-[100vw] shrink-0 items-center justify-around gap-x-12 px-6" <?php echo $g === 1 ? 'aria-hidden="true"' : ''; ?>>
          <?php foreach ($trust_items as $item) : ?>
            <li class="inline-flex shrink-0 items-center gap-2.5 text-[14px] font-semibold uppercase tracking-wide text-[#E7E5DF]">
              <span class="h-5 w-5 text-[#D7282F]"><?php echo $item['icon']; ?></span>
              <?php echo esc_html($item['label']); ?>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endfor; ?>
    </div>
  </div>
</section>

<!-- ===================== 5.3 NUESTROS REMOLQUES ===================== -->
<section id="trailers" class="bg-[#F4F2ED] py-20 reveal reveal-left">
  <div class="mx-auto max-w-7xl px-6">
    <div class="mb-12 text-center">
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Our Trailers</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Pick the right rig for the job
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-[#5B6670]">
        Six fully-equipped trailers across three categories. Tap any model for full specs and pricing.
      </p>
    </div>

    <?php foreach ($trailer_categories as $cat) : ?>
      <div class="mb-12 last:mb-0">
        <div class="mb-6 flex items-center gap-3">
          <span class="h-8 w-8 text-[#D7282F]"><?php echo $trailer_icons[$cat['icon']]; ?></span>
          <h3 class="font-display text-[14px] font-bold uppercase tracking-[0.2em] text-[#1B2127]">
            <?php echo esc_html($cat['category']); ?>
          </h3>
          <span class="h-px flex-1 bg-[#1B2127]/10"></span>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <?php foreach ($cat['cards'] as $card) : ?>
            <a href="<?php echo esc_url($card['href']); ?>"
               class="group flex flex-col rounded-lg border border-[#1B2127]/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#D7282F] hover:shadow-xl">
              <div class="flex items-start justify-between gap-4">
                <h4 class="font-display text-xl font-bold uppercase tracking-tight text-[#1B2127] group-hover:text-[#D7282F]">
                  <?php echo esc_html($card['name']); ?>
                </h4>
                <span class="shrink-0 rounded bg-[#1B2127] px-2.5 py-1 text-[12px] font-bold text-[#D7282F]">
                  <?php echo esc_html($card['price']); ?>
                </span>
              </div>
              <p class="mt-3 flex-1 text-[15px] leading-relaxed text-[#5B6670]">
                <?php echo esc_html($card['desc']); ?>
              </p>
              <span class="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F]">
                View details
                <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- ==================== 5.4 POR QUÉ KC TRAILER ====================== -->
<section class="bg-[#1B2127] py-20 reveal reveal-right">
  <div class="mx-auto max-w-7xl px-6">
    <div class="mb-12 text-center">
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Why KC Trailer Rentals</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
        Built to make hauling easy
      </h2>
    </div>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <?php foreach ($why_items as $w) : ?>
        <div>
          <div class="grid h-12 w-12 place-items-center rounded-md bg-[#D7282F]/10 text-[#D7282F]">
            <span class="h-6 w-6"><?php echo $w['icon']; ?></span>
          </div>
          <h3 class="mt-4 font-display text-lg font-bold uppercase tracking-tight text-white">
            <?php echo esc_html($w['title']); ?>
          </h3>
          <p class="mt-2 text-[15px] leading-relaxed text-[#9AA4AE]">
            <?php echo esc_html($w['text']); ?>
          </p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ====================== 5.5 CÓMO FUNCIONA ========================= -->
<section class="bg-white py-20 reveal reveal-left">
  <div class="mx-auto max-w-7xl px-6">
    <div class="mb-12 text-center">
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">How it works</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Three steps and you're rolling
      </h2>
    </div>
    <div class="grid gap-10 md:grid-cols-3">
      <?php foreach ($steps as $step) : ?>
        <div class="relative">
          <span class="font-display text-5xl font-bold text-[#D7282F]/20"><?php echo esc_html($step['n']); ?></span>
          <h3 class="mt-2 font-display text-xl font-bold uppercase tracking-tight text-[#1B2127]">
            <?php echo esc_html($step['title']); ?>
          </h3>
          <p class="mt-2 text-[15px] leading-relaxed text-[#5B6670]">
            <?php echo esc_html($step['text']); ?>
          </p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ====================== 5.6 PRUEBA SOCIAL ========================= -->
<section class="bg-[#1B2127] py-20 reveal reveal-right">
  <div class="mx-auto max-w-3xl px-6 text-center">
    <div class="text-2xl tracking-[0.3em] text-[#D7282F]" aria-label="5 out of 5 stars">★★★★★</div>
    <blockquote class="mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
      “The rental process was fast and hassle-free. Excellent service and reliable equipment.”
    </blockquote>
    <p class="mt-5 text-[14px] font-semibold uppercase tracking-wide text-[#9AA4AE]">— Customer name</p>
  </div>
</section>

<!-- ======================== 5.7 CTA FINAL =========================== -->
<section class="bg-[#D7282F] reveal reveal-left">
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
  <div class="mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
      Ready for your next project? Reserve your trailer today.
    </h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="<?php echo esc_attr($phone_href); ?>"
         class="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors hover:bg-[#1B2127] hover:text-white">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
        <?php echo esc_html($phone_display); ?>
      </a>
      <a href="mailto:<?php echo esc_attr($email); ?>"
         class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1B2127]">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <?php echo esc_html($email); ?>
      </a>
    </div>
  </div>
</section>

<script>
  (function () {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    els.forEach(function (el) { io.observe(el); });
  })();
</script>

<?php get_footer();