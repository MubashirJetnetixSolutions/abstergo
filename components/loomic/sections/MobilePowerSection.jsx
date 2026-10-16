"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function MobilePowerSection() {
  return (
    <section className="lm-mobile-power" id="mobile-power">
      <div className="lm-real-shot">
        <div className="lm-scene-atmosphere" aria-hidden="true" />
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / EVERYDAY MOBILITY</span>
          <h2>
            <span className="lm-word-mask">
              <span className="lm-word">Go</span>
            </span>{" "}
            <span className="lm-word-mask">
              <span className="lm-word">lighter.</span>
            </span>
            <br />
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
            <em>
              <span className="lm-word-mask">
                <span className="lm-word">Keep</span>
              </span>{" "}
              <span className="lm-word-mask">
                <span className="lm-word">moving.</span>
              </span>
            </em>
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
          </h2>
          <p>A slim power essential for the everyday carry.</p>
          <Link href="/contact?interest=loomic-power-bank" className="lm-link">
            Explore mobile power <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "slim-powerbank.webp"}
          alt="Loomic slim power bank"
          loading="lazy"
        />
      </div>
    </section>
  );
}
