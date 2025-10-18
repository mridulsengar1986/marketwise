const features = [
  {
    k: "markets",
    title: "Built for Shopify Markets",
    text: "Unique rates per country/region without duct-tape workarounds.",
  },
  {
    k: "targeting",
    title: "Granular Targeting",
    text: "Product tags, collections, vendors, customer tags, order history.",
  },
  {
    k: "cart",
    title: "Cart Logic & AOV",
    text: "Spend/qty thresholds, BOGO, bundles—A/B friendly.",
  },
  {
    k: "schedule",
    title: "Scheduling & Guardrails",
    text: "Plan promos with start/end windows and conflict prevention.",
  },
  {
    k: "auto",
    title: "Automatic Codes",
    text: "Generate/apply codes seamlessly at checkout.",
  },
  {
    k: "zero",
    title: "Zero Maintenance",
    text: "Set once, monitor results—not spreadsheets.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold gradient-title">
            Why Marketwise?
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            The discount engine made for multi-market merchants—powerful rules,
            playful simplicity.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.k} className="surface rounded-2xl p-6 glow-border/soft">
              <div className="h-10 w-10 rounded-xl bg-[--color-primary]/20 flex items-center justify-center mb-3">
                <span className="text-[--color-primary] text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-1 text-white/75">{f.text}</p>
            </div>
          ))}
        </div>

        {/* small CTA row */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-xl px-5 py-3 bg-[--color-primary] text-black font-semibold hover:brightness-110 transition"
          >
            See Pricing
          </a>
          <a
            href="#demo"
            className="rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5 transition"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
