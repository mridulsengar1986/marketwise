// app/components/Pricing.jsx
"use client";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20"
      style={{
        // same background recipe as your Hero.jsx
        background:
          "radial-gradient(1000px 500px at 10% -10%, hsla(275,95%,92%,.9), transparent 60%), radial-gradient(800px 500px at 120% 120%, hsla(170,90%,88%,.9), transparent 60%), #fff",
      }}
    >
      {/* dotted mask overlay */}
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
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c28]">
            We believe in fair pricing with no hidden fees
          </h2>
          <p className="mt-2 text-neutral-700">
            One plan. Zero limits. Everything included.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free card */}
          <div className="rounded-2xl border border-black/10 bg-white/85 shadow-[0_8px_30px_rgba(16,18,27,.06)] backdrop-blur-[2px] p-6 sm:p-8">
            <div className="text-sm font-semibold text-neutral-600">Free</div>
            <p className="mt-1 text-neutral-600">
              Test the app for free on any development store
            </p>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-[#1c1c28]">
                  $0
                </span>
                <span className="text-neutral-600">/month</span>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-neutral-800">
              <Feature>Free for dev stores</Feature>
              <Feature>All features are available</Feature>
              <Feature>Unlimited discounts</Feature>
              <Feature>Test to your heart’s content</Feature>
            </ul>

            <div className="mt-8">
              <button
                className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-[#1c1c28] border border-black/10 bg-white hover:bg-black/[.03] transition"
                type="button"
              >
                Start testing
              </button>
            </div>
          </div>

          {/* Pro card */}
          <div className="rounded-2xl border border-black/10 bg-white/85 shadow-[0_8px_30px_rgba(16,18,27,.06)] backdrop-blur-[2px] p-6 sm:p-8">
            <div className="text-sm font-semibold text-neutral-600">Pro</div>
            <p className="mt-1 text-neutral-600">
              All our features and zero limits.
            </p>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-[#1c1c28]">
                  $9
                </span>
                <span className="text-neutral-600">/month</span>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-neutral-800">
              <Feature>Advanced rule builder</Feature>
              <Feature>Unlimited discount codes</Feature>
              <Feature>BOGO, tiered, and volume discounts</Feature>
              <Feature>Priority support</Feature>
            </ul>

            <div className="mt-8">
              <a
                href="#get-started"
                className="block w-full text-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform active:scale-95"
                style={{
                  background: "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
                }}
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>

        {/* Note / reassurance */}
        <p className="mt-6 text-center text-sm text-neutral-600">
          Cancel anytime. No setup fees. All features included.
        </p>
      </div>
    </section>
  );
}

/** Simple checkmark bullet */
function Feature({ children }) {
  return (
    <li className="flex items-start gap-2">
      <svg
        aria-hidden
        className="mt-0.5 size-5 flex-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="1.5"
          className="text-[#7c4dff]/30"
        />
        <path
          d="M7 12.5l3 3 7-7"
          strokeWidth="2.2"
          className="text-[#00bfa5]"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}
