/* ==========================================================================
 *  dialogs.js — abre/cierra los <dialog> nativos del sitio.
 *
 *  · Un botón con  data-dialog-open="ID"  abre el <dialog id="ID">.
 *  · Cualquier  [data-dialog-close]  dentro del dialog lo cierra.
 *  · Click en el backdrop (fuera de .kc-dialog-inner) lo cierra.
 *  · Escape y focus-trap los maneja el navegador (showModal()).
 * ======================================================================== */

export default function initDialogs() {
  // Botones que abren
  document.querySelectorAll("[data-dialog-open]").forEach((btn) => {
    const dlg = document.getElementById(btn.getAttribute("data-dialog-open"))
    if (!dlg) return
    btn.addEventListener("click", () => {
      if (typeof dlg.showModal === "function") dlg.showModal()
      else dlg.setAttribute("open", "") // fallback muy viejo
    })
  })

  // Cierre por botón + click en backdrop
  document.querySelectorAll("dialog[data-kc-dialog]").forEach((dlg) => {
    dlg.querySelectorAll("[data-dialog-close]").forEach((b) =>
      b.addEventListener("click", () => dlg.close())
    )
    dlg.addEventListener("click", (e) => {
      if (e.target.closest("[data-dialog-close]")) return
      const box = dlg.querySelector(".kc-dialog-inner")
      if (!box) return
      const r = box.getBoundingClientRect()
      const inside =
        e.clientX >= r.left && e.clientX <= r.right &&
        e.clientY >= r.top && e.clientY <= r.bottom
      if (!inside) dlg.close()
    })
  })
}