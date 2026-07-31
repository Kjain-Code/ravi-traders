import { useEffect, useState } from "react";
import PageHead from "../components/PageHead.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { getProducts } from "../api.js";
import { whatsappGeneralLink } from "../whatsapp.js";

export default function Waterproofing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((all) => setProducts(all.filter((p) => p.category === "waterproofing")));
  }, []);

  return (
    <>
      <PageHead eyebrow="● Asian Paints SmartCare Range" title="Waterproofing Services" crumb="Waterproofing" />

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <Reveal className="section-head">
            <p style={{ fontSize: 16, maxWidth: 700 }}>
              Seepage, dampness aur leakage se pareshan hain? Ravi Traders
              authorised Asian Paints dealer hone ke naate SmartCare range ka
              poora solution provide karta hai — walls, roofs aur foundation
              ke liye.
            </p>
          </Reveal>

          <div className="product-grid">
            {products.map((p, i) => (
              <ProductCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ marginBottom: 76 }}>
        <Reveal className="cta-band">
          <div>
            <h2>Seepage ya dampness ki problem hai?</h2>
            <p>
              Photo bhejein ya apni problem describe karein — hamari team
              sahi SmartCare product suggest karegi aur free site visit bhi
              arrange kar degi.
            </p>
          </div>
          <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            💬 WhatsApp par Batayein
          </a>
        </Reveal>
      </section>
    </>
  );
}
