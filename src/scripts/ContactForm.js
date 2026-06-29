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

const TRAILERS_BY_TYPE = {
  dump:     ["16' Dump — Down 2 Earth", "Load Trail Dump"],
  enclosed: ["Enclosed 14' x 7' x 7'", "Spartan Cargo Enclosed"],
  hauler:   ['Car Hauler 87" x 20\'', 'Car Hauler 102" x 20\''],
}
const ALL_TRAILERS = [...TRAILERS_BY_TYPE.dump, ...TRAILERS_BY_TYPE.enclosed, ...TRAILERS_BY_TYPE.hauler]
const ALL_OPTIONS = [...ALL_TRAILERS, "Not sure yet"]

// Segmentos del control de tipo (mismos íconos que el navbar / la home).
const TRAILER_TYPES = [
  { id: "all", label: "All", Icon: GridIcon },
  { id: "dump", label: "Dump", Icon: DumpIcon },
  { id: "enclosed", label: "Enclosed", Icon: EnclosedIcon },
  { id: "hauler", label: "Hauler", Icon: HaulerIcon },
]

// Tipo al que pertenece un remolque (para preseleccionar desde data-trailer).
function typeOf(trailer) {
  for (const t of Object.keys(TRAILERS_BY_TYPE)) {
    if (TRAILERS_BY_TYPE[t].includes(trailer)) return t
  }
  return "all"
}
// Opciones visibles del <select> según el tipo elegido.
function optionsForType(type) {
  const base = type === "all" ? ALL_TRAILERS : TRAILERS_BY_TYPE[type] || ALL_TRAILERS
  return [...base, "Not sure yet"]
}
// En modo compacto (hero) no hay <select>: el tipo ES la selección. Esto va al email.
const TYPE_LABEL = { all: "Not sure yet", dump: "Dump trailer", enclosed: "Enclosed trailer", hauler: "Car hauler" }

const isConfigured = (v) => v && !v.startsWith("YOUR_")
const todayStr = new Date().toLocaleDateString("en-CA")

/* -------------------------------------------------------------------------
 *  Validación por campo (patrón "touched": valida en blur, revalida al
 *  cambiar una vez tocado). Mensajes: qué pasó + qué hacer, en una línea.
 * ---------------------------------------------------------------------- */
function validate(name, value, all) {
  switch (name) {
    case "from_name":
      return value.trim() ? "" : "Enter your full name."
    case "phone":
      return value.trim().length >= 7 ? "" : "Enter a phone we can reach you at."
    case "reply_to":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address."
    case "trailer":
      return value ? "" : "Pick a trailer (or “Not sure yet”)."
    case "pickup_date":
      return value ? "" : "Choose a pickup date."
    case "return_date":
      if (!value) return "Choose a return date."
      if (all.pickup_date && value < all.pickup_date) return "Return can't be before pickup."
      return ""
    case "requirements_ack":
      return value ? "" : "Please confirm the rental requirements."
    default:
      return ""
  }
}

const REQUIRED = ["from_name", "phone", "reply_to", "trailer", "pickup_date", "return_date", "requirements_ack"]

