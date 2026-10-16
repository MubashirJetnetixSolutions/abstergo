"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { base } from "../data";
export default function SpeakerSection() {
  return (
    <section className="lm-speaker-section" id="speaker-501">
      <div className="lm-real-shot">
        <div className="lm-scene-atmosphere" aria-hidden="true" />
        <div className="lm-speaker-rings" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="lm-real-copy lm-reveal">
          <span className="lm-kicker">LOOMIC / 501 PRO</span>
          <h2>
            <span className="lm-word-mask">
              <span className="lm-word">Bring</span>
            </span>{" "}
            <span className="lm-word-mask">
              <span className="lm-word">the</span>
            </span>
            <br />
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
            <em>
              <span className="lm-word-mask">
                <span className="lm-word">room</span>
              </span>{" "}
              <span className="lm-word-mask">
                <span className="lm-word">together.</span>
              </span>
            </em>
            <span className="lm-word-mask">
              <span className="lm-word"></span>
            </span>
          </h2>
          <p>
            Explore the portable speaker, its illuminated details and the
            microphone shown in the supplied product set.
          </p>
          <Link href="/contact?interest=loomic-501-pro" className="lm-link">
            Discover 501 Pro <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "speaker-501-1.webp"}
          alt="Loomic 501 Pro portable speaker"
          loading="lazy"
        />
      </div>
      <div className="lm-speaker-details">
        {[
          [2, "Front view"],
          [3, "Illuminated side"],
          [4, "Rear detail"],
          [5, "Top controls"],
        ].map(([n, label]) => (
          <figure className="lm-reveal" key={n}>
            <img
              src={base + "speaker-501-" + n + ".webp"}
              alt={"501 Pro " + label.toLowerCase()}
              loading="lazy"
            />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="lm-speaker-kit">
        <div className="lm-reveal">
          <span className="lm-kicker">THE COMPLETE PICTURE</span>
          <h3>
            Make room
            <br />
            for your voice.
          </h3>
          <Link
            href="/contact?interest=loomic-speaker-microphone"
            className="lm-link"
          >
            Ask about the speaker set <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={base + "speaker-mic-kit-cutout.webp"}
          alt="Supplied Loomic speaker, microphone and remote product image"
          loading="lazy"
        />
      </div>
      <div className="lm-speaker-kit-views">
        <img
          src={base + "speaker-mic-front-cutout.webp"}
          alt="Speaker and microphone front product view"
          loading="lazy"
        />
        <img
          src={base + "speaker-mic-angle-cutout.webp"}
          alt="Speaker and microphone angled product view"
          loading="lazy"
        />
      </div>
    </section>
  );
}
