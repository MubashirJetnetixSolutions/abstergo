"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function VoltisPowerProSection() {
  return (
    <section className="lm-real-power" id="voltis">
      <div className="lm-real-shot">
        <div className="lm-scene-atmosphere" aria-hidden="true" />
        <div className="lm-power-orb" />
        <span className="lm-real-ghost" aria-hidden="true">
          VOLTIS
        </span>
        <img
          src={base + "voltis-power-pro-1.webp"}
          alt="Voltis Power Pro power bank — display and integrated cable"
        />
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / VOLTIS POWER PRO</span>
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
            Meet Voltis Power Pro. A considered form, an integrated cable and
            power that moves with your day.
          </p>
          <Link
            href="/contact?interest=loomic-voltis-power-pro"
            className="lm-link"
          >
            Discover Voltis Power Pro <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="lm-voltis-details">
        {[1, 2, 3, 5].map((n, i) => (
          <figure className="lm-reveal" key={n}>
            <img
              src={base + "voltis-power-pro-" + n + ".webp"}
              alt={
                [
                  "Voltis Power Pro front view",
                  "Voltis Power Pro slim side profile",
                  "Voltis Power Pro rear view",
                  "Voltis Power Pro charging a laptop",
                ][i]
              }
              loading="lazy"
            />
            <figcaption>
              <span>0{i + 1}</span>
              {
                [
                  "The silhouette",
                  "The profile",
                  "The finish",
                  "Power in motion",
                ][i]
              }
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
