import PageHead from "../components/PageHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { whatsappGeneralLink } from "../whatsapp.js";

const HIGHLIGHTS = [
  { ico: "🎨", title: "Colour Consultation", text: "2,000+ shades mein se sahi rang chunne mein poori guidance, sample bhi dikhayenge." },
  { ico: "🧰", title: "Quality Workmanship", text: "Trained team, sahi tools aur technique se smooth, long-lasting finish." },
  { ico: "🗓️", title: "Hassle-Free Process", text: "Site visit se lekar handover tak, har step par updates milte rahenge." },
  { ico: "🛡️", title: "Product Warranty", text: "Genuine Asian Paints products ke saath warranty ka assurance." },
  { ico: "💰", title: "No Hidden Cost", text: "Jo quote diya wahi final rate — koi chhupi hui cost nahi." },
  { ico: "⏱️", title: "On-Time Completion", text: "Dedicated supervisor ke saath committed timeline follow hota hai." },
];

const SOLUTIONS = [
  { ico: "💧", title: "Waterproofing Services", text: "SmartCare range solutions for leakage & seepage problems.", color: "#1A8FA3" },
  { ico: "🏠", title: "Interior Wall Paint", text: "Royale, Apcolite & Tractor emulsion finishes for every room.", color: "#E4572E" },
  { ico: "🌦️", title: "Exterior Wall Paint", text: "Weatherproof Apex exterior emulsions with long-lasting protection.", color: "#F2A93B" },
  { ico: "🪵", title: "Wood Solutions", text: "Wood primers, polish & enamel finishes for doors, windows & furniture.", color: "#7B4B94" },
];

const PROCESS = [
  { step: "01", title: "Sign Up & Site Visit", text: "Aap enquiry karein, hamari team visit ka time fix karegi." },
  { step: "02", title: "Site Evaluation", text: "Wall condition dekh kar sahi product aur estimate diya jayega." },
  { step: "03", title: "Shade Selection", text: "Estimate approve hone ke baad apni pasand ka shade final karein." },
  { step: "04", title: "Pre-Painting Prep", text: "Furniture cover karke surface ko putty/primer se taiyaar kiya jayega." },
  { step: "05", title: "Site Execution", text: "Trained painters sahi tools se kaam karenge, time par complete hoga." },
  { step: "06", title: "Cleanup & Handover", text: "Kaam khatam hone ke baad safai aur wall-care tips di jayengi." },
];

const PLANS = [
  {
    name: "Classic",
    color: "#7A8094",
    features: ["Site supervision", "Colour consultation", "Product warranty"],
  },
  {
    name: "Gold",
    color: "#1A8FA3",
    features: ["Site supervision", "Covering & masking", "Mechanised tools", "Colour consultation", "Product warranty"],
    highlight: true,
  },
  {
    name: "Platinum",
    color: "#7B4B94",
    features: ["Site supervision", "Covering & masking", "Mechanised tools", "Colour consultation", "Post-work cleaning", "1-year service + product warranty"],
  },
];

const FAQS = [
  { q: "Painting service ke liye kaise book karein?", a: "WhatsApp par message karein ya call karein — hum aapke area mein free site visit fix kar denge." },
  { q: "Painting kaun karega?", a: "Hamari trained, background-verified team painting karegi, poori supervision ke saath." },
  { q: "Kaam ke baad safai bhi hoti hai?", a: "Haan — painting complete hone ke baad hum debris aur extra material clean karke handover karte hain." },
  { q: "Konse tools use hote hain?", a: "Roller, brush aur zaroorat padne par mechanised tools, jisse finish smooth aur even aaye." },
];

