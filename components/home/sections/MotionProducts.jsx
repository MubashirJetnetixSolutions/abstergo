"use client";

import { Plus, ChevronDown } from "lucide-react";
import { products } from "../../../lib/products";
export default function MotionProducts({ detail }) {
  return (
    <section className="motion-products" aria-label="Laptops in motion">
      <div className="motion-products-inner">
        <div className="motion-products-top">
          <span className="eyebrow">THE ICONS OF YOUR NEXT CHAPTER</span>
          <a href="/shop">
            View collection <Plus size={16} />
          </a>
        </div>
        <h2 className="motion-products-heading">
          CHOOSE <em>EXCEPTIONAL.</em>
        </h2>
        <div className="motion-products-window">
          <div className="motion-products-track">
            {products.map((p, i) => (
              <article
                className={"motion-product motion-product-" + i}
                key={p.id}
              >
                <div className="motion-product-top">
                  <span>
                    0{i + 1} / {p.type.toUpperCase()}
                  </span>
                  <span>{p.brand}</span>
                </div>
                <div className="motion-product-photo">
                  <span className="motion-model-word">
                    {p.type === "Creator"
                      ? "CREATE"
                      : p.type === "Gaming"
                        ? "PLAY"
                        : "WORK"}
                  </span>
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="motion-product-bottom">
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.spec}</p>
                  </div>
                  <button
                    aria-label={"Discover " + p.name}
                    onClick={() => detail(p)}
                  >
                    <Plus size={25} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="motion-products-bottom">
          <span>GAMING · CREATOR · BUSINESS</span>
          <span>
            SCROLL TO EXPLORE <ChevronDown size={15} />
          </span>
        </div>
      </div>
    </section>
  );
}
