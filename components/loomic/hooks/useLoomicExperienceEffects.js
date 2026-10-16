"use client";

import { useEffect } from "react";
import { clamp } from "../data";
export default function useLoomicExperienceEffects({ root }) {
  useEffect(() => {
    let frame;
    const smoothSections = new WeakMap();
    const el = root.current;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = 0;
    const tick = (now = performance.now()) => {
      const dt = last ? Math.min(50, now - last) : 16.67;
      last = now;
      const follow = 1 - Math.exp(-dt / 150);
      const h = innerHeight;
      let settling = false;
      el.querySelectorAll(".lm-chapter").forEach((s, i) => {
        const r = s.getBoundingClientRect();
        const goal = clamp(-r.top / (s.offsetHeight - h));
        const prev = smoothSections.get(s) ?? goal;
        const v = reduced ? goal : prev + (goal - prev) * follow;
        smoothSections.set(s, v);
        settling = settling || Math.abs(goal - v) > 0.0001;
        s.style.setProperty("--progress", v);
        const enter = reduced ? 1 : clamp((h - r.top) / (h * 0.65));
        s.querySelectorAll(".lm-heading-line").forEach((line, j) => {
          const a = clamp(enter * 1.5 - j * 0.25);
          line.style.opacity = a;
          line.style.transform = `translateY(${(1 - a) * 80}%)`;
        });
        s.querySelector(".lm-scene-word").style.transform =
          `translateX(${(v - 0.5) * -12}%)`;
        s.querySelector(".lm-scene-grid").style.transform =
          `translateY(${v * -50}px)`;
        const media = s.querySelector(".lm-product");
        media.style.transform =
          reduced || i === 0
            ? "none"
            : `translateY(${(0.5 - v) * 24}px) rotate(${i === 1 ? (v - 0.5) * -8 : i === 2 ? (v - 0.5) * 12 : 0}deg) scale(${i === 0 || i === 3 ? 1 : 0.94 + Math.sin(v * Math.PI) * 0.06})`;
        s.querySelector(".lm-chapter-meter i").style.transform = `scaleX(${v})`;
      });
      el.querySelectorAll(".lm-real-shot").forEach((shot) => {
        const r = shot.getBoundingClientRect();
        const t = clamp((h - r.top) / (h + r.height));
        shot.style.setProperty("--shot-progress", reduced ? 0.5 : t);
      });
      frame = settling ? requestAnimationFrame(tick) : null;
    };
    const update = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    addEventListener("scroll", update, {
      passive: true,
    });
    addEventListener("resize", update);
    tick();
    const observer = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("lm-visible");
        }),
      {
        threshold: 0.15,
      },
    );
    el.querySelectorAll(".lm-reveal").forEach((e) => observer.observe(e));
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);
}