export default function ContactForm({ defaultTrailer = "", compact = false }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("")
  const initialTrailer = ALL_OPTIONS.includes(defaultTrailer) ? defaultTrailer : ""
  const initialType = initialTrailer ? typeOf(initialTrailer) : "all"

  const [values, setValues] = useState({
    from_name: "", phone: "", reply_to: "",
    // En compacto el remolque sale del tipo (sin <select>); si no, del modelo elegido.
    trailer: compact ? TYPE_LABEL[initialType] : initialTrailer,
    pickup_date: "", return_date: "", message: "", requirements_ack: false,
  })
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [type, setType] = useState(initialType)

  // Cambiar de tipo: en compacto fija el remolque al tipo; si no, filtra el <select>.
  function onPickType(t) {
    setType(t)
    if (compact) {
      setField("trailer", TYPE_LABEL[t])
    } else if (values.trailer && !optionsForType(t).includes(values.trailer)) {
      setField("trailer", "")
    }
  }

  useEffect(() => {
    if (isConfigured(EMAILJS_PUBLIC_KEY)) emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
    if (isConfigured(RECAPTCHA_SITE_KEY) && !document.getElementById("recaptcha-v3")) {
      const s = document.createElement("script")
      s.id = "recaptcha-v3"
      s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
      s.async = true
      document.head.appendChild(s)
    }
  }, [])

  function setField(name, value) {
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors((e) => ({ ...e, [name]: validate(name, value, next) }))
    // return_date depende de pickup_date
    if (name === "pickup_date" && touched.return_date) {
      setErrors((e) => ({ ...e, return_date: validate("return_date", next.return_date, next) }))
    }
  }
  function onBlur(name) {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((e) => ({ ...e, [name]: validate(name, values[name], values) }))
  }
  function validateAll() {
    const next = {}
    REQUIRED.forEach((n) => { next[n] = validate(n, values[n], values) })
    setErrors(next)
    setTouched(REQUIRED.reduce((acc, n) => ((acc[n] = true), acc), {}))
    return Object.values(next).every((v) => !v)
  }

  function getRecaptchaToken() {
    return new Promise((resolve) => {
      if (!window.grecaptcha || !isConfigured(RECAPTCHA_SITE_KEY)) return resolve("")
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "booking" }).then(resolve).catch(() => resolve(""))
      })
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validateAll()) {
      // Enfoca el primer campo con error
      const first = REQUIRED.find((n) => validate(n, values[n], values))
      const el = formRef.current?.querySelector(`[name="${first}"]`)
      if (el && el.focus) el.focus()
      return
    }
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
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, { publicKey: EMAILJS_PUBLIC_KEY })
      setStatus("success")
      form.reset()
      setValues({ from_name: "", phone: "", reply_to: "", trailer: "", pickup_date: "", return_date: "", message: "", requirements_ack: false })
      setTouched({})
      setErrors({})
    } catch (err) {
      setStatus("error")
      setErrorMsg(err && typeof err.text === "string" ? err.text : "Something went wrong. Please try again or call us.")
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
        <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-white">Booking request sent</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#C7CDD3]">
          Thanks! We'll confirm availability and the next steps shortly. For anything urgent, call {PHONE_DISPLAY}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-md font-display text-[14px] font-bold uppercase tracking-wide text-[#D7282F] underline-offset-4 transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#EE3A41] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B]"
        >
          Send another
        </button>
      </div>
    )
  }

  /* ------------------------------- Form ------------------------------ */
  const sending = status === "sending"

  return (
    <div className="w-full rounded-xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-6">
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">Book your trailer</h3>
      <p className="mt-1 text-[14px] text-[#C7CDD3]">Send a request and we'll confirm availability.</p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-4 space-y-3">
        <Field name="from_name" label="Full name" error={errors.from_name}>
          <input type="text" name="from_name" autoComplete="name" placeholder="John Smith"
            value={values.from_name} onChange={(e) => setField("from_name", e.target.value)} onBlur={() => onBlur("from_name")}
            aria-required="true" aria-invalid={!!errors.from_name} aria-describedby="err-from_name"
            className={inputCls(errors.from_name)} />
        </Field>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field name="phone" label="Phone" error={errors.phone}>
            <input type="tel" name="phone" autoComplete="tel" placeholder="(770) 000-0000"
              value={values.phone} onChange={(e) => setField("phone", e.target.value)} onBlur={() => onBlur("phone")}
              aria-required="true" aria-invalid={!!errors.phone} aria-describedby="err-phone"
              className={inputCls(errors.phone)} />
          </Field>
          <Field name="reply_to" label="Email" error={errors.reply_to}>
            <input type="email" name="reply_to" autoComplete="email" placeholder="you@email.com"
              value={values.reply_to} onChange={(e) => setField("reply_to", e.target.value)} onBlur={() => onBlur("reply_to")}
              aria-required="true" aria-invalid={!!errors.reply_to} aria-describedby="err-reply_to"
              className={inputCls(errors.reply_to)} />
          </Field>
        </div>

        {/* Segmented control: tipo de remolque (filtra el selector de abajo) */}
        <div>
          <span className="mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#C7CDD3]">Trailer type</span>
          <div role="group" aria-label="Trailer type" className="grid grid-cols-4 gap-1 rounded-md border border-white/15 bg-white/5 p-1">
            {TRAILER_TYPES.map((tt) => {
              const active = type === tt.id
              return (
                <button
                  key={tt.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onPickType(tt.id)}
                  className={
                    "flex flex-col items-center gap-1 rounded px-1 py-2 font-display text-[11px] font-bold uppercase tracking-wide transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-1 focus-visible:ring-offset-[#11161B] " +
                    (active ? "bg-[#D7282F] text-white" : "text-[#C7CDD3] hover:bg-white/10")
                  }
                >
                  <tt.Icon className="h-5 w-5" />
                  {tt.label}
                </button>
              )
            })}
          </div>
        </div>

        {compact ? (
          /* En el hero el tipo ES la selección; mandamos el valor por un hidden. */
          <input type="hidden" name="trailer" value={values.trailer} />
        ) : (
          <Field name="trailer" label="Trailer" error={errors.trailer}>
            <select name="trailer" value={values.trailer} onChange={(e) => setField("trailer", e.target.value)} onBlur={() => onBlur("trailer")}
              aria-required="true" aria-invalid={!!errors.trailer} aria-describedby="err-trailer"
              className={inputCls(errors.trailer)}>
              <option value="" disabled style={{ color: "#1B2127" }}>Select a trailer…</option>
              {optionsForType(type).map((t) => (<option key={t} value={t} style={{ color: "#1B2127" }}>{t}</option>))}
            </select>
          </Field>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <Field name="pickup_date" label="Pickup date" error={errors.pickup_date}>
            <input type="date" name="pickup_date" min={todayStr}
              value={values.pickup_date} onChange={(e) => setField("pickup_date", e.target.value)} onBlur={() => onBlur("pickup_date")}
              aria-required="true" aria-invalid={!!errors.pickup_date} aria-describedby="err-pickup_date"
              className={inputCls(errors.pickup_date) + " [color-scheme:dark]"} />
          </Field>
          <Field name="return_date" label="Return date" error={errors.return_date}>
            <input type="date" name="return_date" min={values.pickup_date || todayStr}
              value={values.return_date} onChange={(e) => setField("return_date", e.target.value)} onBlur={() => onBlur("return_date")}
              aria-required="true" aria-invalid={!!errors.return_date} aria-describedby="err-return_date"
              className={inputCls(errors.return_date) + " [color-scheme:dark]"} />
          </Field>
        </div>

        {!compact && (
          <Field name="message" label="Notes (optional)" error="">
            <textarea name="message" rows={2} placeholder="Load details, questions…"
              value={values.message} onChange={(e) => setField("message", e.target.value)}
              className={inputCls("") + " resize-y"} />
          </Field>
        )}

        <div>
          <label className="flex items-start gap-2.5 text-[13px] leading-snug text-[#C7CDD3]">
            <input type="checkbox" name="requirements_ack" value="Yes — customer confirmed rental requirements"
              checked={values.requirements_ack}
              onChange={(e) => setField("requirements_ack", e.target.checked)} onBlur={() => onBlur("requirements_ack")}
              aria-required="true" aria-invalid={!!errors.requirements_ack} aria-describedby="err-requirements_ack"
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#D7282F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-1 focus-visible:ring-offset-[#11161B]" />
            <span>
              I understand the rental requirements: valid Georgia driver's license, auto insurance, a credit card for the
              deposit, and a <strong className="text-white">$45 non-refundable booking fee</strong>.
            </span>
          </label>
          <FieldError id="err-requirements_ack" error={errors.requirements_ack} />
        </div>

        <input type="hidden" name="g-recaptcha-response" />

        {status === "error" && (
          <p role="alert" className="flex items-start gap-2 rounded-md bg-[#D7282F]/15 px-3 py-2 text-[13px] font-medium text-[#FCA5A5]">
            <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8v5M12 16.5h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          aria-busy={sending}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#D7282F] px-5 py-3 font-display text-[15px] font-bold uppercase tracking-wide text-white transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161B] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#D7282F] disabled:active:translate-y-0"
        >
          {sending && (
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="opacity-25" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
          {sending ? "Sending…" : "Request booking"}
        </button>

        <p className="text-[11px] leading-snug text-[#9AA4AE]">
          This is a booking request — not a confirmed reservation. Protected by reCAPTCHA — Google's{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="rounded underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]">Privacy Policy</a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="rounded underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]">Terms</a>{" "}apply.
        </p>
      </form>
    </div>
  )
}

/* ------------------------------- Helpers ----------------------------- */

// Borde 1px constante en TODOS los estados (sin layout-shift). El estado va a
// background (hover), ring (focus-visible) y color de borde (error) — nunca al ancho.
function inputCls(error) {
  const base =
    "w-full rounded-md border bg-white/10 px-3.5 py-2 text-[15px] text-white placeholder:text-[#9AA4AE] " +
    "transition-[background-color,border-color] duration-[var(--dur-micro)] ease-[var(--ease-out)] " +
    "hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41]"
  return base + (error ? " border-[#F87171] focus-visible:ring-[#F87171]" : " border-white/20 focus-visible:border-[#EE3A41]")
}

function Field({ name, label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#C7CDD3]">{label}</span>
      {children}
      <FieldError id={`err-${name}`} error={error} />
    </label>
  )
}

// Slot de altura estable (min-height: 1lh) para que mostrar el error no empuje el layout.
function FieldError({ id, error }) {
  return (
    <span id={id} role={error ? "alert" : undefined} className="mt-1 flex min-h-[1lh] items-center gap-1 text-[12px] font-medium text-[#FCA5A5]">
      {error && (
        <>
          <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8v5M12 16.5h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {error}
        </>
      )}
    </span>
  )
}

/* ------------------------------ Iconos de tipo ----------------------- */
/* Mismos trazos que el navbar / la home (inline SVG, heredan currentColor). */
function GridIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" /><rect x="3" y="14" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="14" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" /></svg>)
}
function DumpIcon({ className }) {
  return (<svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true"><path d="M7 21 L31 21 L36 8 L15 12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M5 24 H43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="15" cy="27" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="34" cy="27" r="3" stroke="currentColor" strokeWidth="2" /></svg>)
}
function EnclosedIcon({ className }) {
  return (<svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect x="9" y="7" width="29" height="15" rx="1.5" stroke="currentColor" strokeWidth="2" /><path d="M5 16 H9 M38 14 h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="17" cy="26" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="31" cy="26" r="3" stroke="currentColor" strokeWidth="2" /></svg>)
}
function HaulerIcon({ className }) {
  return (<svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true"><path d="M6 19 H38 L44 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 19 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="16" cy="24" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="30" cy="24" r="3" stroke="currentColor" strokeWidth="2" /></svg>)
}