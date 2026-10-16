"use client";

import { useEffect } from "react";
import { products } from "../../../lib/products";
import { key } from "../data";
export default function useCommerceEffects({
  cart,
  setCart,
  ready,
  setReady,
  filter,
}) {
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "[]");
      setCart(
        Array.isArray(saved)
          ? saved
              .filter((x) => products.some((p) => p.id === x.id))
              .map((x) => ({
                id: x.id,
                quantity: Math.max(1, Math.min(99, Number(x.quantity) || 1)),
              }))
          : [],
      );
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem(key, JSON.stringify(cart));
  }, [cart, ready]);
}
