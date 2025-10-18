"use client";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  // Keep hash-based active state for #anchor links
  useEffect(() => {
    const set = () => setHash(window.location.hash || "");
    set();
    window.addEventListener("hashchange", set);
    return () => window.removeEventListener("hashchange", set);
  }, []);

  // Body scroll lock when drawer is open
  useEffect(() => {
    const { style } = document.body;
    if (open) {
      style.overflow = "hidden";
      style.paddingRight = "0px";
    } else {
      style.overflow = "";
      style.paddingRight = "";
    }
    return () => {
      style.overflow = "";
      style.paddingRight = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-[100]">
      <div className="bg-gradient-to-b from-black/25 to-transparent backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Primary"
        >
          {/* Logo */}
          <a
            href="/"
            className="shrink-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => {
              const active = hash === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={[
                      "px-2 py-1 rounded-md transition-colors",
                      "hover:bg-white/5 hover:text-white",
                      active ? "text-white" : "text-white/80",
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA (always yellow) */}
          <a
            href="#book"
            className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold
                       text-black bg-yellow-400 shadow ring-1 ring-black/5
                       hover:bg-yellow-300 hover:shadow-lg hover:-translate-y-[1px] transition
                       focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Book a demo
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={close}
        className={[
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity md:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Right drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={[
          "md:hidden fixed inset-y-0 right-0 w-[85%] max-w-xs bg-[--color-bg2] border-l border-white/10",
          "shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="h-16 px-4 flex items-center justify-between">
          <Logo />
          <button
            aria-label="Close menu"
            onClick={close}
            className="rounded-md p-2 text-white/90 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-4 pb-6">
          <ul className="grid gap-1 text-base">
            {links.map((l) => {
              const active = hash === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className={[
                      "block rounded-md px-3 py-2",
                      "hover:bg-white/5 hover:text-white",
                      active ? "text-white" : "text-white/85",
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA (always yellow) */}
          <a
            href="#book"
            onClick={close}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold
                       text-black bg-yellow-400 ring-1 ring-black/5 shadow
                       hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Book a demo
          </a>

          {/* Safe-area padding for iOS */}
          <div className="pb-[env(safe-area-inset-bottom)]" />
        </nav>
      </aside>
    </header>
  );
}
