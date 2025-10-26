// app/components/Features.jsx
export default function Features() {
  const items = [
    {
      title: "No-Code Rule Builder",
      desc: "Create custom discounts in minutes—no developer needed.",
      icon: Sparkles,
    },
    {
      title: "Intuitive Design",
      desc: "Simple to navigate, powerful enough for complex rule chains.",
      icon: LayoutGrid,
    },
    {
      title: "Optimized for Performance",
      desc: "Battle-tested for high-traffic drops and peak sale days.",
      icon: Gauge,
    },
    {
      title: "Build Your Own Rules",
      desc: "Full flexibility to match your brand’s pricing strategy.",
      icon: Sliders,
    },
    {
      title: "Improve Sales",
      desc: "Boost AOV and conversions with targeted promotions.",
      icon: TrendingUp,
    },
    {
      title: "Get Started in Minutes",
      desc: "Guided setup and friendly support whenever you need it.",
      icon: Rocket,
    },
    {
      title: "Markets Ready",
      desc: "Localized discounts with full Shopify Markets support.",
      icon: Globe,
    },
    {
      title: "Instant Bulk Generation",
      desc: "Generate millions of codes and export instantly.",
      icon: Layers,
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden py-20"
      style={{
        // SAME background as your Hero.jsx
        background:
          "radial-gradient(1000px 500px at 10% -10%, hsla(275,95%,92%,.9), transparent 60%), radial-gradient(800px 500px at 120% 120%, hsla(170,90%,88%,.9), transparent 60%), #fff",
      }}
    >
      {/* dotted grid overlay (same mask) */}
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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#1c1c28]">
          Everything you need, nothing you don’t.
        </h2>
        <p className="mt-3 text-center text-neutral-700">
          Build, launch, and scale market-specific discounts—fast.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, icon: Icon }, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/10 bg-white/80 backdrop-blur-[2px] p-5 shadow-[0_8px_30px_rgba(16,18,27,.06)]"
            >
              <div
                className="mb-4 inline-flex size-10 items-center justify-center rounded-lg"
                style={{
                  background:
                    "linear-gradient(90deg,#7c4dff22,#00d0b622,#ffd25722)",
                }}
              >
                <Icon className="size-5 text-[#1c1c28]" />
              </div>
              <h3 className="text-[#1c1c28] font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Minimal inline SVG icons (no deps) */
function Sparkles(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <path
        strokeWidth="2"
        d="M12 3l1.4 3.4L17 7l-3.6 1L12 11l-1.4-3L7 7l3.6-.6L12 3Zm7 10 1 2.2L22 16l-2 .8L19 19l-1-2.2-2-.8 2-.8 1-2.2ZM5 14l.8 1.6L8 16l-1.6.6L5 18l-.6-1.4L3 16l1.4-.4L5 14Z"
      />
    </svg>
  );
}
function LayoutGrid(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
    </svg>
  );
}
function Gauge(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 12l5-5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function Sliders(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
      <circle cx="4" cy="10" r="2" />
      <circle cx="12" cy="8" r="2" />
      <circle cx="20" cy="12" r="2" />
    </svg>
  );
}
function TrendingUp(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 7h7v7" />
    </svg>
  );
}
function Rocket(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <path d="M5 19c1-4 4-7 7-10 3-3 6-6 10-7-1 4-4 7-7 10-3 3-6 6-10 7Z" />
      <path d="M8 16l-3 3" />
      <circle cx="15" cy="9" r="2" />
    </svg>
  );
}
function Globe(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}
function Layers(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
    >
      <path d="M12 2l9 5-9 5-9-5 9-5Z" />
      <path d="M21 12l-9 5-9-5" />
      <path d="M21 17l-9 5-9-5" />
    </svg>
  );
}
