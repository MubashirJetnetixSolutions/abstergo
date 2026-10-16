"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function Charger45Section() {
  return (
    <section className="lm-charger-45">
      <div className="lm-real-shot">
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / U45</span>
          <h2>
            Less to carry.
            <br />
            <em>More to your day.</em>
          </h2>
          <p>Explore the U45 charging range in black and white.</p>
          <Link href="/contact?interest=loomic-u45" className="lm-link">
            Discover U45 <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "charger-45-pair.webp"}
          alt="Loomic U45 black and white chargers"
          loading="lazy"
        />
      </div>
      <div className="lm-u45-gallery">
        {[
          ["charger-45-display.webp", "U45 charger display view"],
          ["charger-45-colors.webp", "Black and white U45 chargers"],
          ["charger-45-life.jpg", "Loomic U45 charger in use"],
        ].map(([img, alt]) => (
          <figure className="lm-reveal" key={img}>
            <img src={base + img} alt={alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
