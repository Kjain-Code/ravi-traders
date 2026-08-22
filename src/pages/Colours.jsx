import PageHead from "../components/PageHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { whatsappShadeLink, whatsappGeneralLink } from "../whatsapp.js";

const COLOUR_FAMILIES = [
  { name: "Yellow Family", shades: ["#FDE9A8", "#F7D060", "#F2B705", "#E8A33D", "#C97C2C", "#8A5A22"] },
  { name: "Red & Rust Family", shades: ["#F6C6C0", "#E88A7D", "#D9573B", "#B8402A", "#8A2F20", "#5C1F16"] },
  { name: "Blue Family", shades: ["#CDE3F0", "#8FC1DD", "#4D9BC4", "#2E6E96", "#1F4E6E", "#12324A"] },
  { name: "Green Family", shades: ["#DCEFD2", "#A9D68C", "#79B857", "#4F8C3A", "#356024", "#213D17"] },
  { name: "Pink & Purple Family", shades: ["#F2D6E8", "#E3A6CE", "#C46FA8", "#9A4C87", "#6E3566", "#472244"] },
  { name: "Neutral & Beige Family", shades: ["#F7F3EC", "#EDE3D2", "#DCC9A8", "#C4A876", "#9A7C4C", "#6B5236"] },
  { name: "Grey Family", shades: ["#F2F2F0", "#DCDCD8", "#C0C0BA", "#96968E", "#686860", "#3A3A36"] },
  { name: "White & Off-White Family", shades: ["#FFFFFF", "#FBF9F4", "#F5F0E4", "#ECE4D2", "#DFD3B8", "#CBBB94"] },
];

export default function Colours() {
  return (
    <>
      <PageHead eyebrow="● Colour Inspiration" title="Explore Wall Colour Families" crumb="Colours" />

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Computerised Tint Matching</span>
            <h2>Har family mein sainkdo shades available</h2>
            <p>
              Yeh sirf ek jhalak hai — store par aakar Asian Paints ka poora
              shade card dekhein, aur hamari computerised tinting machine se
              apni pasand ka exact shade match karwayein.
            </p>
          </Reveal>

          {COLOUR_FAMILIES.map((fam, fi) => (
            <Reveal key={fam.name} delay={fi * 0.04} className="colour-family">
              <h3>{fam.name}</h3>
              <div className="swatch-grid">
                {fam.shades.map((c) => (
                  <a
                    key={c}
                    className="swatch-tile"
                    style={{ background: c }}
                    href={whatsappShadeLink(fam.name, c)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{c.toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container" style={{ marginBottom: 76 }}>
        <Reveal className="cta-band">
          <div>
            <h2>Apni pasand ka shade dhoondh rahe hain?</h2>
            <p>Ghar ki photo ya reference image WhatsApp par bhejein — hum sabse milta-julta shade suggest kar denge.</p>
          </div>
          <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            💬 Shade Suggest Karwayein
          </a>
        </Reveal>
      </section>
    </>
  );
}
