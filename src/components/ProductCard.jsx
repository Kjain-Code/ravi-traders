import { motion } from "framer-motion";
import { categoryLabel } from "../data/products.js";
import { whatsappEnquiryLink } from "../whatsapp.js";

function formatPrice(p) {
  if (p.price === 0) return <>{p.unit}</>;
  return (
    <>
      ₹{p.price.toLocaleString("en-IN")} <small>{p.unit}</small>
    </>
  );
}

export default function ProductCard({ p, index = 0 }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
    >
      <div
        className="product-media"
        style={{ background: `linear-gradient(160deg, ${p.color}22, ${p.color}05)` }}
      >
        {p.tag && <span className="product-tag">{p.tag}</span>}
        <img src={encodeURI(p.image)} alt={p.name} loading="lazy" />
      </div>
      <div className="product-body">
        <span className="cat">{categoryLabel(p.category)}</span>
        <h3>{p.name}</h3>
        <p className="desc">{p.desc}</p>
        <div className="swatches">
          {p.swatches.map((c, i) => (
            <span key={i} className="swatch-dot" style={{ background: c }} />
          ))}
        </div>
        <div className="price-row">
          <span className="price">{formatPrice(p)}</span>
        </div>
        <a
          href={whatsappEnquiryLink(p.name)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-whatsapp btn-sm btn-block"
          style={{ marginTop: 14 }}
        >
          💬 WhatsApp par Jankari Lein
        </a>
      </div>
    </motion.div>
  );
}
