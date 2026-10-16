"use client";

import Link from "next/link";
export default function StoreFooter() {
  return (
    <footer className="store-footer">
      <div>
        <Link href="/">
          <img src="/logo-white.png" alt="Abstergo Technology" />
        </Link>
        <p>
          The right technology.
          <br />
          In the right hands.
        </p>
      </div>
      <nav>
        <Link href="/shop">Shop laptops</Link>
        <Link href="/repair">Repair & upgrades</Link>
        <Link href="/about">Our expertise</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">Your cart</Link>
      </nav>
      <span>© {new Date().getFullYear()} Abstergo Technology</span>
    </footer>
  );
}
