<?php
/**
 * Template Name: About
 * Página About (URL sugerida: /about).
 * Asignar en: editor de la página → Atributos de página → Plantilla.
 * SEO (configurar en el plugin SEO o ajustes de la página):
 *   Title: About KC Trailer Rentals | Trailer Rental in Duluth, GA
 *   Meta:  KC Trailer Rentals is a locally owned trailer rental company in Duluth,
 *          GA. Fully equipped fleet, fair pricing, 24/7 availability, bilingual service.
 *
 * PENDIENTE (confirmar con el cliente): año de fundación, dueños y cualquier
 * dato de historia que quieran destacar — añadir al párrafo "Our story".
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

$why_items = array(
  array(
    'title' => 'Fully equipped fleet',
    'text'  => 'Straps, dollies, blankets, ramps and winches included where applicable.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V7l8-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ),
  array(
    'title' => 'Available 24/7',
    'text'  => 'Hourly and daily options that fit your schedule.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ),
  array(
    'title' => 'Fair, transparent pricing',
    'text'  => 'Clear rates, no hidden fees.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v10M9.5 9.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.6-2.5 1.6-2.5.7-2.5 1.7 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  ),
  array(
    'title' => 'Bilingual service',
    'text'  => 'We serve you in English and Spanish.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" stroke-width="1.8"/></svg>',
  ),
  array(
    'title' => 'Local and personal',
    'text'  => 'A Duluth business that knows the area.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/></svg>',
  ),
);
?>

<!-- ============================== HERO ============================== -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Duluth, GA</span>
    <h1 class="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
      About KC Trailer Rentals
    </h1>
    <p class="mt-5 text-lg leading-relaxed text-[#C7CDD3]">
      Locally owned, fully equipped, and ready when you are.
    </p>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ============================ OUR STORY =========================== -->
<section class="bg-[#F4F2ED] py-20">
  <div class="mx-auto max-w-3xl px-6 text-center">
    <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Our story</span>
    <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
      A local fleet, ready to work
    </h2>
    <p class="mt-5 text-lg leading-relaxed text-[#5B6670]">
      KC Trailer Rentals is a locally owned trailer rental company based in Duluth, Georgia.
      We rent dump, enclosed and car hauler trailers to contractors, movers and DIYers across
      the area — by the hour or by the day. Every trailer in our fleet is kept well-maintained
      and fully equipped, so you can hook up and get to work.
    </p>
  </div>
</section>

<!-- ========================== WHY CHOOSE US ========================= -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-6xl px-6">
    <div class="mb-12 text-center">
      <span class="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Why choose us</span>
      <h2 class="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[#1B2127] sm:text-4xl">
        What sets us apart
      </h2>
    </div>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <?php foreach ($why_items as $w) : ?>
        <div class="rounded-lg border border-[#1B2127]/10 p-6">
          <div class="grid h-12 w-12 place-items-center rounded-md bg-[#D7282F]/10 text-[#D7282F]">
            <span class="h-6 w-6"><?php echo $w['icon']; ?></span>
          </div>
          <h3 class="mt-4 font-display text-lg font-bold uppercase tracking-tight text-[#1B2127]">
            <?php echo esc_html($w['title']); ?>
          </h3>
          <p class="mt-2 text-[15px] leading-relaxed text-[#5B6670]">
            <?php echo esc_html($w['text']); ?>
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
      Ready to haul? We're ready to help.
    </h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="/#trailers" class="rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors hover:bg-[#1B2127] hover:text-white">
        Browse our trailers
      </a>
      <a href="/contact" class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1B2127]">
        Reserve now
      </a>
    </div>
  </div>
</section>

<?php get_footer();