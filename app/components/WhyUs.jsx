// app/components/WhyUs.jsx
"use client";
import Image from "next/image";

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

const accents = {
  markets: "hsl(253 88% 66%)", // purple
  targeting: "hsl(170 72% 47%)", // teal
  cart: "hsl(48 100% 58%)", // yellow
  schedule: "hsl(200 90% 70%)", // cyan-blue
  auto: "hsl(305 80% 70%)", // magenta
  zero: "hsl(140 70% 60%)", // green
};

const icons = {
  markets: { src: "/features/markets.svg", alt: "Globe/markets" },
  targeting: { src: "/features/targeting.svg", alt: "Targeting" },
  cart: { src: "/features/cart.svg", alt: "Cart logic" },
  schedule: { src: "/features/sch.svg", alt: "Calendar" },
  auto: { src: "/features/codes.svg", alt: "Discount code" },
  zero: { src: "/features/no-maint.svg", alt: "Automation" },
};

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
          {features.map((f, i) => (
            <article
              key={f.k}
              style={{ "--feat": accents[f.k] }}
              className="group surface rounded-2xl p-6 glow-border/soft ring-1 ring-white/10
                         transition duration-300 hover:-translate-y-1 hover:bg-white/[.05]
                         opacity-0 motion-safe:animate-[fade-up_0.7s_ease_forwards]"
            >
              {/* icon */}
              <div
                className="relative mb-3 size-12 rounded-xl grid place-items-center
                              ring-1 ring-white/10 overflow-hidden
                              bg-white/[.06] text-[--color-primary] group-hover:text-[--feat] transition-colors"
              >
                <Image
                  src={icons[f.k].src}
                  alt={icons[f.k].alt}
                  width={28}
                  height={28}
                  className="transition-transform duration-500 group-hover:animate-[float_3s_ease-in-out_infinite]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-xl
                                            bg-[radial-gradient(30%_30%_at_50%_0%,_white/18,_transparent_60%)]"
                />
              </div>

              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-1 text-white/75">{f.text}</p>

              {/* underline + colored outline on hover */}
              <span
                className="mt-4 block h-px w-0 bg-[--color-primary]/60
                               group-hover:w-24 group-hover:bg-[--feat]/70 transition-all duration-500"
              />
              <span className="sr-only">hover to highlight</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
