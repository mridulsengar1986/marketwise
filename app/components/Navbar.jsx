"use client";
import { usePathname } from "next/navigation";

const links = [
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Partners", href: "#partners" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden>
        <path
          d="M2 21L8.5 5l5 12 4.5-11L26 21"
          stroke="url(#g)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="28" y2="24">
            <stop stopColor="hsl(253 88% 76%)" />
            <stop offset="1" stopColor="hsl(253 88% 56%)" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-semibold tracking-tight text-lg">Marketwise</span>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100]">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Primary"
        >
          <a
            href="/"
            className="shrink-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Logo />
          </a>

          <ul className="flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={[
                    "px-2 py-1 rounded-md transition-colors",
                    "hover:bg-white/05 hover:text-white",
                    pathname === l.href ? "text-white" : "text-white/80",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Single CTA — no login */}
          <a href="#book" className="btn btn-primary px-2">
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  );
}
