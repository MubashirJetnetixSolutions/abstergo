"use client";

import { Wrench, ShieldCheck, Cpu } from "lucide-react";
import { ColorText } from "../Typography";
export default function ExpertiseSection() {
  return (
    <section id="expertise" className="expertise section-space">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">04 — THE ABSTERGO EXPERTISE</span>
          <ColorText text="Precise technology. Human expertise." />
        </div>
      </div>
      <div className="expertise-grid">
        {[
          [
            Cpu,
            "Selected with care",
            "Configurations that fit how you work, play, and create — beyond the spec sheet.",
          ],
          [
            ShieldCheck,
            "Expert advice, clearly",
            "Clear answers to help you choose, maintain, and upgrade your hardware.",
          ],
          [
            Wrench,
            "Support beyond the sale",
            "From your first question to your next repair, your laptop is in good hands.",
          ],
        ].map(([Icon, title, text], i) => (
          <div key={title}>
            <span>0{i + 1}</span>
            <Icon size={32} strokeWidth={1.2} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
