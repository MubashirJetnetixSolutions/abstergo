"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function ReclinerSection() {
  return (
    <section className="lm-recliner-section" id="recliner">
      <div className="lm-real-shot">
        <div className="lm-power-orb" />
        <span className="lm-real-ghost" aria-hidden="true">
          UNWIND
        </span>
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / RECLINING COMFORT</span>
          <h2>
            Make time
            <br />
            <em>to settle in.</em>
          </h2>
          <p>
            A different side of Loomic comfort. Discover the reclining chair,
            from its stitched upholstery to its extended footrest.
          </p>
          <Link href="/contact?interest=loomic-recliner" className="lm-link">
            Explore reclining comfort <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "recliner-front.webp"}
          alt="Loomic black reclining chair with cushion"
          loading="lazy"
        />
      </div>
      <div className="lm-recliner-wide lm-real-shot">
        <span className="lm-kicker">TAKE A MOMENT / LOOMIC COMFORT</span>
        <h3 className="lm-reveal">
          Lean back.
          <br />
          <em>Let the day slow down.</em>
        </h3>
        <img
          src={base + "recliner-reclined.webp"}
          alt="Loomic chair reclined with footrest extended"
          loading="lazy"
        />
      </div>
    </section>
  );
}
