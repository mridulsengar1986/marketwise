// app/components/Navbar.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" }, // route page instead of #pricing
  { label: "Features", href: "/features" }, // you can build this later
  { label: "Your Cart", href: "/cart" }, // you can build this later
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8); // add shadow / solid after scroll
    };

    onScroll(); // run once on mount so it's accurate if user reloads mid-scroll
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar background */}
      <div
        className={[
          "transition-colors",
          scrolled ? "navbar-surface-scrolled" : "navbar-surface",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-6xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="size-8 grid place-items-center rounded-md text-white font-extrabold"
              style={{
                background: "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
              }}
            >
              MW
            </div>
            <span className="text-[15px] font-semibold text-[#1c1c28]">
              Marketwise
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="px-3 py-2 text-sm text-neutral-700 hover:text-[#1c1c28]"
              >
                {l.label}
              </Link>
            ))}

            {/* CTA BUTTON */}
            <a
              href="https://apps.shopify.com/beacon-smart-market-discount"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-5 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform active:scale-95"
              style={{
                background: "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
              }}
            >
              Get Started
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden inline-flex items-center justify-center size-9 rounded-lg border border-black/10 bg-white text-[#1c1c28]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] bg-current transition-transform",
                  open ? "top-2.5 rotate-45" : "top-1",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] bg-current transition-opacity",
                  open ? "top-2.5 opacity-0" : "top-2.5 opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] bg-current transition-transform",
                  open ? "top-2.5 -rotate-45" : "top-4",
                ].join(" ")}
              />
            </div>
          </button>
        </nav>

        {/* MOBILE DROPDOWN PANEL */}
        {open && (
          <div className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-1">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[15px] text-neutral-800 hover:bg-black/[.04]"
                >
                  {l.label}
                </Link>
              ))}

              <a
                href="https://apps.shopify.com/beacon-smart-market-discount"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md"
                style={{
                  background: "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
