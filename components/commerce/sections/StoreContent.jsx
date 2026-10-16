"use client";

import Breadcrumb from "./../views/sections/Breadcrumb";
import ShopView from "./../views/sections/ShopView";
import ProductView from "./../views/sections/ProductView";
import CartView from "./../views/sections/CartView";
import RequestView from "./../views/sections/RequestView";
import AboutView from "./../views/sections/AboutView";
export default function StoreContent({
  view,
  setCart,
  ready,
  filter,
  setFilter,
  query,
  setQuery,
  added,
  request,
  setRequest,
  add,
  items,
  count,
  product,
  prepare,
  card,
}) {
  return (
    <main className="store-main">
      <Breadcrumb view={view} product={product} />
      <ShopView
        view={view}
        filter={filter}
        setFilter={setFilter}
        query={query}
        setQuery={setQuery}
        card={card}
      />
      <ProductView
        view={view}
        ready={ready}
        filter={filter}
        added={added}
        add={add}
        count={count}
        product={product}
        card={card}
      />
      <CartView
        view={view}
        setCart={setCart}
        ready={ready}
        filter={filter}
        items={items}
        count={count}
      />
      <RequestView
        view={view}
        request={request}
        setRequest={setRequest}
        items={items}
        prepare={prepare}
      />
      <AboutView view={view} />
    </main>
  );
}
