"use client";

export default function ChapterNavigation() {
  return (
    <nav className="lm-world-nav" aria-label="Loomic product chapters">
      {[
        ["mobile-power", "Voltis Power Ultra"],
        ["voltis", "Voltis Power Pro"],
        ["precision-pro", "Precision Pro"],
        ["pulse-m", "Pulse M"],
        ["speaker-501", "501 Pro"],
        ["charging", "Charging"],
        ["comfort", "Comfort"],
      ].map(([id, label]) => (
        <a key={id} href={"#" + id} aria-label={label} title={label} />
      ))}
    </nav>
  );
}
