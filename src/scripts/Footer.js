import React from "react"

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = "770 708 8749"
const PHONE_HREF = "tel:+17707088749"
const EMAIL_DISPLAY = "info@kctrailersrental.com"
const EMAIL_HREF = "mailto:info@kctrailersrental.com"
const LOGO_SRC =
  "/wp-content/uploads/2026/06/KC_BrandLogo.png"
const FACEBOOK_URL = "#" // TODO: reemplazar con la URL real de la página de Facebook
const LOCATION = "Duluth, Georgia, USA"

const TRAILERS = [
  { name: "16' Dump — Down 2 Earth", href: "/16-dump-down-2-earth" },
  { name: "Load Trail Dump", href: "/load-trail-dump" },
  { name: "Enclosed 14' × 7' × 7'", href: "/enclosed-14x7" },
  { name: "Spartan Cargo Enclosed", href: "/spartan-cargo-enclosed" },
  { name: 'Car Hauler 87" × 20\'', href: "/car-hauler-87" },
  { name: 'Car Hauler 102" × 20\'', href: "/car-hauler-102" },
]

const COMPANY = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Locations", href: "/locations" },
  { name: "Rental Info", href: "/rental-info" },
  { name: "Contact / Reserve", href: "/contact" },
]

/* The requested Uiverse zig-zag pattern, ported to a React style object.
   (Original by Uiverse.io / kandalgaonkarshubham) */
const FOOTER_PATTERN = {
  background:
    "radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255,170,0,0) 0) 21px 30px," +
    "radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240,166,17,0) 0) 19px 30px," +
    "linear-gradient(#282828 14%, rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%, #282828 0) 0 0," +
    "linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240,166,17,0) 0, rgba(240,166,17,0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0," +
    "linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240,166,17,0) 0, rgba(240,166,17,0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0," +
    "linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 #282828",
  backgroundSize: "40px 60px",
}

const HAZARD_STRIPE = {
  backgroundImage:
    "repeating-linear-gradient(135deg, #D7282F 0 14px, #1B2127 14px 28px)",
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function Footer({ logoUrl = LOGO_SRC }) {
  const year = new Date().getFullYear()

  return (
    <footer className="font-display text-[#E7E5DF]">
      {/* Hazard-stripe accent — echoes the navbar */}
      <div aria-hidden="true" className="h-1 w-full" style={HAZARD_STRIPE} />

      {/* Patterned body */}
      <div className="relative" style={FOOTER_PATTERN}>
        {/* Subtle scrim keeps text legible over the texture */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src={logoUrl}
                alt="KC Trailer Rentals"
                className="h-24 w-auto"
              />
            </a>

            <p className="mt-4 max-w-xs text-[14px] italic leading-relaxed text-[#C7CDD3]">
              Haul with confidence, rent from us.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-[13px]">
              <span className="inline-flex items-center gap-2 font-semibold text-[#D7282F]">
                <GlobeIcon className="h-4 w-4" />
                Hablamos Español
              </span>
              <span className="inline-flex items-center gap-2 text-[#C7CDD3]">
                <ClockIcon className="h-4 w-4" />
                24-hour service
              </span>
            </div>

            <a
              href={FACEBOOK_URL}
              aria-label="Facebook"
              className="mt-5 inline-grid h-9 w-9 place-items-center rounded-full border border-white/20 text-[#E7E5DF] transition-colors hover:border-[#D7282F] hover:bg-[#D7282F] hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Trailers */}
          <div>
            <FooterHeading>Trailers</FooterHeading>
            <ul className="space-y-2.5">
              {TRAILERS.map((t) => (
                <li key={t.href}>
                  <FooterLink href={t.href}>{t.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <FooterLink href={c.href}>{c.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="space-y-3.5 text-[14px]">
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-[#D7282F]"
                >
                  <PhoneIcon className="h-4 w-4 text-[#D7282F]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="inline-flex items-center gap-2.5 break-all text-[#C7CDD3] transition-colors hover:text-[#D7282F]"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-[#D7282F]" />
                  {EMAIL_DISPLAY}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-[#C7CDD3]">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#D7282F]" />
                {LOCATION}
              </li>
            </ul>

            <a
              href="/contact"
              className="mt-5 inline-flex rounded-md bg-[#D7282F] px-4 py-2.5 text-[14px] font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#EE3A41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7282F]"
            >
              Reserve Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#11161B] text-[#9AA4AE]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-[12px] sm:flex-row">
          <span>© {year} KC Trailer Rentals LLC. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <a href="/rental-info" className="transition-colors hover:text-[#D7282F]">
              Rental Info
            </a>
            <a href="/contact" className="transition-colors hover:text-[#D7282F]">
              Contact
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function FooterHeading({ children }) {
  return (
    <h3 className="mb-4 inline-block border-b-2 border-[#D7282F] pb-1 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
      {children}
    </h3>
  )
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[14px] text-[#C7CDD3] transition-colors hover:text-[#D7282F]"
    >
      {children}
    </a>
  )
}

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.8 5.8L16 13l4 1.5v3a2 2 0 01-2.2 2A15.5 15.5 0 014.5 6.2 2 2 0 016.5 4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.3 1.3-1.3h1.5V5.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7v2.1H8.2V14h2.5v7h2.8z" />
    </svg>
  )
}