"use client";

import Link from "next/link";
import { products } from "../../../../lib/products";
import { Plus, ShieldCheck, Wrench, Check } from "lucide-react";
export default function ProductView({
  view,
  ready,
  filter,
  added,
  add,
  count,
  product,
  card,
}) {
  return (
    <>
      {view === "product" && (
        <>
          <div className="store-product">
            <div className="store-product-image">
              <span>
                {product.type} / {product.brand}
              </span>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="store-product-copy">
              <span className="eyebrow">
                {product.brand} / {product.tag}
              </span>
              <h1>{product.name}</h1>
              <h2>{product.line}</h2>
              <p>{product.spec}</p>
              <div className="store-price">
                <strong>Pricing on request</strong>
                <p>
                  Configuration, current availability and price are confirmed by
                  our team before purchase.
                </p>
              </div>
              <button
                className="button orange"
                onClick={() => add(product.id)}
                disabled={!ready}
              >
                {added ? <Check size={18} /> : <Plus size={18} />}{" "}
                {added ? "Added — add another" : "Add to cart"}
              </button>
              {added && (
                <Link className="store-inline-link" href="/cart">
                  View your cart ({count})
                </Link>
              )}
              <div className="store-product-notes">
                <span>
                  <ShieldCheck size={20} /> Expert configuration advice
                </span>
                <span>
                  <Wrench size={20} /> Repair & upgrade support
                </span>
              </div>
            </div>
          </div>
          <section className="store-related">
            <h2>More possibilities.</h2>
            <div className="store-grid">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map(card)}
            </div>
          </section>
        </>
      )}
    </>
  );
}
