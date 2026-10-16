"use client";

export default function ChapterNavigation() {
  return (
    <nav className="lm-world-nav" aria-label="Loomic product chapters">
      {[
        ["precision-pro", "Precision Pro"],
        ["pulse-m", "Pulse M"],
        ["speaker-501", "501 Pro"],
        ["charging", "Charging"],
        ["voltis", "Voltis Pro"],
        ["comfort", "Comfort"],
      ].map(([id, label]) => (
        <a key={id} href={"#" + id} aria-label={label} title={label} />
      ))}
    </nav>
  );
}
