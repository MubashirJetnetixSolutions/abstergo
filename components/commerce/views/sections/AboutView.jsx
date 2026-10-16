"use client";

import Link from "next/link";
import { products } from "../../../../lib/products";
import { Plus, ShieldCheck, Wrench, Cpu } from "lucide-react";
export default function AboutView({ view }) {
  return (
    <>
      {view === "about" && (
        <>
          <div className="store-heading">
            <span className="eyebrow">ABSTERGO TECHNOLOGY</span>
            <h1>
              Precise technology.
              <br />
              <em>Human expertise.</em>
            </h1>
            <p>
              A destination for gaming, creator and business laptops, with
              advice and repair support along the way.
            </p>
          </div>
          <div className="store-about-image">
            <img src={products[0].image} alt="ASUS ROG gaming laptop" />
            <div>
              <h2>
                The machine matters.
                <br />
                So does the advice.
              </h2>
              <p>
                Choose around your actual software, everyday needs and budget.
                Explore the collection, compare your favorites and ask about
                available configurations.
              </p>
              <Link className="button orange" href="/shop">
                Explore laptops <Plus size={18} />
              </Link>
            </div>
          </div>
          <div className="store-values">
            {[
              [
                ShieldCheck,
                "Choose with care",
                "Select a configuration around the work and games that matter to you.",
              ],
              [
                Cpu,
                "Understand your options",
                "Get clear guidance on performance, displays and everyday portability.",
              ],
              [
                Wrench,
                "Keep moving forward",
                "Ask about hardware assessment, repairs and upgrades for your current laptop.",
              ],
            ].map(([Icon, title, text]) => (
              <article key={title}>
                <Icon size={28} />
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </>
  );
}
