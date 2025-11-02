"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
// import PageHeader from "../components/PageHeader"; // not used right now

export default function CartPage() {
  // --- market / discount state ---
  const [market, setMarket] = useState("US"); // default market

  const discountRates = { US: 20, UK: 15, IN: 25, JP: 10 };
  const marketLabels = {
    US: "United States",
    UK: "United Kingdom",
    IN: "India",
    JP: "Japan",
  };

  // --- cart items state (each item has qty we can edit) ---
  const [items, setItems] = useState([
    {
      id: 1,
      name: "MarketwiseDiscountNinja",
      price: 40,
      qty: 2,
      image: "/images/product1.png",
    },
    {
      id: 2,
      name: "EveryPossibleDiscount",
      price: 50,
      qty: 1,
      image: "/images/product2.png",
    },
    {
      id: 3,
      name: "Ninja",
      price: 40,
      qty: 2,
      image: "/images/product1.png",
    },
    {
      id: 4,
      name: "MarketDiscount",
      price: 50,
      qty: 1,
      image: "/images/product2.png",
    },
  ]);

  // --- handlers for +/- buttons ---
  function increaseQty(id) {
    setItems((old) =>
      old.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setItems((old) =>
      old.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  }

  const discountPercent = discountRates[market];

  // --- totals get recalculated from current state ---
  const { subtotal, discountAmount, total } = useMemo(() => {
    const sub = items.reduce((sum, p) => sum + p.price * p.qty, 0);
    const discAmt = (sub * discountPercent) / 100;
    return {
      subtotal: sub,
      discountAmount: discAmt,
      total: sub - discAmt,
    };
  }, [items, discountPercent]);

  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_70%),radial-gradient(circle_at_80%_0%,rgba(255,240,255,0.9)_0%,rgba(255,255,255,0)_60%),radial-gradient(circle_at_0%_100%,rgba(222,255,235,0.7)_0%,rgba(255,255,255,0)_60%)] text-slate-900">
      {/* dotted overlay texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.12]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-10">
        {/* Top header / breadcrumb */}
        <div className="mb-8">
          <HeaderBar
            market={market}
            marketLabels={marketLabels}
            setMarket={setMarket}
          />
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT: Cart */}
          <CartCard
            items={items}
            discountPercent={discountPercent}
            subtotal={subtotal}
            discountAmount={discountAmount}
            total={total}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />

          {/* RIGHT: Info panel */}
          <InfoPanel />
        </div>
      </section>
    </main>
  );
}

/* ---------------- Header Bar ---------------- */
function HeaderBar({ market, marketLabels, setMarket }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] backdrop-blur supports-[backdrop-filter]:bg-white/50 lg:flex-row lg:items-center lg:justify-between">
      {/* left: breadcrumb */}
      <div className="text-sm text-slate-700 flex flex-wrap items-center gap-2">
        <span className="font-medium text-slate-900">Home</span>
        <span className="text-slate-400">/</span>
        <span className="font-medium text-slate-900">Cart</span>

        <span className="ml-3 inline-flex items-center gap-1 rounded-full border border-emerald-300/40 bg-emerald-50 px-2 py-0.5 text-[12px] font-medium text-emerald-700">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          Live
        </span>
      </div>

      {/* right: market selector pill */}
      <div className="flex flex-col items-start gap-2 text-sm sm:flex-row sm:items-center sm:gap-3">
        <span className="text-slate-500">Pricing shown for:</span>

        <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 shadow-sm">
          {/* flag buttons */}
          <FlagButton
            code="US"
            active={market === "US"}
            setMarket={setMarket}
            src="/flags/us.png"
            label="US"
          />
          <FlagButton
            code="UK"
            active={market === "UK"}
            setMarket={setMarket}
            src="/flags/uk.png"
            label="UK"
          />
          <FlagButton
            code="IN"
            active={market === "IN"}
            setMarket={setMarket}
            src="/flags/in.png"
            label="IN"
          />
          <FlagButton
            code="JP"
            active={market === "JP"}
            setMarket={setMarket}
            src="/flags/JAPAN.png"
            label="JAPAN"
          />

          <span className="ml-2 text-[12px] font-medium text-slate-700">
            {marketLabels[market]}
          </span>
        </div>
      </div>
    </div>
  );
}

function FlagButton({ code, active, setMarket, src, label }) {
  return (
    <button
      onClick={() => setMarket(code)}
      className={`rounded-full border p-1 transition ${
        active
          ? "ring-2 ring-emerald-400 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
          : "border-slate-300 hover:border-slate-400"
      }`}
    >
      <Image src={src} alt={label} width={24} height={16} className="rounded" />
    </button>
  );
}

