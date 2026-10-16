"use client";

import { X, Plus } from "lucide-react";
import { products } from "../../../lib/products";
export default function HomePanels({
  filter,
  panel,
  setPanel,
  selected,
  setSelected,
  cart,
  setCart,
  query,
  setQuery,
  submitted,
  setSubmitted,
  open,
  detail,
}) {
  return (
    <>
      {(panel || selected) && (
        <div
          className="modal-backdrop"
          onClick={() => {
            setPanel(null);
            setSelected(null);
          }}
        >
          <section
            className={"modal " + (selected ? "detail-modal" : "")}
            role="dialog"
            aria-modal="true"
            aria-label={selected?.name || "Abstergo"}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => {
                setPanel(null);
                setSelected(null);
              }}
              aria-label="Close"
            >
              <X />
            </button>
            {selected ? (
              <>
                <div className="detail-image">
                  <img src={selected.image} alt={selected.name} />
                </div>
                <span className="eyebrow">
                  {selected.brand} / {selected.type}
                </span>
                <h2>{selected.name}</h2>
                <p>{selected.spec}</p>
                <p>
                  Explore this model with our team. Configuration, pricing, and
                  availability are confirmed with your quote.
                </p>
                <button
                  className="button orange"
                  onClick={() => {
                    setCart((c) =>
                      c.some((x) => x.id === selected.id)
                        ? c
                        : [...c, selected],
                    );
                    setSelected(null);
                    open("cart");
                  }}
                >
                  Add to my selection <Plus size={16} />
                </button>
              </>
            ) : panel === "search" ? (
              <>
                <span className="eyebrow">FIND YOUR LAPTOP</span>
                <h2>What are you looking for?</h2>
                <input
                  autoFocus
                  placeholder="Brand, model, or use…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="search-results">
                  {products
                    .filter((p) =>
                      (p.name + " " + p.brand + " " + p.type)
                        .toLowerCase()
                        .includes(query.toLowerCase()),
                    )
                    .map((p) => (
                      <button onClick={() => detail(p)} key={p.id}>
                        <img src={p.image} alt="" />
                        <div>
                          <strong>{p.name}</strong>
                          <span>{p.type}</span>
                        </div>
                        <Plus size={18} />
                      </button>
                    ))}
                  {!products.some((p) =>
                    (p.name + " " + p.brand + " " + p.type)
                      .toLowerCase()
                      .includes(query.toLowerCase()),
                  ) && <p>No models found. Try another brand or contact us.</p>}
                </div>
              </>
            ) : panel === "cart" ? (
              <>
                <span className="eyebrow">YOUR SELECTION</span>
                <h2>Your next favorites.</h2>
                {cart.length ? (
                  cart.map((p) => (
                    <div className="cart-item" key={p.id}>
                      <img src={p.image} alt={p.name} />
                      <strong>{p.name}</strong>
                      <button
                        aria-label="Remove"
                        onClick={() =>
                          setCart(cart.filter((x) => x.id !== p.id))
                        }
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))
                ) : (
                  <p>
                    Your selection is empty. Explore the laptops and add your
                    favorites to prepare a quote.
                  </p>
                )}
                <button
                  className="button orange"
                  onClick={() =>
                    cart.length
                      ? open("contact")
                      : (setPanel(null),
                        document.querySelector("#collection").scrollIntoView({
                          behavior: "smooth",
                        }))
                  }
                >
                  {cart.length ? "Prepare a quote request" : "Explore laptops"}
                  <Plus size={16} />
                </button>
              </>
            ) : (
              <>
                <span className="eyebrow">
                  {panel === "repair"
                    ? "DIAGNOSTICS & REPAIR"
                    : "LET’S TALK ABOUT YOUR PROJECT"}
                </span>
                <h2>
                  {submitted
                    ? "Your request is ready."
                    : panel === "repair"
                      ? "Let’s bring it back to life."
                      : "Let’s find the right laptop."}
                </h2>
                {submitted ? (
                  <>
                    <p>
                      Your request has been prepared on this device. No message
                      has been sent. Customer-service delivery will be connected
                      before launch.
                    </p>
                    <button
                      className="button black"
                      onClick={() => setPanel(null)}
                    >
                      Done
                    </button>
                  </>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <label>
                      Your name
                      <input required name="name" placeholder="Full name" />
                    </label>
                    <label>
                      Your email
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                      />
                    </label>
                    {cart.length > 0 && panel === "contact" && (
                      <p>
                        Your selection: {cart.map((p) => p.name).join(", ")}
                      </p>
                    )}
                    <label>
                      {panel === "repair"
                        ? "Your laptop and the issue"
                        : "What you need"}
                      <textarea
                        required
                        name="message"
                        placeholder={
                          panel === "repair"
                            ? "Brand, model, symptoms…"
                            : "Usage, budget, preferred models…"
                        }
                        rows={4}
                      />
                    </label>
                    <p className="form-note">
                      Prepare your request. Customer-service delivery will be
                      enabled with the business contact details.
                    </p>
                    <button className="button orange" type="submit">
                      Prepare my request <Plus size={16} />
                    </button>
                  </form>
                )}
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
