"use client";

import Link from "next/link";
export default function Breadcrumb({ view, product }) {
  return (
    <div className="store-breadcrumb">
      <Link href="/">Home</Link>
      <span>/</span>
      {view === "product" ? (
        <>
          <Link href="/shop">Laptops</Link>
          <span>/</span>
          {product.name}
        </>
      ) : view === "checkout" ? (
        "Quote request"
      ) : (
        view
      )}
    </div>
  );
}
