// app/components/Hero.jsx
export default function Hero() {
  const logos = [
    "Glossier",
    "Outras",
    "Frame.io",
    "Outbrain",
    "Chief",
    "Artifact",
    "Ledger",
    "Hush",
    "Segment",
    "Barebones",
    "Swell",
    "Linear",
  ];

  return (
    <section className="relative bg-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — copy + CTAs */}
          <div>
            <h1 className="mt-4 text-4xl sm:text-6xl/tight font-extrabold gradient-title">
              Marketwise
            </h1>

            <p className="mt-4 text-lg text-white/85 max-w-2xl">
              Create <strong>market-specific</strong> discounts with smart
              rules, automatic targeting, and zero maintenance—built for Shopify
              Markets and international merchants.
            </p>

            {/* value bullets */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90">
              <li>✅ Deep discount types & bundles</li>
              <li>✅ Smart scheduling & countdowns</li>
              <li>✅ Customer & country targeting</li>
              <li>✅ Cart rules & A/B friendly</li>
            </ul>

            {/* CTAs + social proof */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="btn btn-primary">
                Get Started
              </a>

              <span className="sm:ml-4 text-sm text-white/70 self-center">
                ⭐⭐⭐⭐⭐ Trusted by <strong>1,200+</strong> stores
              </span>
            </div>

            {/* marquee */}
            <div className="mt-10 rounded-2xl bg-black/25 px-2 py-3 border border-white/10 marquee">
              <div className="marquee-track">
                {logos.concat(logos).map((name, i) => (
                  <span key={i} className="px-4 text-white/70">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — animated explainer */}
          <div className="relative">
            {/* Decorative static blobs for depth (very subtle) */}
            <div aria-hidden className="pointer-events-none">
              <div
                className="absolute -left-8 -top-8 size-52 rounded-full opacity-25 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(296 80% 64%/.8), transparent 70%)",
                }}
              />
              <div
                className="absolute -right-6 top-12 size-64 rounded-full opacity-25 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(170 72% 52%/.8), transparent 70%)",
                }}
              />
            </div>

            {/* Orbit rig */}
            <div className="relative mx-auto size-[380px] sm:size-[440px]">
              {/* central engine */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="engine-card">
                  <div className="engine-dot" />
                  <h3 className="text-xl font-bold">Discount Engine</h3>
                  <p className="text-sm text-white/75">
                    Combines rules → targets → pricing
                  </p>
                </div>
              </div>

              {/* orbit path */}
              <div className="absolute inset-0 rounded-full border border-white/10" />

              {/* orbiting chips (animated by rotating parent) */}
              <div className="orbit">
                <HeroChip label="Rules Builder" k="R" />
                <HeroChip label="Market Targeting" k="T" />
                <HeroChip label="Scheduling" k="S" />
                <HeroChip label="A/B & Cart Logic" k="A" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small presentational chip */
function HeroChip({ label, k }) {
  return (
    <div className="chip">
      <span className="chip-icon">{k}</span>
      <span className="chip-label">{label}</span>
    </div>
  );
}
