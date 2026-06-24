import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import ContactForm from "./scripts/ContactForm"
import React from "react"
import ReactDOM from "react-dom/client"

// Navbar — el logo se puede pasar con data-logo="..." en el contenedor;
// si no, el componente usa su LOGO_SRC por defecto.
const navMount = document.querySelector("#render-navbar")
if (navMount) {
  ReactDOM.createRoot(navMount).render(<Navbar logoUrl={navMount.dataset.logo} />)
}

// Footer
const footerMount = document.querySelector("#render-footer")
if (footerMount) {
  ReactDOM.createRoot(footerMount).render(<Footer logoUrl={footerMount.dataset.logo} />)
}

// Contact / Booking Form (puede haber más de uno; data-trailer pre-selecciona el remolque)
document.querySelectorAll(".render-contact-form").forEach((el) => {
  ReactDOM.createRoot(el).render(<ContactForm defaultTrailer={el.dataset.trailer || ""} />)
})