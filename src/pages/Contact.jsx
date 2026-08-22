import { useState } from "react";
import PageHead from "../components/PageHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { sendContact } from "../api.js";
import { whatsappContactLink, whatsappGeneralLink } from "../whatsapp.js";

const INFO = [
  { ico: "📍", title: "Store Address", text: "Ankit Vihar, 56, Gali No. 1, Kaji Kalesar, Pachenga Road, Lal Bagh, Gandhi Colony, Muzaffarnagar, Uttar Pradesh 251002" },
  { ico: "📞", title: "Phone / WhatsApp", text: "099977 77047" },
  { ico: "🕒", title: "Store Hours", text: "Monday – Saturday: 9:00 AM – 8:30 PM\nSunday: 10:00 AM – 2:00 PM" },
  { ico: "⭐", title: "Google Rating", text: "4.9★ from 100+ reviews — Paint store in Uttar Pradesh" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    await sendContact(form); // saved to MongoDB if backend is running
    window.open(whatsappContactLink(form), "_blank");
    setSending(false);
  }

  return (
    <>
      <PageHead eyebrow="● Get in Touch" title="Contact & About Ravi Traders" crumb="Contact" />

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container contact-wrap">
          <Reveal>
            <h2>Hamare Baare Mein</h2>
            <p>
              Ravi Traders Muzaffarnagar mein sthapit ek bharosemand Asian
              Paints authorised dealer hai. 25+ saalon se hum interior aur
              exterior painting ke liye genuine paints, primers,
              computerised tints aur professional tools provide kar rahe
              hain — chahe aap ghar ke liye chhota order karein ya
              contractor ke roop mein bulk mein.
            </p>
            <p>
              Hamari team har customer ko sahi product aur exact colour
              shade chunne mein madad karti hai, taaki result hamesha
              expectation ke mutabik aaye.
            </p>

            {INFO.map((info) => (
              <div key={info.title} className="info-row">
                <span className="ico">{info.ico}</span>
                <div>
                  <h4>{info.title}</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{info.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="form-card">
            <h3>Message Bhejein</h3>
            <p>Form bharein — hum aapko WhatsApp par turant reply karenge.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Naam</label>
                <input required value={form.name} onChange={update("name")} placeholder="Aapka naam" />
              </div>
              <div className="form-row">
                <label>Phone Number</label>
                <input required value={form.phone} onChange={update("phone")} placeholder="10-digit mobile number" />
              </div>
              <div className="form-row">
                <label>Email (optional)</label>
                <input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </div>
              <div className="form-row">
                <label>Message</label>
                <textarea required value={form.message} onChange={update("message")} placeholder="Aapko kya chahiye?" />
              </div>
              <button className="btn btn-whatsapp btn-block" type="submit" disabled={sending}>
                {sending ? "Bhej rahe hain…" : "💬 WhatsApp par Bhejein"}
              </button>
            </form>

            <p style={{ marginTop: 22, fontSize: 13.5 }}>Ya seedha connect karein</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="tel:+919997777047" className="btn btn-outline btn-sm">📞 Call Now</a>
              <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm">
                💬 WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
