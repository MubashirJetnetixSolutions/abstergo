"use client";

import { Search, ShoppingBag, Menu, X } from "lucide-react";
export default function HomeNavigation({ menu, setMenu, cart, open }) {
  return (
    <header className="nav">
      <a href="#" aria-label="Abstergo home">
        <img src="/logo.png" alt="Abstergo Technology" />
      </a>
      <nav className={menu ? "mobile-open" : ""}>
        {[
          ["/", "Home"],
          ["/about", "About"],
          ["/loomic", "Loomic"],
          ["/contact", "Contact"],
        ].map(([href, label]) => (
          <a href={href} key={href} onClick={() => setMenu(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button aria-label="Search" onClick={() => open("search")}>
          <Search size={19} />
        </button>
        <button
          className="bag"
          aria-label="Your selection"
          onClick={() => open("cart")}
        >
          <ShoppingBag size={19} />
          {cart.length > 0 && <i>{cart.length}</i>}
        </button>
        <button className="nav-cta" onClick={() => open("contact")}>
          Let’s talk
        </button>
        <button
          className="menu-button"
          aria-label="Menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
