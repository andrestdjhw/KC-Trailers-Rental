import React, { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

/* =========================================================================
 *  CONFIG — reemplaza estos valores con tus claves reales
 * ========================================================================= */
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY"
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
const RECAPTCHA_SITE_KEY  = "YOUR_RECAPTCHA_V3_SITE_KEY"
/* ========================================================================= */

const PHONE_DISPLAY = "770 708 8749"

// Opciones del select (coinciden con las 6 páginas de remolque)
const TRAILER_OPTIONS = [
  "16' Dump — Down 2 Earth",
  "Load Trail Dump",
  "Enclosed 14' x 7' x 7'",
  "Spartan Cargo Enclosed",
  'Car Hauler 87" x 20\'',
  'Car Hauler 102" x 20\'',
  "Not sure yet",
]

const isConfigured = (v) => v && !v.startsWith("YOUR_")

// Fecha de hoy en formato YYYY-MM-DD (hora local), para el atributo min.
const todayStr = new Date().toLocaleDateString("en-CA")

export default function ContactForm({ defaultTrailer = "" }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("")
  const [pickup, setPickup] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const initialTrailer = TRAILER_OPTIONS.includes(defaultTrailer) ? defaultTrailer : ""

  // Inicializa EmailJS y carga el script de reCAPTCHA v3 una sola vez.
  useEffect(() => {
    if (isConfigured(EMAILJS_PUBLIC_KEY)) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
    }
    if (isConfigured(RECAPTCHA_SITE_KEY) && !document.getElementById("recaptcha-v3")) {
      const s = document.createElement("script")
      s.id = "recaptcha-v3"
      s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
      s.async = true
      document.head.appendChild(s)
    }
  }, [])

  // Obtiene un token de reCAPTCHA v3 (acción "booking").
  function getRecaptchaToken() {
    return new Promise((resolve) => {
      if (!window.grecaptcha || !isConfigured(RECAPTCHA_SITE_KEY)) return resolve("")
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "booking" })
          .then(resolve)
          .catch(() => resolve(""))
      })
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!isConfigured(EMAILJS_PUBLIC_KEY)) {
      setStatus("error")
      setErrorMsg("Form not configured yet. Please call us at " + PHONE_DISPLAY + ".")
      return
    }
    // Validación de fechas (la devolución no puede ser antes del retiro)
    if (pickup && returnDate && returnDate < pickup) {
      setStatus("error")
      setErrorMsg("The return date can't be before the pickup date.")
      return
    }

    setStatus("sending")
    setErrorMsg("")
    try {
      const token = await getRecaptchaToken()
      const form = formRef.current
      const hidden = form.querySelector('input[name="g-recaptcha-response"]')
      if (hidden) hidden.value = token

      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus("success")
      form.reset()
      setPickup("")
      setReturnDate("")
    } catch (err) {
      setStatus("error")
      setErrorMsg(
        err && typeof err.text === "string"
          ? err.text
          : "Something went wrong. Please try again or call us."
      )
    }
  }

  /* ----------------------------- Success ----------------------------- */
  if (status === "success") {
    return (
      <div className="w-full rounded-xl border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#D7282F]/20 text-[#D7282F]">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-white">
          Booking request sent
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#C7CDD3]">
          Thanks! We'll confirm availability and the next steps shortly. For anything urgent, call {PHONE_DISPLAY}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F] hover:underline"
        >
          Send another
        </button>
      </div>
    )
  }

  /* ------------------------------- Form ------------------------------ */
  const sending = status === "sending"

  return (
    <div className="w-full rounded-xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
        Book your trailer
      </h3>
      <p className="mt-1 text-[14px] text-[#C7CDD3]">
        Send a request and we'll confirm availability.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-5 space-y-4">
        <Field label="Full name">
          <input type="text" name="from_name" required autoComplete="name" className={inputClass} placeholder="John Smith" />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone">
            <input type="tel" name="phone" required autoComplete="tel" className={inputClass} placeholder="(770) 000-0000" />
          </Field>
          <Field label="Email">
            <input type="email" name="reply_to" required autoComplete="email" className={inputClass} placeholder="you@email.com" />
          </Field>
        </div>

        <Field label="Trailer">
          <select name="trailer" required className={inputClass} defaultValue={initialTrailer}>
            <option value="" disabled style={{ color: "#1B2127" }}>Select a trailer…</option>
            {TRAILER_OPTIONS.map((t) => (
              <option key={t} value={t} style={{ color: "#1B2127" }}>{t}</option>
            ))}
          </select>
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Pickup date">
            <input
              type="date"
              name="pickup_date"
              required
              min={todayStr}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className={dateClass}
            />
          </Field>
          <Field label="Return date">
            <input
              type="date"
              name="return_date"
              required
              min={pickup || todayStr}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className={dateClass}
            />
          </Field>
        </div>

        <Field label="Notes (optional)">
          <textarea name="message" rows={2} className={inputClass + " resize-none"} placeholder="Load details, questions…" />
        </Field>

        <label className="flex items-start gap-2.5 text-[13px] leading-snug text-[#C7CDD3]">
          <input
            type="checkbox"
            name="requirements_ack"
            value="Yes — customer confirmed rental requirements"
            required
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#D7282F]"
          />
          <span>
            I understand the rental requirements: valid Georgia driver's license, auto insurance,
            a credit card for the deposit, and a <strong className="text-white">$45 non-refundable booking fee</strong>.
          </span>
        </label>

        {/* Token de reCAPTCHA v3 (se rellena al enviar) */}
        <input type="hidden" name="g-recaptcha-response" />

        {status === "error" && (
          <p className="rounded-md bg-[#D7282F]/15 px-3 py-2 text-[13px] font-medium text-[#FCA5A5]">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-md bg-[#D7282F] px-5 py-3 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#EE3A41] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Request booking"}
        </button>

        <p className="text-[11px] leading-snug text-[#9AA4AE]">
          This is a booking request — not a confirmed reservation. Protected by reCAPTCHA — Google's{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms</a>{" "}apply.
        </p>
      </form>
    </div>
  )
}

/* ------------------------------- Helpers ----------------------------- */

const inputClass =
  "w-full rounded-md border border-white/20 bg-white/10 px-3.5 py-2.5 text-[15px] text-white placeholder:text-[#9AA4AE] focus:border-[#D7282F] focus:outline-none focus:ring-2 focus:ring-[#D7282F]/30"

// Igual que inputClass pero forzando el esquema oscuro del date picker nativo
const dateClass = inputClass + " [color-scheme:dark]"

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#C7CDD3]">
        {label}
      </span>
      {children}
    </label>
  )
}