"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageHeader({ liveHref = "#" }) {
  const router = useRouter();

  return (
    <div className="mb-6 flex items-center justify-between text-sm text-white">
      {/* Left side: breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2">
        <Link
          href="/"
          className="text-white/70 hover:text-white hover:underline"
        >
          Home
        </Link>

        <span className="text-white/40">/</span>

        <span className="text-white font-medium">Cart</span>

        <span className="mx-2 inline-block h-1 w-1 rounded-full bg-white/30" />

        <a
          href={liveHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-emerald-300 hover:text-emerald-200"
        >
          Live <span aria-hidden>↗</span>
        </a>
      </nav>

      {/* Right side: Back button */}
      <button
        onClick={() => router.back()}
        className="rounded-lg border border-white/20 px-3 py-1 text-white/80 hover:bg-white/10"
      >
        Back
      </button>
    </div>
  );
}
