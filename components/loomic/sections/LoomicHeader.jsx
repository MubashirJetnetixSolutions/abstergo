"use client";

import Link from "next/link";
import { ArrowDown, Menu, X } from "lucide-react";
import { base } from "../data";
export default function LoomicHeader({ menu, setMenu }) {
  return (
    <header className="lm-nav">
      <Link href="/" className="lm-partner">
        <img
          className="lm-abstergo-logo"
          src="/logo-white.png"
          alt="Abstergo Technology"
        />{" "}
        <span>×</span> <img src={base + "logo.svg"} alt="Loomic" />
      </Link>
      <nav className={menu ? "lm-menu-open" : ""}>
        {[
          ["/", "Home"],
          ["/about", "About"],
          ["/loomic", "Loomic"],
          ["/contact", "Contact"],
        ].map(([url, name]) => (
          <Link
            onClick={() => setMenu(false)}
            href={url}
            key={url}
            aria-current={url === "/loomic" ? "page" : undefined}
          >
            {name}
          </Link>
        ))}
      </nav>
      <button
        className="lm-menu"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle menu"
        aria-expanded={menu}
      >
        {menu ? <X /> : <Menu />}
      </button>
      <a href="#essentials" className="lm-nav-explore">
        Explore <ArrowDown size={15} />
      </a>
    </header>
  );
}
