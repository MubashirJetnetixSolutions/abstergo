"use client";

import { Plus } from "lucide-react";
import { products } from "../../../lib/products";
import { ColorText } from "../Typography";
export default function ProductCollection({ filter, setFilter, detail }) {
  return (
    <section id="collection" className="collection section-space">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">02 — THE COLLECTION</span>
          <ColorText text="Your next favorite. Your next laptop." />
        </div>
        <p>
          A selection made for you.
          <br />
          Trusted brands. No compromises.
        </p>
      </div>
      <div className="filters">
        {["All", "Gaming", "Creator", "Business"].map((f) => (
          <button
            className={filter === f ? "active" : ""}
            key={f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
        <span>
          {products.filter((p) => filter === "All" || p.type === filter).length}{" "}
          models
        </span>
      </div>
      <div className="product-grid">
        {products
          .filter((p) => filter === "All" || p.type === filter)
          .map((p) => (
            <article className="product-card" key={p.id}>
              <div className="product-picture" onClick={() => detail(p)}>
                <span>{p.type}</span>
                <img src={p.image} alt={p.name} />
                <button aria-label={"View " + p.name}>
                  <Plus size={22} />
                </button>
              </div>
              <small>{p.brand}</small>
              <h3>{p.name}</h3>
              <p>{p.spec}</p>
              <button className="text-button" onClick={() => detail(p)}>
                Discover the model <Plus size={15} />
              </button>
            </article>
          ))}
      </div>
    </section>
  );
}
