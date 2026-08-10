import { useState } from "react";
import { Link } from "react-router-dom";
import PageHead from "../components/PageHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { whatsappAmountLink } from "../whatsapp.js";

const TABS = [
  { id: "qr", label: "🔳 Scan QR" },
  { id: "upi", label: "📱 UPI ID" },
  { id: "netbanking", label: "🏦 Netbanking" },
  // { id: "card", label: "💳 Card" },
];

export default function Payment() {
  const [tab, setTab] = useState("qr");
  const [amount, setAmount] = useState("");
  const amt = parseFloat(amount) || 0;

  return (
    <>
      <PageHead eyebrow="● Secure Checkout" title="Payment" crumb="Payment" />

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container pay-wrap">
          <Reveal className="pay-card">
            <label style={{ fontSize: 13, fontWeight: 700, color: "#7A8094" }}>Kitna pay karna hai?</label>
            <div className="pay-amount">
              <span style={{ marginRight: 6 }}>₹</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="method-tabs">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={`method-tab ${tab === t.id ? "active" : ""}`}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === "qr" && (
              <div className="method-pane active">
                <div className="qr-box">
                  <img src="/images/phonepe-qr.png" alt="Ravi Traders PhonePe / UPI QR code" />
                  <b>Ravi Traders ko scan karke pay karein</b>
                  <p style={{ fontSize: 12.5, textAlign: "center", margin: 0 }}>
                    Google Pay / PhonePe / Paytm / kisi bhi UPI app se scan
                    karke apna amount enter karein
                  </p>
                </div>
              </div>
            )}

            {tab === "upi" && (
              <div className="method-pane active">
                <p style={{ fontSize: 13.5 }}>
                  Neeche diye gaye kisi bhi UPI ID par apne UPI app se seedha
                  payment bhej sakte hain:
                </p>
                <div className="upi-row">
                  <label>UPI ID (PhonePe)</label>
                  <input value="ravi.traders3@ybl" readOnly onClick={(e) => e.target.select()} />
                </div>
                <div className="upi-row">
                  <label>UPI ID (ICICI)</label>
                  <input value="ravi.traders3@ibl" readOnly onClick={(e) => e.target.select()} />
                </div>
                <div className="upi-row">
                  <label>UPI ID (Axis Bank)</label>
                  <input value="ravi.traders3@axl" readOnly onClick={(e) => e.target.select()} />
                </div>
                <p style={{ fontSize: 12, color: "#7A8094" }}>
                  Tab tak QR scan karein ya UPI ID use karein — dono se
                  card-linked UPI apps (Google Pay, PhonePe etc.) se bhi pay
                  ho jayega.
                </p>
              </div>
            )}

            {tab === "netbanking" && (
  <div className="method-pane active">
    <p style={{ fontSize: 13.5 }}>
      Neeche di gayi bank details se netbanking / IMPS / NEFT ke
      through direct transfer kar sakte hain:
    </p>
    <div className="upi-row">
      <label>Account Holder Name</label>
      <input value="Ravi Traders" readOnly onClick={(e) => e.target.select()} />
    </div>
    <div className="upi-row">
      <label>Account Number</label>
      <input value="043605006931" readOnly onClick={(e) => e.target.select()} />
    </div>
    <div className="upi-row">
      <label>IFSC Code</label>
      <input value="ICIC0000436" readOnly onClick={(e) => e.target.select()} />
    </div>
    <div className="upi-row">
      <label>Bank & Branch</label>
      <input value="ICICI Bank, Muzaffarnagar Branch" readOnly onClick={(e) => e.target.select()} />
    </div>
    <p style={{ fontSize: 12, color: "#7A8094" }}>
      Transfer karne ke baad payment screenshot WhatsApp par bhej dein,
      hum turant confirm kar denge.
    </p>
    <a
      href={whatsappAmountLink(amt)}
      target="_blank"
      rel="noreferrer"
      className="btn btn-whatsapp btn-sm"
      style={{ marginTop: 8 }}
    >
      💬 Payment Screenshot Bhejein
    </a>
  </div>
)}

            
            
          </Reveal>

          <Reveal delay={0.1} className="pay-card">
            <h3>Payment Summary</h3>
            <div className="summary-row">
              <span>Amount to Pay</span>
              <span>₹{amt.toLocaleString("en-IN")}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{amt.toLocaleString("en-IN")}</span>
            </div>
            <p style={{ fontSize: 13.5, marginTop: 16 }}>
              Products dekhne hain? <Link to="/products" style={{ color: "var(--red)", fontWeight: 700 }}>Yahan dekhein →</Link>
            </p>
            <a
              href={whatsappAmountLink(amt)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-block"
              style={{ marginTop: 16 }}
            >
              💬 Payment WhatsApp par Confirm Karein
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
