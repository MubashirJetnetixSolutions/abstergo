"use client";

import { Plus } from "lucide-react";
import { products } from "../../../lib/products";
export default function TypographyInterlude({ detail }) {
  return (
    <section className="type-overlap" aria-label="Power meets your vision">
      <div className="overlap-inner">
        <span className="eyebrow overlap-eyebrow">
          ONE MACHINE. ALL YOUR POSSIBILITIES.
        </span>
        <div className="overlap-words" aria-hidden="true">
          <div className="overlap-line-one">THE POWER.</div>
          <div className="overlap-line-two">YOUR VISION.</div>
          <div className="overlap-line-three">NO LIMITS.</div>
        </div>
        <div className="overlap-photo">
          <img
            src={products[1].image}
            alt="ASUS ProArt P16 at the heart of your creativity"
          />
        </div>
        <div className="overlap-caption">
          <h2>Power meets your vision.</h2>
          <p>
            From first ideas to projects coming to life.
            <br />
            Choose a machine that matches your ambition.
          </p>
          <button className="button black" onClick={() => detail(products[1])}>
            Discover ProArt <Plus size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
