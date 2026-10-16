"use client";

import Link from "next/link";
import { Plus, ShieldCheck, Wrench, Cpu, Check } from "lucide-react";
export default function RequestView({
  view,
  request,
  setRequest,
  items,
  prepare,
}) {
  return (
    <>
      {["contact", "repair", "checkout"].includes(view) && (
        <>
          <div className="store-heading">
            <span className="eyebrow">
              {view === "repair"
                ? "DIAGNOSTICS & UPGRADES"
                : view === "checkout"
                  ? "YOUR NEXT STEP"
                  : "LET’S CONNECT"}
            </span>
            <h1>
              {view === "repair" ? (
                <>
                  Bring it
                  <br />
                  <em>back to life.</em>
                </>
              ) : view === "checkout" ? (
                <>
                  Your selection.
                  <br />
                  <em>Your quote.</em>
                </>
              ) : (
                <>
                  Let’s talk about
                  <br />
                  <em>what’s next.</em>
                </>
              )}
            </h1>
          </div>
          <div className="store-form-layout">
            <div>
              {view === "repair" ? (
                <>
                  <h2>Tell us about your laptop.</h2>
                  <p>
                    Share its brand, model and symptoms. Our team will need to
                    assess the hardware before confirming repair work.
                  </p>
                  <div className="store-service-list">
                    <span>
                      <Cpu /> Hardware diagnostics
                    </span>
                    <span>
                      <Wrench /> Repairs & upgrades
                    </span>
                    <span>
                      <ShieldCheck /> Configuration advice
                    </span>
                  </div>
                </>
              ) : view === "checkout" ? (
                <>
                  <h2>Your selected laptops</h2>
                  {items.length ? (
                    items.map((p) => (
                      <div className="store-quote-item" key={p.id}>
                        <img src={p.image} alt="" />
                        <span>
                          {p.name}
                          <small>Quantity: {p.quantity}</small>
                        </span>
                      </div>
                    ))
                  ) : (
                    <p>
                      Your cart is empty.{" "}
                      <Link href="/shop">Explore laptops</Link> before preparing
                      a quote.
                    </p>
                  )}
                  <p>
                    Prices and availability require confirmation. Online
                    payments and order submission are not connected yet.
                  </p>
                </>
              ) : (
                <>
                  <h2>The right advice starts here.</h2>
                  <p>
                    Tell us how you work, what you play and the budget you have
                    in mind. We’ll help you narrow down the right machine.
                  </p>
                  <Link className="store-inline-link" href="/repair">
                    Need a repair? Visit our repair page.
                  </Link>
                </>
              )}
            </div>
            {request ? (
              <div className="store-form store-request-ready">
                <Check size={34} />
                <h2>Your request is prepared.</h2>
                <p>
                  No message or order has been sent. Download this request to
                  keep the details; delivery will be connected with the business
                  contact information.
                </p>
                <a
                  className="button orange"
                  download="Abstergo-request.json"
                  href={
                    "data:application/json;charset=utf-8," +
                    encodeURIComponent(JSON.stringify(request, null, 2))
                  }
                >
                  Download request
                </a>
                <button
                  className="store-inline-link"
                  onClick={() => setRequest(null)}
                >
                  Edit request
                </button>
              </div>
            ) : (
              <form className="store-form" onSubmit={prepare}>
                <label>
                  Your name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Full name"
                  />
                </label>
                <label>
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </label>
                {view === "repair" && (
                  <label>
                    Laptop model
                    <input
                      required
                      name="model"
                      placeholder="Brand and model"
                    />
                  </label>
                )}
                <label>
                  {view === "repair"
                    ? "Describe the issue"
                    : "What do you need?"}
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder={
                      view === "repair"
                        ? "Symptoms, when it started, previous repairs…"
                        : "Your usage, budget and preferred configuration…"
                    }
                  />
                </label>
                <p className="store-form-note">
                  This prepares a request on your device. It does not send a
                  message or place an order.
                </p>
                <button
                  disabled={view === "checkout" && !items.length}
                  className="button orange"
                  type="submit"
                >
                  Prepare my request <Plus size={18} />
                </button>
              </form>
            )}
          </div>
        </>
      )}
    </>
  );
}
