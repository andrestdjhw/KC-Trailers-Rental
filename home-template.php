<?php
/**
 * Template Name: Home
 * Portada rediseñada — KC Trailer Rentals (lenguaje editorial-industrial).
 * Asignar en: editor de la página Home → Atributos de página → Plantilla → "Home".
 *
 * DISEÑO: cabeceras alineadas a la izquierda con regla hazard vertical (rompe el
 * centrado genérico), tira de stats con count-up, timeline con conector que se
 * dibuja, y tarjetas con estética de ficha técnica.
 * MOVIMIENTO: sistema en src/index.css (.reveal, .line-draw, tokens) + observer
 * en src/scripts/reveal.js. Esta plantilla solo aplica clases.
 *   · reveal            → revela al entrar en viewport
 *   · style="--i:N"     → escalona la cascada
 *   · line-draw         → regla/conector que se dibuja
 *   · data-countup      → número que cuenta una vez
 */

get_header();

$phone_display = '770 708 8749';
$phone_href    = 'tel:+17707088749';
$email         = 'info@kctrailersrental.com';
$hero_image    = '/wp-content/uploads/2026/06/hero-trailer.jpg';

$trailer_icons = array(
  'dump'     => '<svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21 L31 21 L36 8 L15 12 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M5 24 H43" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="27" r="3" stroke="currentColor" stroke-width="2"/><circle cx="34" cy="27" r="3" stroke="currentColor" stroke-width="2"/></svg>',
  'enclosed' => '<svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="7" width="29" height="15" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M5 16 H9 M38 14 h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="17" cy="26" r="3" stroke="currentColor" stroke-width="2"/><circle cx="31" cy="26" r="3" stroke="currentColor" stroke-width="2"/></svg>',
  'hauler'   => '<svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 19 H38 L44 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 19 V15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="24" r="3" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="24" r="3" stroke="currentColor" stroke-width="2"/></svg>',
);

// 6 tarjetas en 3 categorías — ahora con spec real y precio numérico (count-up).
$trailer_types = array(
  array(
    'id' => 'dump', 'icon' => 'dump', 'name' => 'Dump Trailers',
    'blurb' => 'Debris, dirt and construction material. Hydraulic dump, heavy-duty beds.',
    'from' => 150,
    'img' => '/wp-content/uploads/2026/07/LoadDumpTrailer.webp',
    'models' => array(
      array('name' => "16' Dump — Down 2 Earth", 'spec' => "14,000 lb GVWR · 16'×7'×4'", 'href' => '/16-dump-down-2-earth',
        'pricing' => array(array(150, 'Mon–Thu'), array(160, 'Fri–Sun'), array(30, 'Per hour'))),
      array('name' => 'Load Trail Dump', 'spec' => "14,000 lb GVWR · 14' + 2' ext", 'href' => '/load-trail-dump',
        'pricing' => array(array(150, 'Mon–Thu'), array(170, 'Fri–Sun'), array(30, 'Per hour'))),
    ),
  ),
  array(
    'id' => 'enclosed', 'icon' => 'enclosed', 'name' => 'Enclosed Trailers',
    'blurb' => 'Weatherproof transport for moves and sensitive cargo. E-track, winch, dollies.',
    'from' => 90,
    'img' => '/wp-content/uploads/2026/07/EnclosedTrailers.webp',
    'models' => array(
      array('name' => "Enclosed 14' × 7' × 7'", 'spec' => '7,000 lb GVWR · 5k winch · E-track', 'href' => '/enclosed-14x7',
        'pricing' => array(array(90, '24 hours'), array(20, 'Per hour'))),
      array('name' => 'Spartan Cargo Enclosed', 'spec' => '14,000 lb GVWR · 12k winch · ramps', 'href' => '/spartan-cargo-enclosed',
        'pricing' => array(array(160, 'Mon–Thu'), array(200, 'Fri–Sun'), array(35, 'Per hour'))),
    ),
  ),
  array(
    'id' => 'hauler', 'icon' => 'hauler', 'name' => 'Car Hauler Trailers',
    'blurb' => 'Haul cars, trucks and SUVs safely. 12k winch, ramp extensions, drive-over fenders.',
    'from' => 100,
    'img' => '/wp-content/uploads/2026/07/CarHauler.webp',
    'models' => array(
      array('name' => 'Load Trail 87" × 20\'', 'spec' => '9,990 lb GVWR · 12k winch', 'href' => '/car-hauler-87',
        'pricing' => array(array(100, 'Mon–Thu'), array(120, 'Fri–Sun'), array(25, 'Per hour'))),
      array('name' => 'Load Trail 102" × 20\'', 'spec' => '9,990 lb GVWR · drive-over fenders', 'href' => '/car-hauler-102',
        'pricing' => array(array(110, 'Mon–Thu'), array(130, 'Fri–Sun'), array(25, 'Per hour'))),
    ),
  ),
);

