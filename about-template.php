<?php
/**
 * Template Name: About
 * Página About rediseñada — macroestructura EDITORIAL (columna de lectura,
 * cabecera asimétrica, filas numeradas en vez de grid de tarjetas).
 * SEO:
 *   Title: About KC Trailer Rentals | Trailer Rental in Duluth, GA
 *   Meta:  Locally owned trailer rental company in Duluth, GA. Fully equipped
 *          fleet, fair pricing, 24/7 availability, bilingual service.
 * PENDIENTE (cliente): año de fundación, dueños e historia → ampliar "Our story".
 */

get_header();

$phone_display = '770 708 8749';
$phone_href    = 'tel:+17707088749';

$hazard = "background-image:repeating-linear-gradient(135deg,#D7282F 0 14px,#1B2127 14px 28px);";
$hero_pattern = "background-color:#1B2127;background-image:"
  . "linear-gradient(95deg,#2A343B 25%,transparent 25%),linear-gradient(-15deg,#2A343B 25%,transparent 25%),"
  . "linear-gradient(25deg,transparent 75%,#2A343B 75%),linear-gradient(-45deg,transparent 75%,#2A343B 75%),"
  . "linear-gradient(-15deg,transparent 75%,#2A343B 75%);background-position:-50px 0;background-size:40px 40px;";

if (!function_exists('kc_head')) {
  function kc_head($eyebrow, $title, $light = true) {
    $h = $light ? '#1B2127' : '#ffffff';
    echo '<div class="reveal mb-10 flex gap-5"><span class="rule-hazard-v shrink-0 self-stretch" aria-hidden="true"></span>'
       . '<div><span class="block font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">' . esc_html($eyebrow) . '</span>'
       . '<h2 class="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl" style="color:' . $h . '">' . esc_html($title) . '</h2></div></div>';
  }
}

$why_items = array(
  array('title' => 'Fully equipped fleet', 'text' => 'Straps, dollies, blankets, ramps and winches included where applicable.'),
  array('title' => 'Available 24/7', 'text' => 'Hourly and daily options that fit your schedule.'),
  array('title' => 'Fair, transparent pricing', 'text' => 'Clear rates, no hidden fees.'),
  array('title' => 'Bilingual service', 'text' => 'We serve you in English and Spanish.'),
  array('title' => 'Local and personal', 'text' => 'A Duluth business that knows the area.'),
);
?>

<!-- ============================== HERO (editorial, izq) ============= -->
<section class="relative bg-[#1B2127]">
  <div class="absolute inset-0" style="<?php echo $hero_pattern; ?>" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
    <div class="reveal max-w-3xl">
      <div class="flex items-center gap-3">
        <span class="h-5 w-1 rule-hazard-v" aria-hidden="true"></span>
        <span class="font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-[#D7282F]">Duluth, GA · Est. local</span>
      </div>
      <h1 class="mt-5 font-display text-4xl font-bold uppercase leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
        About KC Trailer Rentals
      </h1>
      <p class="mt-6 max-w-2xl text-xl leading-relaxed text-[#C7CDD3]">
        Locally owned, fully equipped, and ready when you are.
      </p>
    </div>
  </div>
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
</section>

<!-- ============================ OUR STORY (lectura) ================= -->
<section class="bg-[#F4F2ED] py-24">
  <div class="mx-auto max-w-3xl px-6">
    <?php kc_head('Our story', 'A local fleet, ready to work', true); ?>
    <div class="reveal space-y-6 text-[18px] leading-[1.8] text-[#3A434C]">
      <p class="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-[#D7282F]">
        KC Trailer Rentals is a locally owned trailer rental company based in Duluth, Georgia. We rent dump,
        enclosed and car hauler trailers to contractors, movers and DIYers across the area — by the hour or by the day.
      </p>
      <p>
        Every trailer in our fleet is kept well-maintained and fully equipped, so you can hook up and get to work.
        No surprises, no hidden fees — just dependable equipment and straight answers, in English or Spanish.
      </p>
    </div>
  </div>
</section>

<!-- ===================== WHAT SETS US APART (filas) ================ -->
<section class="bg-white py-24">
  <div class="mx-auto max-w-4xl px-6">
    <?php kc_head('Why choose us', 'What sets us apart', true); ?>
    <ul class="border-t border-[#1B2127]/10">
      <?php foreach ($why_items as $i => $w) : ?>
        <li class="reveal flex items-start gap-6 border-b border-[#1B2127]/10 py-7" style="--i:<?php echo (int) $i; ?>">
          <span class="spec-figure shrink-0 font-display text-3xl font-bold leading-none text-[#D7282F]/30">0<?php echo (int) $i + 1; ?></span>
          <div>
            <h3 class="font-display text-xl font-bold uppercase tracking-tight text-[#1B2127]"><?php echo esc_html($w['title']); ?></h3>
            <p class="mt-1.5 text-[16px] leading-relaxed text-[#5B6670]"><?php echo esc_html($w['text']); ?></p>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</section>

<!-- ============================ CTA FINAL =========================== -->
<section class="bg-[#D7282F]">
  <div class="h-1.5 w-full" style="<?php echo $hazard; ?>" aria-hidden="true"></div>
  <div class="reveal mx-auto max-w-7xl px-6 py-16 text-center">
    <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">Ready to haul? We're ready to help.</h2>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a href="/#trailers" class="rounded-md bg-white px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-[#1B2127] transition-colors duration-[120ms] hover:bg-[#1B2127] hover:text-white">Browse our trailers</a>
      <a href="/contact" class="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-3.5 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors duration-[120ms] hover:bg-white hover:text-[#1B2127]">Reserve now</a>
    </div>
  </div>
</section>

<?php get_footer();