"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function PulseSection() {
  return (
    <section className="lm-pulse-section" id="pulse-m">
      <div className="lm-real-shot">
        <div className="lm-audio-halo" />
        <span className="lm-real-ghost" aria-hidden="true">
          PULSE M
        </span>
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / PULSE M</span>
          <h2>
            Small form.
            <br />
            <em>A world of sound.</em>
          </h2>
          <p>
            From the case to the earbuds, explore Pulse M through the original
            product views.
          </p>
          <Link href="/contact?interest=loomic-pulse-m" className="lm-link">
            Discover Pulse M <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "pulse-m-5.webp"}
          alt="Loomic Pulse M earbuds above the charging case"
        />
      </div>
      <div className="lm-audio-detail-grid">
        {[
          [1, "The case"],
          [3, "Ready to go"],
          [4, "The earbuds"],
          [6, "Every detail"],
        ].map(([n, label]) => (
          <figure className="lm-reveal" key={n}>
            <img
              src={base + "pulse-m-" + n + ".webp"}
              alt={"Pulse M — " + label.toLowerCase()}
              loading="lazy"
            />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="lm-pulse-editorial">
        <figure className="lm-reveal">
          <img
            src={base + "pulse-m-life-1.jpg"}
            alt="Pulse M earbuds in an orange studio campaign"
            loading="lazy"
          />
          <figcaption>
            <span>YOUR SOUND, YOUR SPACE</span>
            <h3>
              Take your
              <br />
              moment.
            </h3>
          </figcaption>
        </figure>
        <div>
          {[
            [7, "Pulse M case and earbuds campaign image"],
            [8, "Pulse M charging case campaign image"],
          ].map(([n, alt]) => (
            <img
              key={n}
              src={base + "pulse-m-life-" + n + ".jpg"}
              alt={alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <figure className="lm-pulse-travel lm-reveal">
        <img
          src={base + "pulse-m-life-10.jpg"}
          alt="Supplied Pulse M travel lifestyle photograph"
          loading="lazy"
        />
        <figcaption>
          <span>LOOMIC / EVERYDAY SOUND</span>
          <h3>
            A moment
            <br />
            of your own.
          </h3>
        </figcaption>
      </figure>
    </section>
  );
}
