"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function DisplayChargerSection() {
  return (
    <section className="lm-charging-range" id="charging">
      <div className="lm-real-shot">
        <div className="lm-scene-atmosphere" aria-hidden="true" />
        <span className="lm-real-ghost" aria-hidden="true">
          140W
        </span>
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / 140W DISPLAY CHARGER</span>
          <h2>
            <span className="lm-word-mask">
              <span className="lm-word">Power</span>
            </span>{" "}
            <span className="lm-word-mask">
              <span className="lm-word">with</span>
            </span>
            <br />
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
            <em>
              <span className="lm-word-mask">
                <span className="lm-word">a</span>
              </span>{" "}
              <span className="lm-word-mask">
                <span className="lm-word">clear</span>
              </span>{" "}
              <span className="lm-word-mask">
                <span className="lm-word">view.</span>
              </span>
            </em>
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
          </h2>
          <p>
            A closer look at the display, connections and finish of the Loomic
            140W charger.
          </p>
          <Link
            href="/contact?interest=loomic-140w-charger"
            className="lm-link"
          >
            Explore the 140W charger <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "charger-140-2.webp"}
          alt="Loomic 140W charger with display and multiple ports"
        />
      </div>
      <div className="lm-charger-angles">
        {[1, 3, 4].map((n, i) => (
          <figure className="lm-reveal" key={n}>
            <img
              src={base + "charger-140-" + n + ".webp"}
              alt={
                [
                  "140W charger display view",
                  "140W charger port view",
                  "140W charger rear view",
                ][i]
              }
              loading="lazy"
            />
            <figcaption>
              {["The display", "The connections", "The finish"][i]}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="lm-charger-display">
        <div className="lm-reveal">
          <span className="lm-kicker">A DIFFERENT SIDE OF POWER</span>
          <h3 className="lm-color-heading">
            <span>Small details.</span>
            <br />
            <em>More character.</em>
          </h3>
          <p>
            A closer look at the display. A small detail with a little more
            personality.
          </p>
          <Link
            href="/contact?interest=loomic-140w-charger"
            className="lm-link"
          >
            Discover the details <ArrowUpRight size={18} />
          </Link>
        </div>
        <figure className="lm-hand-editorial">
          <div className="lm-hand-arch" aria-hidden="true" />
          <span className="lm-hand-overline">LOOMIC / THE DISPLAY EDIT</span>
          <div className="lm-hand-image">
            <img
              src={base + "charger-display-hand-cutout.webp"}
              alt="Loomic charger display shown in hand"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>
              Small detail.
              <br />
              <strong>Big personality.</strong>
            </span>
            <i>01 / CLOSE UP</i>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
