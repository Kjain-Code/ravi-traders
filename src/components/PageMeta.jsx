import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://ravitraders.shop";
const CITY = "Muzaffarnagar";

// Per-page title + description so Google shows the right text for every page
const META = {
  "/": {
    title: `Ravi Traders — Asian Paints Authorised Dealer, ${CITY}`,
    description: `Ravi Traders — Authorised Asian Paints dealer in ${CITY}. Wall paints, primers, exterior emulsions, waterproofing, putty & painting tools.`,
  },
  "/products": {
    title: `Asian Paints Products — Paints, Primers, Putty & Tools | Ravi Traders ${CITY}`,
    description: `Royale, Apcolite, Ace, Apex, primers, wood finishes, waterproofing, putty aur painting tools — genuine Asian Paints products Ravi Traders, ${CITY} mein.`,
  },
  "/services": {
    title: `Home Painting Service in ${CITY} | Ravi Traders`,
    description: `Ghar ki painting shuru se aakhir tak — colour consultation, trained painters, site supervision aur product warranty. Ravi Traders, ${CITY}.`,
  },
  "/waterproofing": {
    title: `Waterproofing Services in ${CITY} | Ravi Traders`,
    description: `Seelan, leakage aur damp walls ke liye Asian Paints SmartCare waterproofing solutions — Ravi Traders, ${CITY}.`,
  },
  "/colours": {
    title: `Wall Colour Ideas & Shades | Ravi Traders ${CITY}`,
    description: `Asian Paints wall colour families explore karein aur apne ghar ke liye sahi shade chunein — expert colour guidance Ravi Traders, ${CITY}.`,
  },
  "/textures": {
    title: `Wall Texture Designs — Asian Paints Royale Play | Ravi Traders ${CITY}`,
    description: `1000+ Asian Paints wall texture designs — marble, stone, concrete, 3D aur metallic. Design chunein, sample dekhein aur ghar par lagwayein. Ravi Traders, ${CITY}.`,
  },
  "/payment": {
    title: `Payment Options — UPI, QR & Bank | Ravi Traders`,
    description: `Ravi Traders ko UPI, QR code ya bank transfer se payment karein.`,
  },
  "/contact": {
    title: `Contact Ravi Traders — Paint Shop in ${CITY}`,
    description: `Ravi Traders, Gandhi Colony, ${CITY} — address, phone, WhatsApp aur store timings.`,
  },
};

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
    const known = META[path];
    const meta = known || { title: "Page not found | Ravi Traders", description: META["/"].description };
    const url = SITE + (path === "/" ? "/" : path);

    document.title = meta.title;
    setTag('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }), "content", meta.description);
    setTag('meta[property="og:title"]', () => { const m = document.createElement("meta"); m.setAttribute("property", "og:title"); return m; }, "content", meta.title);
    setTag('meta[property="og:description"]', () => { const m = document.createElement("meta"); m.setAttribute("property", "og:description"); return m; }, "content", meta.description);
    setTag('meta[property="og:url"]', () => { const m = document.createElement("meta"); m.setAttribute("property", "og:url"); return m; }, "content", url);
    setTag('meta[name="robots"]', () => Object.assign(document.createElement("meta"), { name: "robots" }), "content", known ? "index, follow" : "noindex");
    setTag('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", url);
  }, [pathname]);

  return null;
}
