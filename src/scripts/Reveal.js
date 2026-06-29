/* ==========================================================================
 *  reveal.js — movimiento de entrada para TODO el sitio.
 *
 *  · Un solo IntersectionObserver, reveal-once (deja de observar al revelar).
 *  · Sin listeners de scroll, sin parallax (Hallmark motion.md).
 *  · Respeta prefers-reduced-motion.
 *  · Fallback sin JS / sin IO: todo queda visible.
 *
 *  Conteo opcional de números (precios, capacidades):
 *      <span data-countup="150" data-prefix="$">0</span>
 *      <span data-countup="14000" data-suffix=" lb">0</span>
 *  Se dispara una vez cuando su sección entra en viewport (o al cargar si no
 *  está dentro de un .reveal). Con reduced-motion, salta directo al valor final.
 * ======================================================================== */

export default function initReveal() {
  const root = document.documentElement;
  root.classList.add("motion-on"); // por si header.php no lo puso aún (idempotente)

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = document.querySelectorAll(".reveal");

  // Sin soporte de IO (o no hay nada que revelar): mostrar todo y contar.
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("is-visible"));
    runCountups(document, reduce);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        runCountups(entry.target, reduce); // números dentro de esta sección
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => io.observe(el));

  // Números que NO están dentro de ningún .reveal: cuéntalos al cargar.
  runCountups(document, reduce, /* onlyLoose */ true);
}

function runCountups(scope, reduce, onlyLoose) {
  const nums = scope.querySelectorAll("[data-countup]");
  nums.forEach((el) => {
    if (el.dataset.done) return;
    if (onlyLoose && el.closest(".reveal")) return; // lo maneja su sección
    el.dataset.done = "1";

    const target = parseFloat(el.dataset.countup);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";

    if (reduce || isNaN(target)) {
      el.textContent = prefix + format(target) + suffix;
      return;
    }

    const dur = 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cúbico
      el.textContent = prefix + format(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Miles con coma (14000 -> 14,000) para capacidades GVWR.
function format(n) {
  return Number(n).toLocaleString("en-US");
}