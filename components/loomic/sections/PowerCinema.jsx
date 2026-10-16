"use client";

import { base } from "../data";
export default function PowerCinema() {
  return (
    <section className="lm-power-cinema" aria-label="Loomic charger in focus">
      <div className="lm-power-cinema-stage">
        <div className="lm-power-cinema-light" />
        <div className="lm-power-cinema-orbit" />
        <span className="lm-power-cinema-label">LOOMIC / POWER, IN FOCUS</span>
        <div className="lm-power-cinema-caption">
          <h2>
            Closer.
            <br />
            <em>To every detail.</em>
          </h2>
          <p>SCROLL TO TAKE A CLOSER LOOK</p>
        </div>
        <img
          className="lm-power-cinema-main"
          src={base + "charger-140-2.webp"}
          alt="Loomic display charger"
        />
        <img
          className="lm-power-cinema-detail"
          src={base + "charger-140-3.webp"}
          alt="Close-up of Loomic charger connections"
        />
        <span className="lm-power-cinema-note">
          THE FORM. THE FINISH. THE CONNECTION.
        </span>
      </div>
    </section>
  );
}
