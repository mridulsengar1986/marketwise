// app/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  const chips = [
    "SpecificProduct",
    "ProductTag",
    "ProductType",
    "ProductVendor",
    "ProductCollection",
    "CustomerSpent",
    "FirstTimeCustomer",
    "CartSubtotal",
    "CustomerTag",
    "+ more",
  ];

  const links = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Partners", href: "#partners" },
    ],
    Resources: [
      { label: "Docs", href: "#" },
      { label: "Guides", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Support", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Status", href: "#" },
    ],
  };

  return (
    <footer className="relative">
      {/* === CTA (light, matches your hero) === */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px 500px at 10% -10%, hsla(275,95%,92%,.9), transparent 60%), radial-gradient(800px 500px at 120% 120%, hsla(170,90%,88%,.9), transparent 60%), #fff",
        }}
      >
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
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: headline */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c28]">
                Boost conversion rates with targeted discounts{" "}
                <span aria-hidden>🎯</span>
              </h2>
              <p className="mt-3 text-neutral-700">
                Build your discount with over <strong>20+ variables</strong>.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://apps.shopify.com/beacon-smart-market-discount"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform active:scale-95"
                  style={{
                    background:
                      "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
                  }}
                >
                  Start free trial
                </a>

                <a
                  href="#learn-more"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[#1c1c28] bg-white border border-black/10 shadow-sm"
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Right: chips (light pills) */}
            <div className="lg:col-span-7">
              <ul className="flex flex-wrap gap-3">
                {chips.map((c, i) => (
                  <li
                    key={`${c}-${i}`}
                    className="rounded-full border border-black/10 bg-white/80 text-[#1c1c28] text-sm px-3.5 py-2 shadow-[0_2px_10px_rgba(16,18,27,.06)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === Links & brand bar (light) === */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px 500px at 10% -10%, hsla(275,95%,92%,.9), transparent 60%), radial-gradient(800px 500px at 120% 120%, hsla(170,90%,88%,.9), transparent 60%), #fff",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(hsla(235,20%,40%,.22) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(900px 600px at 50% 50%, #000 60%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
          {/* top: brand + blurb */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <a href="/" className="flex items-center gap-2">
              <div
                className="grid size-9 place-items-center rounded-lg text-white font-extrabold shadow-sm"
                style={{
                  background: "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
                }}
              >
                MW
              </div>
              <span className="text-base font-semibold text-[#1c1c28]">
                Marketwise
              </span>
            </a>
            <p className="max-w-xl text-sm text-neutral-700">
              Build, launch, and scale market-specific discounts with rules,
              targeting, and auto-apply logic—built for Shopify Markets.
            </p>
          </div>

          {/* link columns */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([group, items]) => (
              <div key={group}>
                <h4 className="text-sm font-semibold text-[#1c1c28]">
                  {group}
                </h4>
                <ul className="mt-3 space-y-2">
                  {items.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-neutral-700 hover:text-[#1c1c28]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* bottom: legal */}
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/10 pt-6">
            <p className="text-sm text-neutral-600">
              © {year} Marketwise. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-2 text-[#1c1c28] shadow-sm hover:bg-black/[.04] transition"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-2 text-[#1c1c28] shadow-sm hover:bg-black/[.04] transition"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-2 text-[#1c1c28] shadow-sm hover:bg-black/[.04] transition"
              >
                <GitHubIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Minimal inline SVGs */
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.3 3H21l-6.56 7.49L22 21h-5.55l-4.34-5.67L6.1 21H3.4l7.03-8-6.6-8h5.66l3.94 5.25L18.3 3Z" />
    </svg>
  );
}
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5Z" />
      <path d="M3.5 9h3v12h-3zM10 9h2.8v1.7h.04c.39-.7 1.35-1.44 2.79-1.44 2.99 0 3.55 1.97 3.55 4.53V21h-3v-6.1c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.2V21h-3V9Z" />
    </svg>
  );
}
function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.56v-2c-3.26.71-3.95-1.4-3.95-1.4-.53-1.36-1.3-1.73-1.3-1.73-1.07-.73.08-.71.08-.71 1.19.08 1.82 1.22 1.82 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.78.41-1.28.74-1.57-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.28 1.2A11.4 11.4 0 0 1 12 6.8c1.02.01 2.05.14 3.01.4 2.27-1.52 3.27-1.2 3.27-1.2.66 1.65.25 2.87.13 3.17.76.82 1.22 1.87 1.22 3.15 0 4.49-2.74 5.47-5.36 5.76.42.36.79 1.06.79 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
