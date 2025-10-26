"use client";

export default function Products() {
  const products = [
    {
      name: "Marketwise Discount Ninja",
      href: "https://apps.shopify.com/beacon-smart-market-discount",
      badge: "Market-specific discounts",
      tagline:
        "Create market-specific discounts with advanced rules, tags & scheduling—built for Shopify Markets.",
      bullets: [
        "Target by country/market, customer tags, collections",
        "Automatic discounts + discount codes",
        "Schedule campaigns & run multi-market promos",
      ],
      hero: "🎯",
    },

    // More reputable discount apps (curated)
    {
      name: "Every Possible Discount",
      href: "https://apps.shopify.com/every-possible-discount",
      badge: "BOGO, Volume, Tiered",
      tagline:
        "Run BOGO, volume & tiered offers; aim discounts at specific markets and attributes.",
      bullets: [
        "Market targeting",
        "Buy X Get Y & tiered",
        "Attribute-based rules",
      ],
      hero: "🧩",
    },
    {
      name: "Advanced Automatic Discounts",
      href: "https://apps.shopify.com/advanced-automatic-discount",
      badge: "Automatic rules",
      tagline:
        "Auto-apply tiered, volume, BOGO & free gift discounts based on tags, markets & conditions.",
      bullets: [
        "Dynamic pricing table widget",
        "POS-only & draft-order support",
        "Custom rules",
      ],
      hero: "⚙️",
    },
    {
      name: "Market Magic Offers",
      href: "https://apps.shopify.com/market-discount",
      badge: "Per-market codes",
      tagline:
        "Dynamic, market-specific discounts—even with a single universal code that varies by region.",
      bullets: [
        "Regional amounts",
        "Segment/collection targeting",
        "Simplified global promos",
      ],
      hero: "🌍",
    },
    {
      name: "Bulk Discount Code Bot",
      href: "https://apps.shopify.com/bulk-discount-generator",
      badge: "Bulk codes",
      tagline:
        "Generate/import large sets of unique discount codes for campaigns and affiliates.",
      bullets: [
        "Unlimited unique codes",
        "Performance tracking",
        "Audit existing discounts",
      ],
      hero: "📦",
    },
    {
      name: "MyBulk – Bulk Discount Creator",
      href: "https://apps.shopify.com/bulk-discounts",
      badge: "CSV export",
      tagline:
        "Create up to hundreds of thousands of codes in one go and export to CSV.",
      bullets: [
        "Fast setup",
        "Great for loyalty & partners",
        "Easy code management",
      ],
      hero: "🗂️",
    },
    {
      name: "AIOD – All-in-One Automatic Discounts",
      href: "https://apps.shopify.com/all-in-one-automatic-discounts",
      badge: "Bundles & gifts",
      tagline:
        "BOGO, bundles, free gifts, wholesale, tiered pricing & stackable rules.",
      bullets: ["Discount stacking", "Upsell discounts", "Many promo types"],
      hero: "🛍️",
    },
  ];

  return (
    <main
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1000px 500px at 10% -10%, hsla(275,95%,92%,.9), transparent 60%), radial-gradient(800px 500px at 120% 120%, hsla(170,90%,88%,.9), transparent 60%), #fff",
      }}
    >
      {/* dotted grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(hsla(235,20%,40%,.25) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(900px 600px at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <header className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl/tight font-extrabold text-[#1c1c28]">
            Explore Discount Apps for Shopify
          </h1>
          <p className="mt-4 text-neutral-700">
            Curated tools to run market-specific campaigns, automatic rules, and
            bulk code drops.
          </p>
        </header>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/85 backdrop-blur-[2px] p-6 shadow-[0_8px_30px_rgba(16,18,27,.06)] transition transform hover:-translate-y-0.5"
            >
              {/* subtle glow */}
              <div className="absolute -inset-6 rounded-[24px] bg-[conic-gradient(from_180deg_at_50%_50%,#7c4dff22,transparent_35%,#00d0b622,transparent_70%,#ffd25722)] blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div
                    className="inline-grid size-10 place-items-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
                    }}
                  >
                    <span className="text-lg">{p.hero}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1c1c28]">
                      {p.name}
                    </h3>
                    <span className="mt-0.5 inline-flex items-center rounded-full border border-black/10 bg-white px-2 py-0.5 text-[12px] text-neutral-700">
                      {p.badge}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-neutral-700">{p.tagline}</p>

                <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[2px] text-[#00bfa5]">✔</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <span
                    className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md"
                    style={{
                      background:
                        "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
                    }}
                  >
                    View on Shopify
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-neutral-600">
          Links open the Shopify App Store in a new tab. Always review pricing
          and compatibility with your store & theme.
        </p>
      </div>
    </main>
  );
}
