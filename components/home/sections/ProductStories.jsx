"use client";

import { Plus } from "lucide-react";
import { showcaseStories } from "../data";
import { AnimatedText } from "../Typography";
export default function ProductStories({ detail }) {
  return (
    <section className="stack-section">
      <div className="stack-intro reveal">
        <span className="eyebrow">THE ABSTERGO EDIT</span>
        <AnimatedText text="Five perspectives. Endless possibilities." />
      </div>
      {showcaseStories.map((p, i) => (
        <article
          className={"showcase " + p.color}
          key={p.id + "-" + i}
          style={{
            top: 80 + i * 12,
          }}
        >
          <span className="giant-word">
            {p.type === "Creator"
              ? "CREATE"
              : p.type === "Business"
                ? "BEYOND"
                : "PLAY"}
          </span>
          <div className="showcase-copy">
            <span className="eyebrow">
              0{i + 1} / {p.tag.toUpperCase()}
            </span>
            <AnimatedText text={p.line} />
            <p>
              {p.type === "Gaming"
                ? "Total immersion. Serious performance. Your next level starts here."
                : p.type === "Creator"
                  ? "True colors. Free ideas. A creative studio that travels with you."
                  : "Desktop power. The freedom to go anywhere."}
            </p>
            <button
              className={"button " + (p.color === "light" ? "black" : "white")}
              onClick={() => detail(p)}
            >
              Discover {p.name}
              <Plus size={16} />
            </button>
            <div className="showcase-spec">
              <span>{p.brand}</span>
              <span>{p.name}</span>
            </div>
          </div>
          <img src={p.image} alt={p.name} />
          <span className="showcase-count">0{i + 1} — 05</span>
        </article>
      ))}
    </section>
  );
}
