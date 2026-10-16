"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LoomicType from "../../LoomicType";
import { base } from "../data";
export default function PrecisionProSection() {
  return (
    <section className="lm-precision-section" id="precision-pro">
      <div className="lm-real-shot lm-precision-clean">
        <div className="lm-precision-heading">
          <span className="lm-kicker">01 / LOOMIC PRECISION PRO</span>
          <LoomicType text="PRECISION" />
          <div className="lm-precision-rule">
            <i />
          </div>
        </div>
        <div className="lm-real-copy">
          <span className="lm-kicker">LESS DISTRACTION. MORE POSSIBILITY.</span>
          <h2>
            A clearer desk.
            <br />
            <em>A sharper focus.</em>
          </h2>
          <p>
            Clear space. Find your flow. A considered keyboard and mouse pairing
            for everything you’re about to create.
          </p>
          <Link
            href="/contact?interest=loomic-precision-pro"
            className="lm-link"
          >
            Discover Precision Pro <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "precision-pro-3.webp"}
          alt="Loomic Precision Pro keyboard and mouse"
        />
        <span className="lm-precision-caption">
          DESIGNED AROUND YOUR FLOW / KEYBOARD + MOUSE
        </span>
      </div>
      <div className="lm-precision-details">
        <figure className="lm-reveal">
          <img
            src={base + "precision-pro-1.webp"}
            alt="Precision Pro keyboard and mouse top view"
            loading="lazy"
          />
          <figcaption>Everything in its place.</figcaption>
        </figure>
        <figure className="lm-reveal">
          <img
            src={base + "precision-pro-2.webp"}
            alt="Precision Pro keyboard profile"
            loading="lazy"
          />
          <figcaption>The details make the difference.</figcaption>
        </figure>
      </div>
      <div className="lm-precision-life">
        {[
          [
            "precision-studio.jpg",
            "Precision Pro keyboard and mouse studio image",
          ],
          ["precision-workspace.jpg", "Precision Pro desk setup"],
          [
            "precision-carry.jpg",
            "Precision Pro keyboard and mouse alongside a bag and laptop",
          ],
        ].map(([img, alt]) => (
          <figure className="lm-reveal" key={img}>
            <img src={base + img} alt={alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
