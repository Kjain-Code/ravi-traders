import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import Colours from "./pages/Colours.jsx";
import Payment from "./pages/Payment.jsx";
import Contact from "./pages/Contact.jsx";

function PageWrap({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
    <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrap><Home /></PageWrap>} />
          <Route path="/products" element={<PageWrap><Products /></PageWrap>} />
          <Route path="/services" element={<PageWrap><Services /></PageWrap>} />
          <Route path="/colours" element={<PageWrap><Colours /></PageWrap>} />
          <Route path="/payment" element={<PageWrap><Payment /></PageWrap>} />
          <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}