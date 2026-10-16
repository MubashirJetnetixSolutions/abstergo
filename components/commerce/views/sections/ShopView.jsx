"use client";

import { products } from "../../../../lib/products";
export default function ShopView({
  view,
  filter,
  setFilter,
  query,
  setQuery,
  card,
}) {
  return (
    <>
      {view === "shop" && (
        <>
          <div className="store-heading">
            <span className="eyebrow">THE COLLECTION</span>
            <h1>
              Find your next
              <br />
              <em>great laptop.</em>
            </h1>
            <p>
              Gaming, creative work and business. Explore the models and ask for
              the configuration that fits you.
            </p>
          </div>
          <div className="store-controls">
            <div>
              {["All", "Gaming", "Creator", "Business"].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "active" : ""}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brand or model"
              aria-label="Search laptops"
            />
          </div>
          <div className="store-grid">
            {products
              .filter(
                (p) =>
                  (filter === "All" || p.type === filter) &&
                  (p.name + " " + p.brand)
                    .toLowerCase()
                    .includes(query.toLowerCase()),
              )
              .map(card)}
          </div>
          {!products.some(
            (p) =>
              (filter === "All" || p.type === filter) &&
              (p.name + " " + p.brand)
                .toLowerCase()
                .includes(query.toLowerCase()),
          ) && (
            <p className="store-empty">
              No matching laptops. Try another search or category.
            </p>
          )}
        </>
      )}
    </>
  );
}
