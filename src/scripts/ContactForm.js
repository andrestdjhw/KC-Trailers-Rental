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

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("")

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

  // Obtiene un token de reCAPTCHA v3 (acción "contact").
  function getRecaptchaToken() {
    return new Promise((resolve) => {
      if (!window.grecaptcha || !isConfigured(RECAPTCHA_SITE_KEY)) return resolve("")
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "contact" })
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
          Request sent
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#C7CDD3]">
          Thanks! We'll get back to you shortly. For anything urgent, call {PHONE_DISPLAY}.
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
        Reserve your trailer
      </h3>
      <p className="mt-1 text-[14px] text-[#C7CDD3]">
        Tell us what you need — we'll get right back to you.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
        <Field label="Full name">
          <input
            type="text"
            name="from_name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="John Smith"
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone">
            <input
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              className={inputClass}
              placeholder="(770) 000-0000"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              name="reply_to"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="you@email.com"
            />
          </Field>
        </div>

        <Field label="Trailer of interest">
          <select name="trailer" className={inputClass} defaultValue="">
            <option value="" disabled style={{ color: "#1B2127" }}>Select a trailer…</option>
            {TRAILER_OPTIONS.map((t) => (
              <option key={t} value={t} style={{ color: "#1B2127" }}>{t}</option>
            ))}
          </select>
        </Field>

        <Field label="Message">
          <textarea
            name="message"
            rows={3}
            className={inputClass + " resize-none"}
            placeholder="Dates, load details, questions…"
          />
        </Field>

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
          {sending ? "Sending…" : "Reserve Now"}
        </button>

        <p className="text-[11px] leading-snug text-[#9AA4AE]">
          Protected by reCAPTCHA — Google's{" "}
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