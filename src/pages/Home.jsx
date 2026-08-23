import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlobField from "../components/BlobField.jsx";
import BrushDivider from "../components/BrushDivider.jsx";
import Reveal from "../components/Reveal.jsx";
import { CATEGORIES } from "../data/products.js";
import { whatsappGeneralLink } from "../whatsapp.js";

const FEATURES = [
  { ico: "✅", title: "100% Genuine", text: "Sirf authorised Asian Paints products — koi milawat nahi." },
  { ico: "🎯", title: "Exact Shade Matching", text: "Computerised tinting machine se accurate colour, har baar." },
  { ico: "🚚", title: "Fast Local Delivery", text: "Muzaffarnagar mein same-day delivery available." },
  { ico: "💬", title: "WhatsApp par Support", text: "Order, sawaal ya complaint — sab kuch ek message door." },
];

const TESTIMONIALS = [
  { name: "Amit Sharma", area: "Gandhi Colony", color: "#E4572E", text: "Colour matching bilkul perfect tha, ghar par dikhne wale shade jaisa hi wall par aaya. Staff bahut helpful hai." },
  { name: "Priya Verma", area: "Lal Bagh", color: "#1A8FA3", text: "Primer se le kar final coat tak sahi salaah di. Time par delivery bhi mil gayi, rate bhi genuine tha." },
  { name: "Rajesh Kumar", area: "Muzaffarnagar", color: "#7B4B94", text: "Contractor hoon, bulk order karta hoon yahan se — hamesha genuine Asian Paints stock milta hai, bharosemand dukaan." },
];

/* ---------- Promotional Video Hero ---------- */
function VideoHero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    setMuted((prev) => {
      const next = !prev;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  };

  return (
    <section className="video-hero-wrap">
      <video
        ref={videoRef}
        className="video-hero"
        src={encodeURI("/Ravi trader Promotional video.mp4")}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
      />
      <div className="video-hero-scrim" />

      <button
        className="sound-toggle"
        onClick={toggleSound}
        aria-label={muted ? "Unmute video" : "Mute video"}
        type="button"
      >
        {muted ? "🔇" : "🔊"}
      </button>

      <div className="video-hero-overlay">
        <span className="eyebrow eyebrow-dark">● Asian Paints Authorised Dealer</span>
        <h2>Dekhein Ravi Traders ki poori range</h2>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- PROMOTIONAL VIDEO ---------- */}
      <VideoHero />

      {/* ---------- HERO ---------- */}
      <section className="hero">
        <BlobField />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow eyebrow-logo">
              <img src="/images/asian-paints-banner.png" alt="Asian Paints Authorised Dealer" />
            </span>
            <h1>
              Rangon se saja lo,
              <br />
              har <span className="grad-text">deewar</span> aur sapna.
            </h1>
            <BrushDivider />
            <p style={{ maxWidth: 480 }}>
              Ravi Traders par milta hai Asian Paints ka poora range —
              Paints, Primer, Waterproofing Solutions, All Types of Wood
              Finishes and Tools. Quality paint, sahi salaah, aur ghar jaisi
              service.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 26 }}>
              <Link to="/products" className="btn btn-primary">
                Categories Dekhein →
              </Link>
              <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                💬 WhatsApp par Poochein
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <b>4.9★</b>
                <span>100+ Google Reviews</span>
              </div>
              <div className="hero-stat">
                <b>10k+</b>
                <span>Happy Customers</span>
              </div>
              <div className="hero-stat">
                <b>25+ Yrs</b>
                <span>Trusted in Muzaffarnagar</span>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-card">
              <img src="/images/front.jpg" alt="Ravi Traders store front" />
              <div className="hero-card-shine" />
            </div>
            <motion.div
              className="float-chip"
              style={{ top: -22, left: -18 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🏅 Royale Luxury Emulsion — Bestseller
            </motion.div>
            <motion.div
              className="float-chip"
              style={{ bottom: -20, right: -14 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              🎨 10,000+ Shades Matched
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Kya Milta Hai</span>
            <h2>Har jaroorat ke liye sahi product</h2>
            <p>
              Wall paints se le kar waterproofing aur tools tak — sab kuch ek
              hi jagah, expert salaah ke saath.
            </p>
          </Reveal>

          <div className="cat-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.05}>
                <Link
                  to={`/products#${c.id}`}
                  className="cat-card"
                  style={{ "--tint": c.color, display: "block" }}
                >
                  <span className="cat-icon">
                    <img src={encodeURI(c.image)} alt={c.label} loading="lazy" />
                  </span>
                  <h3>{c.label}</h3>
                  <p>{c.blurb}</p>
                  <span className="cat-link">
                    Dekhein
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Hum Alag Kyun Hai</span>
            <h2>Quality, salaah aur bharosa — teeno saath</h2>
          </Reveal>
          <div className="feat-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="feat">
                  <span className="ico">{f.ico}</span>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} style={{ textAlign: "center", marginTop: 36, fontSize: 13.5, color: "#7A8094", fontWeight: 700 }}>
            🏅 Authorised Dealer: Asian Paints • Royale • Apcolite • Tractor Emulsion • SmartCare
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Customer Kehte Hain</span>
            <h2>100+ Google reviews, 4.9★ rating</h2>
          </Reveal>
          <div className="test-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="test-card">
                  <div className="stars">★★★★★</div>
                  <p>"{t.text}"</p>
                  <div className="test-person">
                    <span className="avatar" style={{ background: t.color }}>
                      {t.name[0]}
                    </span>
                    <div>
                      <b style={{ display: "block", fontSize: 14 }}>{t.name}</b>
                      <span style={{ fontSize: 12.5, color: "#9AA0B4" }}>{t.area}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="container" style={{ marginBottom: 76 }}>
        <Reveal className="cta-band">
          <div>
            <h2>Apne project ke liye sahi paint chunna hai?</h2>
            <p>Hamari team se free consultation lein — shade, quantity aur budget sab kuch WhatsApp par set kar lein.</p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              💬 Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
              Store Visit Karein
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}