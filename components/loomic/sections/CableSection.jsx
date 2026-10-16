"use client";

import { base } from "../data";
export default function CableSection() {
  return (
    <section className="lm-cable-edit" id="cable-edit">
      <div className="lm-reveal">
        <span className="lm-kicker">THE CONNECTION / BLACK & WHITE</span>
        <h2>
          Details you
          <br />
          <em>can feel.</em>
        </h2>
      </div>
      <div className="lm-cable-pair">
        {[
          ["cable-black-coil.webp", "Black"],
          ["cable-white-coil.webp", "White"],
        ].map(([img, name]) => (
          <article className="lm-reveal" key={name}>
            <img
              src={base + img}
              alt={"Loomic " + name.toLowerCase() + " cable"}
              loading="lazy"
            />
            <span>{name} / LOOMIC ESSENTIALS</span>
          </article>
        ))}
      </div>
      <div className="lm-cable-macro">
        {[
          ["cable-black-tips.webp", "Black connector detail"],
          ["cable-white-tips.webp", "White connector detail"],
        ].map(([img, alt]) => (
          <img key={img} src={base + img} alt={alt} loading="lazy" />
        ))}
      </div>
      <div className="lm-cable-life">
        {[
          ["cable-studio.jpg", "Loomic charging cable in use"],
          ["cable-workspace.jpg", "Cable connected to a laptop"],
          ["cable-connection.jpg", "Loomic cable connection detail"],
          ["cable-material.jpg", "Braided Loomic cable material"],
        ].map(([img, alt]) => (
          <figure className="lm-reveal" key={img}>
            <img src={base + img} alt={alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
