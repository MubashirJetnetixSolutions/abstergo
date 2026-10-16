"use client";

import { ArrowUpRight } from "lucide-react";
import { base, chapters } from "../data";
export default function CollectionSection() {
  return (
    <section className="lm-collection">
      <div className="lm-reveal">
        <span className="lm-kicker">THE LOOMIC EDIT</span>
        <h2>
          Every detail.
          <br />
          <em>Every day.</em>
        </h2>
        <p>
          Premium technology essentials engineered around power, mobility,
          sound, comfort and productivity.
        </p>
      </div>
      <div className="lm-tiles">
        {chapters.map(([cat, title, copy, img], i) => (
          <a
            href={"#" + cat.toLowerCase()}
            className="lm-tile lm-reveal"
            key={cat}
          >
            <div>
              <img
                src={
                  base +
                  (i === 0 ? "chair-front-cutout.webp" : img + "-cutout.webp")
                }
                alt={"Explore Loomic " + cat.toLowerCase()}
                loading="lazy"
              />
            </div>
            <span>
              <small>
                0{i + 1} / {cat}
              </small>
              <ArrowUpRight />
            </span>
            <h3>
              {
                [
                  "A better place to begin.",
                  "Make room for more.",
                  "Get lost in the moment.",
                  "Take energy with you.",
                ][i]
              }
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
