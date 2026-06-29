import React, { useState, useEffect, useRef } from "react"

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = "770 708 8749"
const PHONE_HREF = "tel:+17707088749"
const EMAIL_DISPLAY = "info@kctrailersrental.com"
const EMAIL_HREF = "mailto:info@kctrailersrental.com"
const LOGO_SRC = "/wp-content/uploads/2026/06/KC_BrandLogo.png"

const TRAILER_GROUPS = [
  { category: "Dump Trailers", Icon: DumpIcon, items: [
    { name: "16' Dump — Down 2 Earth", spec: "14,000 lb GVWR · 16'×7'×4'", from: "$150", href: "/16-dump-down-2-earth" },
    { name: "Load Trail Dump", spec: "14,000 lb GVWR · 14' + 2' ext", from: "$150", href: "/load-trail-dump" },
  ]},
  { category: "Enclosed Trailers", Icon: EnclosedIcon, items: [
    { name: "Enclosed 14' × 7' × 7'", spec: "7,000 lb GVWR · 5k winch · E-track", from: "$90/24h", href: "/enclosed-14x7" },
    { name: "Spartan Cargo Enclosed", spec: "14,000 lb GVWR · 12k winch · ramps", from: "$160", href: "/spartan-cargo-enclosed" },
  ]},
  { category: "Car Haulers", Icon: CarHaulerIcon, items: [
    { name: 'Load Trail 87" × 20\'', spec: "9,990 lb GVWR · 12k winch", from: "$100", href: "/car-hauler-87" },
    { name: 'Load Trail 102" × 20\'', spec: "9,990 lb GVWR · drive-over fenders", from: "$110", href: "/car-hauler-102" },
  ]},
]

// Franja superior del navbar: hazard en grafito (de la paleta) para que haga
// juego con el charcoal del topbar, en vez del rojo de marca.
const TOP_STRIPE = {
  backgroundImage: "repeating-linear-gradient(135deg, #6B7480 0 14px, #1B2127 14px 28px)",
}

