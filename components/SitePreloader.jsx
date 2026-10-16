"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function SitePreloader({
  assets = ["/logo.png", "/hero-geometric.png"],
  label = "Loading Abstergo website",
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");
  useEffect(() => {
    let cancelled = false,
      frame,
      timer,
      exitTimer;
    let finished = 0,
      current = 0;
    const started = performance.now();
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.classList.add("site-is-loading");
    const surfaces = [...document.querySelector("main").children].filter(
      (el) => !el.classList.contains("site-preloader"),
    );
    surfaces.forEach((el) => (el.inert = true));
    const sources = [...new Set(assets)];
    const total = sources.length + 1;
    const pending = sources.map((src) => {
      const img = new Image();
      img.src = src;
      return new Promise((resolve) => {
        if (img.complete) resolve();
        else {
          img.onload = resolve;
          img.onerror = resolve;
        }
      });
    });
    pending.push(document.fonts?.ready || Promise.resolve());
    pending.forEach((task) =>
      task.then(() => {
        if (!cancelled) finished++;
      }),
    );
    // Never block the page on an unavailable remote image.
    timer = setTimeout(() => {
      finished = total;
    }, 5000);
    const tick = (now) => {
      if (cancelled) return;
      const target = Math.round((finished / total) * 100);
      current = Math.min(
        target,
        current + Math.max(0.35, (target - current) * 0.08),
      );
      setProgress(Math.floor(current));
      if (
        finished >= total &&
        current >= 99 &&
        now - started > (reduced ? 0 : 850)
      ) {
        setProgress(100);
        setPhase("leaving");
        clearTimeout(timer);
        exitTimer = setTimeout(
          () => {
            if (cancelled) return;
            surfaces.forEach((el) => (el.inert = false));
            document.documentElement.style.overflow = previousOverflow;
            document.documentElement.classList.remove("site-is-loading");
            setPhase("done");
            ScrollTrigger.refresh();
          },
          reduced ? 0 : 650,
        );
      } else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      clearTimeout(exitTimer);
      surfaces.forEach((el) => (el.inert = false));
      document.documentElement.style.overflow = previousOverflow;
      document.documentElement.classList.remove("site-is-loading");
    };
  }, []);
  if (phase === "done") return null;
  return (
    <div
      className={
        "site-preloader " + (phase === "leaving" ? "preloader-leaving" : "")
      }
      role="status"
      aria-label={label}
    >
      <div className="preloader-top">
        <img src="/logo-white.png" alt="Abstergo Technology" />
        <span>YOUR NEXT CHAPTER</span>
      </div>
      <div className="preloader-center">
        <span className="preloader-label">OPENING POSSIBILITIES</span>
        <div className="preloader-number" aria-hidden="true">
          {String(progress).padStart(2, "0")}
          <span>%</span>
        </div>
        <div
          className="preloader-track"
          role="progressbar"
          aria-label="Website loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            style={{
              transform: `scaleX(${progress / 100})`,
            }}
          />
        </div>
        <div className="preloader-caption">
          <span>
            {progress === 100 ? "READY TO EXPLORE" : "LOADING YOUR EXPERIENCE"}
          </span>
          <span>ABSTERGO / TECHNOLOGY</span>
        </div>
      </div>
      <div className="preloader-bottom">
        <span>PLAY. CREATE. GO BEYOND.</span>
        <span>PLEASE WAIT</span>
      </div>
    </div>
  );
}
