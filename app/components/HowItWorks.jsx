const steps = [
  {
    n: "01",
    title: "Connect your store",
    text: "One-click Shopify install. We sync products, tags, collections, and Markets.",
  },
  {
    n: "02",
    title: "Create rules per market",
    text: "Pick a market (UK, US, UAE…), choose targets, add thresholds and schedule.",
  },
  {
    n: "03",
    title: "Go live & track",
    text: "Automatic codes apply at checkout. Monitor uplift and iterate quickly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold gradient-title">
            How it works
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            From install to first promo in under 10 minutes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="surface rounded-2xl p-6 glow-border/soft">
              <div className="text-sm text-white/60">{s.n}</div>
              <h3 className="mt-1 font-semibold text-lg">{s.title}</h3>
              <p className="mt-1 text-white/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
