/* ============================================================
   Talks to the Express + MongoDB backend.
   If the backend isn't running (e.g. shop owner hasn't set up
   MongoDB yet), every call quietly falls back to the local
   PRODUCTS data so the site never breaks.
   ============================================================ */
import { PRODUCTS } from "./data/products.js";

const BASE = import.meta.env.VITE_API_URL || "/api";

export async function getProducts() {
  try {
    const res = await fetch(`${BASE}/products`);
    if (!res.ok) throw new Error("bad response");
    const data = await res.json();
    if (Array.isArray(data) && data.length) return data;
    return PRODUCTS;
  } catch {
    return PRODUCTS;
  }
}

export async function sendContact(payload) {
  try {
    const res = await fetch(`${BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("bad response");
    return await res.json();
  } catch {
    return { success: false, offline: true };
  }
}