/* ---------------- Cart Card ---------------- */
function CartCard({
  items,
  discountPercent,
  subtotal,
  discountAmount,
  total,
  increaseQty,
  decreaseQty,
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]">
      {/* cart body scroll area */}
      <div className="max-h-[320px] overflow-y-auto divide-y divide-slate-200">
        {items.map((p) => {
          const discountedPrice = p.price * (1 - discountPercent / 100);

          return (
            <div
              key={p.id}
              className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50/80"
            >
              {/* thumbnail */}
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* text info */}
              <div className="flex-1 text-sm">
                {/* top row: name + qty controls */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <p className="font-medium text-slate-900 leading-5">
                    {p.name}
                  </p>

                  {/* quantity control [-] 2 [+] */}
                  <div className="inline-flex items-center rounded-lg border border-slate-300 bg-white shadow-sm text-[13px] font-medium text-slate-700">
                    <button
                      onClick={() => decreaseQty(p.id)}
                      className="px-2 py-1 hover:bg-slate-100 rounded-l-lg"
                    >
                      –
                    </button>
                    <span className="px-3 py-1 border-l border-r border-slate-300 select-none">
                      {p.qty}
                    </span>
                    <button
                      onClick={() => increaseQty(p.id)}
                      className="px-2 py-1 hover:bg-slate-100 rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* price row */}
                <p className="mt-2 text-[13px] font-semibold text-emerald-600">
                  ${discountedPrice.toFixed(2)}{" "}
                  <span className="text-slate-400 line-through ml-1 font-normal">
                    ${p.price.toFixed(2)}
                  </span>
                </p>

                <p className="text-[12px] text-emerald-600 leading-4">
                  -{discountPercent}% market discount
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* totals + checkout */}
      <div className="border-t border-slate-200 bg-slate-50/70 px-5 py-4 text-sm">
        <div className="text-[13px] text-emerald-600 font-medium mb-3 flex items-start gap-2">
          <span>🎉</span>
          <span>
            You’ve saved {discountPercent}% with{" "}
            <span className="font-semibold text-emerald-700">WINTER2024</span>!
          </span>
        </div>

        <div className="space-y-2 text-slate-700">
          <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
          <Row
            label="Discount"
            value={`- $${discountAmount.toFixed(2)}`}
            valueClass="text-emerald-600"
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3 text-center text-white font-semibold shadow-[0_16px_40px_-8px_rgba(16,185,129,0.6)] hover:opacity-90 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}

function Row({ label, value, valueClass }) {
  return (
    <div className="flex items-start justify-between text-[14px] leading-5">
      <span className="text-slate-500">{label}</span>
      <span className={valueClass || "text-slate-900"}>{value}</span>
    </div>
  );
}

/* ---------------- Info Panel ---------------- */
function InfoPanel() {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl border border-emerald-300/40
        bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50
        shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)]
      "
    >
      {/* soft emerald glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18)_0%,transparent_70%)]" />

      {/* top bar */}
      <div className="relative z-10 flex items-center gap-2 border-b border-emerald-300/30 bg-gradient-to-r from-emerald-500/10 via-teal-400/10 to-transparent px-5 py-4">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 text-white text-sm font-semibold shadow-[0_12px_30px_-6px_rgba(16,185,129,0.6)]">
          %
        </div>
        <div className="font-semibold text-slate-900 text-base leading-tight">
          Market specific discounts
        </div>
      </div>

      {/* body */}
      <div className="relative z-10 px-5 py-5 text-sm leading-relaxed">
        <SectionBlock
          title="Overview"
          text="Apply different offers to different markets."
        />

        <SectionBlock
          title="How It Works"
          text="Discounts are applied automatically based on the shopper’s market."
        />

        <div className="mb-5">
          <p className="text-slate-900 font-medium mb-1.5">Key Benefits</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Customizable rates per country, product, or collection.</li>
            <li>
              Flexible targeting for promos without changing your base price.
            </li>
          </ul>
        </div>

        <SectionBlock
          title="Example"
          text="US shoppers get 20%, UK shoppers get 15%, India shoppers get 25% , Japan shoppers get 10%."
        />
      </div>
    </div>
  );
}

function SectionBlock({ title, text }) {
  return (
    <div className="mb-5">
      <p className="text-slate-900 font-medium mb-1.5">{title}</p>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}
