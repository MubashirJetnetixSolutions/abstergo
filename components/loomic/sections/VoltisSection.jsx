"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function VoltisSection() {
  return (
    <section className="lm-real-power" id="voltis">
      <div className="lm-real-shot">
        <div className="lm-scene-atmosphere" aria-hidden="true" />
        <div className="lm-power-orb" />
        <span className="lm-real-ghost" aria-hidden="true">
          VOLTIS
        </span>
        <img
          src={base + "voltis-pro-5.webp"}
          alt="Voltis Pro power bank — display and integrated cable"
        />
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / VOLTIS PRO</span>
          <h2>
            <span className="lm-word-mask">
              <span className="lm-word">Real</span>
            </span>{" "}
            <span className="lm-word-mask">
              <span className="lm-word">power.</span>
            </span>
            <br />
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
            <em>
              <span className="lm-word-mask">
                <span className="lm-word">Ready</span>
              </span>{" "}
              <span className="lm-word-mask">
                <span className="lm-word">to</span>
              </span>{" "}
              <span className="lm-word-mask">
                <span className="lm-word">move.</span>
              </span>
            </em>
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
          </h2>
          <p>
            A closer look at Voltis Pro. The form, the finish, the details—shown
            through the original product photography.
          </p>
          <Link href="/contact?interest=loomic-voltis-pro" className="lm-link">
            Discover Voltis Pro <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="lm-voltis-details">
        {[1, 6, 2, 4, 3].map((n, i) => (
          <figure className="lm-reveal" key={n}>
            <img
              src={base + "voltis-pro-" + n + ".webp"}
              alt={
                [
                  "Voltis Pro front view",
                  "Voltis Pro three-quarter view",
                  "Voltis Pro side profile",
                  "Voltis Pro ports",
                  "Voltis Pro rear view",
                ][i]
              }
              loading="lazy"
            />
            <figcaption>
              <span>0{i + 1}</span>
              {
                [
                  "The silhouette",
                  "Every angle",
                  "The profile",
                  "The connection",
                  "The finish",
                ][i]
              }
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
