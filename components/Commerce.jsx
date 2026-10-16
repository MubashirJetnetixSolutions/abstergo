"use client";

import StoreHeader from "./commerce/sections/StoreHeader";
import StoreContent from "./commerce/sections/StoreContent";
import StoreFooter from "./commerce/sections/StoreFooter";
import useCommerceEffects from "./commerce/hooks/useCommerceEffects";
import { useState } from "react";
import Link from "next/link";
import { products } from "../lib/products";
import { Plus } from "lucide-react";
export default function Commerce({ view, productId }) {
  const [cart, setCart] = useState([]),
    [ready, setReady] = useState(false),
    [menu, setMenu] = useState(false),
    [filter, setFilter] = useState("All"),
    [query, setQuery] = useState(""),
    [added, setAdded] = useState(false),
    [request, setRequest] = useState(null);
  useCommerceEffects({
    cart,
    setCart,
    ready,
    setReady,
    filter,
  });
  const add = (id) => {
    setCart((c) =>
      c.some((x) => x.id === id)
        ? c.map((x) =>
            x.id === id
              ? {
                  ...x,
                  quantity: Math.min(99, x.quantity + 1),
                }
              : x,
          )
        : [
            ...c,
            {
              id,
              quantity: 1,
            },
          ],
    );
    setAdded(true);
  };
  const items = cart.map((x) => ({
    ...products.find((p) => p.id === x.id),
    quantity: x.quantity,
  }));
  const count = cart.reduce((n, x) => n + x.quantity, 0);
  const product = products.find((p) => p.id === productId);
  function prepare(e) {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    setRequest({
      type: view,
      details: fields,
      selection: items.map((p) => ({
        model: p.name,
        quantity: p.quantity,
      })),
    });
  }
  const card = (p) => (
    <article className="store-card" key={p.id}>
      <Link href={"/products/" + p.id} className="store-photo">
        <span>{p.type}</span>
        <img src={p.image} alt={p.name} />
      </Link>
      <small>{p.brand}</small>
      <Link href={"/products/" + p.id}>
        <h3>{p.name}</h3>
      </Link>
      <p>{p.spec}</p>
      <div className="store-card-bottom">
        <span>Request pricing</span>
        <Link href={"/products/" + p.id} aria-label={"View " + p.name}>
          <Plus size={22} />
        </Link>
      </div>
    </article>
  );
  return (
    <div className="store-shell">
      <StoreHeader view={view} menu={menu} setMenu={setMenu} count={count} />
      <StoreContent
        view={view}
        setCart={setCart}
        ready={ready}
        filter={filter}
        setFilter={setFilter}
        query={query}
        setQuery={setQuery}
        added={added}
        request={request}
        setRequest={setRequest}
        add={add}
        items={items}
        count={count}
        product={product}
        prepare={prepare}
        card={card}
      />
      <StoreFooter />
    </div>
  );
}
