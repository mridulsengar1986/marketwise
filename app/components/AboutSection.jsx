export default function AboutSection() {
  const items = [
    { title: "Built for international brands",
      desc: "One store. Many markets. Keep ops simple while tailoring offers locally." },
    { title: "No theme edits",
      desc: "Works with Online Store 2.0 & major themes. Install → configure → launch." },
    { title: "Governance & control",
      desc: "Role-based access, approval workflows, and guardrails to protect margins." },
    { title: "Targeting that makes sense",
      desc: "Markets, product tags/types/vendors, collections, customer tags, order count." },
    { title: "Cart & schedule rules",
      desc: "Min spend, quantity thresholds, and calendar scheduling for campaigns." },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Everything you need to discount by market</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/7.5 hover:border-white/20 shadow-[--shadow-lg]">
              <div className="w-10 h-10 rounded-xl mb-4"
                   style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-sky))" }} />
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-white/75">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
