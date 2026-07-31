import { Link } from "react-router-dom";
import { whatsappGeneralLink } from "../whatsapp.js";

export default function Footer() {
  return (
    <footer className="site">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Ravi Traders</h4>
            <p>
              Ankit Vihar, 56, Gali No. 1, Kaji Kalesar, Pachenga Road, Lal
              Bagh, Gandhi Colony, Muzaffarnagar, Uttar Pradesh 251002
            </p>
            <p>📞 099977 77047</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Painting Service</Link>
            <Link to="/waterproofing">Waterproofing</Link>
            <Link to="/colours">Colours</Link>
            <Link to="/payment">Payment</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Categories</h4>
            <Link to="/products#paints">Wall Paints</Link>
            <Link to="/products#primers">Primers</Link>
            <Link to="/products#tints">Tints</Link>
            <Link to="/products#tools">Brushes &amp; Tools</Link>
            <Link to="/products#waterproofing">Waterproofing</Link>
            <Link to="/products#putty">Putty &amp; Wall Care</Link>
          </div>
          <div>
            <h4>Get in Touch</h4>
            <p>Mon–Sat: 9:00 AM – 8:30 PM</p>
            <a href={whatsappGeneralLink()} target="_blank" rel="noreferrer">
              💬 Message on WhatsApp
            </a>
            <a href="tel:+919997777047">📞 Call Now</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ravi Traders. All rights reserved.</span>
          <span>Made with 🎨 for Muzaffarnagar</span>
        </div>
      </div>
    </footer>
  );
}
