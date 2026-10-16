"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function VoltisPowerUltraSection() {
  return (
    <section
      className="lm-mobile-power lm-ultra-feature"
      id="mobile-power"
      aria-label="Voltis Power Ultra — best seller"
    >
      <div className="lm-real-shot">
        <div className="lm-scene-atmosphere" aria-hidden="true" />
        <span className="lm-real-ghost" aria-hidden="true">
          ULTRA
        </span>
        <div className="lm-real-copy lm-reveal">
          <span className="lm-ultra-bestseller">
            <i /> BEST SELLER
          </span>
          <span className="lm-kicker">LOOMIC / VOLTIS POWER ULTRA</span>
          <h2>
            Voltis Power
            <br />
            <em>Ultra.</em>
          </h2>
          <p>
            Our best-selling power essential. A refined profile, a clear display
            and power for wherever your day takes you.
          </p>
          <Link
            href="/contact?interest=loomic-voltis-power-ultra"
            className="lm-link"
          >
            Discover Voltis Power Ultra <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "slim-powerbank.webp"}
          alt="Loomic Voltis Power Ultra — best-selling power bank"
        />
      </div>
      <div className="lm-ultra-edit">
        <div className="lm-ultra-edit-heading lm-reveal">
          <span className="lm-kicker">THE BEST SELLER / A CLOSER LOOK</span>
          <h2>
            Considered.
            <br />
            <em>From every angle.</em>
          </h2>
          <span className="lm-ultra-index">01 — 04</span>
        </div>
        <div className="lm-ultra-gallery">
          {[
            "The display",
            "The finish",
            "The perspective",
            "The connections",
          ].map((label, i) => (
            <figure className="lm-reveal" key={label}>
              <div>
                <img
                  src={base + "voltis-power-ultra-" + (i + 1) + ".webp"}
                  alt={"Voltis Power Ultra — " + label.toLowerCase()}
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>0{i + 1}</span>
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="lm-ultra-use">
          <figure className="lm-reveal">
            <img
              src={base + "voltis-power-ultra-5.webp"}
              alt="Voltis Power Ultra with a laptop, tablets and phones"
              loading="lazy"
            />
            <figcaption>ONE ESSENTIAL. MORE POSSIBILITIES.</figcaption>
          </figure>
          <figure className="lm-reveal">
            <img
              src={base + "voltis-power-ultra-6.webp"}
              alt="Voltis Power Ultra display and proportions in hand"
              loading="lazy"
            />
            <figcaption>POWER THAT FITS YOUR DAY.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
