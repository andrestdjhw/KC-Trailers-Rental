<?php
/**
 * Template Name: Rental Info
 * Página Rental Info (URL sugerida: /rental-info).
 * Asignar en: editor de la página → Atributos de página → Plantilla.
 * SEO (configurar en el plugin SEO o ajustes de la página):
 *   Title: Trailer Rental Requirements & Info | KC Trailer Rentals Duluth, GA
 *   Meta:  What you need to rent a trailer at KC Trailer Rentals in Duluth, GA:
 *          license, insurance, deposit and a $45 booking fee. See how it works.
 *
 * PENDIENTE (confirmar con el cliente): políticas adicionales — condición de
 * devolución, límites de millaje, política de combustible/limpieza, edad mínima,
 * cargos por retraso. Añadir como sección extra cuando se confirmen.
 */

get_header();

$phone_display = '770 708 8749';
$phone_href    = 'tel:+17707088749';

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";
$hero_pattern = "background-color:#1B2127;"
  . "background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);"
  . "background-position:-50px 0;background-size:40px 40px;";

$requirements = array(
  "Valid Georgia driver's license",
  'Current auto insurance',
  'A valid credit card for the deposit',
  'A vehicle in good condition capable of towing',
);

$steps = array(
  array('n' => '01', 'title' => 'Choose your trailer', 'text' => 'Review specs and pricing on its page.'),
  array('n' => '02', 'title' => 'Reserve', 'text' => 'Call us or use the form, and pay the $45 booking fee.'),
  array('n' => '03', 'title' => 'Pick up and haul', 'text' => 'Bring your license, insurance and a tow-capable vehicle.'),
);

$check = '<svg viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
?>

<!-- ============================== HERO ============================== -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Rental Info</span>
    <h1 class="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
      Rental Information
    </h1>
    <p class="mt-5 text-lg leading-relaxed text-[#C7CDD3]">
      Everything you need to know before you reserve.
    </p>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ========================== WHAT YOU NEED ========================= -->
<section class="bg-[#F4F2ED] py-20">
  <div class="mx-auto max-w-5xl px-6">
    <div class="mb-12 text-center">
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">What you need</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Before you rent
      </h2>
    </div>
    <div class="grid gap-5 sm:grid-cols-2">
      <?php foreach ($requirements as $req) : ?>
        <div class="flex items-center gap-4 rounded-lg border border-[#1B2127]/10 bg-white p-5">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#D7282F]/10 text-[#D7282F]">
            <span class="h-5 w-5"><?php echo $check; ?></span>
          </span>
          <span class="text-[16px] font-medium text-[#1B2127]"><?php echo esc_html($req); ?></span>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ======================== BOOKING & DEPOSIT ====================== -->
<section class="bg-[#1B2127] py-20">
  <div class="mx-auto max-w-3xl px-6 text-center">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Booking &amp; deposit</span>
    <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
      <span class="text-[#D7282F]">$45</span> booking fee reserves your trailer
    </h2>
    <p class="mt-5 text-lg leading-relaxed text-[#C7CDD3]">
      A $45 booking fee reserves your trailer and is non-refundable. A credit card is required
      for the security deposit. Hourly and daily rates vary by trailer and by day of the week
      (weekday vs. weekend) — see each trailer's page for current pricing.
    </p>
    <a href="/#trailers" class="mt-6 inline-flex items-center gap-1.5 font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F] hover:underline">
      View trailers &amp; pricing
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</section>

<!-- ========================== HOW IT WORKS ========================= -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-7xl px-6">
    <div class="mb-12 text-center">
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">How it works</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        Three steps and you're rolling
      </h2>
    </div>
    <div class="grid gap-10 md:grid-cols-3">
      <?php foreach ($steps as $step) : ?>
        <div>
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

<!-- ============================ CTA FINAL =========================== -->
<section class="bg-[#D7282F]">
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
  <div class="mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
      Ready to reserve your trailer?
    </h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="/contact" class="rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors hover:bg-[#1B2127] hover:text-white">
        Reserve now
      </a>
      <a href="<?php echo esc_attr($phone_href); ?>" class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1B2127]">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
        Call <?php echo esc_html($phone_display); ?>
      </a>
    </div>
  </div>
</section>

<?php get_footer();