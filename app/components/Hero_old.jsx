export default function Hero() {
  return (
    <section className="relative">
      {/* floating colorful blobs behind the card */}
      {/* <div aria-hidden className="blur-blob blob-a"></div>
      <div aria-hidden className="blur-blob blob-b"></div>
      <div aria-hidden className="blur-blob blob-c"></div> */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* glow border + surface card */}
        <div className="glow-border mt-12 sm:mt-16">
          <div className="surface p-8 sm:p-12">
            <span className="badge">B2B DISCOUNTS PLATFORM</span>

            <h1 className="mt-4 text-4xl sm:text-6xl/tight font-extrabold gradient-title">
              Marketwise
            </h1>

            <p className="mt-4 text-lg text-white/85 max-w-2xl">
              Create <strong>market-specific</strong> discounts with smart
              rules, automatic targeting, and zero maintenance.
            </p>

            {/* value bullets */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/85">
              <li>✅ Deep discount types & bundles</li>
              <li>✅ Smart scheduling & countdowns</li>
              <li>✅ Customer & country targeting</li>
              <li>✅ Cart rules & A/B friendly</li>
            </ul>

            {/* CTAs + social proof */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="btn btn-primary">
                Get Started
              </a>
              <a href="#pricing" className="btn btn-ghost">
                See Pricing
              </a>
              <span className="sm:ml-4 text-sm text-white/70 self-center">
                ⭐⭐⭐⭐⭐ Trusted by <strong>1,200+</strong> stores
              </span>
            </div>

            {/* moving partner logos */}
            <div className="mt-10 sm:mt-12 rounded-2xl bg-black/25 px-2 py-3 border border-white/10 marquee">
              <div className="marquee-track">
                {[
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
                ].map((name, i) => (
                  <span key={i} className="px-4 text-white/70">
                    {name}
                  </span>
                ))}
                {/* duplicate set for seamless loop */}
                {[
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
                ].map((name, i) => (
                  <span key={`dup-${i}`} className="px-4 text-white/70">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
