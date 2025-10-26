// app/components/Hero.jsx
"use client";
import Image from "next/image";

function InteractiveTilt({ className = "", children }) {
  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 6; // tilt X (max ~6deg)
    const ry = (x - 0.5) * 6; // tilt Y (max ~6deg)
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  };
  return (
    <div
      className={className + " transition-transform duration-300"}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const logos = [
    "Glossier",
    "Outras",
    "Frame.io",
    "Outbrain",
    "Chief",
    "Artifact",
    "Ledger",
    "Hush",
    "Segment",
    "Barebones",
    "Swell",
    "Linear",
  ];

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
        {/* TWO COLUMNS ON LG+ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-6 max-w-3xl">
            <h1 className="mt-4 text-4xl sm:text-6xl/tight font-extrabold text-[#1c1c28]">
              <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#7c4dff,#00d0b6,#ffd257)]">
                Smarter B2B Discounts
              </span>
            </h1>

            <p className="mt-4 text-lg text-neutral-700">
              Launch <strong>market-specific</strong> promos with rules,
              targeting, and auto-apply logic—built for{" "}
              <strong>Shopify Markets</strong>.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
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

              <a
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[#1c1c28] bg-white border border-black/10 shadow-sm"
              >
                See it in Action
              </a>
              <span className="sm:ml-4 text-sm text-neutral-600 self-center">
                ⭐⭐⭐⭐⭐ Trusted by <strong>1,200+</strong> stores
              </span>
            </div>

            {/* logos marquee */}
            <div className="mt-10 rounded-2xl bg-white/70 px-2 py-3 border border-black/10 shadow-[0_8px_30px_rgba(16,18,27,.06)] overflow-hidden">
              <div className="marquee-track whitespace-nowrap">
                {logos.concat(logos).map((name, i) => (
                  <span key={i} className="px-5 text-neutral-600 inline-block">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto lg:mx-0 w-full max-w-[560px]">
              {/* soft glow behind image */}
              <div className="absolute -inset-6 rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,#7c4dff33,transparent_35%,#00d0b633,transparent_70%,#ffd25733)] blur-2xl" />
              <InteractiveTilt className="relative rounded-[28px] shadow-[0_24px_70px_rgba(16,18,27,.15)] overflow-hidden">
                <div
                  aria-hidden
                  className="shine-pointer absolute inset-0 pointer-events-none"
                />
                <Image
                  src="/mrk1.png" // ensure this file exists in /public
                  alt="People collaborating with charts and gears"
                  width={1120}
                  height={840}
                  priority
                  className="block w-full h-auto select-none animate-float-slow will-change-transform"
                />
              </InteractiveTilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
