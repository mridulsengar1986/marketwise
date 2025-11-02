// app/components/Hero.jsx
"use client";

import Image from "next/image";
import { useCallback } from "react";

function InteractiveTilt({ className = "", children }) {
  // useCallback so React doesn't recreate the function every render
  const handleMove = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rx = (0.5 - y) * 6; // tilt up/down
    const ry = (x - 0.5) * 6; // tilt left/right

    el.style.transform = `
      perspective(1000px)
      rotateX(${rx}deg)
      rotateY(${ry}deg)
      translateY(-2px)
    `;
  }, []);

  const handleLeave = useCallback((e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  }, []);

  return (
    <div
      className={
        className + " transition-transform duration-300 will-change-transform"
      }
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1000px 500px at 10% -10%, hsla(275,95%,92%,.9), transparent 60%), radial-gradient(800px 500px at 120% 120%, hsla(170,90%,88%,.9), transparent 60%), #fff",
      }}
    >
      {/* dotted grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(hsla(235,20%,70%,.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(900px 600px at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* GRID: LEFT TEXT / RIGHT IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 max-w-3xl">
            <h1 className="mt-4 text-4xl sm:text-6xl/tight font-extrabold text-[#1c1c28]">
              <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)]">
                Smarter B2B Discounts
              </span>
            </h1>

            <p className="mt-4 text-lg text-neutral-700">
              Launch <strong>market-specific</strong> promos with rules,
              targeting, and auto-apply logic — built for{" "}
              <strong>Shopify Markets</strong>.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              {/* Main CTA */}
              <a
                href="https://apps.shopify.com/beacon-smart-market-discount"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform active:scale-95"
                style={{
                  background: "linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)",
                }}
              >
                Get Started
              </a>

              {/* Secondary CTA */}
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[#1c1c28] bg-white border border-black/10 shadow-sm"
              >
                See it in Action
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-5 text-sm text-neutral-600">
              ⭐⭐⭐⭐⭐ Trusted by <strong>1,200+</strong> stores
            </div>
          </div>

          {/* RIGHT SIDE - floating art, no rounded card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto lg:mx-0 w-full max-w-[560px]">
              {/* soft brand glow behind the art */}
              <div className="absolute -inset-10 rounded-[40px] bg-[conic-gradient(from_180deg_at_50%_50%,#7c4dff22,transparent_35%,#00d0b622,transparent_70%,#ffd25722)] blur-3xl" />

              <InteractiveTilt className="relative">
                <Image
                  src="/mrk1.png"
                  alt="Discount ninja illustration with cart and coins"
                  width={1120}
                  height={840}
                  priority
                  className="block w-full h-auto select-none"
                />
              </InteractiveTilt>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 md:h-32" />
    </section>
  );
}
