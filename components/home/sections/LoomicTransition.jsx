"use client";

import { Plus } from "lucide-react";
export default function LoomicTransition() {
  return (
    <section
      id="loomic"
      className="loomic-transition"
      aria-labelledby="loomic-title"
    >
      <div className="loomic-light-pattern" aria-hidden="true" />
      <div className="loomic-glow loomic-glow-one" aria-hidden="true" />
      <div className="loomic-glow loomic-glow-two" aria-hidden="true" />
      <div className="loomic-section-top">
        <span>
          ABSTERGO <span className="loomic-cross">X</span> LOOMIC
        </span>
        <span>ESSENTIALS. ELEVATED.</span>
      </div>
      <div className="loomic-content">
        <span className="loomic-overline">
          A NEW EXPRESSION OF EVERYDAY TECHNOLOGY
        </span>
        <h2 id="loomic-title" className="loomic-word" aria-label="LOOMIC">
          {[..."LOOMIC"].map((letter, i) => (
            <span
              className="loomic-letter-mask"
              style={{
                "--loomic-index": i,
              }}
              key={i}
            >
              <span className="loomic-letter" aria-hidden="true">
                {letter}
              </span>
            </span>
          ))}
        </h2>
        <h3
          className="loomic-tagline"
          aria-label="The essential, perfectly executed"
        >
          <span className="loomic-tagline-line" aria-hidden="true">
            <span className="loomic-tagline-word">The</span>{" "}
            <span className="loomic-tagline-word">essential,</span>
          </span>
          <span
            className="loomic-tagline-line loomic-tagline-accent"
            aria-hidden="true"
          >
            <span className="loomic-tagline-word">perfectly</span>{" "}
            <span className="loomic-tagline-word">executed</span>
          </span>
        </h3>
        <p className="loomic-description">
          Premium technology essentials engineered around power, mobility,
          sound, comfort and productivity
        </p>
        <a className="loomic-cta" href="/loomic">
          <span>Discover Loomic</span>
          <Plus size={22} />
        </a>
      </div>
      <div className="loomic-section-bottom" aria-hidden="true">
        <span>POWER / MOBILITY / SOUND</span>
        <span>COMFORT / PRODUCTIVITY</span>
      </div>
    </section>
  );
}
