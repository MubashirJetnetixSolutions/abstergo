"use client";

import { Gamepad2, PenTool, Briefcase, Monitor, Plus } from "lucide-react";
import { ColorText } from "../Typography";
export default function UniverseSection({ setFilter }) {
  return (
    <section id="univers" className="univers section-space">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">01 — FIND YOUR WORLD</span>
          <ColorText text="Not just a laptop. Your laptop." />
        </div>
        <p>
          Play. Create. Build.
          <br />A machine for every ambition.
        </p>
      </div>
      <div className="universe-options reveal">
        {[
          [Gamepad2, "Gaming", "Every frame matters."],
          [PenTool, "Creator", "Bring your ideas to life."],
          [Briefcase, "Business", "Move forward without compromise."],
          [Monitor, "All", "Discover the collection."],
        ].map(([Icon, name, text]) => (
          <a key={name} href="/shop" onClick={() => setFilter(name)}>
            <Icon size={30} strokeWidth={1.3} />
            <div>
              <h3>{name === "All" ? "All laptops" : name}</h3>
              <p>{text}</p>
            </div>
            <Plus size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
