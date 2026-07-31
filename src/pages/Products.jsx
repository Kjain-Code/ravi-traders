import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHead from "../components/PageHead.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { CATEGORIES } from "../data/products.js";
import { getProducts } from "../api.js";
import { whatsappGeneralLink } from "../whatsapp.js";

export default function Products() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) setFilter(hash);
  }, [location.hash]);

  const list = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <PageHead eyebrow="● Full Catalogue" title="Paints, Primers, Tints, Waterproofing & Tools" crumb="Products" />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="filter-row">
            <button className={`filter-chip ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`filter-chip ${filter === c.id ? "active" : ""}`}
                onClick={() => setFilter(c.id)}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {list.map((p, i) => (
              <ProductCard key={p.id} p={p} index={i} />
            ))}
          </div>

          {list.length === 0 && (
            <p style={{ textAlign: "center", padding: "40px 0" }}>
              Is category mein abhi products load ho rahe hain…
            </p>
          )}
        </div>
      </section>

      <section className="container" style={{ marginBottom: 76 }}>
        <Reveal className="cta-band">
          <div>
            <h2>Product list mein nahi mila jo chahiye?</h2>
            <p>Humare paas Asian Paints ka poora range hai — WhatsApp par photo ya naam bhejein, hum turant bata denge.</p>
          </div>
          <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            💬 WhatsApp par Poochein
          </a>
        </Reveal>
      </section>
    </>
  );
}