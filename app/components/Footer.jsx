// app/components/Footer.jsx
"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-[--color-bg2] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Top: Brand + brief + social */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <a href="/" className="inline-flex items-center gap-2">
              <div className="size-8 grid place-items-center rounded-md bg-[--color-primary] text-[#0b0b0b] font-extrabold">
                MW
              </div>
              <span className="text-lg font-semibold text-white/95">
                Marketwise
              </span>
            </a>
            <p className="mt-3 text-sm text-white/70">
              Market-specific discounts for global commerce. Built for Shopify
              Markets with intelligent rules and targeting.
            </p>

            {/* Social (simple + consistent) */}
            <div className="mt-5 flex items-center gap-3">
              <SocialPill label="X" href="#" />
              <SocialPill label="LinkedIn" href="#" />
              <SocialPill label="GitHub" href="#" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="sm:ml-auto w-full sm:w-[380px]">
            <h3 className="text-sm font-semibold text-white/90">
              Stay in the loop
            </h3>
            <p className="mt-2 text-sm text-white/65">
              Product updates, tips, and case studies. No spam—unsubscribe
              anytime.
            </p>
            <form
              className="mt-3 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/45 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/25"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <FooterCol
            title="Products"
            links={[
              { label: "Discount Ninja", href: "#" },
              { label: "Bundles & BOGO", href: "#" },
              { label: "Cart Rules", href: "#" },
              { label: "A/B Testing", href: "#" },
            ]}
          />
          <FooterCol
            title="Solutions"
            links={[
              { label: "International Brands", href: "#" },
              { label: "DTC & Retail", href: "#" },
              { label: "Agencies", href: "#" },
              { label: "Partners", href: "#partners" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { label: "Docs", href: "#" },
              { label: "Guides", href: "#" },
              { label: "Case Studies", href: "#case-studies" },
              { label: "Blog", href: "#blog" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" },
              { label: "Status", href: "#" },
            ]}
          />

          {/* Compact contact block to balance columns */}
          <div>
            <h3 className="text-sm font-semibold text-white/90">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="footer-link" href="mailto:hello@marketwise.com">
                  hello@marketwise.com
                </a>
              </li>
              <li>
                <a className="footer-link" href="#" aria-label="Support">
                  Support
                </a>
              </li>
              <li>
                <a className="footer-link" href="#" aria-label="Status">
                  Status Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
          <p className="text-white/60">
            © {year} Marketwise Inc. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/65">
            <a className="footer-link" href="#">
              Privacy
            </a>
            <a className="footer-link" href="#">
              Terms
            </a>
            <a className="footer-link" href="#">
              Security
            </a>
            <a className="footer-link" href="#">
              Compliance
            </a>
            <a className="footer-link" href="#">
              SLA
            </a>
            <a className="footer-link" href="#">
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Sub-components ---------- */

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white/90">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <a className="footer-link" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialPill({ label, href }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center rounded-full border border-white/12 px-3 py-1.5 text-xs text-white/75 hover:text-white/95 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
    >
      {label}
    </a>
  );
}
