"use client";

import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function DeskEditorial() {
  return (
    <figure className="lm-desk-editorial lm-reveal">
      <div className="lm-desk-light" aria-hidden="true" />
      <div className="lm-desk-scan" aria-hidden="true" />
      <img
        src={base + "desk-rgb-studio.webp"}
        alt="Loomic gaming desk with RGB lighting in a dark studio"
        loading="lazy"
      />
      <figcaption>
        <span className="lm-kicker">LOOMIC / YOUR WORKSPACE, REIMAGINED</span>
        <h2>
          <span className="lm-motion-mask">
            <span className="lm-motion-line">Set the scene</span>
          </span>
          <span className="lm-motion-mask">
            <span className="lm-motion-line">for what’s next.</span>
          </span>
        </h2>
        <a href="#productivity" className="lm-link">
          Explore the desk <ArrowUpRight size={18} />
        </a>
      </figcaption>
    </figure>
  );
}
