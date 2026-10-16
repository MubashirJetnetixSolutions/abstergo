"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Laptop,
  Smartphone,
  Headphones,
  Watch,
} from "lucide-react";
import { base } from "../data";
export default function Charger65Section() {
  return (
    <section className="lm-charger-65">
      <div className="lm-reveal">
        <span className="lm-kicker">LOOMIC / 65W CHARGING</span>
        <h2>
          A daily essential.
          <br />
          <em>Two expressions.</em>
        </h2>
      </div>
      <div className="lm-charger-colorways">
        {[
          ["charger-65-white.webp", "White"],
          ["charger-65-grey.webp", "Grey"],
        ].map(([img, color]) => (
          <article className="lm-reveal" key={color}>
            <img
              src={base + img}
              alt={"Loomic 65W charger in " + color.toLowerCase()}
              loading="lazy"
            />
            <span>65W / {color}</span>
            <Link href={"/contact?interest=loomic-65w-" + color.toLowerCase()}>
              Enquire <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
      <div className="lm-charger-details">
        <img
          src={base + "charger-65-side.webp"}
          alt="65W charger side profile"
          loading="lazy"
        />
        <img
          src={base + "charger-65-back.webp"}
          alt="65W charger plug detail"
          loading="lazy"
        />
      </div>
      <div className="lm-charger-lifestyle">
        <img
          src={base + "charger-65-life-cutout.webp"}
          alt="Loomic 65W charger held in hand"
          loading="lazy"
        />
        <div className="lm-device-world">
          <div className="lm-device-orbit" />
          <span className="lm-kicker">YOUR EVERYDAY / CONNECTED</span>
          <img
            src={base + "charger-65-white.webp"}
            alt="Loomic 65W charger"
            loading="lazy"
          />
          {[
            [Laptop, "Work"],
            [Smartphone, "On the move"],
            [Headphones, "Your sound"],
            [Watch, "Everyday"],
          ].map(([Icon, label], i) => (
            <span className={"lm-device-node lm-device-node-" + i} key={label}>
              <Icon size={24} />
              <small>{label}</small>
            </span>
          ))}
          <p>
            One place to explore
            <br />
            <strong>your charging essentials.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
