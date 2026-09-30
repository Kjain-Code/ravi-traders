import { Link } from "react-router-dom";
import PageHead from "../components/PageHead.jsx";
import { whatsappGeneralLink } from "../whatsapp.js";

export default function NotFound() {
  return (
    <>
      <PageHead eyebrow="● 404" title="Yeh page nahi mila" crumb="Page not found" />
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: 24 }}>
            Jo page aap dhoondh rahe hain woh shayad hata diya gaya hai ya link galat hai.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-primary" to="/">Home par jaayein</Link>
            <Link className="btn" to="/products">Products dekhein</Link>
            <a className="btn btn-whatsapp" href={whatsappGeneralLink()} target="_blank" rel="noreferrer">
              💬 WhatsApp par Poochein
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
