"use client";

import Link from "next/link";
import { Plus, Minus, X, ShoppingBag } from "lucide-react";
export default function CartView({
  view,
  setCart,
  ready,
  filter,
  items,
  count,
}) {
  return (
    <>
      {view === "cart" && (
        <>
          <div className="store-heading">
            <span className="eyebrow">YOUR CART</span>
            <h1>
              Your next
              <br />
              <em>favorites.</em>
            </h1>
          </div>
          {!ready ? (
            <p>Loading your cart…</p>
          ) : items.length ? (
            <div className="store-cart-layout">
              <div>
                {items.map((p) => (
                  <article className="store-cart-row" key={p.id}>
                    <Link href={"/products/" + p.id}>
                      <img src={p.image} alt={p.name} />
                    </Link>
                    <div>
                      <small>{p.brand}</small>
                      <Link href={"/products/" + p.id}>
                        <h3>{p.name}</h3>
                      </Link>
                      <p>Price confirmed with quote</p>
                      <div className="store-quantity">
                        <button
                          aria-label={"Decrease " + p.name}
                          disabled={p.quantity <= 1}
                          onClick={() =>
                            setCart((c) =>
                              c.map((x) =>
                                x.id === p.id
                                  ? {
                                      ...x,
                                      quantity: x.quantity - 1,
                                    }
                                  : x,
                              ),
                            )
                          }
                        >
                          <Minus size={16} />
                        </button>
                        <span>{p.quantity}</span>
                        <button
                          aria-label={"Increase " + p.name}
                          disabled={p.quantity >= 99}
                          onClick={() =>
                            setCart((c) =>
                              c.map((x) =>
                                x.id === p.id
                                  ? {
                                      ...x,
                                      quantity: x.quantity + 1,
                                    }
                                  : x,
                              ),
                            )
                          }
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      aria-label={"Remove " + p.name}
                      onClick={() =>
                        setCart((c) => c.filter((x) => x.id !== p.id))
                      }
                    >
                      <X size={20} />
                    </button>
                  </article>
                ))}
              </div>
              <aside className="store-summary">
                <span className="eyebrow">YOUR SELECTION</span>
                <h2>
                  {count} {count === 1 ? "laptop" : "laptops"}
                </h2>
                <p>
                  Request current pricing and configurations for your selected
                  models. No payment is taken here.
                </p>
                <Link className="button orange" href="/checkout">
                  Prepare quote request <Plus size={18} />
                </Link>
                <Link className="store-inline-link" href="/shop">
                  Continue shopping
                </Link>
              </aside>
            </div>
          ) : (
            <div className="store-empty">
              <ShoppingBag size={40} />
              <h2>Your cart is empty.</h2>
              <p>Explore the collection and add your favorite models.</p>
              <Link href="/shop" className="button black">
                Explore laptops <Plus size={18} />
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}
