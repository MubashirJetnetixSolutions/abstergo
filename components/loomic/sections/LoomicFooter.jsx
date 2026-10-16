"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { base } from "../data";
export default function LoomicFooter() {
  return (
    <footer className="lm-footer">
      <div className="lm-footer-top lm-reveal">
        <span className="lm-kicker">YOUR NEXT EVERYDAY STARTS HERE</span>
        <h2>Find your essential.</h2>
        <Link href="/contact">
          Let’s talk Loomic <ArrowUpRight />
        </Link>
      </div>
      <div className="lm-footer-links">
        <Link href="/" aria-label="Back to Abstergo">
          <img
            className="lm-footer-abstergo"
            src="/logo-white.png"
            alt="Abstergo Technology"
          />
        </Link>
        <p>Comfort / Productivity / Sound / Power</p>
        <a href="#" aria-label="Back to top">
          <ArrowUp />
        </a>
      </div>
      <img className="lm-footer-logo" src={base + "logo.svg"} alt="Loomic" />
      <div className="lm-legal">
        <span>© {new Date().getFullYear()} Abstergo Technology</span>
        <span>The essential, perfectly executed.</span>
      </div>
    </footer>
  );
}