// Tira de stats — todos reales (de la flota y el servicio).
$stats = array(
  array('num' => 6,     'suffix' => '',      'prefix' => '', 'label' => 'Trailers ready'),
  array('num' => null,  'text'   => '24/7',                  'label' => 'Hour availability'),
  array('num' => 14000, 'suffix' => ' lb',   'prefix' => '', 'label' => 'Max GVWR'),
  array('num' => 3,     'suffix' => '',      'prefix' => '', 'label' => 'Trailer types'),
);

$trust_items = array(
  array('label' => '24-hour service', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
  array('label' => 'Fully equipped', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V7l8-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
  array('label' => 'Bilingual support', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" stroke-width="1.8"/></svg>'),
  array('label' => 'Fair rates', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v10M9.5 9.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.6-2.5 1.6-2.5.7-2.5 1.7 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'),
  array('label' => 'Duluth, Georgia', 'icon' => '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>'),
);

$why_items = array(
  array('title' => 'All included, no surprises', 'text' => 'Straps, dollies, blankets, ramps and winch — depending on the model.'),
  array('title' => 'Available when you need it', 'text' => '24-hour service, hourly or daily, on your schedule.'),
  array('title' => 'Fair, clear pricing', 'text' => 'Transparent rates with no hidden fees.'),
  array('title' => 'Bilingual support', 'text' => 'We help you in English and Spanish.'),
);

$steps = array(
  array('n' => '1', 'title' => 'Choose your trailer', 'text' => 'Open the model page and check specs and price.'),
  array('n' => '2', 'title' => 'Reserve', 'text' => 'Call or use the form, and pay the $45 booking fee.'),
  array('n' => '3', 'title' => 'Pick up and haul', 'text' => 'Bring license, insurance and a tow-capable vehicle.'),
);

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";
$hero_pattern = "background-color:#1B2127;"
  . "background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);"
  . "background-position:-50px 0;background-size:40px 40px;";

// Cabecera de sección alineada a la izquierda con regla hazard vertical.
function kc_head($eyebrow, $title, $light = true) {
  $eye = '#D7282F';
  $h   = $light ? '#1B2127' : '#ffffff';
  echo '<div class="reveal mb-12 flex gap-5">'
     . '<span class="rule-hazard-v shrink-0 self-stretch" aria-hidden="true"></span>'
     . '<div><span class="block font-display text-[13px] font-semibold uppercase tracking-[0.28em]" style="color:' . $eye . '">' . esc_html($eyebrow) . '</span>'
     . '<h2 class="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl" style="color:' . $h . '">' . esc_html($title) . '</h2></div>'
     . '</div>';
}
?>

<!-- ============================== HERO ============================== -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="absolute inset-0 bg-cover bg-center"
       style="background-image:linear-gradient(90deg,rgba(17,22,27,0.94) 0%,rgba(17,22,27,0.80) 45%,rgba(17,22,27,0.45) 100%),url('<?php echo esc_url($hero_image); ?>');"
       aria-hidden="true"></div>
  <!-- Spotlight rojo sutil: profundidad y drama detrás del titular -->
  <div class="absolute inset-0" aria-hidden="true" style="background:radial-gradient(60% 50% at 26% 40%, rgba(215,40,47,0.13), transparent 68%);"></div>
  <!-- Viñeta inferior para asentar el bloque sobre la franja hazard -->
  <div class="absolute inset-x-0 bottom-0 h-40" aria-hidden="true" style="background:linear-gradient(to top, rgba(11,15,18,0.85), transparent);"></div>

  <div class="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div class="max-w-2xl">
        <div class="reveal flex items-center gap-3" style="--i:0">
          <span class="h-5 w-1 rule-hazard-v" aria-hidden="true"></span>
          <span class="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Trailer Rentals · Duluth, GA</span>
        </div>
        <h1 class="hero-shine reveal mt-5 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl" style="--i:1">
          Haul with<br>confidence.<br>Rent from us.
        </h1>
        <p class="reveal mt-6 max-w-xl text-lg leading-relaxed text-[#C7CDD3]" style="--i:2">
          Dump, enclosed and car hauler trailers fully equipped and ready 24/7 in Duluth, GA. Reserve in minutes.
        </p>
        <div class="reveal mt-8 flex flex-wrap items-center gap-4" style="--i:3">
          <a href="/contact" class="rounded-md bg-[#D7282F] px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white shadow-lg transition-[background-color,transform] duration-[120ms] hover:bg-[#EE3A41] active:translate-y-px">Reserve Now</a>
          <a href="<?php echo esc_attr($phone_href); ?>" class="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:border-[#D7282F] hover:text-[#D7282F]">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
            Call <?php echo esc_html($phone_display); ?>
          </a>
        </div>
        <!-- Stats inline: dan cuerpo a la columna y balancean el form -->
        <div class="reveal mt-10 flex flex-wrap items-center gap-x-7 gap-y-4" style="--i:4">
          <div>
            <div class="spec-figure font-display text-3xl font-bold text-white"><span data-countup="6">6</span></div>
            <div class="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9AA4AE]">Trailers</div>
          </div>
          <span class="h-9 w-0.5 rule-hazard-v" aria-hidden="true"></span>
          <div>
            <div class="spec-figure font-display text-3xl font-bold text-white">24/7</div>
            <div class="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9AA4AE]">Service</div>
          </div>
          <span class="h-9 w-0.5 rule-hazard-v" aria-hidden="true"></span>
          <div>
            <div class="spec-figure font-display text-3xl font-bold text-white"><span data-countup="14000" data-suffix=" lb">14,000 lb</span></div>
            <div class="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9AA4AE]">Max GVWR</div>
          </div>
        </div>
      </div>
      <div class="render-contact-form reveal w-full max-w-md lg:justify-self-end" data-compact="1" style="--i:1"></div>
    </div>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ============================ TRUST BAR ========================= -->
<section class="bg-[#11161B]">
  <div class="trust-marquee reveal relative overflow-hidden py-4">
    <div class="trust-track flex w-max">
      <?php for ($g = 0; $g < 2; $g++) : ?>
        <ul class="flex min-w-[100vw] shrink-0 items-center justify-around gap-x-12 px-6" <?php echo $g === 1 ? 'aria-hidden="true"' : ''; ?>>
          <?php foreach ($trust_items as $item) : ?>
            <li class="inline-flex shrink-0 items-center gap-2.5 text-[13px] font-semibold uppercase tracking-wide text-[#E7E5DF]">
              <span class="h-5 w-5 text-[#D7282F]"><?php echo $item['icon']; ?></span><?php echo esc_html($item['label']); ?>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endfor; ?>
    </div>
  </div>
</section>

<!-- ===================== NUESTROS REMOLQUES (3 tipos) ============== -->
<section id="trailers" class="bg-[#F4F2ED] py-20">
  <div class="mx-auto max-w-7xl px-6">
    <?php kc_head('Our Trailers', 'Pick the right rig for the job', true); ?>
    <p class="reveal -mt-6 mb-10 max-w-2xl text-[#5B6670]">Three categories, six fully-equipped trailers. Tap a category for models &amp; pricing.</p>

    <div class="grid gap-6 md:grid-cols-3">
      <?php foreach ($trailer_types as $i => $tp) : ?>
        <button type="button" data-dialog-open="dialog-<?php echo esc_attr($tp['id']); ?>"
          class="group reveal relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1B2127] text-left transition-[transform,box-shadow] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F2ED]"
          style="--i:<?php echo (int) $i; ?>">

          <!-- Banner: imagen real con fallback al patrón hazard si aún no se subió -->
          <div class="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80">
            <div class="absolute inset-0" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
            <img src="<?php echo esc_url($tp['img']); ?>" alt="<?php echo esc_attr($tp['name']); ?>" loading="lazy"
              onerror="this.style.display='none'"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#1B2127] via-[#1B2127]/55 via-35% to-transparent" aria-hidden="true"></div>
            <div class="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
              <span class="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#D7282F] text-white shadow-lg">
                <span class="block h-7 w-10 [&>svg]:h-full [&>svg]:w-full"><?php echo $trailer_icons[$tp['icon']]; ?></span>
              </span>
              <h3 class="font-display text-2xl font-bold uppercase leading-none tracking-tight text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.55)]"><?php echo esc_html($tp['name']); ?></h3>
            </div>
          </div>

          <span class="absolute left-0 top-0 z-10 h-full w-1 origin-top scale-y-0 bg-[#D7282F] transition-transform duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" aria-hidden="true"></span>

          <div class="flex flex-1 flex-col p-6">
            <p class="flex-1 text-[15px] leading-relaxed text-[#9AA4AE]"><?php echo esc_html($tp['blurb']); ?></p>
            <div class="mt-6 flex w-full items-end justify-between border-t border-white/10 pt-5">
              <div>
                <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9AA4AE]">From</div>
                <div class="spec-figure font-display text-3xl font-bold text-[#D7282F]">$<?php echo (int) $tp['from']; ?><span class="text-[13px] text-[#9AA4AE]">/24h</span></div>
              </div>
              <span class="inline-flex items-center gap-1.5 rounded-md bg-[#D7282F] px-4 py-2.5 font-display text-[13px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] group-hover:bg-[#EE3A41]">
                View pricing
                <svg class="h-4 w-4 transition-transform duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </div>
          </div>
        </button>
      <?php endforeach; ?>
    </div>
  </div>

  <!-- Modales por tipo (nativos <dialog>: focus-trap, Escape y backdrop de fábrica) -->
  <?php foreach ($trailer_types as $tp) : ?>
    <dialog id="dialog-<?php echo esc_attr($tp['id']); ?>" data-kc-dialog aria-labelledby="dlg-<?php echo esc_attr($tp['id']); ?>-title">
      <div class="kc-dialog-inner max-h-[90vh] w-full overflow-y-auto rounded-xl border border-white/10 bg-[#1B2127]">
        <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>

        <div class="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
          <div class="flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-md bg-[#D7282F]/12 text-[#D7282F]">
              <span class="block h-6 w-9 [&>svg]:h-full [&>svg]:w-full"><?php echo $trailer_icons[$tp['icon']]; ?></span>
            </span>
            <h2 id="dlg-<?php echo esc_attr($tp['id']); ?>-title" class="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl"><?php echo esc_html($tp['name']); ?></h2>
          </div>
          <button type="button" data-dialog-close aria-label="Close" class="grid h-11 w-11 place-items-center rounded-md text-[#9AA4AE] transition-colors duration-[120ms] hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>

        <div class="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
          <?php foreach ($tp['models'] as $m) : ?>
            <div class="kc-mcard flex flex-col rounded-lg border border-white/10 bg-[#11161B] p-6">
              <h3 class="font-display text-lg font-bold uppercase tracking-tight text-white"><?php echo esc_html($m['name']); ?></h3>
              <div class="spec-figure mt-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#9AA4AE]"><?php echo esc_html($m['spec']); ?></div>
              <div class="mt-4 grid gap-2" style="grid-template-columns:repeat(<?php echo count($m['pricing']); ?>,minmax(0,1fr));">
                <?php foreach ($m['pricing'] as $p) : ?>
                  <div class="rounded-md border border-white/10 bg-[#1B2127] p-3 text-center">
                    <div class="spec-figure font-display text-2xl font-bold text-[#D7282F]">$<?php echo (int) $p[0]; ?></div>
                    <div class="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#9AA4AE]"><?php echo esc_html($p[1]); ?></div>
                  </div>
                <?php endforeach; ?>
              </div>
              <div class="mt-5 flex flex-1 items-end gap-3">
                <a href="<?php echo esc_url($m['href']); ?>" class="inline-flex flex-1 items-center justify-center rounded-md bg-[#D7282F] px-4 py-2.5 font-display text-[13px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:bg-[#EE3A41] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B]">Reserve this</a>
                <a href="<?php echo esc_url($m['href']); ?>" class="inline-flex items-center justify-center rounded-md border border-white/25 px-4 py-2.5 font-display text-[13px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:border-[#D7282F] hover:text-[#D7282F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]">Details</a>
              </div>
            </div>
          <?php endforeach; ?>
        </div>

        <!-- Barra de cierre con urgencia honesta (sin escasez falsa) -->
        <div class="flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-[#11161B] px-6 py-5 sm:flex-row sm:px-8">
          <p class="text-center text-[14px] text-[#C7CDD3] sm:text-left"><span class="font-bold text-white">$45 booking fee</span> holds your trailer · 24/7 · same-day pickup.</p>
          <a href="/contact" class="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#D7282F] px-6 py-3 font-display text-[14px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:bg-[#EE3A41] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B]">Reserve now</a>
        </div>
      </div>
    </dialog>
  <?php endforeach; ?>
</section>

<!-- ========================== POR QUÉ KC =========================== -->
<section class="bg-[#1B2127] py-20">
  <div class="mx-auto max-w-7xl px-6">
    <?php kc_head('Why KC Trailer Rentals', 'Built to make hauling easy', false); ?>
    <div class="grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      <?php foreach ($why_items as $wi => $w) : ?>
        <div class="reveal bg-[#1B2127] p-7" style="--i:<?php echo (int) $wi; ?>">
          <div class="spec-figure font-display text-2xl font-bold text-[#D7282F]/40">0<?php echo (int) $wi + 1; ?></div>
          <h3 class="mt-3 font-display text-lg font-bold uppercase tracking-tight text-white"><?php echo esc_html($w['title']); ?></h3>
          <p class="mt-2 text-[15px] leading-relaxed text-[#9AA4AE]"><?php echo esc_html($w['text']); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ========================== CÓMO FUNCIONA ======================== -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-7xl px-6">
    <?php kc_head('How it works', "Three steps and you're rolling", true); ?>
    <div class="reveal relative">
      <div class="rule-hazard-h line-draw absolute left-0 right-0 top-[17px] hidden md:block" aria-hidden="true"></div>
      <div class="grid gap-10 md:grid-cols-3">
        <?php foreach ($steps as $si => $step) : ?>
          <div class="reveal relative" style="--i:<?php echo (int) $si; ?>">
            <div class="grid h-9 w-9 place-items-center rounded-full bg-[#1B2127] font-display text-[15px] font-bold text-white ring-4 ring-white"><?php echo esc_html($step['n']); ?></div>
            <h3 class="mt-4 font-display text-xl font-bold uppercase tracking-tight text-[#1B2127]"><?php echo esc_html($step['title']); ?></h3>
            <p class="mt-2 text-[15px] leading-relaxed text-[#5B6670]"><?php echo esc_html($step['text']); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<!-- ========================== PRUEBA SOCIAL ======================== -->
<section class="relative bg-[#1B2127] py-24">
  <div class="absolute inset-0 opacity-40" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="reveal relative mx-auto max-w-4xl px-6 text-center">
    <div class="text-2xl tracking-[0.3em] text-[#D7282F]" aria-label="5 out of 5 stars">★★★★★</div>
    <blockquote class="mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-4xl">
      “The rental process was fast and hassle-free. Excellent service and reliable equipment.”
    </blockquote>
    <p class="mt-6 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#9AA4AE]">— Customer name</p>
  </div>
</section>

<!-- ============================ CTA FINAL ========================== -->
<section class="bg-[#D7282F]">
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
  <div class="reveal mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">Ready for your next project? Reserve your trailer today.</h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="<?php echo esc_attr($phone_href); ?>" class="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors duration-[120ms] hover:bg-[#1B2127] hover:text-white">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
        <?php echo esc_html($phone_display); ?>
      </a>
      <a href="mailto:<?php echo esc_attr($email); ?>" class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:bg-white hover:text-[#1B2127]">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <?php echo esc_html($email); ?>
      </a>
    </div>
  </div>
</section>

<?php get_footer();