/* Anillo de foco reutilizable sobre charcoal (rojo claro, ≥3:1). El botón rojo
   usa anillo BLANCO aparte — un anillo rojo sobre fondo rojo desaparece. */
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE3A41] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2127]"
const FOCUS_ON_RED = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2127]"

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function Navbar({ logoUrl = LOGO_SRC }) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileTrailersOpen, setMobileTrailersOpen] = useState(false)
  const navRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") { setMegaOpen(false); setMobileOpen(false) }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  function openMega() { clearTimeout(closeTimer.current); setMegaOpen(true) }
  function scheduleCloseMega() {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  return (
    <header className="relative z-50 font-display">
      <div aria-hidden="true" className="h-1 w-full" style={TOP_STRIPE} />

      {/* Utility bar */}
      <div className="bg-[#11161B] text-[#C7CDD3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-[12px] tracking-wide">
          <div className="flex items-center gap-4">
            <a href={PHONE_HREF} className={"inline-flex items-center gap-1.5 rounded font-semibold text-white transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS}>
              <PhoneIcon className="h-3.5 w-3.5" />{PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className={"inline-flex items-center gap-1.5 rounded font-semibold text-white transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS}>
              <MailIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{EMAIL_DISPLAY}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#D7282F]">
              <GlobeIcon className="h-3.5 w-3.5" />Hablamos Español
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <ClockIcon className="h-3.5 w-3.5" />24-hour service
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav ref={navRef} className="relative bg-[#1B2127] text-[#F4F2ED] shadow-[0_2px_20px_rgba(0,0,0,0.25)]" aria-label="Primary">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <a href="/" aria-label="KC Trailer Rentals — home" className={"flex items-center rounded " + FOCUS}>
            <img src={logoUrl} alt="KC Trailer Rentals" className="h-16 w-auto" />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>

            <li className="relative" onMouseEnter={openMega} onMouseLeave={scheduleCloseMega}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen((v) => !v)}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[14px] font-semibold uppercase tracking-wide transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] ${megaOpen ? "bg-[#2C353D] text-[#D7282F]" : "text-[#F4F2ED] hover:text-[#D7282F]"} ${FOCUS}`}
              >
                Trailers
                <ChevronIcon className={`h-3.5 w-3.5 transition-transform duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none ${megaOpen ? "rotate-180" : ""}`} />
              </button>
            </li>

            <NavItem href="/locations">Locations</NavItem>
            <NavItem href="/rental-info">Rental Info</NavItem>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href={PHONE_HREF} className={"flex items-center gap-2 rounded text-[14px] font-bold text-white transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS}>
              <PhoneIcon className="h-4 w-4 text-[#D7282F]" />{PHONE_DISPLAY}
            </a>
            <a href="/contact" className={"rounded-md bg-[#D7282F] px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-white shadow-sm transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px " + FOCUS_ON_RED}>
              Reserve Now
            </a>
          </div>

          {/* Mobile toggle (44px hit target) */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={"grid h-11 w-11 place-items-center rounded-md text-[#F4F2ED] hover:bg-[#2C353D] lg:hidden " + FOCUS}
          >
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* ---------- Desktop mega-menu panel ---------- */}
        <div
          onMouseEnter={openMega}
          onMouseLeave={scheduleCloseMega}
          className={`absolute inset-x-0 top-full hidden border-t border-[#D7282F]/30 bg-[#1F262D] shadow-2xl transition-[opacity,transform] duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none lg:block ${megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-8">
            <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-2">
              {TRAILER_GROUPS.map((group) => (
                <div key={group.category}>
                  <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                    <group.Icon className="h-7 w-7 text-[#D7282F]" />
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#9AA4AE]">{group.category}</h3>
                  </div>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className={"group block rounded-md px-3 py-2.5 transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#2C353D] " + FOCUS}>
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-[14px] font-semibold text-[#F4F2ED] group-hover:text-[#D7282F]">{item.name}</span>
                            <span className="shrink-0 rounded bg-[#11161B] px-2 py-0.5 text-[11px] font-bold text-[#D7282F]">{item.from}</span>
                          </div>
                          <span className="mt-0.5 block text-[12px] text-[#9AA4AE]">{item.spec}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="col-span-3 flex flex-col justify-between rounded-lg bg-[#11161B] p-5">
              <div>
                <h4 className="text-[15px] font-bold text-white">Not sure which trailer?</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-[#9AA4AE]">Tell us your load and we'll match you to the right rig. Full-equipped, available 24 hours.</p>
              </div>
              <div className="mt-5 space-y-2">
                <a href={PHONE_HREF} className={"flex items-center justify-center gap-2 rounded-md border border-[#D7282F] px-3 py-2 text-[13px] font-bold text-[#D7282F] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#D7282F] hover:text-white " + FOCUS}>
                  <PhoneIcon className="h-4 w-4" />{PHONE_DISPLAY}
                </a>
                <a href="/contact" className={"flex items-center justify-center rounded-md bg-[#D7282F] px-3 py-2 text-[13px] font-bold uppercase tracking-wide text-white transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px " + FOCUS_ON_RED}>
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ---------- Mobile drawer ---------- */}
      <div className={`fixed inset-0 top-0 z-40 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none ${mobileOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-[#1B2127] shadow-2xl transition-transform duration-[var(--dur-long)] ease-[var(--ease-out)] motion-reduce:transition-none ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <span className="text-[15px] font-extrabold uppercase tracking-[0.12em] text-white">Menu</span>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className={"grid h-11 w-11 place-items-center rounded-md text-[#F4F2ED] hover:bg-[#2C353D] " + FOCUS}>
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobile">
            <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>

            <button
              type="button"
              aria-expanded={mobileTrailersOpen}
              onClick={() => setMobileTrailersOpen((v) => !v)}
              className={"flex w-full items-center justify-between rounded-md px-3 py-3 text-[15px] font-semibold text-[#F4F2ED] hover:bg-[#2C353D] " + FOCUS}
            >
              Trailers
              <ChevronIcon className={`h-4 w-4 transition-transform duration-[var(--dur-short)] ease-[var(--ease-out)] motion-reduce:transition-none ${mobileTrailersOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileTrailersOpen && (
              <div className="mb-1 ml-2 border-l border-white/10 pl-2">
                {TRAILER_GROUPS.map((group) => (
                  <div key={group.category} className="py-1">
                    <div className="flex items-center gap-2 px-3 pb-1 pt-2">
                      <group.Icon className="h-5 w-5 text-[#D7282F]" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9AA4AE]">{group.category}</span>
                    </div>
                    {group.items.map((item) => (
                      <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={"flex items-center justify-between gap-2 rounded-md px-3 py-2 hover:bg-[#2C353D] " + FOCUS}>
                        <span className="text-[14px] text-[#F4F2ED]">{item.name}</span>
                        <span className="shrink-0 text-[12px] font-bold text-[#D7282F]">{item.from}</span>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <MobileLink href="/locations" onClick={() => setMobileOpen(false)}>Locations</MobileLink>
            <MobileLink href="/rental-info" onClick={() => setMobileOpen(false)}>Rental Info</MobileLink>
          </nav>

          <div className="space-y-2 border-t border-white/10 p-4">
            <a href={PHONE_HREF} className={"flex items-center justify-center gap-2 rounded-md border border-[#D7282F] px-3 py-2.5 text-[14px] font-bold text-[#D7282F] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#D7282F] hover:text-white " + FOCUS}>
              <PhoneIcon className="h-4 w-4" />{PHONE_DISPLAY}
            </a>
            <a href="/contact" className={"flex items-center justify-center rounded-md bg-[#D7282F] px-3 py-2.5 text-[14px] font-bold uppercase tracking-wide text-white transition-[background-color,transform] duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:bg-[#EE3A41] active:translate-y-px " + FOCUS_ON_RED}>
              Reserve Now
            </a>
            <p className="pt-1 text-center text-[12px] font-semibold text-[#9AA4AE]">Hablamos Español · 24-hour service</p>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                      */
/* ------------------------------------------------------------------ */

function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className={"rounded-md px-3 py-2 text-[14px] font-semibold uppercase tracking-wide text-[#F4F2ED] transition-colors duration-[var(--dur-micro)] ease-[var(--ease-out)] hover:text-[#D7282F] " + FOCUS}>
        {children}
      </a>
    </li>
  )
}

function MobileLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className={"block rounded-md px-3 py-3 text-[15px] font-semibold text-[#F4F2ED] hover:bg-[#2C353D] " + FOCUS}>
      {children}
    </a>
  )
}

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG, inherit currentColor)                          */
/* ------------------------------------------------------------------ */

function DumpIcon({ className }) {
  return (<svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true"><path d="M7 21 L31 21 L36 8 L15 12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M5 24 H43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="15" cy="27" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="34" cy="27" r="3" stroke="currentColor" strokeWidth="2" /></svg>)
}
function EnclosedIcon({ className }) {
  return (<svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true"><rect x="9" y="7" width="29" height="15" rx="1.5" stroke="currentColor" strokeWidth="2" /><path d="M5 16 H9 M38 14 h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="17" cy="26" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="31" cy="26" r="3" stroke="currentColor" strokeWidth="2" /></svg>)
}
function CarHaulerIcon({ className }) {
  return (<svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true"><path d="M6 19 H38 L44 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 19 V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="16" cy="24" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="30" cy="24" r="3" stroke="currentColor" strokeWidth="2" /></svg>)
}
function ChevronIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>)
}
function PhoneIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>)
}
function MailIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>)
}
function GlobeIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" strokeWidth="1.8" /></svg>)
}
function ClockIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>)
}
function MenuIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)
}
function CloseIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)
}