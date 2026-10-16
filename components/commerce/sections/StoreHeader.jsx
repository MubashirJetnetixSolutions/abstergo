"use client";

import Link from "next/link";
import { X, ShoppingBag, Menu } from "lucide-react";
export default function StoreHeader({ view, menu, setMenu, count }) {
  return (
    <header className="store-nav">
      <Link href="/">
        <img src="/logo.png" alt="Abstergo Technology" />
      </Link>
      <nav className={menu ? "store-menu-open" : ""}>
        {[
          ["/", "Home"],
          ["/about", "About"],
          ["/loomic", "Loomic"],
          ["/contact", "Contact"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={"/" + view === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        className="store-bag"
        href="/cart"
        aria-label={"Cart, " + count + " items"}
      >
        <ShoppingBag size={20} />
        <span>{count}</span>
      </Link>
      <button
        className="store-menu-button"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle navigation"
        aria-expanded={menu}
      >
        {menu ? <X /> : <Menu />}
      </button>
    </header>
  );
}