export default function Services() {
  return (
    <>
      <PageHead
        eyebrow="● Expert Painting, On-Time Completion"
        title="Ghar ki Painting — Shuru se Aakhir tak Poori Zimmedari Hamari"
        crumb="Painting Service"
      />

      {/* ---------- Intro ---------- */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
            <Reveal>
              <span className="eyebrow">Painting services with tailored colour guidance</span>
              <h2>Trained painters, dedicated supervision</h2>
              <p>
                Ravi Traders, authorised Asian Paints dealer hone ke naate,
                aapke ghar ki painting ko ek professional service ki tarah
                handle karta hai — sirf paint bechne tak seemित nahi, balki
                site visit se lekar final handover tak poora saath.
              </p>
              <p>
                Chahe naya ghar ho, renovation ho, ya bas ghar ko fresh look
                dena ho — sahi shade, sahi product aur sahi technique se kaam
                long-lasting aur professional dikhta hai.
              </p>
              <ul style={{ display: "grid", gap: 14, marginTop: 20 }}>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, color: "#4B5163" }}>
                  <span>✅</span><span>Committed timelines ke saath dedicated site supervision.</span>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, color: "#4B5163" }}>
                  <span>✅</span><span>Har room ke liye free shade aur finish consultation.</span>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, color: "#4B5163" }}>
                  <span>✅</span><span>Trained, verified painting team — clean aur quality finish.</span>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, color: "#4B5163" }}>
                  <span>✅</span><span>Har step par genuine Asian Paints products ka use.</span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src="/images/asian-paints-banner.png"
                alt="Asian Paints painting service"
                style={{ borderRadius: 24, boxShadow: "var(--shadow-lg)" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- What We Cover ---------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Hamari Services</span>
            <h2>Har surface, har jarurat ke liye solution</h2>
          </Reveal>
          <div className="feat-grid">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="feat" style={{ borderTop: `4px solid ${s.color}` }}>
                  <span className="ico">{s.ico}</span>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Hum Alag Kyun Hain</span>
            <h2>Wajah jo humein bharosemand banati hai</h2>
          </Reveal>
          <div className="feat-grid">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.05}>
                <div className="feat">
                  <span className="ico">{h.ico}</span>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Kaam Kaise Hota Hai</span>
            <h2>6 simple steps mein poora painting project</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <div className="feat">
                  <span
                    style={{
                      display: "inline-block", fontFamily: "var(--font-display)",
                      fontSize: 13, fontWeight: 800, color: "var(--red)",
                      background: "rgba(228,87,46,0.10)", padding: "4px 12px",
                      borderRadius: 100, marginBottom: 14,
                    }}
                  >
                    STEP {p.step}
                  </span>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Plans ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Plans</span>
            <h2>Apni jarurat ke hisaab se plan chunein</h2>
            <p>Har plan ke saath colour consultation aur genuine product ka assurance milta hai.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <div
                  className="feat"
                  style={{
                    borderTop: `4px solid ${plan.color}`,
                    transform: plan.highlight ? "translateY(-10px)" : "none",
                    boxShadow: plan.highlight ? "var(--shadow-lg)" : undefined,
                  }}
                >
                  <h4 style={{ fontSize: 20 }}>{plan.name}</h4>
                  <ul style={{ display: "grid", gap: 10, margin: "16px 0 20px" }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 8, fontSize: 13.5, color: "#4B5163" }}>
                        <span style={{ color: plan.color }}>●</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappGeneralLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-block"
                  >
                    {plan.name} Plan Chunein
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal className="section-head center">
            <span className="eyebrow">FAQs</span>
            <h2>Aksar Poochhe Jaane Wale Sawaal</h2>
          </Reveal>
          <div style={{ display: "grid", gap: 16 }}>
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="feat" style={{ textAlign: "left" }}>
                  <h4 style={{ fontSize: 15.5 }}>{f.q}</h4>
                  <p style={{ margin: 0 }}>{f.a}</p>
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
            <h2>Apne ghar ki painting expert se karwayein</h2>
            <p>Seedha WhatsApp par baat karein — free site visit ka time fix karein.</p>
          </div>
          <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            💬 Chat on WhatsApp
          </a>
        </Reveal>
      </section>
    </>
  );
}