"use client";

import { Plus } from "lucide-react";
import { LetterReveal } from "../Typography";
export default function ServiceTypography() {
  return (
    <section className="service-type-band">
      <div className="service-type-top">
        <span className="eyebrow">THE TECHNOLOGY BEHIND YOUR NEXT MOVE.</span>
        <span>GAMING / CREATOR / BUSINESS</span>
      </div>
      <LetterReveal text="ABSTERGO" />
      <div className="service-type-bottom">
        <span>One name. A world of possibilities.</span>
        <Plus size={24} />
      </div>
    </section>
  );
}
