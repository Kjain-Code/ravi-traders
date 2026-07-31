export const STORE_WHATSAPP_NUMBER = "919997777047"; // country code 91 + number

export function whatsappGeneralLink() {
  const text = encodeURIComponent(
    "Namaste Ravi Traders! Mujhe kuch products ke baare mein poochna hai."
  );
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`;
}

export function whatsappEnquiryLink(productName) {
  const text = encodeURIComponent(
    `Namaste Ravi Traders! Mujhe "${productName}" ke baare mein jaankari chahiye — price, availability aur delivery batayein.`
  );
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`;
}

export function whatsappAmountLink(amount) {
  const text =
    amount > 0
      ? `Namaste Ravi Traders! Maine ₹${amount} ka payment kiya hai / karna hai. Kripya confirm karein.`
      : "Namaste Ravi Traders! Mujhe payment / order ke baare mein baat karni hai.";
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function whatsappShadeLink(family, shade) {
  const text = encodeURIComponent(
    `Namaste Ravi Traders! Mujhe ${family} se milta-julta ek shade (${shade}) chahiye — kripya exact match bataye.`
  );
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`;
}

export function whatsappContactLink({ name, phone, email, message }) {
  const text = encodeURIComponent(
    `Namaste Ravi Traders!\nNaam: ${name}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}\nMessage: ${message}`
  );
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`;
}
