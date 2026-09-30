import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { STORE_WHATSAPP_NUMBER, whatsappGeneralLink } from "../whatsapp.js";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Painting Service" },
  { to: "/colours", label: "Colours" },
  { to: "/textures", label: "Textures" },
  { to: "/payment", label: "Payment" },
  { to: "/contact", label: "Contact / About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>🎨 Asian Paints Authorised Dealer • Muzaffarnagar</span>
          <span className="topbar-phones">
            <a href={`tel:+${STORE_WHATSAPP_NUMBER}`}>📞 099977 77047</a>
            <span aria-hidden="true">/</span>
            <a href="tel:+917451007047">074510 07047</a>
          </span>
        </div>
      </div>

      <header className="site">
        <nav className="container nav">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/images/logo.png" alt="Ravi Traders" className="brand-logo" />
          </NavLink>

          <ul className={`nav-links ${open ? "open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {l.label}
                  <span
                    className="stroke"
                    style={{
                      background:
                        "linear-gradient(90deg,#E4572E,#F2A93B,#3FA34D,#1A8FA3,#7B4B94)",
                      borderRadius: "4px",
                    }}
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link className="btn btn-primary btn-sm" to="/products">
              Shop Now
            </Link>
            <button
              className="hamburger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}