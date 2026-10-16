"use client";

import { Plus, Minus } from "lucide-react";
export default function FaqSection({ faq, setFaq }) {
  return (
    <section id="faq" className="faq section-space">
      <div className="faq-title-column">
        <span className="eyebrow">A FEW ANSWERS</span>
        <h2 className="faq-scroll-title">
          <span>Clarity.</span>
          <span>Confidence.</span>
          <em>Your next step.</em>
        </h2>
        <p className="faq-intro">
          The answers you need. Before you make your move.
        </p>
      </div>
      <div className="faq-list">
        {[
          [
            "How do I choose the right laptop?",
            "Tell us which software you use, how you work, and your budget. We’ll help you find a configuration that fits.",
          ],
          [
            "Can you repair my laptop?",
            "Yes. Describe the issue in our diagnostic form. Your hardware will be assessed before a repair is proposed.",
          ],
          [
            "How do I check pricing and availability?",
            "Add your favorite models to your selection and request a quote. Our team will confirm available configurations and pricing.",
          ],
        ].map(([q, a], i) => (
          <div className="faq-item" key={q}>
            <button
              onClick={() => setFaq(faq === i ? -1 : i)}
              aria-expanded={faq === i}
            >
              {q}
              {faq === i ? <Minus size={19} /> : <Plus size={19} />}
            </button>
            {faq === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
