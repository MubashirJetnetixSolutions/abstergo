"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import LoomicChair from "../../LoomicChair";
import { base, chapters } from "../data";
export default function EssentialChapters() {
  return (
    <div id="essentials">
      {chapters.map(([cat, title, copy, img], i) => (
        <section
          className={"lm-chapter lm-chapter-" + i}
          key={cat}
          id={cat.toLowerCase()}
        >
          <div className="lm-chapter-stage">
            <div className="lm-scene-grid" />
            <div className="lm-scene-halo" />
            {i === 0 && (
              <div className="lm-comfort-echo" aria-hidden="true">
                <span>FEEL</span>
                <span>THE DIFFERENCE.</span>
              </div>
            )}
            <div className="lm-scene-top">
              <span>LOOMIC / {cat}</span>
              <span>0{i + 1} — 04</span>
            </div>
            <div className="lm-chapter-copy lm-reveal">
              <span className="lm-kicker">
                {
                  [
                    "MAKE YOURSELF COMFORTABLE",
                    "ROOM FOR YOUR IDEAS",
                    "TUNE INTO YOUR WORLD",
                    "KEEP YOUR DAY MOVING",
                  ][i]
                }
              </span>
              <h2>
                {title.split("\n").map((t, j) => (
                  <span className="lm-line-mask" key={j}>
                    <span className="lm-heading-line">{t}</span>
                  </span>
                ))}
              </h2>
              <p>{copy}</p>
              <Link
                className="lm-link"
                href={"/contact?interest=loomic-" + cat.toLowerCase()}
              >
                Enquire about {cat.toLowerCase()} <ArrowUpRight size={18} />
              </Link>
            </div>
            <div
              className={"lm-product" + (i === 3 ? " lm-power-still-life" : "")}
            >
              {i === 0 && (
                <span className="lm-chair-ground" aria-hidden="true" />
              )}
              {i === 0 ? (
                <LoomicChair />
              ) : (
                <img
                  src={base + img + "-cutout.webp"}
                  alt={"Loomic " + cat.toLowerCase()}
                />
              )}
              {i === 3 && (
                <span className="lm-power-image-label">
                  THE CONNECTION <i>MACRO / 01</i>
                </span>
              )}
            </div>
            <div className="lm-scene-word" aria-hidden="true">
              {cat}
            </div>
            <div className="lm-chapter-bottom">
              <span>
                {i === 0
                  ? "COMFORT, IN MOTION"
                  : i === 1
                    ? "A SPACE THAT WORKS FOR YOU"
                    : i === 2
                      ? "YOUR SOUND. YOUR MOMENT."
                      : "BUILT TO CHARGE. REINFORCED TO LAST."}
              </span>
              <div className="lm-chapter-meter">
                <i />
              </div>
              <ArrowDown size={18} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
