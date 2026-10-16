"use client";

import { ShoppingBag, Wrench, Plus, ShieldCheck, ArrowUp } from "lucide-react";
import { products } from "../../../lib/products";
import { LetterReveal, AnimatedText } from "../Typography";
export default function HomeFooter({ setFilter, open }) {
  return (
    <div className="closing-scene">
      <section className="contact-banner">
        <span className="eyebrow">YOUR NEXT BIG PROJECT STARTS HERE.</span>
        <AnimatedText
          text="Let’s find your next great laptop."
          className="cta-title"
        />
        <div className="cta-outline" aria-hidden="true">
          YOUR NEXT MOVE.
        </div>
        <button className="button white" onClick={() => open("contact")}>
          LET’S TALK <Plus size={16} />
        </button>
        <div className="cta-product-scene" aria-hidden="true">
          <div className="cta-product-ring" />
          <span className="cta-product-word">NEXT.</span>
          <img className="cta-laptop-main" src={products[0].image} alt="" />
          <img
            className="cta-laptop-secondary"
            src={products[1].image}
            alt=""
          />
          <div className="cta-product-tag">
            <span>YOUR NEXT CHAPTER</span>
            <strong>Starts with the right laptop.</strong>
            <Plus size={18} />
          </div>
        </div>
        <div className="banner-orb" />
      </section>
      <footer className="professional-footer reference-footer">
        <div className="footer-panel">
          <div className="reference-footer-top">
            <div className="reference-brand">
              <img src="/logo-white.png" alt="Abstergo Technology" />
              <p>
                The right technology. In the right hands.
                <br />
                Laptops for your ambition. Expertise for every next step.
              </p>
              <button onClick={() => open("contact")}>
                LET’S BUILD YOUR NEXT CHAPTER <Plus size={16} />
              </button>
            </div>
            <div className="footer-links">
              <span>QUICK LINKS</span>
              <a href="/shop">Find your world</a>
              <a href="/shop">Our laptops</a>
              <a href="/about">Our expertise</a>
              <a href="/repair">Repair & upgrades</a>
            </div>
            <div className="footer-links">
              <span>LAPTOP WORLDS</span>
              {["Gaming", "Creator", "Business"].map((type) => (
                <a key={type} href="/shop" onClick={() => setFilter(type)}>
                  {type} laptops
                </a>
              ))}
              <a href="/shop" onClick={() => setFilter("All")}>
                Full collection
              </a>
            </div>
            <div className="footer-links">
              <span>SUPPORT</span>
              <button onClick={() => open("repair")}>Repair your laptop</button>
              <button onClick={() => open("contact")}>Buying advice</button>
              <button onClick={() => open("contact")}>
                Configuration help
              </button>
              <a href="#faq">Your questions</a>
            </div>
            <div className="footer-links">
              <span>LET’S CONNECT</span>
              <button onClick={() => open("contact")}>Talk to an expert</button>
              <button onClick={() => open("cart")}>Your selection</button>
              <button onClick={() => open("search")}>Find a laptop</button>
              <a href="/shop">Explore what’s next</a>
            </div>
          </div>
          <div className="footer-guidance">
            <div>
              <ShieldCheck size={24} />
              <h3>Choose with confidence.</h3>
              <p>
                Tell us your budget and everyday software. Find the
                configuration that suits your work.
              </p>
              <button onClick={() => open("contact")}>
                Get buying advice <Plus size={16} />
              </button>
            </div>
            <div>
              <Wrench size={24} />
              <h3>Keep your laptop going.</h3>
              <p>
                From hardware issues to upgrade questions, start with a clear
                assessment of your machine.
              </p>
              <button onClick={() => open("repair")}>
                Request a diagnostic <Plus size={16} />
              </button>
            </div>
            <div>
              <ShoppingBag size={24} />
              <h3>Your shortlist. Your next step.</h3>
              <p>
                Save your favorite models and ask our team about configurations,
                pricing and availability.
              </p>
              <button onClick={() => open("cart")}>
                View your selection <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="reference-footer-meta">
            <span>
              © {new Date().getFullYear()} Abstergo Technology. All rights
              reserved.
            </span>
            <span>LAPTOPS / EXPERTISE / REPAIR</span>
            <a href="#" className="backtop" aria-label="Back to top">
              <ArrowUp size={24} />
            </a>
          </div>
          <LetterReveal text="ABSTERGO" className="footer-bigword" />
        </div>
      </footer>
    </div>
  );
}
