<?php
/**
 * Template Name: Rental Info
 * Página Rental Info rediseñada — macroestructura LONG DOCUMENT NUMERADO
 * (secciones 01·02·03 con regla hazard que se dibuja; ritmo de lectura).
 * SEO:
 *   Title: Trailer Rental Requirements & Info | KC Trailer Rentals Duluth, GA
 *   Meta:  What you need to rent at KC Trailer Rentals in Duluth, GA: license,
 *          insurance and deposit. See how online booking works.
 * PENDIENTE (cliente): políticas extra — devolución, millaje, combustible/limpieza,
 * edad mínima, cargos por retraso → añadir como sección 04 al confirmarse.
 * NOTA: el fee de reserva se eliminó (el cliente decidió cobrar solo la renta y días
 * extra). Las menciones al depósito quedan pendientes de confirmar con Iván.
 */

get_header();

$phone_display = '770 708 8749';
$phone_href    = 'tel:+17707088749';

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";
$hero_pattern = "background-color:#1B2127;background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);background-position:-50px 0;background-size:40px 40px;";

$requirements = array(
  "Valid Georgia driver's license",
  'Current auto insurance',
  'A valid credit card for the deposit',
  'A vehicle in good condition capable of towing',
);
$steps = array(
  array('n' => '1', 'title' => 'Choose your trailer', 'text' => 'Review specs and pricing on its page.'),
  array('n' => '2', 'title' => 'Reserve', 'text' => 'Pick your dates online and check out in minutes.'),
  array('n' => '3', 'title' => 'Pick up and haul', 'text' => 'Bring your license, insurance and a tow-capable vehicle.'),
);
$check = '<svg viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Cabecera numerada de documento (numeral grande + eyebrow + título, regla que se dibuja).
function kc_doc_head($num, $eyebrow, $title) {
  echo '<div class="reveal mb-8">'
     . '<div class="flex items-baseline gap-4">'
     . '<span class="spec-figure font-display text-5xl font-bold leading-none text-[#D7282F]/25 sm:text-6xl">' . esc_html($num) . '</span>'
     . '<div><span class="block font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">' . esc_html($eyebrow) . '</span>'
     . '<h2 class="mt-1 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">' . esc_html($title) . '</h2></div></div>'
     . '<div class="rule-hazard-h line-draw mt-5 w-full"></div></div>';
}
?>

<!-- ============================== HERO (compacto, izq) ============= -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
    <div class="reveal max-w-3xl">
      <div class="flex items-center gap-3">
        <span class="h-5 w-1 rule-hazard-v" aria-hidden="true"></span>
        <span class="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Rental Info</span>
      </div>
      <h1 class="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">Everything before you reserve</h1>
      <p class="mt-4 max-w-xl text-lg leading-relaxed text-[#C7CDD3]">Requirements, deposit, and how the whole thing works — in three short steps.</p>
    </div>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- =========================== DOCUMENTO ============================ -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-4xl space-y-20 px-6">

    <!-- 01 · What you need -->
    <div>
      <?php kc_doc_head('01', 'What you need', 'Before you rent'); ?>
      <div class="grid gap-4 sm:grid-cols-2">
        <?php foreach ($requirements as $i => $req) : ?>
          <div class="reveal flex items-center gap-4 rounded-lg border border-[#1B2127]/10 bg-[#F4F2ED] p-5" style="--i:<?php echo (int) $i; ?>">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#D7282F]/10 text-[#D7282F]"><span class="h-5 w-5"><?php echo $check; ?></span></span>
            <span class="text-[16px] font-medium text-[#1B2127]"><?php echo esc_html($req); ?></span>
          </div>
        <?php endforeach; ?>
      </div>
    </div>

    <!-- 02 · Booking & deposit -->
    <div>
      <?php kc_doc_head('02', 'Booking & deposit', 'What it takes to reserve'); ?>
      <div class="reveal grid items-center gap-8 rounded-xl bg-[#1B2127] p-8 sm:grid-cols-[auto,1fr] sm:p-10">
        <div class="text-center sm:text-left">
          <span class="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-[#D7282F]/12 text-[#D7282F] sm:mx-0">
            <svg class="h-9 w-9" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </span>
          <div class="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#9AA4AE]">Card required</div>
        </div>
        <p class="text-[17px] leading-relaxed text-[#C7CDD3]">
          Reserve online in minutes — pick your trailer and dates, then check out securely. A valid credit card is required for the
          <span class="font-semibold text-white">security deposit</span>. Hourly and daily rates vary by trailer and by day of the week — see each trailer's page for current pricing.
        </p>
      </div>
      <a href="/#trailers" class="reveal mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F] hover:underline">
        View trailers &amp; pricing
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>

    <!-- 03 · How it works (timeline) -->
    <div>
      <?php kc_doc_head('03', 'How it works', "Three steps and you're rolling"); ?>
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

  </div>
</section>

<!-- ============================ CTA FINAL =========================== -->
<section class="bg-[#D7282F]">
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
  <div class="reveal mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">Ready to reserve your trailer?</h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="/#trailers" class="rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors duration-[120ms] hover:bg-[#1B2127] hover:text-white">Browse trailers</a>
      <a href="<?php echo esc_attr($phone_href); ?>" class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:bg-white hover:text-[#1B2127]">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
        Call <?php echo esc_html($phone_display); ?>
      </a>
    </div>
  </div>
</section>

<?php get_footer();