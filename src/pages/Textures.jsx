import PageHead from "../components/PageHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { whatsappGeneralLink } from "../whatsapp.js";

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TextureCard({ t }) {
  return (
    <a
      href={t.href}
      target="_blank"
      rel="noreferrer"
      className="texture-card"
      style={{ "--tint": t.tint }}
    >
      <div className="texture-media">
        {t.image ? (
          <img src={encodeURI(t.image)} alt={t.title} loading="lazy" />
        ) : (
          <span className="texture-media-ico">{t.ico}</span>
        )}
        {t.tag && <span className="texture-tag">{t.tag}</span>}
      </div>
      <div className="texture-body">
        <h4>{t.title}</h4>
        <p>{t.text}</p>
        <span className="texture-link">
          Designs Dekhein <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

const HUBS = [
  {
    ico: "🖌️",
    tint: "var(--red)",
    tag: "Interior",
    title: "Interior Wall Textures",
    text: "Smooth, rustic, 3D, marble, metallic aur stucco finishes — Asian Paints ki poori interior texture range ek jagah.",
    href: "https://www.asianpaints.com/interior-textures.html",
  },
  {
    ico: "🏡",
    tint: "var(--teal)",
    tag: "Exterior",
    title: "Exterior Wall Textures",
    text: "Budget-friendly Apex Createx se le kar luxury Ultima Allura Torino & Venezio tak — bahar ki deewaron ke liye.",
    href: "https://www.asianpaints.com/exterior-textures.html",
  },
];

const ROOMS = [
  {
    ico: "🛋️",
    tint: "var(--gold)",
    title: "Living Room",
    text: "Statement wall banane ke liye sabse trending living room texture designs.",
    href: "https://www.asianpaints.com/interior-textures/living-room.html",
  },
  {
    ico: "🛏️",
    tint: "var(--violet)",
    title: "Bedroom",
    text: "Soothing aur cozy finishes jo bedroom ko relaxing feel dein.",
    href: "https://www.asianpaints.com/interior-textures/bedroom.html",
  },
  {
    ico: "🧸",
    tint: "var(--green)",
    title: "Kids Room",
    text: "Playful patterns aur colours jo bachon ke room ko khaas banayein.",
    href: "https://www.asianpaints.com/interior-textures/kidsroom.html",
  },
  {
    ico: "🪔",
    tint: "var(--rust)",
    title: "Prayer Room",
    text: "Shaant aur traditional finishes — prayer room ke liye khaas curated.",
    href: "https://www.asianpaints.com/interior-textures/prayer-room.html",
  },
];

const MORE = [
  {
    ico: "✨",
    tint: "var(--teal)",
    tag: "Collection",
    title: "Royale Play Range",
    text: "Poori Royale Play product line — Calcecruda, Dune, Stucco, Metallics aur bahut kuch.",
    image: "/images/textures/royale-play-range.png",
    href: "https://www.asianpaints.com/paint-products/interior-wall-paints/royale-play.html",
  },
  {
    ico: "🧱",
    tint: "var(--red)",
    tag: "Design Preview",
    title: "Calcecruda Roman Mandala",
    text: "Ek design kaisa dikhta hai, yahan se andaza lagayein — colours, sample order aur lagane ka tarika, sab ek hi jagah.",
    image: "/images/textures/calcecruda-roman-mandala.png",
    href: "https://www.asianpaints.com/interior-textures/calcecruda-roman-mandala-idc1009cmb1003.html",
  },
  {
    ico: "📌",
    tint: "var(--violet)",
    tag: "Inspiration",
    title: "Pinterest — Texture Ideas",
    text: "Real ghar walls ke inspiration boards — apni pasand save karein aur humein bhejein.",
    image: "/images/textures/pinterest-texture-ideas.png",
    href: "https://in.pinterest.com/ideas/asian-paints-wall-texture-design/930510192245/",
  },
];

export default function Textures() {
  return (
    <>
      <PageHead
        eyebrow="● New — Wall Texture Gallery"
        title="Wall Textures — Apni Pasand Khud Chunein"
        crumb="Textures"
      />

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center", marginBottom: 60 }}>
            <Reveal>
              <span className="eyebrow">1000+ Texture Designs</span>
              <h2>Deewar ko dena hai ek naya, stylish look?</h2>
              <p>
                Marble, stone, concrete, 3D aur metallic — Asian Paints ke paas
                har style ke liye ek texture design maujood hai. Neeche di gayi
                official Asian Paints aur Pinterest gallery se apni pasand ka
                design browse karein. Jo bhi design mann ko bhaye, uska naam ya
                screenshot seedha WhatsApp par bhej dein — hum sample dikhayenge,
                sahi rate batayenge aur ghar par laga bhi denge.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src="/images/textures/calcecruda-roman-mandala.png"
                alt="Asian Paints wall texture example — Calcecruda Roman Mandala finish"
                style={{
                  width: "100%", borderRadius: 24, boxShadow: "var(--shadow-lg)",
                  aspectRatio: "6/5", objectFit: "cover",
                }}
              />
            </Reveal>
          </div>

          <Reveal className="section-head" style={{ marginBottom: 28 }}>
            <span className="eyebrow">Shuru Karein Yahan Se</span>
            <h3>Interior ho ya exterior — poora range dekhein</h3>
          </Reveal>
          <div className="texture-grid" style={{ marginBottom: 48 }}>
            {HUBS.map((t) => (
              <Reveal key={t.title} delay={0.02}>
                <TextureCard t={t} />
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginBottom: 28 }}>
            <span className="eyebrow">Room ke Hisaab Se</span>
            <h3>Apne room ka perfect look chunein</h3>
          </Reveal>
          <div className="texture-grid" style={{ marginBottom: 48 }}>
            {ROOMS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <TextureCard t={t} />
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginBottom: 28 }}>
            <span className="eyebrow">Aur Bhi Dekhein</span>
            <h3>Collections aur design inspiration</h3>
          </Reveal>
          <div className="texture-grid">
            {MORE.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <TextureCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ marginBottom: 76 }}>
        <Reveal className="cta-band">
          <div>
            <h2>Koi design pasand aa gaya?</h2>
            <p>
              Naam ya screenshot WhatsApp par bhejein — hum availability,
              sample aur exact rate turant bata denge.
            </p>
          </div>
          <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            💬 WhatsApp par Bhejein
          </a>
        </Reveal>
      </section>
    </>
  );
}
